import { getTranslation } from "@/i18n";

const Footer = () => {
    const {t} = getTranslation();
    return (
            <div dir="ltr" className="footer p-6 pt-0 mt-auto text-center dark:text-white-dark ltr:sm:text-left rtl:sm:text-right"> {t('digi')} {t('fly')} © {new Date().getFullYear()}. {t('allRights')}.</div>
    );
};

export default Footer;
