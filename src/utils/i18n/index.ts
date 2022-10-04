import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translates from './translates'

const resources = translates

i18n.use(initReactI18next).init({
  resources,
  interpolation: {
    escapeValue: false,
  },
})

/**
 * @description set app locale
 * @param {string} language
 */
export const setLocale = (language: string) => {
  i18n.changeLanguage(language)
}
