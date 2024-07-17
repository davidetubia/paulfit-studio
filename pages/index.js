// pages/index.js
import { useEffect, useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Errore nella risposta dell'API: ${res.statusText}`)
        }
        return res.json()
      })
      .then((data) => setUsers(data))
      .catch((err) => {
        console.error('Errore nella chiamata API:', err)
        setError(err.message)
      })
  }, [])

  if (error) {
    return <div>Errore: {error}</div>
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}
