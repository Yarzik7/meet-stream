import 'modern-normalize/modern-normalize.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import App from '@/components/App/App';

import './globals.css';
import css from './page.module.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'MeetStream',
  description: 'MeetStream',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={css.wrapper}>
          <App>{children}</App>
        </div>
      </body>
    </html>
  );
}
