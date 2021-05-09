import ReactGA, { EventArgs } from 'react-ga';

ReactGA.initialize('UA-123778931-6');

const logAnalytics = process.env.NODE_ENV !== 'development';

export const logPageview = () => {
  if (logAnalytics) {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
}

export const logEvent = (event: EventArgs) => {
  if (logAnalytics) {
    ReactGA.event(event);
  }
}