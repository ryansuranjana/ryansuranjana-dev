import { fetchCommitWords } from "@/lib/data/commits";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Words from "./list-commits";

export default async function Hydration({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    from?: string;
    to?: string;
  };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [
      "commits-words",
      Number(searchParams?.page),
      searchParams?.from,
      searchParams?.to,
    ],
    queryFn: () =>
      fetchCommitWords({
        page: Number(searchParams?.page),
        from: searchParams?.from as string,
        to: searchParams?.to as string,
      }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Words />
    </HydrationBoundary>
  );
}
