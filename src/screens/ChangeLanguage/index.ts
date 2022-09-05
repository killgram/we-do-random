import ChangeLanguage from './ChangeLanguage'

import { connect } from 'react-redux'
import { IState, IChangeLanguageScreenTypesProps } from './ChangeLanguageTypes'
import { Dispatch } from 'redux'
import { settingsAction } from '@store/actions'

/**
 * @param {IState} state
 * @return {IChangeLanguageScreenTypesProps}
 */
const mapStateToProps = (state: IState): IChangeLanguageScreenTypesProps => ({
  language: state?.settings?.language,
})

/**
 * @param {Dispatch<any>} dispatch
 * @return {ISettingsMainScreenTypesProps}
 */
const mapDispatchToProps = (
  dispatch: Dispatch,
): IChangeLanguageScreenTypesProps => ({
  setLanguage: (language: string) =>
    dispatch(settingsAction.setLanguage(language)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage)
