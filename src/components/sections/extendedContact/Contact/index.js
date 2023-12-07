import { Prev } from "@/components/atoms/Icons";
import FifthStep from "@/components/organisms/forms/extendedContactForm/FifthStep";
import FirstStep from "@/components/organisms/forms/extendedContactForm/FirstStep";
import FourthStep from "@/components/organisms/forms/extendedContactForm/FourthStep";
import Navigation from "@/components/organisms/forms/extendedContactForm/Navigation";
import SecondStep from "@/components/organisms/forms/extendedContactForm/SecondStep";
import SixthStep from "@/components/organisms/forms/extendedContactForm/SixthStep";
import ThirdStep from "@/components/organisms/forms/extendedContactForm/ThirdStep";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import styles from "./styles.module.scss";

const stepButtonTexts = {
	2: "Poznajmy się!",
	3: "Twoja marka",
	4: "Potrzeba",
	5: "Czas i budżet",
};

const stepComponents = {
	1: FirstStep,
	2: SecondStep,
	3: ThirdStep,
	4: FourthStep,
	5: FifthStep,
};

const StepWrap = ({ id, children }) => (
	<motion.div
		key={id}
		initial={{ opacity: 0, x: 10 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: -10 }}
	>
		{children}
	</motion.div>
);

const ButtonText = ({ id, children }) => (
	<motion.span
		key={id}
		initial={{ opacity: 0, y: -10 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: 10 }}
	>
		<Prev /> {children}
	</motion.span>
);

const Contact = ({ step, setStep, formData, setFormData, setIsEmailSent }) => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [step]);

	const renderStepComponent = (StepComponent) => {
		return (
			<StepWrap id={step.toString()}>
				<StepComponent
					setData={setFormData}
					prevData={formData}
					setStep={setStep}
				/>
			</StepWrap>
		);
	};

	return (
		<section className={styles.section}>
			<div className={styles.nav}>
				<Navigation
					step={step}
					setStep={setStep}
				/>
			</div>
			<div className={styles.leftWrap}>
				<AnimatePresence mode="wait">
					{step > 1 && (
						<motion.button
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 10 }}
							onClick={() => {
								setStep((step) => step - 1);
							}}
						>
							<AnimatePresence mode="wait">
								{step > 1 && step <= 5 && (
									<ButtonText id={step}>{stepButtonTexts[step]}</ButtonText>
								)}
								{step > 5 && <ButtonText id="6">Informacje</ButtonText>}
							</AnimatePresence>
						</motion.button>
					)}
				</AnimatePresence>
			</div>
			<div className={styles.rightWrap}>
				<AnimatePresence mode="wait">
					{step > 0 && step <= 5 && renderStepComponent(stepComponents[step])}
					{step > 5 && (
						<StepWrap id="6">
							<SixthStep
								setData={setFormData}
								prevData={formData}
								setStep={setStep}
								setIsEmailSent={setIsEmailSent}
							/>
						</StepWrap>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};
export default Contact;
