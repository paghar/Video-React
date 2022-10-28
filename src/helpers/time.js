//@flow
import type { ActivityType } from 'components/MediaBrowser/RightSide/Activity/ActivityItem';
//Get Day of (activity.createdAt)
export const getActivityTime = (activitiy: ActivityType): number => {
  return parseInt(new Date(activitiy.createdAt).getDay());
};
//Get Day of today
export const getToday = (): number => {
  return parseInt(new Date(Date.now()).getDay());
};
//minute of time gets to 2 digits
export const twoDigitMinutes = (time: number): string => {
  if (time > 0) {
    const minute = new Date(time).getMinutes();
    return `${minute < 10 ? '0' + minute : minute}`;
  }
  return '';
};
//hours of time gets to 2 digits
export const twoDigitHours = (time: number): string => {
  if (time > 0) {
    const Hours = new Date(time).getHours();
    return `${Hours < 10 ? '0' + Hours : Hours}`;
  }
  return '';
};
//turn time to Sat.oct9
export const getShortDate = (time: number): string => {
  const optionDay = { weekday: 'long' };
  const optionMonth = { month: 'long' };
  const day = new Intl.DateTimeFormat('en-US', optionDay)
    .format(time)
    .slice(0, 3);
  const month = new Intl.DateTimeFormat('en-US', optionMonth)
    .format(time)
    .slice(0, 3)
    .toLowerCase();
  const date = new Date(time).getDate();
  return `${day}.${month} ${date}`;
};
//turn time to 20th-FEB-22:22 or 2017,FEB 20
export const getListViewDate = (time: number): string => {
  const year = new Date(time).getFullYear();
  const thisYear = new Date(Date.now()).getFullYear();
  const date = new Date(time).getDate();
  const optionMonth = { month: 'long' };
  const month = new Intl.DateTimeFormat('en-US', optionMonth)
    .format(time)
    .slice(0, 3)
    .toUpperCase();

  const minutes = twoDigitMinutes(time);
  const hours = twoDigitHours(time);
  if (year === thisYear) return `${date}th-${month}-${hours}:${minutes}`;
  else return `${year},${month} ${date}`;
};
