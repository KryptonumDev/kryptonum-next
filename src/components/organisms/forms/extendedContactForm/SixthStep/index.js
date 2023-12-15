import Button from '@/components/atoms/Button';
import { Checkbox } from '@/components/atoms/Checkbox';
import { Calendar } from '@/components/molecules/forms/Calendar';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles.module.scss';


const SixthStep = ({ prevData, setData, setStep, setIsEmailSent }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
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
    const formData ={ ...prevData, 'Date': {...data, 'date': inputValue} }; 
    setData(formData);
    setStep((step) => step + 1);
    fetch("/api/brief-contact", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          setIsEmailSent("success");
        } else {
          setIsEmailSent("failed");
        }
      })
      .catch(() => {
        setIsEmailSent("failed");
      });
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
