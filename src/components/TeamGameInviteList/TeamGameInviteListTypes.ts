export interface ITeamGameInviteListProps {
  username: string
  userId: string
  onPress?: (id: string) => void
  leadId?: string
  isLead?: boolean
  isAccepted?: boolean
}
