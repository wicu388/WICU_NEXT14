import { NextResponse } from "next/server"
import { wicuEngine } from "@/src/core/engine"

export async function GET() {
  const engineStatus = wicuEngine("ping")

  return NextResponse.json({
    api: "online",
    engine: engineStatus,
  })
}
