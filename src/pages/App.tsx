import React, { useEffect } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Header from '../layout/Header';
import Timeline from '../components/Timeline';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import { AppInitializer } from '../components/AppInitializer';
import { AppProvider } from '../contexts/AppContext';
import { useLanguageStore } from '../stores/languageStore';

export default function App() {
    const setSelectedLang = useLanguageStore((state) => state.setSelectedLang);

    const handleLanguageLoaded = (code: string) => {
        const storedLang = localStorage.getItem('portfolio_selected_language');
        if (!storedLang) {
            setSelectedLang(code);
        }
    };

    // Hydrate the store on mount
    useEffect(() => {
        useLanguageStore.persist.rehydrate();
    }, []);

    return (
        <AppInitializer onLanguageLoaded={handleLanguageLoaded}>
            <AppProvider>
                <div className="font-poppins">
                    <Header />
                    <div className="overflow-hidden">
                        <Home />
                        <About />
                        <Skills />
                        <Timeline />
                        <Projects />
                        <Contact />
                    </div>
                </div>
            </AppProvider>
        </AppInitializer>
    );
}
