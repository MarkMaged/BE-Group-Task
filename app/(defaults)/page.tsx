import MainPage from '@/components/dashboard/MainPage';
import { Metadata } from 'next';
import React from 'react';

import "../styles/globals.css";
export const metadata: Metadata = {
    title: 'Sales Admin',
};

const Sales = () => {
    return <MainPage />;
};

export default Sales;
