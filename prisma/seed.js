// prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
    ],
  })

  await prisma.membership.createMany({
    data: [
      { type: 'Monthly', userId: 1 },
      { type: 'Annual', userId: 2 },
    ],
  })

  await prisma.exercise.createMany({
    data: [
      { name: 'Squat', duration: 60 },
      { name: 'Bench Press', duration: 45 },
    ],
  })

  await prisma.instructor.createMany({
    data: [
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Smith', email: 'jane@example.com' },
    ],
  })
}

main()
  .then(() => {
    console.log('Dati di prova inseriti con successo')
  })
  .catch((e) => {
    console.error('Errore durante l\'inserimento dei dati di prova:', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
