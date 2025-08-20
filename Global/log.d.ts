import type dummy from './dummy'

declare global {
  namespace log {
    const debug: (Title: string, Message: any) => void
    const audit: (Title: string, Message: any) => void
    const error: (Title: string, Message: any) => void
    const emergency: (Title: string, Message: any) => void
  }
}
