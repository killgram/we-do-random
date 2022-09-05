import { settings } from '@store/types'

/**
 *
 * @param {string} language
 * @return {settings.IAction}
 */
export function setLanguage(language: string): settings.IAction {
  return {
    type: settings.ActionTypes.SET_LANGUAGE,
    language,
  }
}

/**
 *
 * @return {settings.IAction}
 */
export function cleanSettings(): settings.IAction {
  return {
    type: settings.ActionTypes.CLEAN_SETTINGS,
  }
}
