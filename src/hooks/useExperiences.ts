import { useQuery } from '@tanstack/react-query';
import { apiCall } from '../configs/api';
import { ExperiencesApiResponse } from '../types/global';

export const useExperiences = (languageCode: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['experiences', languageCode],
        queryFn: async () => {
            const response = await apiCall.get<ExperiencesApiResponse>(
                '/api/experiences',
                { languageCode }
            );
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    return {
        experiences: data?.experiences ?? [],
        isLoading,
        isError,
        error,
    };
};
