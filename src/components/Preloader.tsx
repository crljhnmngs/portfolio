import React, { useEffect, useState } from 'react';

type PreloaderProps = {
    isDataLoaded: boolean;
    minDisplayTime?: number;
    onComplete?: () => void;
};

export const Preloader = ({
    isDataLoaded,
    minDisplayTime = 3000,
    onComplete,
}: PreloaderProps) => {
    const [isShowLoader, setShowLoader] = useState<boolean>(true);
    const [isHidden, setHidden] = useState<boolean>(false);
    const [startTime] = useState<number>(Date.now());

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        // Only start closing when data is loaded
        if (isDataLoaded) {
            const elapsedTime = Date.now() - startTime;
            const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

            const timer = setTimeout(() => {
                setShowLoader(false);

                const hideTimer = setTimeout(() => {
                    setHidden(true);
                    document.body.style.overflow = 'auto';
                    onComplete?.();
                }, 800);

                return () => clearTimeout(hideTimer);
            }, remainingTime);

            return () => clearTimeout(timer);
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isDataLoaded, startTime, minDisplayTime, onComplete]);

    return (
        <div
            className={`h-screen w-full fixed z-[100] ${isHidden && 'hidden'}`}
        >
            <div
                className={`h-[50%] w-full absolute bottom-[50%] ${
                    !isShowLoader && 'animate-midToTop'
                } bg-black fill-mode`}
            ></div>
            <div
                className={`absolute top-[44.5%] left-[45%] sm:h-[80px] h-[50px] z-50 ${
                    !isShowLoader && 'hidden'
                }`}
            >
                <div className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#754fa0] animate-delay"></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#09b7bf] animate-delay"
                    style={{ animationDelay: '-0.7s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#90d36b] animate-delay"
                    style={{ animationDelay: '-0.6s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#f2d40d] animate-delay"
                    style={{ animationDelay: '-0.5s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#fcb12b] animate-delay"
                    style={{ animationDelay: '-0.4s' }}
                ></div>
                <div
                    className="h-full w-[10px] sm:w-[15px] inline-block float-left ml-[2px] bg-[#ed1b72] animate-delay"
                    style={{ animationDelay: '-0.3s' }}
                ></div>
            </div>
            <div
                className={`h-[50%] w-full absolute top-[50%] ${
                    !isShowLoader && 'animate-midToBottom'
                }  bg-black fill-mode`}
            ></div>
        </div>
    );
};
