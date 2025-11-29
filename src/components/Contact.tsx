import React, { useMemo, useState } from 'react';
import { Popup } from '../animation/Popup';
import { SlideLeft } from '../animation/Slide';
import emailjs from '@emailjs/browser';
import { Footer } from '../layout/Footer';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';
import { useSocialLinks } from '../hooks/useSocialLinks';
import { useApp } from '../contexts/AppContext';
import { Loader } from './Loader';
import toast from 'react-hot-toast';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const { t, i18n } = useTranslation();
    const socials = useSocialLinks();
    const { generalInfo } = useApp();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        try {
            setIsSubmitting(true);

            emailjs
                .sendForm(
                    import.meta.env.VITE_SERVICE_ID || '',
                    import.meta.env.VITE_TEMPLATE_ID || '',
                    form,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
                )
                .then(
                    (result) => {
                        setIsSubmitting(false);
                        toast.success('Message sent!', {
                            position: 'top-right',
                        });
                        form.reset();
                    },
                    (error) => {
                        toast.error(
                            'Something went wrong, please try again later',
                            {
                                position: 'top-right',
                            }
                        );
                        setIsSubmitting(false);
                    }
                );
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong, please try again later', {
                position: 'top-right',
            });
            setIsSubmitting(false);
        }
    };

    return (
        <section
            className={`h-auto contactMinHeight:h-auto lg:h-[92.8vh] bg-white dark:bg-gray-900 relative pb-10 ${
                i18n.language === 'ar' && 'font-arabic'
            }`}
            id="contact"
        >
            <div className="h-20 flex justify-center items-end ">
                <Popup
                    delay={0.5}
                    className="text-black font-semibold text-3xl sm:text-3xl dark:text-white"
                >
                    {t('contact.heading')}
                </Popup>
            </div>
            <div className="mt-10 max-w-maxScreen mx-auto sm:px-6 lg:px-8 px-5">
                <div className="w-full lg:w-1/2">
                    <SlideLeft delay={0.5}>
                        <h3 className="mb-3 lg:text-3xl text-2xl font-semibold text-blue-500">
                            {t('contact.connectHeading')}
                        </h3>
                    </SlideLeft>
                    <SlideLeft delay={0.7}>
                        <p className="text-gray-600 dark:text-gray-300 text-md lg:text-xl">
                            {t('contact.connectDescription')}
                        </p>
                    </SlideLeft>
                </div>
                <div className=" mt-10 flex flex-col lg:flex-row gap-8 lg:gap-0 contactMinHeight:mb-10 mb-10 lg:mb-0 ">
                    <div className="lg:w-1/2 2xl:pr-20 md:w-[90%] w-full">
                        <form onSubmit={sendEmail}>
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                                    {t('contact.form.nameLabel')}
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={t(
                                        'contact.form.namePlaceholder'
                                    )}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-8">
                                <label className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                                    {t('contact.form.emailLabel')}
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder={t(
                                        'contact.form.emailPlaceholder'
                                    )}
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 mt-8">
                                <label className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                                    {t('contact.form.messageLabel')}
                                </label>
                                <textarea
                                    name="message"
                                    className="bg-gray-700 border border-gray-300 text-white h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
                                    placeholder={t(
                                        'contact.form.messagePlaceholder'
                                    )}
                                    required
                                />
                            </div>
                            <div className="flex justify-between mt-2 flex-col sm:flex-row">
                                <div className="underline text-black dark:text-white">
                                    <a
                                        href={`mailto:${
                                            generalInfo?.email
                                                ? generalInfo?.email
                                                : 'manigoscarljohn@gmail.com'
                                        }`}
                                    >
                                        {t('contact.directEmail')}
                                    </a>
                                </div>
                                <button
                                    className="text-white bg-blue-500 px-4 py-3 w-40 rounded-md hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 mt-3"
                                    type="submit"
                                    value="Send"
                                    disabled={isSubmitting}
                                >
                                    {!isSubmitting ? (
                                        t('contact.form.submit')
                                    ) : (
                                        <div className="flex justify-center h-full">
                                            <Loader className="spinner h-full" />
                                        </div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col mt-5 text-start lg:text-end">
                        <div className="flex flex-col">
                            <p className="text-xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300">
                                {t('contact.form.emailLabel')}
                            </p>
                            <p className="mt-2 font-semibold text-blue-700 dark:text-blue-500 uppercase">
                                {generalInfo?.email
                                    ? generalInfo?.email
                                    : 'manigoscarljohn@gmail.com'}
                            </p>
                        </div>
                        <div className="flex flex-col mt-10">
                            <p className="mt-2 font-semibold text-blue-700 dark:text-blue-500 uppercase underline">
                                <a
                                    href={
                                        generalInfo?.scheduleLink
                                            ? generalInfo?.scheduleLink
                                            : import.meta.env.VITE_CALENDLYURL
                                    }
                                    target="_blank"
                                >
                                    {t('contact.scheduleLinkText')}
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-col mt-10">
                            <p className="text-xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300">
                                {t('contact.addressHeading')}
                            </p>
                            <p className="mt-2 font-semibold text-blue-700 dark:text-blue-500 uppercase">
                                <Trans
                                    i18nKey="contact.address"
                                    components={[<></>, <br />]}
                                />
                            </p>
                        </div>
                        <div className="flex flex-col mt-11">
                            <p className="text-xl sm:text-3xl font-bold text-gray-600 dark:text-gray-300">
                                {t('contact.socialsHeading')}
                            </p>
                            <div className="flex justify-start lg:justify-end gap-3 mt-3">
                                {socials.map((social) => (
                                    <div
                                        className="w-full h-full max-w-10 max-h-10"
                                        key={social.name}
                                    >
                                        <a
                                            href={social.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-black dark:text-white"
                                        >
                                            {social.icon}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
}
