// middleware.js in project root or src/
import { NextResponse } from 'next/server'

const USERNAME = 'test'
const PASSWORD = 'test'
const BASIC_AUTH = 'Basic ' + Buffer.from(`${USERNAME}:${PASSWORD}`).toString('base64')

export function middleware(request) {
  const auth = request.headers.get('authorization')

  if (auth === BASIC_AUTH) {
    return NextResponse.next()
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}

// Apply to all routes
export const config = { matcher: '/:path*' }
