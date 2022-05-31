import NextNProgress from 'nextjs-progressbar'
import { NextSeo } from 'next-seo'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        //define useful head tags for SEO using Head component from next
        <>
            <NextSeo
                title="dailyQ - quotes mobile app"
                description="Browse, search thousands of insightful quotes."
                canonical="https://getdailyq.app"
                openGraph={{
                    url: 'https://getdailyq.app',
                    type: 'website',
                    title: 'dailyQ - daily quotes mobile app',
                    description: 'Browse, search thousands of insightful quotes',
                    images: [
                        {
                            url: 'https://github.com/Ethiel97/dailyq-landing_page/blob/master/assets/images/banner.png',
                            width: 1920,
                            height: 2420,
                            alt: 'Og Image Alt',
                            type: 'image/png',
                        },
                    ],
                    site_name: 'dailyQ',
                }}
                twitter={{
                    handle: '@enthusiastDev',
                    site: '@enthusiastDev',
                    cardType: 'summary_large_image',
                }}
                additionalLinkTags={[
                    {
                        rel: 'preconnect',
                        href: 'https://fonts.googleapis.com',
                        crossOrigin: true,
                    },
                    {
                        rel: 'preconnect',
                        href: 'https://fonts.gstatic.com',
                        crossOrigin: true,
                    },
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: '/ico.png',
                        sizes: '128X128',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '/ico.png',
                        sizes: '32X32',
                        type: "image/png"
                    },
                    {
                        rel: 'icon',
                        href: '/ico.png',
                        sizes: '16X16',
                        type: "image/png"
                    },
                ]}
            />

            <NextNProgress
                color="#ef4444"
                options={{ showSpinner: false }}
                height={2}
            />

            <div className="antialiased bg-body text-body font-body">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}