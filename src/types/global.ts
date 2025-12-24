type Links = {
    github?: string;
    live?: string;
};

export type Projects = {
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

export type LocalizedInfo = {
    id: string;
    general_info_id: string | null;
    full_name: string;
    current_company: string | null;
    current_role: string | null;
    about_me: string | null;
    address: string | null;
};

export type LocalizedInfoApiResponse = {
    localizedInfo: LocalizedInfo | null;
};

export type TranslatedRole = {
    id?: string;
    general_info_id?: string | null;
    language_code?: string | null;
    role_name: string;
};

export type RolesApiResponse = {
    roles: TranslatedRole[];
};

export type Skill = {
    id: string;
    name: string;
    icon_url: string;
    category: string;
    created_at: string;
};

export type SkillsApiResponse = {
    skills: Skill[];
};

export type Experience = {
    id: string;
    company: string;
    role: string;
    start_date: string;
    end_date: string;
    logo: string;
    link: string;
    description: string;
    tech: string[];
    sub_items?: SubItem[];
};

export type ExperiencesApiResponse = {
    experiences: Experience[];
};

export type Project = {
    id?: string;
    description: string;
    created_at?: string;
    tech?: string[];
};

export type SubItem = {
    id?: string;
    position: string;
    setup: string;
    start_date: string;
    end_date: string;
    projects: Project[];
};
