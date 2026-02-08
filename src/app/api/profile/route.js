import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'
import { getProfile } from '@/lib/profile/profile.server'

export async function GET() {
  try {
    const token = await getAuthToken()
    const profile = await getProfile(token)

    return NextResponse.json(profile)
  } catch (error) {
    console.error('PROFILE ERROR:', error.message)

    return NextResponse.json(
      { message: error.message || 'Unauthorized' },
      { status: 401 }
    )
  }
}
