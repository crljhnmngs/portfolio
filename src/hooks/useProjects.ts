import { useQuery } from '@tanstack/react-query';
import { apiCall } from '../configs/api';
import { ProjectsApiResponse } from '../types/global';

export const useProjects = (languageCode: string) => {
    const { data, isLoading, isError, error } = useQuery<
        ProjectsApiResponse,
        Error
    >({
        queryKey: ['projects', languageCode],
        queryFn: async () => {
            const response = await apiCall.get<ProjectsApiResponse>(
                '/api/projects',
                { languageCode }
            );
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    return {
        projects: data?.projects ?? [],
        isLoading,
        isError,
        error,
    };
};
