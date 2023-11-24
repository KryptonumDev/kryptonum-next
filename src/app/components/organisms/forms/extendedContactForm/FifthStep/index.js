import Button from "@/app/components/atoms/Button";
import styles from "./styles.module.scss";
import { Label } from "@/app/components/atoms/Label";
import { useForm } from "react-hook-form";

const FifthStep = ({ prevData, setData, setStep }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
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
				readOnly
			/>
			<Button>Uwierzysz, że to prawie koniec?</Button>
		</form>
	);
};
export default FifthStep;
