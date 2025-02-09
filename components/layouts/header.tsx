'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { IRootState } from '@/store';
import { toggleRTL } from '@/store/themeConfigSlice';
import Dropdown from '@/components/dropdown';
import { usePathname, useRouter } from 'next/navigation';
import { getTranslation } from '@/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const { t, i18n } = getTranslation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
        if (selector) {
            const all: any = document.querySelectorAll('ul.horizontal-menu .nav-link.active');
            for (let i = 0; i < all.length; i++) {
                all[0]?.classList.remove('active');
            }

            let allLinks = document.querySelectorAll('ul.horizontal-menu a.active');
            for (let i = 0; i < allLinks.length; i++) {
                const element = allLinks[i];
                element?.classList.remove('active');
            }
            selector?.classList.add('active');

            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link');
                if (ele) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele?.classList.add('active');
                    });
                }
            }
        }
    }, [pathname]);

    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl';

    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const setLocale = (flag: string) => {
        if (flag.toLowerCase() === 'ae') {
            dispatch(toggleRTL('rtl'));
        } else {
            dispatch(toggleRTL('ltr'));
        }
        router.refresh();
    };

    return (
        <header className={`z-40`}>
            <div className="shadow-sm">
                <div className="flex w-full items-center justify-between bg-transparent" style={{ padding: '1rem 3rem' }}>
                    <div className="horizontal-logo flex items-center lg:block ltr:mr-2 rtl:ml-2">
                        <Link href="/" className="main-logo flex shrink-0 items-center">
                            <img className="inline w-12 ltr:-ml-1 rtl:-mr-1" src="/assets/images/logo.svg" alt="logo" />
                        </Link>
                    </div>
                    <div className="hidden md:block ltr:mr-2 rtl:ml-2">
                        <ul className="flex items-center space-x-4 dark:text-[#d0d2d6] rtl:space-x-reverse">
                            <li>
                                <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                                    {t('home')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                                    {t('categories')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                                    {t('contact')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                                    {t('about')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                        <div className="dropdown shrink-0">
                            <Dropdown
                                offset={[0, 8]}
                                placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
                                btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                                button={i18n.language && <img className="h-5 w-5 rounded-full object-cover" src={`/assets/images/flags/${i18n.language.toUpperCase()}.svg`} alt="flag" />}
                            >
                                <ul className="grid w-[280px] grid-cols-2 gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                                    {themeConfig.languageList.map((item: any) => {
                                        return (
                                            <li key={item.code}>
                                                <button
                                                    type="button"
                                                    className={`flex w-full hover:text-primary ${i18n.language === item.code ? 'bg-primary/10 text-primary' : ''}`}
                                                    onClick={() => {
                                                        i18n.changeLanguage(item.code);
                                                        setLocale(item.code);
                                                    }}
                                                >
                                                    <img src={`/assets/images/flags/${item.code.toUpperCase()}.svg`} alt="flag" className="h-5 w-5 rounded-full object-cover" />
                                                    <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Dropdown>
                        </div>
                        <FontAwesomeIcon icon={faBars} size="2x" className="cursor-pointer sm:block md:hidden" onClick={() => setIsOpen((prev) => !prev)}/>
                    </div>
                </div>
            </div>

            <div  className={`${isOpen ? "menuOpen" : "menuClose"} mobMenu`}>
                <ul className="flex flex-col items-center space-x-4 dark:text-[#d0d2d6] rtl:space-x-reverse">
                    <li>
                        <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                            {t('home')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                            {t('categories')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                            {t('contact')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="block rounded-full p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60">
                            {t('about')}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
