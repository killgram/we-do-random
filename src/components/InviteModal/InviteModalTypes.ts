export interface IInviteModalProps {
  isVisible: boolean
  onDecline: (id: string) => void
  onAccept: (id: string) => void
  leaderName: string
  leadId: string
  gameName: string
}
