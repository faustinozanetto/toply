import ReactGA from 'react-ga';
import { GOOGLE_CLIENT_ID, GOOGLE_TAG_ID } from './constants';

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

export const trackGAEvent = (name: string, params: Record<string, unknown>): void => {
  try {
    window.gtag('event', name, params);
  } catch (error) {
    console.warn('Error tracking event', error);
  }
};
