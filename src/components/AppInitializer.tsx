import { ReactNode, useEffect } from 'react';
import { Preloader } from './Preloader';
import { useGeneralInfo } from '../hooks/useGeneralInfo';
import { useSupportedLanguages } from '../hooks/useSupportedLanguages';

type AppInitializerProps = {
    children: ReactNode;
    onLanguageLoaded?: (code: string) => void;
};

export const AppInitializer = ({
    children,
    onLanguageLoaded,
}: AppInitializerProps) => {
    const {
        languages,
        defaultLanguage,
        isLoading: isLoadingLanguages,
        isError: isErrorLanguages,
    } = useSupportedLanguages();

    const {
        generalInfo,
        isLoading: isLoadingGeneral,
        isError: isErrorGeneral,
    } = useGeneralInfo();

    const isLoading = isLoadingGeneral || isLoadingLanguages;
    const isError = isErrorGeneral || isErrorLanguages;

    const isDataLoaded = !isLoading;

    const hasValidData = !!generalInfo && languages.length > 0;

    useEffect(() => {
        if (
            defaultLanguage &&
            !localStorage.getItem('portfolio_selected_language')
        ) {
            onLanguageLoaded?.(defaultLanguage.code);
        }
    }, [defaultLanguage, onLanguageLoaded]);

    if (isError) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
                <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg max-w-md w-full mx-4 text-center shadow-lg">
                    <h2 className="text-red-600 dark:text-red-400 font-semibold text-2xl mb-4">
                        Oops! Something Went Wrong
                    </h2>
                    <p className="text-red-500 dark:text-red-300 text-base mb-6">
                        We're having trouble loading the portfolio right now.
                        This could be due to a temporary connection issue or
                        server maintenance.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-base px-8 py-3 focus:ring-4 focus:ring-red-300 focus:outline-none transition-colors"
                    >
                        Try Again
                    </button>
                    <p className="text-red-400 dark:text-red-300 text-sm mt-4">
                        If the problem persists, please check back later.
                    </p>
                </div>
            </div>
        );
    }

    if (!hasValidData && !isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900">
                <div className="bg-orange-50 dark:bg-yellow-900/20 p-8 rounded-lg max-w-md w-full mx-4 text-center shadow-lg">
                    <h2 className="text-orange-600 dark:text-yellow-400 font-semibold text-2xl mb-4">
                        Portfolio Under Construction
                    </h2>
                    <p className="text-orange-700 dark:text-yellow-300 text-base mb-6">
                        This portfolio is currently being set up. Please check
                        back soon!
                    </p>
                    <p className="text-orange-500 dark:text-yellow-400 text-sm">
                        We appreciate your patience.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <>
            <Preloader isDataLoaded={isDataLoaded} />
            {children}
        </>
    );
};
