import { useEffect } from 'react';
import { useSelector } from 'react-redux'


import App from '../components/App';
import { addCountdown, reorderCountdown, selectCountdowns, updateNow } from '../store/countdowns';
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

  // Store data in local storage
  useEffect(() => {
    localStorage.setItem('countdowns', JSON.stringify(countdowns));
  }, [countdowns]);

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

  const handleReorderCountdown = (start: number, end: number) => {
    dispatch(reorderCountdown({ start, end }))
  };

  return <App
    countdowns={countdowns}
    onCreateCountdown={handleCreateCountdown}
    onReorderCountdown={handleReorderCountdown}
  />;
};

export default AppContainer;