import { db } from "@/lib/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const page = parseInt(request.nextUrl.searchParams.get("page") || "1", 10);
  const limit = 20;
  const offset = (page - 1) * limit;
  const startDate = request.nextUrl.searchParams.get("from") as string;
  const endDate = request.nextUrl.searchParams.get("to") as string;

  const dateFilter =
    startDate && endDate
      ? {
          createdAt: {
            gte: new Date(startDate).toISOString(),
            lte: new Date(endDate).toISOString(),
          },
        }
      : {};

  const data = await db.commitWord.findMany({
    where: {
      ...dateFilter,
    },
    skip: offset,
    take: limit,
    orderBy: {
      createdAt: "desc",
    },
  });

  const groupedData = data.reduce((acc: any, item: any) => {
    const date = new Date(item.createdAt).toISOString().split("T")[0];

    const existingGroup = acc.find((group: any) => group.date === date);

    if (existingGroup) {
      existingGroup.commits.push(item);
    } else {
      acc.push({ date, commits: [item] });
    }

    return acc;
  }, []);

  return NextResponse.json(groupedData, { status: 200 });
}
