import Button from "@/components/atoms/Button";
import Radio from "@/components/molecules/forms/Radio";
import { useForm } from 'react-hook-form';
import styles from "./styles.module.scss";

const FourthStep = ({ prevData, setData, setStep }) => {
	const { register, handleSubmit } = useForm({
		mode: "onTouched",
		defaultValues: { ...prevData["Deadline & Budget"] },
	});

	const onSubmit = (data) => {
		setData({ ...prevData, "Deadline & Budget": data });
		setStep((step) => step + 1);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<h2>
				Szanujemy <strong>deadline&apos;y</strong>. Jaki jest Twój? (opcjonalne)
			</h2>
			<div className={styles.radioGroup}>
				<Radio
					title="3-4 tyg."
					register={register("deadline")}
				/>
				<Radio
					title="1-3 mies."
					register={register("deadline")}
				/>
				<Radio
					title="3-6 mies."
					register={register("deadline")}
				/>
				<Radio
					title="6+ mies."
					register={register("deadline")}
				/>
			</div>
			<h2>
				Budżet ważna rzecz. Pokaż, w jakim zakresie się <strong>spotkamy</strong>: (opcjonalne)
			</h2>
			<div className={styles.radioGroup}>
				<Radio
					title="20-34 tys. zł"
					register={register("budget")}
				/>
				<Radio
					title="40-54 tys. zł"
					register={register("budget")}
				/>
				<Radio
					title="50-64 tys. zł"
					register={register("budget")}
				/>
				<Radio
					title="75 tys. + zł"
					register={register("budget")}
				/>
			</div>
			<Button>Whoa, jesteś już za półmetkiem!</Button>
		</form>
	);
};
export default FourthStep;
