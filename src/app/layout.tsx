import type { Metadata } from "next";
import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript } from '@mantine/core';
import {Open_Sans} from 'next/font/google';
import './globals.css'
import Shell from "./shell";
import '@mantine/carousel/styles.css';



const openSans = Open_Sans({
  weight: ['300','400', '500', '700'],
  display: 'swap',
  variable: '--open_sans',
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "DUU VisArts" ,
  description: "DUU VisArts is a student-run organization at Duke University that provides resources and opportunities for students interested in visual arts. We host workshops, exhibitions, and other events to foster a community of artists and art enthusiasts.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.className}`}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
