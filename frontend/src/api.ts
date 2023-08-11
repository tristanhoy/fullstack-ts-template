import type { Greeting } from '@shared/types'
import env from './env'

export async function getGreeting () {
  const response = await fetch(`${env.serverUrl}/greeting`)
  const result = await response.json() as Greeting

  return result
}
