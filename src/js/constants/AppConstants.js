var keyMirror = require('keymirror');

module.exports = keyMirror({
  // Actions
  BACKGROUND_SHUFFLE: null,
  BACKGROUND_SHUFFLE_SUCCESS: null,
  BACKGROUND_SHUFFLE_FAIL: null,

  CALENDAR_CONNECT: null,
  CALENDAR_CONNECT_SUCCESS: null,
  CALENDAR_CONNECT_ERROR: null,
  CALENDAR_REFRESH: null,
  CALENDAR_REFRESH_SUCCESS: null,
  CALENDAR_REFRESH_ERROR: null,
  CALENDAR_DISCONNECT: null,

  TUPIQ_DRAG_START: null,
  TUPIQ_DRAG_STOP: null,
  TUPIQ_REPOSITION: null,
  TUPIQ_MINIMISE: null,

  WEATHER_REFRESH: null,
  WEATHER_REFRESH_SUCCESS: null,
  WEATHER_REFRESH_ERROR: null,

  // Local Storage
  LOCAL_UPCOMING_EVENTS: null,
  LOCAL_BACKGROUND_IMAGE: null,
  LOCAL_TUPIQ_COORDINATES: null,
  LOCAL_USED_BACKGROUNDS: null,
  LOCAL_BACKGROUNDS_JSON: null,
  LOCAL_VERSION: null,
  LOCAL_WEATHER_FORECAST: null
});
