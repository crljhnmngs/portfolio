import { useQuery } from '@tanstack/react-query';
import { api } from '../configs/api';
import { RolesApiResponse } from '../types/global';

export const useRoles = (languageCode: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['roles', languageCode],
        queryFn: async () => {
            const response = await api.get<RolesApiResponse>('/api/roles', {
                params: { languageCode },
            });
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    return {
        roles: data?.roles ?? [],
        isLoading,
        isError,
        error,
    };
};
