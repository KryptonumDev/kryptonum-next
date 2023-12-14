"use client";

import Button from "@/components/atoms/Button";
import { Label } from "@/components/atoms/Label";
import { emailRegex } from "@/constants/regex";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const FirstStep = ({ prevData, setData, setStep }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			name: prevData?.Client?.name || "",
			"e-mail": prevData?.Client?.["e-mail"] || "",
		},
	});

	const onSubmit = (data) => {
		setData({ ...prevData, Client: data });
		setStep((step) => step + 1);
	};

	const name = watch("name");

	return (
		<form
			className={styles.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h2>
				A <strong>kogo</strong> my tu mamy?
			</h2>
			<Label
				title="Imię"
				name="name"
				register={register("name", { required: true, minLength: 3 })}
				errors={errors}
			/>
			<Label
				title="Email"
				name="e-mail"
				register={register("e-mail", { required: true, pattern: emailRegex })}
				errors={errors}
			/>
			<Button className="nav-cta">{`Cześć${name ? `, ${name}` : ""}! Lecimy dalej!`}</Button>
		</form>
	);
};
export default FirstStep;
