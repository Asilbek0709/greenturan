import "./globals.css";
import I18nProvider from "./components/I18nProvider";

import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],      // поддерживаемые символы
  weight: ['400', '600', '700'],  // Regular, Medium, Bold
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={openSans.className}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
