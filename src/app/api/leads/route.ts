import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "Viewing request dispatched to senior concierge desk",
      appointmentId: `apt-${Date.now()}`,
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error processing lead submission" },
      { status: 400 }
    );
  }
}
