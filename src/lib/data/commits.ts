"use server";

type TCommitWord = {
  id: string;
  code: string;
  commitMessage: string;
  contributor: string;
  avatarContributor: string;
  isShow?: boolean;
  isAdmin?: boolean;
  likes: number;
  status: "PENDING" | "MERGED" | "REJECTED";
  createdAt: string;
  updatedAt: string;
};

type TResponseFetchCommitWord = {
  date: string;
  commits: TCommitWord[];
};

export const fetchCommitWords = async ({
  page,
  from,
  to,
}: {
  page: number;
  from: string;
  to: string;
}): Promise<TResponseFetchCommitWord[] | undefined> => {
  try {
    console.log("start date from axios : ", from);
    console.log("end date from axios : ", to);

    const res = await fetch(
      `http://localhost:3000/api/commits/words?page=${page}${
        from ? `&from=${from}` : ""
      }${to ? `&to=${to}` : ""}`
    );
    const commits = (await res.json()) as TResponseFetchCommitWord[];

    return commits;
  } catch (e) {
    console.log("Error fetch commit words :", e);
  }
};
