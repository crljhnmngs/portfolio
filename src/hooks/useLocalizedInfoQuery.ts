import { useQuery } from '@tanstack/react-query';
import { apiCall } from '../configs/api';
import { LocalizedInfo, LocalizedInfoApiResponse } from '../types/global';

export const useLocalizedInfoQuery = (
    generalInfoId: string,
    languageCode: string
) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['localized-info', generalInfoId, languageCode],
        queryFn: async () => {
            const response = await apiCall.get<LocalizedInfoApiResponse>(
                '/api/localized-info',
                { generalInfoId, languageCode }
            );
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    return {
        localizedInfo: data?.localizedInfo as LocalizedInfo | undefined,
        isLoading,
        isError,
        error,
    };
};
