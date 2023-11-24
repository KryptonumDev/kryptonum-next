import Button from '@/app/components/atoms/Button';
import styles from './styles.module.scss';
import { Checkbox } from '@/app/components/atoms/Checkbox';
import { useForm } from 'react-hook-form';
import { Calendar } from '@/app/components/molecules/forms/Calendar';
import { useState, useMemo } from 'react';


const SixthStep = ({ prevData, setData, setStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: { ...prevData?.Date }
  })

  const [chosenDate, setChosenDate] = useState(null)
  const [chosenTime, setChosenTime] = useState(null)

  const inputValue = useMemo(() => {
    let str = ''
    if (chosenDate && chosenTime) {
      str = chosenDate.format('DD/MM/YYYY') + '  |  ' + chosenTime
    } else if (chosenDate) {
      str = chosenDate.format('DD/MM/YYYY') + '  |  Godzina'
    }

    return str
  }, [chosenDate, chosenTime])

  const onSubmit = (data) => {
    setData({ ...prevData, 'Date': {...data, 'date': inputValue} })
    setStep((step) => step + 1)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h2>To kiedy się <strong>widzimy</strong>? Umów termin calla</h2>

      <Calendar
        chosenDate={chosenDate}
        setChosenDate={setChosenDate}
        chosenTime={chosenTime}
        setChosenTime={setChosenTime}
        inputValue={inputValue}
      />
      <Checkbox
        name='privacy-policy'
        register={register('privacy-policy', { required: true })}
        errors={errors}
      />
      <Button theme="primary">Wyślij formularz?</Button>
    </form>
  )
};
export default SixthStep;
