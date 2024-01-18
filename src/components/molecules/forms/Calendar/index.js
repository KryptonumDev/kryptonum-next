import { useState } from 'react'
import CalendarDateDropdown from '@/components/atoms/CalendarDateDropdown'
import CalendarTimeDropdown from '@/components/atoms/CalendarTimeDropdown'
import styles from './styles.module.scss'

export const Calendar = ({ chosenDate, setChosenDate, chosenTime, setChosenTime, inputValue }) => {
  const [openedPopup, setOpenedPopup] = useState(false)
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrap}>
        <span className={styles.legend}>Wybierz datę i godzinę (opcjonalne)</span>
        <input
          value={inputValue}
          onFocus={() => { openedPopup ? null : setOpenedPopup('date') }}
          onClick={() => { setOpenedPopup('date') }}
          className={styles.input}
          placeholder="26/01/2023  |  Godzina"
          type='text'
        />
        <CalendarIcon />
        <span className={styles.border} />
      </div>
      {openedPopup === 'date' && (
        <CalendarDateDropdown
          chosenDate={chosenDate}
          setChosenDate={setChosenDate}
          setOpenedPopup={setOpenedPopup}
        />
      )}
      {openedPopup === 'time' && (
        <CalendarTimeDropdown
          chosenDate={chosenDate}
          chosenTime={chosenTime}
          setChosenTime={setChosenTime}
          setOpenedPopup={setOpenedPopup}
        />
      )}
    </div>
  )
}

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    fill="none"
    viewBox="0 0 33 32"
  >
    <path
      stroke="#EFF0F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.725 13.333h24M22.058 2.667V8M11.39 2.667V8m-4-2.667h18.667A2.667 2.667 0 0128.725 8v18.667a2.667 2.667 0 01-2.667 2.666H7.39a2.667 2.667 0 01-2.666-2.666V8A2.667 2.667 0 017.39 5.333z"
    ></path>
  </svg>
);