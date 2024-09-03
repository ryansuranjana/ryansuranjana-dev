import { db } from "@/lib/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const currentData = await db.commitWord.findUnique({
      where: { id },
      select: { likes: true },
    });

    if (!currentData) {
      return NextResponse.json({ message: "Data not found" }, { status: 404 });
    }

    const updatedData = await db.commitWord.update({
      where: { id },
      data: { likes: currentData.likes + 1 },
    });

    return NextResponse.json(
      { message: "Successfully liked", data: updatedData },
      { status: 200 }
    );
  } catch (e: any) {
    console.error("Error from API like word: ", e);
    return NextResponse.json(
      { message: "Failed to like the word", error: e.message },
      { status: 500 }
    );
  }
}
