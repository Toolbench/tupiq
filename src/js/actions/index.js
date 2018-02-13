import { createAction } from 'redux-actions';

/**
 * Action Constants
 */
export const SHUFFLE_BACKGROUND = 'SHUFFLE_BACKGROUND';
export const SHUFFLE_BACKGROUND_SUCCESS = 'SHUFFLE_BACKGROUND_SUCCESS';
export const SHUFFLE_BACKGROUND_FAIL = 'SHUFFLE_BACKGROUND_FAIL';

export const UPDATE_ALL_BACKGROUNDS = 'UPDATE_ALL_BACKGROUNDS';
export const UPDATE_USED_BACKGROUNDS = 'UPDATE_USED_BACKGROUNDS';

export const FETCH_CALENDAR = 'FETCH_CALENDAR';
export const FETCH_CALENDAR_SUCCESS = 'FETCH_CALENDAR_SUCCESS';
export const FETCH_CALENDARD_FAIL = 'FETCH_CALENDAR_FAIL';

/**
 * Action Creators
 */
export const shuffleBackground = createAction(SHUFFLE_BACKGROUND);

export const fetchCalendar = createAction(FETCH_CALENDAR);
