import { settings } from '@store/types'
import { IAboutApp, ISupportData } from '@store/types/settings/Interfaces'

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

/**
 *
 * @return {settings.IAction}
 */
export function getSupportData(): settings.IAction {
  return {
    type: settings.ActionTypes.GET_SUPPORT_DATA,
  }
}

/**
 *
 * @param {ISupportData} supportData
 * @return {settings.IAction}
 */
export function getSupportDataSuccess(
  supportData: ISupportData,
): settings.IAction {
  return {
    type: settings.ActionTypes.GET_SUPPORT_DATA_SUCCESS,
    supportData,
  }
}
