"use client";

import Button from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Label } from "@/components/atoms/Label";
import { emailRegex } from "@/global/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const FaqContact = ({ cta }) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ mode: "onTouched" });

	const [isEmailSent, setIsEmailSent] = useState(false);
	const [submitProccessing, setSubmitProccessing] = useState(false);

	const onSubmit = (data) => {
		setSubmitProccessing(true);
		fetch("/api/faq-contact", {
			method: "POST",
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((response) => {
				if (response.success) {
					reset();
					setIsEmailSent("success");
					setSubmitProccessing(false);
				} else {
					setIsEmailSent("failed");
					setSubmitProccessing(false);
				}
			})
			.catch(() => {
				setIsEmailSent("failed");
				setSubmitProccessing(false);
			});
	};

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Label
				title="Email"
				name="mail"
				register={register("mail", { required: true, pattern: emailRegex })}
				errors={errors}
			/>
			<Label
				title="Temat rozmowy"
				name="message"
				register={register("message", { required: true, minLength: 3 })}
				errors={errors}
				placeholder="Daj znać, o czym chcesz pogadać :)"
				rows={3}
			/>
			<Checkbox
				name="check"
				register={register("check", { required: true })}
				errors={errors}
			/>
			<Button theme="primary" disabled={submitProccessing}>{cta || "Wyślij wiadomość"}</Button>
			<AnimatePresence>
				{isEmailSent === "success" && (
					<motion.div
						className={styles.overlay}
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -10 }}
					>
						<div className={styles.grid}>
							<h2>
								Formularz został <strong>wysłany</strong>!
							</h2>
							<p>
								Spodziewaj się od nas odpowiedzi do <strong>24 h!</strong>
							</p>
							<Button
								type="button"
								theme="secondary"
								onClick={() => setIsEmailSent(false)}
							>
								Wypełnij ponownie
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isEmailSent === "failed" && (
					<motion.div
						className={styles.overlay}
						initial={{ opacity: 0, x: 10 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -10 }}
					>
						<div className={styles.grid}>
							<h2>
								<strong>Błąd</strong> serwera!
							</h2>
							<p>
								Spróbuj ponownie później lub skontaktuj się z nami <strong>telefonicznie</strong>.
							</p>
							<Button
								disabled={submitProccessing}
								type="button"
								theme="secondary"
								onClick={() => setIsEmailSent(false)}
							>
								Spróbuj ponownie
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</form>
	);
};
export default FaqContact;
