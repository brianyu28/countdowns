import { useEffect } from 'react';
import { useSelector } from 'react-redux'


import App from '../components/App';
import { addCountdown, selectCountdowns, updateNow } from '../store/countdowns';
import { useAppDispatch } from '../store/store';

const AppContainer = () => {

  const countdowns = useSelector(selectCountdowns);
  const dispatch = useAppDispatch();

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        updateNow({
          now: new Date().getTime()
        })
      )
    }, 1000);
    return () => clearInterval(interval);
  });

  const handleCreateCountdown = () => {

    // Calculate tomorrow's date
    const date = new Date();
    date.setHours(24, 0, 0, 0);

    dispatch(
      addCountdown({
        name: 'New Countdown',
        time: date.getTime(),
      })
    )
  };

  return <App
    countdowns={countdowns}
    onCreateCountdown={handleCreateCountdown}
  />;
};

export default AppContainer;