import { NextResponse } from 'next/server'
import { getAuthToken } from '@/lib/serverAuth'

export async function POST(request) {
  console.log('🚀 NOMINATION APPLY API HIT')

  try {
    const token = await getAuthToken()
    console.log('✅ Token fetched')

    const formData = await request.formData()
    console.log('📦 FormData keys:', [...formData.keys()])

    const electionId = formData.get('election_id')
    const photo = formData.get('profile_photo')

    if (!electionId || !photo) {
      return NextResponse.json(
        { message: 'Election and photo required' },
        { status: 400 }
      )
    }

    console.log('📡 Forwarding to FastAPI via fetch')

    // 🔥 IMPORTANT: use fetch, NOT axios
    const res = await fetch(
      'http://127.0.0.1:8000/nominations/apply',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          // ❌ DO NOT set Content-Type
        },
        body: formData, // ✅ forward original multipart stream
      }
    )

    const data = await res.json()

    if (!res.ok) {
      console.error('❌ FastAPI error:', data)
      return NextResponse.json(
        { message: data.detail || 'Apply failed' },
        { status: res.status }
      )
    }

    console.log('✅ Nomination applied successfully')

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    console.error('❌ NOMINATION APPLY ERROR:', error)

    return NextResponse.json(
      { message: 'Failed to apply nomination' },
      { status: 500 }
    )
  }
}
