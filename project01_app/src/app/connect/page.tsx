import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getConnectData } from '@/apis/connect';
import ConnectList from '@/components/ConnectList';

export default async function ConnectPage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['connect'], queryFn: getConnectData });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="flex flex-col min-w-[500px] max-w-[1000px] px-6 mx-auto">
        <ConnectList />
      </div>
    </HydrationBoundary>
  );
}
