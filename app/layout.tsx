import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Péter Dobi - Full-Stack Developer Portfolio',
  description:
    'Portfolio of Peter Dobi, a motivated full-stack developer specializing in JavaScript, Node.js, Express, React, MySQL, and C#. Discover projects, skills, and contact information.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.ico',
  },
  keywords: [
    'Peter Dobi',
    'Portfolio',
    'Full-Stack Developer',
    'JavaScript',
    'Node.js',
    'Express',
    'React',
    'MySQL',
    'C#',
    'Web Development',
    'Software Developer',
    'TypeScript',
  ],
  authors: [{ name: 'Peter Dobi' }],
  creator: 'Peter Dobi',
  openGraph: {
    title: 'Peter Dobi - Full-Stack Developer Portfolio',
    description:
      'Explore the projects and skills of Péter Dobi, a full-stack developer passionate about building modern, scalable applications.',
    url: 'https://skaikru-portfolio.vercel.app',
    siteName: 'Péter Dobi Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute={'class'} defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
      <Toaster richColors />
    </html>
  );
}
