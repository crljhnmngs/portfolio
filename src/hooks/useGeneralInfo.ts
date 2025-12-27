import { useQuery } from '@tanstack/react-query';
import { api } from '../configs/api';
import { GeneralInfo, GeneralInfoApiResponse } from '../types/global';

export const useGeneralInfo = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['general-info'],
        queryFn: async () => {
            const response = await api.get<GeneralInfoApiResponse>(
                '/api/general-info'
            );
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    return {
        generalInfo: data?.generalInfo as GeneralInfo | undefined,
        isLoading,
        isError,
        error,
    };
};
