import axios from 'axios'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const body = await req.json()

    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/member/verify-otp`,
      body,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )

    // ✅ Create response FIRST
    const response = NextResponse.json({ success: true })

    // ✅ Set cookie on response (THIS IS THE FIX)
    response.cookies.set('access_token', data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return response
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error.response?.data?.detail?.[0]?.msg ||
          error.response?.data?.message ||
          'OTP verification failed',
      },
      { status: error.response?.status || 500 }
    )
  }
}
