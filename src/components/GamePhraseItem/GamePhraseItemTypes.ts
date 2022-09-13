export interface IGamePhraseItemProps {
  username?: string
  phrase: string
  onDelete: (id: number) => void
  phraseId: number
}
