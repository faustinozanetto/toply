import ReactGA from 'react-ga';
import { GOOGLE_CLIENT_ID } from './constants';

export const initializeGTag = () => {
  ReactGA.initialize(GOOGLE_CLIENT_ID); // put your tracking id here
};

export const trackPageView = (page: string) => {
  ReactGA.pageview(page);
};

export const trackEvent = (category: string, event: string) => {
  ReactGA.event({
    category: category, // Required
    action: event, // Required
    nonInteraction: false,
  });
};
