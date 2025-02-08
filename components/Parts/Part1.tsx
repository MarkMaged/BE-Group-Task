'use client';

import { fetchUsers } from '@/api/Users';
import { useEffect, useState } from 'react';
import UserForm from '../forms/validation/UserForm';
import { UsersResponse } from '@/types/User';
import { getTranslation } from '@/i18n';

const Part1 = () => {
    const { t } = getTranslation();
    const [isMounted, setIsMounted] = useState(false);
    const [users, setUsers] = useState<UsersResponse>();
    useEffect(() => {
        const getUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
        };
        getUsers()
        setIsMounted(true);
    }, []);

    return (
        <>
            <div>
                <div className="py-5">
                    <p className='parts'>{t('part1')}</p>
                    <div className="descContainer">
                    <p className='partsDesc'>{t('part1Desc')}</p>
                    </div>
                </div>
                <div className="pt-5">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="h-full w-full">
                            <UserForm />
                        </div>
                        <div className="h-full w-full">
                            <div className="mb-5 flex items-center justify-between">
                                <h5 className="text-lg font-semibold" style={{ color: '#6D5CBC' }}>{t('results')}</h5>
                            </div>
                            <div className="table-responsive" style={{ border: '1px solid #E5E5E5' }}>
                                <table className="panel">
                                    <thead>
                                        <tr className="border-b-0">
                                            <th>{t('first_name')}</th>
                                            <th>{t('last_name')}</th>
                                            <th>{t('phone')}</th>
                                            <th>{t('email')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.length > 0 && users.map((user) => (
                                            <tr key={user.id} className="group text-white-dark hover:text-black dark:hover:text-white-light/90">
                                                <td>{user.FirstName}</td>
                                                <td>{user.LastName}</td>
                                                <td>{user.Phone}</td>
                                                <td>{user.Email}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Part1;
