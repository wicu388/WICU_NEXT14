import { NextResponse } from "next/server";
import { wicuEngine } from "@/core/engine";

export async function GET() {
  const result = wicuEngine("ping");
  return NextResponse.json(result);
}
