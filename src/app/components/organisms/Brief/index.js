"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "../../sections/extendedContact/Hero";
import Contact from "../../sections/extendedContact/Contact";
import Loader from "../../atoms/Loader";
import ErrorSend from "../../sections/extendedContact/Error";
import Summary from "../../sections/extendedContact/Summary";

const Brief = ({ data }) => {
	const [step, setStep] = useState(0);
	const [formData, setFormData] = useState({});
	const [startTime, setStartTime] = useState(null);
	const [isEmailSent, setIsEmailSent] = useState(false);

	useEffect(() => {
		if (step === 1 && !startTime) {
			setStartTime(new Date().getTime());
		}

		if (step === 7 && !isEmailSent) {
			fetch("/api/brief-contact", {
				method: "POST",
				body: JSON.stringify(formData),
			})
				.then((response) => response.json())
				.then((response) => {
					if (response.success) {
						setIsEmailSent("success");
					} else {
						setIsEmailSent("failed");
					}
				})
				.catch(() => {
					setIsEmailSent("failed");
				});
		}
	}, [step]);

	const endTime = useMemo(
		(time) => {
			if (step === 7 && !time) {
				const totalTime = new Date().getTime() - startTime;

				const minutes = Math.floor(totalTime / 60000);
				const seconds = Math.floor((totalTime % 60000) / 1000);

				return minutes + ":" + seconds;
			}
			return null;
		},
		[step],
	);

	const resend = useCallback(() => {
		setIsEmailSent(false);
		setStep(6);
	}, [setStep, setIsEmailSent]);

	return (
		<AnimatePresence mode="wait">
			{step === 0 && (
				<motion.div
					key="hero"
					exit={{ opacity: 0, x: -10 }}
				>
					<Hero
						data={data.page}
						setStep={setStep}
					/>
				</motion.div>
			)}
			{step > 0 && step <= 7 && !isEmailSent && (
				<motion.div
					key="kontakt"
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -10 }}
				>
					<Contact
						step={step}
						setStep={setStep}
						formData={formData}
						setFormData={setFormData}
						endTime={endTime}
					/>
				</motion.div>
			)}
			{step === 7 && !isEmailSent && (
				<motion.div
					key="loader"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<Loader />
				</motion.div>
			)}
			{step === 7 && isEmailSent === "failed" && (
				<motion.div
					key="error"
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -10 }}
				>
					<ErrorSend resend={resend} />
				</motion.div>
			)}
			{step === 7 && isEmailSent === "success" && (
				<motion.div
					key="summary"
					initial={{ opacity: 0, x: 10 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -10 }}
				>
					<Summary
						name={formData?.Client?.name}
						endTime={endTime}
						blogEntries = {data.blogEntries}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
export default Brief;
