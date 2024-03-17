import type { TrackingEvents } from './tracking/types';
function trackEvent(event: TrackingEvents, data: any) {
  // This is a stub, but in a real application, this function would send the tracking information to a tracking backend
  console.log(`Tracking event: ${event} with data: ${data}`);
}

export default { trackEvent };
