'use client';
import { getTranslation } from '@/i18n';
import Map from '../Map';

const Part2 = () => {
    const { t } = getTranslation();
    return (
        <>
            <div>
                <div className="py-5">
                    <p className='parts'>{t('part2')}</p>
                    <div className="descContainer">
                    <p className='partsDesc'>{t('part2Desc')}</p>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="grid grid-cols-1">
                        <div className="h-full w-full">
                            <Map/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Part2;
