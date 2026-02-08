import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { getElectionCandidates } from '@/lib/vote/candidates.server'

export async function GET(request, context) {
  console.log('➡️ CANDIDATES API HIT')

  try {
    // ✅ MUST unwrap params like this
    const params = await context.params
    console.log('➡️ Params resolved:', params)

    // ✅ MUST match folder name
    const electionId = Number(params.election_id)
    console.log('➡️ Parsed electionId:', electionId)

    if (Number.isNaN(electionId)) {
      console.error('❌ Invalid electionId:', params.election_id)
      return NextResponse.json(
        { message: 'Invalid election id' },
        { status: 400 }
      )
    }

    // ✅ Read token from HttpOnly cookie
    const token = await getAuthToken()
    console.log('✅ Token fetched from cookies')

    // ✅ Call backend
    const data = await getElectionCandidates(token, electionId)
    console.log('✅ Backend response OK')

    return NextResponse.json(data)
  } catch (error) {
    console.error('❌ CANDIDATES API ERROR:', error)

    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}
