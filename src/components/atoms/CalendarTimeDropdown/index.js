import styles from "./styles.module.scss";

const availability = [
	{
		time: "10:00",
		available: false,
	},
	{
		time: "10:30",
		available: false,
	},
	{
		time: "11:00",
		available: false,
	},
	{
		time: "11:30",
		available: true,
	},
	{
		time: "12:00",
		available: true,
	},
	{
		time: "12:30",
		available: true,
	},
	{
		time: "13:00",
		available: true,
	},
	{
		time: "13:30",
		available: true,
	},
	{
		time: "14:00",
		available: true,
	},
	{
		time: "14:30",
		available: true,
	},
	{
		time: "15:00",
		available: true,
	},
	{
		time: "15:30",
		available: true,
	},
	{
		time: "16:00",
		available: true,
	},
	{
		time: "16:30",
		available: true,
	},
	{
		time: "17:00",
		available: true,
	},
];

const CalendarTimeDropdown = ({ setOpenedPopup, setChosenTime, chosenTime }) => {
	// const selectedDateWithoutTime = chosenDate
	//   ? dayjs(chosenDate).format('YYYY-MM-DD')
	//   : null

	// const { data: availability } = useQuery(
	//   ['availability', selectedDateWithoutTime],
	//   async () => {
	//     const response = await api.get(`/users/${username}/availability`, {
	//       params: {
	//         date: selectedDateWithoutTime,
	//       },
	//     })

	//     return response.data
	//   },
	//   {
	//     enabled: !!chosenDate,
	//   },
	// )

	function handleSelectTime(hour) {
		setChosenTime(hour);
		// const dateWithTime = dayjs(chosenDate)
		//   .set('hour', hour)
		//   .startOf('hour')
		//   .toDate()

		// setChosenTime(dateWithTime)
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<button
					onClick={() => {
						setOpenedPopup("date");
					}}
				>
					Cofnij
				</button>
				<div></div>
				<div />
			</header>
			<div>
				<ul>
					{availability.map(({ time, available }) => (
						<li
							key={time}
							className={chosenTime === time ? styles.active : ""}
						>
							<button
								type="button"
								onClick={() => handleSelectTime(time)}
								disabled={!available}
							>
								{time}
							</button>
						</li>
					))}
				</ul>
			</div>
			<footer>
				<button
					onClick={() => {
						setOpenedPopup(false);
					}}
					className={styles.anulate}
				>
					Anuluj
				</button>
				<button
					onClick={() => {
						setOpenedPopup(false);
					}}
					disabled={!chosenTime}
					className={styles.choseTime}
				>
					Gotowe
				</button>
			</footer>
		</div>
	);
};
export default CalendarTimeDropdown;
