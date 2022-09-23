import Sound from 'react-native-sound'
import { SoundTypes, errorToast, SoundList } from '@utils'

/**
 * @description func to play know sound effect
 * @param {SoundTypes} type
 */
const playSound = (type: SoundTypes) => {
  const file = soundAdapter(type)
  if (file) {
    soundPlayer(file)
  } else {
    errorToast("Can't play sound effect")
  }
}

/**
 * @description sound adapter
 * @param {SoundTypes} type
 * @return {unknown} sound file or null
 */
const soundAdapter = (type: SoundTypes) => {
  return SoundList[type] ?? null
}

/**
 * @description sound player
 * @param {unknown} file
 */
const soundPlayer = (file: unknown) => {
  Sound.setCategory('Playback')
  const sound = new Sound(file, () => {
    sound.setVolume(0.3)
    sound.play()
  })
}

export { playSound }
