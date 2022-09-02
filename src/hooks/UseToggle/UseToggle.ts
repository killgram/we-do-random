import { useState } from 'react'

/**
 * @description State switching hook
 * @param {boolean} condition  initial state
 * @return {[boolean]}
 *
 * @description How to use:
 * 1. const [isActive, setIsActive] = useToggle()
 * isActive is false by default, calling setIsActive() will change
 * isActive to true. If you pass setIsActive(false) -
 * isActive = false (local state localCondition).
 * 2. const [isActive, setIsActive] = useToggle(true)
 * isActive = true (get condition state), setIsActive()
 * will change isActive to false if setIsActive(true) - the rule will work
 * local state and isActive = true.
 *
 * Advantages - all management is decentralized in one place,
 * there is no need to create a separate useState somewhere and write logic
 * handle to toggle this state.
 */
function useToggle(
  condition?: boolean,
): [boolean, (localCondition?: boolean) => void] {
  const [isActive, setIsActive] = useState(condition ?? false)

  /**
   * @param {boolean} localCondition
   * @description toggle condition
   */
  const handler = (localCondition?: boolean) => {
    if (localCondition === true || localCondition === false) {
      setIsActive(localCondition)
    } else setIsActive(!isActive)
  }

  return [isActive, handler]
}

export default useToggle
