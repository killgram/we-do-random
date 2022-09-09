export interface IFriendListItemProps {
  username: string
  userId: string
  isOnline: boolean
  onPress?: (id: string) => void
}
