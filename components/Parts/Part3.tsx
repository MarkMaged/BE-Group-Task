'use client';

import { useState } from 'react';
import { getTranslation } from '@/i18n';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Part3 = () => {
    const { t } = getTranslation();
    const [value1, setValue1] = useState("");
    return (
        <>
            <div>
                <div className="py-5">
                    <p className='parts'>{t('part3')}</p>
                    <div className="descContainer">
                    <p className='partsDesc'>{t('part3Desc')}</p>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="grid grid-cols-1 ">
                        <div className="h-full w-full">
                        <ReactQuill theme="snow" value={value1} onChange={setValue1} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Part3;
