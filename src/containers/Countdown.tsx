import { useSelector } from 'react-redux'

import { CountdownDetails, deleteCountdown, selectNow, updateCountdownDate, updateCountdownName } from '../store/countdowns';
import Countdown from '../components/Countdown';
import { useAppDispatch } from '../store/store';
import { logEvent } from '../analytics';

interface CountdownContainerProps {
  index: number,
  countdown: CountdownDetails
};

const CountdownContainer = (props: CountdownContainerProps) => {
  let { index, countdown } = props;

  const now = useSelector(selectNow);
  const dispatch = useAppDispatch();

  const date = new Date(countdown.time);

  const handleNameChange = (name: string) => {

    // logEvent({
    //   category: 'Countdown',
    //   action: 'Change Name'
    // });

    dispatch(updateCountdownName({ index, name }));
  }

  const handleDateChange = (date: Date | null) => {
    if (date === null) {
      return;
    }

    logEvent({
      category: 'Countdown',
      action: 'Change Date'
    });

    dispatch(updateCountdownDate({ index, time: date.getTime() }));
  }

  const handleDelete = () => {

    logEvent({
      category: 'Countdown',
      action: 'Delete Countdown'
    });

    dispatch(deleteCountdown({ index }));
  }

  return (
    <Countdown
      name={countdown.name}
      date={date}
      handleDelete={handleDelete}
      handleNameChange={handleNameChange}
      handleDateChange={handleDateChange}
      remaining={date.getTime() - now}
    />
  )
};

export default CountdownContainer;

