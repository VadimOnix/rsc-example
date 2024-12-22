import {serverStateCount} from '../../state.js'
import {NextResponse} from "next/server.js";


export async function GET() {
  return NextResponse.json(serverStateCount.value);
}

export async function PUT() {
  serverStateCount.value += 1
  return NextResponse.json(serverStateCount.value);
}
