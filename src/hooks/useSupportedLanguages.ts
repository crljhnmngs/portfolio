import { useQuery } from '@tanstack/react-query';
import { api } from '../configs/api';
import {
    SupportedLanguage,
    SupportedLanguagesApiResponse,
} from '../types/global';

export const useSupportedLanguages = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['supported-languages'],
        queryFn: async () => {
            const response = await api.get<SupportedLanguagesApiResponse>(
                '/api/supported-languages'
            );
            return response.data;
        },
        staleTime: 30 * 60 * 1000, // 30 minutes
    });

    return {
        languages: (data?.supportedLanguages as SupportedLanguage[]) ?? [],
        defaultLanguage: data?.supportedLanguages?.find(
            (lang) => lang.is_default
        ),
        isLoading,
        isError,
        error,
    };
};
