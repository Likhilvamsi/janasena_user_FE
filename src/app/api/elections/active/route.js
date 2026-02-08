import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { getActiveElections } from '@/lib/elections/elections.server'

export async function GET() {
  try {
    const token = await getAuthToken()
    const elections = await getActiveElections(token)

    return NextResponse.json(elections)
  } catch (error) {
    console.error('ELECTIONS ERROR:', error.message)

    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}
