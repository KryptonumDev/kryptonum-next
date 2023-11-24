import { Checkbox } from '@/app/components/atoms/Checkbox';
import styles from './styles.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '@/app/components/atoms/Button';
import Range from '@/app/components/molecules/forms/Range';
import { useForm } from 'react-hook-form';
import { Book, Cart, Desktop } from '@/app/components/atoms/Icons';
import { Label } from '@/app/components/atoms/Label';

const ThirdStep = ({ prevData, setData, setStep }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		defaultValues: {
			"Need website": !!prevData?.Needed?.["Need website"],
			"e-commerce": !!prevData?.Needed?.["Need website"]?.["e-commerce"],
			website: !!prevData?.Needed?.["Need website"]?.["website"],
			blog: !!prevData?.Needed?.["Need website"]?.["blog"],
			"Need design": !!prevData?.Needed?.["Need design"],
			"Print graphics": !!prevData?.Needed?.["Need design"]?.["Print graphics"],
			"Social media graphics": !!prevData?.Needed?.["Need design"]?.["Social media graphics"],
			"Brand book": !!prevData?.Needed?.["Need design"]?.["Brand book"],
			Logo: !!prevData?.Needed?.["Need design"]?.["Logo"],
			"subtle/expressive": prevData?.Needed?.["Need design"]?.["Logo"]?.["subtle/expressive"] || 4,
			"simple/complicated":
				prevData?.Needed?.["Need design"]?.["Logo"]?.["simple/complicated"] || 4,
			"organic/geometric": prevData?.Needed?.["Need design"]?.["Logo"]?.["organic/geometric"] || 4,
			"old/new": prevData?.Needed?.["Need design"]?.["Logo"]?.["old/new"] || 4,
			"obvious/symbolic": prevData?.Needed?.["Need design"]?.["Logo"]?.["obvious/symbolic"] || 4,
			"happy/serious": prevData?.Needed?.["Need design"]?.["Logo"]?.["happy/serious"] || 4,
			"economic/luxurious":
				prevData?.Needed?.["Need design"]?.["Logo"]?.["economic/luxurious"] || 4,
			"feminine/masculine":
				prevData?.Needed?.["Need design"]?.["Logo"]?.["feminine/masculine"] || 4,
		},
	});

	const onSubmit = (data) => {
		const formatedData = {};

		if (data["Need website"]) {
			formatedData["Need website"] = {};
			formatedData["Need website"]["e-commerce"] = data["e-commerce"];
			formatedData["Need website"]["website"] = data["website"];
			formatedData["Need website"]["blog"] = data["blog"];
		}

		if (data["Need design"]) {
			formatedData["Need design"] = {};
			formatedData["Need design"]["Print graphics"] = data["Print graphics"];
			formatedData["Need design"]["Social media graphics"] = data["Social media graphics"];
			formatedData["Need design"]["Brand book"] = data["Brand book"];
			formatedData["Need design"]["Logo"] = data["Logo"];

			if (data["Logo"]) {
				formatedData["Need design"]["Logo"] = {};
				formatedData["Need design"]["Logo"]["subtle/expressive"] = data["subtle/expressive"];
				formatedData["Need design"]["Logo"]["simple/complicated"] = data["simple/complicated"];
				formatedData["Need design"]["Logo"]["organic/geometric"] = data["organic/geometric"];
				formatedData["Need design"]["Logo"]["old/new"] = data["old/new"];
				formatedData["Need design"]["Logo"]["obvious/symbolic"] = data["obvious/symbolic"];
				formatedData["Need design"]["Logo"]["happy/serious"] = data["happy/serious"];
				formatedData["Need design"]["Logo"]["economic/luxurious"] = data["economic/luxurious"];
				formatedData["Need design"]["Logo"]["feminine/masculine"] = data["feminine/masculine"];
			}
		}

		if (data["Logo additional inform"]) {
			formatedData["Logo additional inform"] = data["Logo additional inform"];
		}

		setData({ ...prevData, Needed: formatedData });
		setStep((step) => step + 1);
	};

	const website = watch("Need website");
	const design = watch("Need design");
	const logo = watch("Logo");

	// , { validate: () => website || design }

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<h2>
				Co Cię do nas <strong>sprowadza</strong>?
			</h2>
			<Checkbox
				text="Potrzebuję nieziemskiej strony internetowej"
				name="Need website"
				register={register("Need website")}
				errors={errors}
			/>
			<AnimatePresence>
				{website && (
					<motion.div
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -10, opacity: 0 }}
					>
						<h2>Cool! Skomponuj swój zestaw:</h2>
						<div className={styles.checkGrid}>
							<Checkbox
								icon={<Cart />}
								text="e-commerce"
								name="e-commerce"
								register={register("e-commerce")}
								errors={errors}
							/>
							<Checkbox
								icon={<Desktop />}
								text="Aplikacje web"
								name="website"
								register={register("website")}
								errors={errors}
							/>
							<Checkbox
								icon={<Book />}
								text="Blog"
								name="blog"
								register={register("blog")}
								errors={errors}
							/>
						</div>
						<hr className={styles.divider} />
					</motion.div>
				)}
			</AnimatePresence>
			<Checkbox
				text={`Marzy mi się spójna identyfikacja wizualna`}
				name="Need design"
				register={register("Need design")}
				errors={errors}
			/>
			<AnimatePresence>
				{design && (
					<motion.div
						initial={{ x: 10, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -10, opacity: 0 }}
					>
						<h2>Spełniamy marzenia! Powiedz tylko, które:</h2>
						<div className={styles.designGrid}>
							<div>
								<Checkbox
									text="Logo"
									name="logo"
									register={register("Logo")}
									errors={errors}
								/>
								<AnimatePresence>
									{logo && (
										<motion.div
											initial={{ x: 10, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											exit={{ x: -10, opacity: 0 }}
										>
											<h3>Jakie logo Ci się marzy?</h3>
											<Range
												left={"Klasyczne"}
												right={"Nowoczesne"}
												register={register("old/new")}
											/>
											<Range
												left={"Proste"}
												right={"Skomplikowane"}
												register={register("simple/complicated")}
											/>
											<Range
												left={"Delikatne"}
												right={"Wyraziste"}
												register={register("subtle/expressive")}
											/>
											<Range
												left={"Kobiece"}
												right={"Męskie"}
												register={register("feminine/masculine")}
											/>
											<Range
												left={"Organiczne"}
												right={"Geometryczne"}
												register={register("organic/geometric")}
											/>
											<Range
												left={"Radosne"}
												right={"Poważne"}
												register={register("happy/serious")}
											/>
											<Range
												left={"Ekonomiczne"}
												right={"Luksusowe "}
												register={register("economic/luxurious")}
											/>
											<Range
												left={"Oczywiste"}
												right={"Symboliczne"}
												register={register("obvious/symbolic")}
											/>
											<Label
												title="Dodatkowe informacje (opcjonalne)"
												name="Logo additional inform"
												register={register("Logo additional inform")}
												errors={errors}
												rows={3}
											/>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
							<Checkbox
								text="Księga znaku"
								name="Brand book"
								register={register("Brand book")}
								errors={errors}
							/>
							<Checkbox
								text="Grafiki do social mediów"
								name="Social media graphics"
								register={register("Social media graphics")}
								errors={errors}
							/>
							<Checkbox
								text="Grafiki do druku"
								name="Print graphics"
								register={register("Print graphics")}
								errors={errors}
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<Button>Szanujemy deadline`y. Jaki jest Twój?</Button>
		</form>
	);
};
export default ThirdStep;
