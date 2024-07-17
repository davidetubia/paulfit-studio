// pages/api/users/index.js
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  try {
    const users = await prisma.user.findMany()
    console.log(users) // Log dei dati recuperati
    res.status(200).json(users)
  } catch (error) {
    console.error('Errore nel recupero degli utenti:', error)
    res.status(500).json({ error: 'Errore nel recupero degli utenti' })
  }
}
