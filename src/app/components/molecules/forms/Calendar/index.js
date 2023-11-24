import { CalendarIcon } from '@/app/components/atoms/Icons'
import styles from './styles.module.scss'
import { useState } from 'react'
import CalendarDateDropdown from '@/app/components/atoms/CalendarDateDropdown'
import CalendarTimeDropdown from '@/app/components/atoms/CalendarTimeDropdown'

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