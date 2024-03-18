import { NextRequest, NextResponse } from 'next/server'

import listingsData from '../../listingsData.json'

export async function GET (req: NextRequest) {
  return NextResponse.json(listingsData, { status: 200 })
}
