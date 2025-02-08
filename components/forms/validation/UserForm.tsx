'use client';
import { getTranslation } from '@/i18n';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { UserValues } from '@/types/User';
import { createUser } from '@/api/Users';
const UserForm = () => {
    const { t } = getTranslation();
    const [formStatus, setFormStatus] = useState<any>({});
    const userForm: UserValues = {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
    };

    const submitForm4 = Yup.object().shape({
        firstname: Yup.string().required(`${t('required_first_name')}`),
        lastname: Yup.string().required(`${t('required_last_name')}`),
        phone: Yup.string().required(`${t('required_phone')}`),
        email: Yup.string()
            .email(`${t('invalid_email')}`)
            .required(`${t('required_email')}`),
    });

    const handleData = async (values: UserValues, { setSubmitting }: FormikHelpers<UserValues>) => {
        const res = await createUser({
            FirstName: values.firstname,
            LastName: values.lastname,
            Phone: values.phone,
            Email: values.email
        });
        setFormStatus(res);
        setSubmitting(false);
    };

    useEffect(() => {
        if (formStatus && formStatus?.status === 200) {
            const toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: 'success',
                title: 'Form submitted successfully',
                padding: '10px 20px',
            });
        } else {
        }
    }, [formStatus]);

    return (
        <div className="mb-5">
            <Formik initialValues={userForm} validationSchema={submitForm4} onSubmit={handleData}>
                {({ errors, submitCount,isSubmitting, touched, values }) => (
                    <Form className="space-y-5">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="firstname">{t('first_name')}</label>
                                <Field name="firstname" type="text" id="firstname" placeholder={t('first_name')} className="form-input" />

                                {submitCount ? errors.firstname ? <div className="mt-1 text-danger">{errors.firstname}</div> : <div className="mt-1 text-success"></div> : ''}
                            </div>

                            <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="fullName">{t('last_name')}</label>
                                <Field name="lastname" type="text" id="lastname" placeholder={t('last_name')} className="form-input" />

                                {submitCount ? errors.lastname ? <div className="mt-1 text-danger">{errors.lastname}</div> : <div className="mt-1 text-success"></div> : ''}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            <div className={`md:col-span-2 ${submitCount ? (errors.phone ? 'has-error' : 'has-success') : ''}`}>
                                <label htmlFor="customPhon">{t('phone')}</label>
                                <Field name="phone" type="text" id="phone" placeholder={t('phone')} className="form-input" />

                                {submitCount ? errors.phone ? <div className="mt-1 text-danger">{errors.phone}</div> : <div className="mt-1 text-success"></div> : ''}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            <div className={`md:col-span-2 ${submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}`}>
                                <label htmlFor="customEmail">{t('email')}</label>
                                <Field name="email" type="email" id="email" placeholder={t('email')} className="form-input" />

                                {submitCount ? errors.email ? <div className="mt-1 text-danger">{errors.email}</div> : <div className="mt-1 text-success"></div> : ''}
                            </div>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="btn btn-primary !mt-6">
                            Submit Form
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UserForm;
