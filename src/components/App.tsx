
import './App.css';

import Countdown from '../containers/Countdown';
import { CountdownDetails } from '../store/countdowns';

interface AppProps {
  countdowns: CountdownDetails[],
  onCreateCountdown: () => void
}

const App = (props: AppProps) => {
  const { countdowns, onCreateCountdown } = props;

  return (
    <div>
      <div>
        <button onClick={onCreateCountdown}>Add Countdown</button>
      </div>
      <div>
        {countdowns.map((countdown, i) => 
          <Countdown
            key={i}
            index={i}
            countdown={countdown}
          />
        )}
      </div>
    </div>
  )
};

export default App;
