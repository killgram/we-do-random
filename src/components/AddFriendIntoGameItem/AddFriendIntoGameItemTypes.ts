export interface IAddFriendIntoGameItemProps {
  username: string
  userId: string
  isOnline: boolean
  onPress?: (id: string) => void
  canChoose: boolean
}
