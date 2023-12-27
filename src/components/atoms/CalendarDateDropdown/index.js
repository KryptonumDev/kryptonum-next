import { getWeekDays } from "@/utils/getWeekDays";
import dayjs from "dayjs";
import "dayjs/locale/pl";
import { useMemo, useState } from "react";
import { Next, Prev } from "../Icons";
import styles from "./styles.module.scss";

const CalendarDateDropdown = ({ setOpenedPopup, setChosenDate, chosenDate }) => {
	const [currentDate, setCurrentDate] = useState(() => {
		return dayjs().locale("pl")
.set("date", 1);
	});

	function handlePreviousMonth() {
		const previousMonthDate = currentDate.subtract(1, "month");
		setCurrentDate(previousMonthDate);
	}

	function handleNextMonth() {
		const nextMonthDate = currentDate.add(1, "month");
		setCurrentDate(nextMonthDate);
	}

	const shortWeekDays = getWeekDays({ short: true });

	const currentMonth = currentDate.format("MMMM");
	const currentYear = currentDate.format("YYYY");

	// const { data: blockedDates } = useQuery(
	//   ['blocked-dates', currentDate.get('year'), currentDate.get('month')],
	//   async () => {
	//     const response = await api.get(`/users/${username}/blocked-dates`, {
	//       params: {
	//         year: currentDate.get('year'),
	//         month: currentDate.get('month') + 1,
	//       },
	//     })

	//     return response.data
	//   },
	// )

	const calendarWeeks = useMemo(() => {
		// if (!blockedDates) {
		//   return []
		// }

		const daysInMonthArray = Array.from({
			length: currentDate.daysInMonth(),
		}).map((_, i) => {
			return currentDate.set("date", i + 1);
		});

		const firstWeekDay = currentDate.get("day");

		const previousMonthFillArray = Array.from({
			length: firstWeekDay,
		})
			.map((_, i) => {
				return currentDate.subtract(i + 1, "day");
			})
			.reverse();

		const lastDayInCurrentMonth = currentDate.set("date", currentDate.daysInMonth());

		const lastWeekDay = lastDayInCurrentMonth.get("day");

		const nextMonthFillArray = Array.from({
			length: 7 - (lastWeekDay + 1),
		}).map((_, i) => {
			return lastDayInCurrentMonth.add(i + 1, "day");
		});

		const calendarDays = [
			...previousMonthFillArray.map((date) => {
				return { date, disabled: true };
			}),
			...daysInMonthArray.map((date) => {
				return {
					date,
					// disabled:
					//   date.endOf('day').isBefore(new Date()) ||
					//   blockedDates.blockedWeekDays.includes(date.get('day')) ||
					//   blockedDates.blockedDates.includes(date.get('date')),
				};
			}),
			...nextMonthFillArray.map((date) => {
				return { date, disabled: true };
			}),
		];

		const calendarWeeks = calendarDays.reduce((weeks, _, i, original) => {
			const isNewWeek = i % 7 === 0;

			if (isNewWeek) {
				weeks.push({
					week: i / 7 + 1,
					days: original.slice(i, i + 7),
				});
			}

			return weeks;
		}, []);

		return calendarWeeks;
	}, [
		currentDate,
		//  blockedDates
	]);

	return (
		<div className={styles.wrapper}>
			<header>
				<button
					type="button"
					onClick={handlePreviousMonth}
				>
					<Prev />
				</button>
				<p>
					{currentMonth} {currentYear}
				</p>
				<button
					type="button"
					onClick={handleNextMonth}
				>
					<Next />
				</button>
			</header>
			<div>
				<ul className={styles.grid}>
					{shortWeekDays.map((weekDay) => (
						<li key={weekDay}>{weekDay}</li>
					))}
				</ul>
				<ul>
					{calendarWeeks.map((week) => (
						<li key={week.week}>
							<ul className={styles.grid}>
								{week.days.map((day) => (
									<li
										className={
											chosenDate?.format("DD-MM-YYYY") === day.date.format("DD-MM-YYYY")
												? styles.active
												: ""
										}
										key={day.date.format("DD-MM-YYYY")}
									>
										<button
											onClick={() => {
												setChosenDate(day.date);
											}}
											type="button"
											disabled={day.disabled}
										>
											{day.date.format("DD")}
										</button>
									</li>
								))}
							</ul>
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
						setOpenedPopup("time");
					}}
					disabled={!chosenDate}
					className={styles.choseTime}
				>
					Wybierz godzinę
				</button>
			</footer>
		</div>
	);
};
export default CalendarDateDropdown;
