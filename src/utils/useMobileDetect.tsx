type MobileDetector = {
    isMobile: () => boolean;
    isDesktop: () => boolean;
    isAndroid: () => boolean;
    isIos: () => boolean;
    isSSR: () => boolean;
};
const getMobileDetect = (userAgent: string): MobileDetector => {
    const isAndroid = (): boolean => Boolean(userAgent.match(/Android/i));
    const isIos = (): boolean => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isOpera = (): boolean => Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = (): boolean => Boolean(userAgent.match(/IEMobile/i));
    const isSSR = (): boolean => Boolean(userAgent.match(/SSR/i));

    const isMobile = (): boolean => Boolean(isAndroid() || isIos() || isOpera() || isWindows());
    const isDesktop = (): boolean => Boolean(!isMobile() && !isSSR());
    return {
        isMobile,
        isDesktop,
        isAndroid,
        isIos,
        isSSR,
    };
};
const useMobileDetect = (): MobileDetector => {
    //useEffect(() => {}, []);
    const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
    return getMobileDetect(userAgent);
};

export default useMobileDetect;
