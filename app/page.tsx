import { supabase } from '../lib/supabaseClient'

export default async function Home() {
  const { data: messages, error } = await supabase.from('messages').select('*')

  console.log("Supabase data:", messages)
  console.log("Supabase error:", error)

  if (error) {
    return (
      <main>
        <h1>Error!</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </main>
    )
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Messages</h1>
      <ul>
        {messages && messages.length > 0 ? (
          messages.map((msg) => (
            <li key={msg.id}>{msg.id} - {msg.messages}</li>
          ))
        ) : (
          <li>No messages found</li>
        )}
      </ul>
    </main>
  )
}