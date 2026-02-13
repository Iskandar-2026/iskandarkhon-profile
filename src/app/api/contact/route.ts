import { NextRequest, NextResponse } from 'next/server'
import { getConnection } from '@/lib/mysql'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // Basic validation
    if (!name || !email || !message)
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })

    const conn = await getConnection()
    await conn.execute(
      'INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())',
      [name, email, message]
    )
    await conn.end()

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}