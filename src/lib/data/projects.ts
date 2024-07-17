"use server";

import { db } from "../utils/db";
import { unstable_noStore as noStore } from "next/cache";

export const fetchProjects = async () => {
  noStore();

  try {
    const data = await db.project.findMany();

    return data;
  } catch (e) {
    console.log("Fetching error data projects", e);
  }
};
