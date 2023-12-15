import Button from "@/components/atoms/Button";
import { Plus, SmallError } from "@/components/atoms/Icons";
import { Label } from "@/components/atoms/Label";
import Radio from "@/components/molecules/forms/Radio";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const SecondStep = ({ prevData, setData, setStep }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
		defaultValues: { ...prevData?.Brand },
	});

	const onSubmit = (data) => {
		setData({
			...prevData,
			Brand: (() => {
				// iterate over data and remove empty values
				let a = {};
				Object.keys(data).forEach((el) => {
					if (data[el]) a[el] = data[el];
				});
				return a;
			})(),
		});
		setStep((step) => step + 1);
	};

	const [links, setLinks] = useState(() => {
		let a = [{}];
		// open link for each link in prevData
		if (prevData?.Brand) {
			Object.keys(prevData?.Brand).forEach((el, index) => {
				if (index > 1) {
					a.push({});
				}
			});
		}
		return a;
	});

	const addMoreLinks = () => {
		setLinks([...links, {}]);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<h2>
				Gdzie dzisiaj jest <strong>Twoja marka?</strong>
			</h2>
			<div className={styles.radioGroup}>
				{errors.experience && (
					<span className={styles.error}>
						<SmallError /> Proszę wybrać jedną z opcji
					</span>
				)}
				<Radio
					className={errors.experience ? styles.errored : ""}
					title="Dopiero na starcie"
					register={register("experience", { required: true })}
				/>
				<Radio
					className={errors.experience ? styles.errored : ""}
					title="Trochę już przeszła"
					register={register("experience", { required: true })}
				/>
			</div>
			<h2>Podziel się linkami, chętnie zajrzymy</h2>
			<Label
				title="Link (opcjonalne)"
				name={"additional link № 1"}
				register={register("additional link № 1")}
				errors={errors}
			/>
			<AnimatePresence mode="wait">
				{links?.slice(1)?.map((_, index) => (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						key={index}
					>
						<Label
							title="Link (opcjonalne)"
							name={"additional link №" + (2 + index)}
							register={register("additional link №" + (2 + index))}
							errors={errors}
						/>
					</motion.div>
				))}
			</AnimatePresence>
			<AnimatePresence mode="wait">
				{links?.length < 5 && (
					<motion.button
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						type="button"
						onClick={addMoreLinks}
						className={styles.button}
					>
						<Plus />
						<span>Dodaj więcej linków</span>
					</motion.button>
				)}
			</AnimatePresence>
			<hr className={styles.divider} />
			<h2 className={styles.area}>Chcesz coś dorzucić?</h2>
			<Label
				title="Dodatkowe informacje (opcjonalne)"
				name="additional info"
				register={register("additional info")}
				errors={errors}
				placeholder="Daj znać, o czym chcesz pogadać :)"
				rows={3}
			/>
			<Button className={styles.submit}>Czas na konkrety!</Button>
		</form>
	);
};
export default SecondStep;
