import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { castVote } from '@/lib/casteVote/casteVote.server'

export async function POST(request) {
  console.log('➡️ CAST VOTE API HIT')

  try {
    // 1️⃣ Read token (DO NOT LOG FULL TOKEN)
    const token = await getAuthToken()
    console.log('✅ Token fetched from cookies:', token ? 'YES' : 'NO')
    console.log('➡️ Token length:', token?.length)

    // 2️⃣ Read request body
    const body = await request.json()
    console.log('➡️ Request body received:', body)

    const { election_id, candidate_id } = body

    // 3️⃣ Validate payload
    if (!election_id || !candidate_id) {
      console.error('❌ Invalid payload:', {
        election_id,
        candidate_id,
      })

      return NextResponse.json(
        { message: 'Invalid payload' },
        { status: 400 }
      )
    }

    console.log('➡️ Casting vote with:')
    console.log('   election_id:', election_id)
    console.log('   candidate_id:', candidate_id)

    // 4️⃣ Call backend
    const result = await castVote(token, {
      election_id,
      candidate_id,
    })

    console.log('✅ Vote cast successfully')
    console.log('➡️ Backend response:', result)

    return NextResponse.json(result)
  } catch (error) {
    console.error('❌ CAST VOTE API ERROR')
    console.error('➡️ Error message:', error.message)
    console.error('➡️ Full error:', error)

    // Try to extract backend error
    const status =
      error.response?.status || 401

    const message =
      error.response?.data?.message ||
      error.message ||
      'Unauthorized'

    return NextResponse.json(
      { message },
      { status }
    )
  }
}
