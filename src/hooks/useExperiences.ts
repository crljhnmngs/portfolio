import { useQuery } from '@tanstack/react-query';
import { api } from '../configs/api';
import { ExperiencesApiResponse } from '../types/global';

export const useExperiences = (languageCode: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['experiences', languageCode],
        queryFn: async () => {
            const response = await api.get<ExperiencesApiResponse>(
                '/api/experiences',
                {
                    params: { languageCode },
                }
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
