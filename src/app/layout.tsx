import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

import '../styles/globals.css'

import { Footer } from '@/components/Footer'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={rubik.className}>
                <div className="w-full h-screen bg-gray-800 flex items-center justify-center flex-col">
                    <main className="w-full h-[calc(100vh-4rem)] p-4 flex items-center justify-center flex-col">
                        {children}
                    </main>

                    <Footer />
                </div>
            </body>
        </html>
    )
}
