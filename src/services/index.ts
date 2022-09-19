import { dbLogin, dbLogout } from './AuthService'
import { dbUpdateStatus, dbUpdateGameStatus } from './StatusService'
import {
  dbCheckUser,
  dbAddFriend,
  dbUpdateFriendList,
  dbRemoveFriend,
  dbRemoveFriendList,
} from './FriendsServices'
import {
  snapUpdateFriendStatus,
  snapUpdateInviteStatus,
  snapUpdateViewGame,
} from './SnapshotFirestore'
import {
  dbUpdatePlayStatus,
  dbUpdatePlayers,
  dbCreateGame,
  dbCloseGame,
  dbRemovePlayer,
  dbSendInvite,
  dbDeleteInvite,
  dbAcceptInvite,
  dbUpdateReadyStatus,
} from './GameService'
import { dbAddPhrase, dbDeletePhrase } from './PhraseService'

export {
  dbLogin,
  dbLogout,
  dbUpdateStatus,
  dbCheckUser,
  dbAddFriend,
  dbUpdateFriendList,
  dbRemoveFriend,
  dbRemoveFriendList,
  snapUpdateFriendStatus,
  dbUpdatePlayStatus,
  dbUpdatePlayers,
  dbCreateGame,
  dbCloseGame,
  dbRemovePlayer,
  dbDeleteInvite,
  dbSendInvite,
  snapUpdateInviteStatus,
  dbAcceptInvite,
  snapUpdateViewGame,
  dbUpdateGameStatus,
  dbAddPhrase,
  dbDeletePhrase,
  dbUpdateReadyStatus,
}
