export type Env = {
  serverUrl: string
}

const env: Env = import.meta.env.DEV
  ? {
      serverUrl: 'http://localhost:8080'
    }
  : {
      serverUrl: import.meta.env.VITE_SERVER_URL as string
    }

export default env
