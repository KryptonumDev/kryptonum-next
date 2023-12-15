import Button from "@/components/atoms/Button";
import { Label } from "@/components/atoms/Label";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

const FifthStep = ({ prevData, setData, setStep }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onTouched",
		defaultValues: { ...prevData?.Additional },
	});

	const onSubmit = (data) => {
		setData({ ...prevData, Additional: data });
		setStep((step) => step + 1);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={styles.form}
		>
			<h2>
				A może chcesz coś <strong>dodać</strong>?
			</h2>
			<Label
				rows={3}
				title="Dodatkowe informacje (opcjonalne)"
				name="Additional information"
				register={register("Additional information")}
				errors={errors}
				type="text"
				readOnly
			/>
			<Button>Uwierzysz, że to prawie koniec?</Button>
		</form>
	);
};
export default FifthStep;
