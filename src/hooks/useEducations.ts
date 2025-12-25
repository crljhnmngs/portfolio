import { useQuery } from '@tanstack/react-query';
import { api } from '../configs/api';
import { EducationsApiResponse } from '../types/global';

export const useEducations = (languageCode: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['educations', languageCode],
        queryFn: async () => {
            const response = await api.get<EducationsApiResponse>(
                '/api/educations',
                {
                    params: { languageCode },
                }
            );
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
    });
    return {
        educations: data?.educations ?? [],
        isLoading,
        isError,
        error,
    };
};
