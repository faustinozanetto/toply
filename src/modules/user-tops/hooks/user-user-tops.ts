import type { TopTracksGetResponse } from '@modules/api/types/api.types';
import { __URL__ } from '@modules/common/lib/common.constants';
import { extractErrorMessage, handleFetchError } from '@modules/common/lib/errors.lib';
import { useCustomization } from '@modules/customization/hooks/use-customization';
import { useToast } from '@modules/ui/components/toasts/context/toast-context';
import type { UseQueryResult } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

type UseUserTopsReturn = Pick<UseQueryResult<TopTracksGetResponse>, 'error' | 'isFetching' | 'isLoading'> & {
  data: TopTracksGetResponse;
};

const useUserTops = (): UseUserTopsReturn => {
  const { toast } = useToast();
  const { state } = useCustomization();

  const { data, isLoading, isFetching, error } = useQuery<TopTracksGetResponse>({
    queryKey: ['top-tracks', state.timeRange],
    refetchOnWindowFocus: false,
    initialData: {},
    queryFn: async () => {
      try {
        const url = new URL('/api/top-tracks', __URL__);
        url.searchParams.set('time_range', state.timeRange);

        const response = await fetch(url, {
          method: 'GET',
        });

        if (!response.ok) {
          const errorMessage = await handleFetchError('Could not get top tracks!', response);
          throw new Error(errorMessage);
        }

        return await response.json();
      } catch (err) {
        const errorMessage = extractErrorMessage('Could not get top tracks!', err);
        toast({ variant: 'error', content: errorMessage });
      }
    },
  });

  return { error, data, isLoading, isFetching };
};

export default useUserTops;
