import { settings } from '@store/types'
import { IAboutApp } from '@store/types/settings/Interfaces'

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

/**
 *
 * @return {settings.IAction}
 */
export function getAboutApp(): settings.IAction {
  return {
    type: settings.ActionTypes.GET_ABOUT_APP,
  }
}

/**
 *
 * @param {IAboutApp} aboutApp
 * @return {settings.IAction}
 */
export function getAboutAppSuccess(aboutApp: IAboutApp): settings.IAction {
  return {
    type: settings.ActionTypes.GET_ABOUT_APP_SUCCESS,
    aboutApp,
  }
}
