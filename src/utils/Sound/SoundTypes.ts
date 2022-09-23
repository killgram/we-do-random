import incomingSound from '@assets/audio/IncomingInvite.mp3'
import loseSound from '@assets/audio/loseGame.mp3'
import winSound from '@assets/audio/winGame.mp3'

enum SoundTypes {
  INVITE_GAME = 'INVITE_GAME',
  WIN_GAME = 'WIN_GAME',
  LOSE_GAME = 'LOSE_GAME',
}

const SoundList = {
  INVITE_GAME: incomingSound,
  WIN_GAME: winSound,
  LOSE_GAME: loseSound,
}

export { SoundTypes, SoundList }
