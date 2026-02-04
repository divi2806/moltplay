import { NextResponse } from 'next/server'
import store from '@/lib/store'

export async function GET() {
  const agents = store.getAllAgents()
  return NextResponse.json({ agents })
}
