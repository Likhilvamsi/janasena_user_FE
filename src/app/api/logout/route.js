import { NextResponse } from 'next/server'

export async function POST() {
  try {
    // ✅ Create response
    const response = NextResponse.json({
      message: 'Logged out successfully',
    })

    // ✅ Delete cookie using response.cookies
    response.cookies.set({
      name: 'access_token',
      value: '',
      httpOnly: true,
      path: '/',
      domain: 'localhost',
      sameSite: 'lax',
      secure: false,
      maxAge: 0, // ⬅️ expire immediately
    })

    return response
  } catch (error) {
    console.error('LOGOUT ERROR:', error)

    return NextResponse.json(
      { message: 'Logout failed' },
      { status: 500 }
    )
  }
}
