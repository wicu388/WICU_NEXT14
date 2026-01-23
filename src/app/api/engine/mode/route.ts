import { NextResponse } from "next/server"
import { engineState } from "@/src/core/engine/state"

export async function POST(req: Request) {
  const { mode } = await req.json()

  if (!["idle", "beast"].includes(mode)) {
    return NextResponse.json(
      { error: "Invalid mode" },
      { status: 400 }
    )
  }

  engineState.mode = mode
  engineState.lastPing = Date.now()

  return NextResponse.json({
    status: "ok",
    engine: engineState,
  })
}
