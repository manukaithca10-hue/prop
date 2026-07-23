import { NextResponse } from "next/server";
import { MOCK_PROPERTIES } from "@/data/mockProperties";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const propertyType = searchParams.get("type");
  const maxPrice = searchParams.get("maxPrice");

  let filtered = MOCK_PROPERTIES;

  if (city) {
    filtered = filtered.filter((p) => p.city.toLowerCase() === city.toLowerCase());
  }

  if (propertyType) {
    filtered = filtered.filter((p) => p.propertyType === propertyType);
  }

  if (maxPrice) {
    filtered = filtered.filter((p) => p.price <= Number(maxPrice));
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      success: true,
      message: "Property created successfully",
      data: body,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid payload" },
      { status: 400 }
    );
  }
}
