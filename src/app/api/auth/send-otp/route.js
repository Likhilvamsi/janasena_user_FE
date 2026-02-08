import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    console.log('➡️ SEND OTP API HIT')
    const body = await req.json()
    console.log('📦 BODY:', body)
    const backendUrl = process.env.NEXT_PUBLIC_API_URL
    console.log('🌐 BACKEND_URL:', backendUrl)
    if (!backendUrl) {
      throw new Error('BACKEND_URL is undefined')
    }
    const response = await axios.post(
      `${backendUrl}/auth/member/send-otp`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )
    console.log('✅ BACKEND RESPONSE:', response.data)
    return NextResponse.json(response.data)
  } catch (error) {
    console.error('❌ SEND OTP ERROR')

    if (error.response) {
      console.error('STATUS:', error.response.status)
      console.error('DATA:', error.response.data)
    } else {
      console.error('MESSAGE:', error.message)
    }

    return NextResponse.json(
      {
        message:
          error.response?.data?.message ||
          error.response?.data?.detail?.[0]?.msg ||
          error.message ||
          'OTP send failed',
      },
      { status: error.response?.status || 500 }
    )
  }
}
