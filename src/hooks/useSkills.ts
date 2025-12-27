import { useQuery } from '@tanstack/react-query';
import { api } from '../configs/api';
import { SkillsApiResponse, Skill } from '../types/global';

export const useSkills = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            const response = await api.get<SkillsApiResponse>('/api/skills');
            return response.data;
        },
        staleTime: 10 * 60 * 1000, // 10 minutes
    });

    const sortedSkills: Skill[] = data?.skills
        ? [...data.skills].sort(
              (a, b) =>
                  new Date(a.created_at).getTime() -
                  new Date(b.created_at).getTime()
          )
        : [];

    return {
        skills: sortedSkills,
        isLoading,
        isError,
        error,
    };
};
