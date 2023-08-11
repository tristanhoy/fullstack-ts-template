import express from 'express'
import { Greeting } from '../shared/types'

const router = express.Router()

router.get('/', (_req, res) => {
  const response: Greeting = {
    message: 'Hello, world!'
  }

  res.json(response)
})

export const greetingRouter = router
