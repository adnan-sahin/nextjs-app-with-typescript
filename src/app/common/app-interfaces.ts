export interface Session {
  id?: string
  title: string
  speakerId?: string
  description: string
}

export interface Speaker {
  id: string
  first: string
  last: string
  sessionId: string
  bio: string
}
