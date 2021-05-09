import DatePicker from 'react-datepicker';
import ContentEditable from 'react-contenteditable';

import './Countdown.css';
import 'react-datepicker/dist/react-datepicker.css';
import { forwardRef } from 'react';

interface CountdownProps {
  name: string,
  date: Date,
  handleDelete: () => void,
  handleNameChange: (name: string) => void,
  handleDateChange: (date: Date) => void,
  remaining: number
}

// Time constants
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

const MILLISECONDS_PER_MINUTE = SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
const MILLISECONDS_PER_HOUR = MINUTES_PER_HOUR * MILLISECONDS_PER_MINUTE;
const MILLISECONDS_PER_DAY = HOURS_PER_DAY * MILLISECONDS_PER_HOUR;

const Countdown = (props: CountdownProps) => {

  let { handleDelete, handleDateChange, handleNameChange, name, date, remaining } = props;

  const changeName = (event: any) => {
    handleNameChange(event.target.value);
  }

  const timeRemainingString = (remaining: number) : string => {
    const inFuture : boolean = remaining > 0;
    remaining = Math.abs(remaining);

    // Calculate days, hours, minutes, seconds
    const days : number = Math.floor(remaining / MILLISECONDS_PER_DAY);
    remaining -= days * MILLISECONDS_PER_DAY;
    const hours : number = Math.floor(remaining / MILLISECONDS_PER_HOUR);
    remaining -= hours * MILLISECONDS_PER_HOUR;
    const minutes : number = Math.floor(remaining / MILLISECONDS_PER_MINUTE);
    remaining -= minutes * MILLISECONDS_PER_MINUTE;
    const seconds : number = Math.floor(remaining / MILLISECONDS_PER_SECOND);
    remaining -= seconds * MILLISECONDS_PER_SECOND;

    // Construct time string
    let totalTime = '';
    if (days > 0) {
      totalTime += `${days} day${days === 1 ? '' : 's'}, `;
    }
    if (hours > 0 || totalTime !== '') {
      totalTime += `${hours} hour${hours === 1 ? '' : 's'}, `;
    }
    if (minutes > 0 || totalTime !== '') {
      totalTime += `${minutes} minute${minutes === 1 ? '' : 's'}, `;
    }
    if (seconds > 0 || totalTime !== '') {
      totalTime += `${seconds} second${seconds === 1 ? '' : 's'}`;
    }

    if (totalTime === '') {
      return 'now';
    } else if (inFuture) {
      return `in ${totalTime}`;
    } else {
      return `${totalTime} ago`;
    }
  }

  const DateInput = forwardRef(
    (props, ref) => {
      const { onClick, value } = props as any;
      return (
        <button className='date-button' onClick={onClick} ref={ref as any}>
          {value}
        </button>
      );
    }
  );

  return (
    <div className='countdown'>
      <div>
        <ContentEditable html={name} onChange={changeName} tagName='h1' />
        <h2>{timeRemainingString(remaining)}</h2>
      </div>
      <div>
        <DatePicker
          selected={date}
          onChange={date => handleDateChange(date as Date)}
          timeInputLabel="Time:"
          dateFormat="MM/dd/yyyy h:mm aa"
          showTimeInput={true}
          customInput={<DateInput />}
        />
      </div>
      <button className='countdown-delete' onClick={handleDelete}>X</button>
    </div>
  );
};

export default Countdown;