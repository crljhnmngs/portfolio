type Links = {
    github?: string;
    live?: string;
};

export type Project = {
    name: string;
    image: string;
    about: string;
    tech: string[];
    date: string;
    new?: boolean;
    dev?: boolean;
    links: Links;
};

export type GeneralInfo = {
    id: string;
    email: string | null;
    resumeUrl: string | null;
    scheduleLink: string | null;
    socialLinks: Record<string, string>;
};

export type GeneralInfoApiResponse = {
    generalInfo: GeneralInfo;
};

export type SupportedLanguage = {
    code: string;
    name: string;
    is_default?: boolean;
};

export type SupportedLanguagesApiResponse = {
    supportedLanguages: SupportedLanguage[];
};
