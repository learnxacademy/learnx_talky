import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import 'react-datepicker/dist/react-datepicker.css'

import { Toaster } from "@/components/ui/toaster"

const Poppins = localFont(  {
  src: [
    {
      path: './fonts/Poppins-Black.ttf',
      weight: '900',
      style: 'normal',
    },{
      path: './fonts/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },{
      path: './fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },{
      path: './fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },{
      path: './fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },{
      path: './fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },{
      path: './fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: "LearnX Talky",
  description: "Here your English Unlocks",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <ClerkProvider
          appearance={{
            layout: {
              logoImageUrl: '/icons/learnx-logo.svg',
              socialButtonsVariant: 'iconButton'
            },
            variables: {
              colorText: '#fff',
              colorPrimary: '#00cc36',
              colorBackground: '#1a1a1a',
              colorInputBackground: '#1e1e1e',
              colorInputText:'#fff'
            }
          }}
        >
        <body className={`${Poppins.className} bg-dark-2`}>{children}
          <Toaster />
        </body>  
      </ClerkProvider>
    </html>
  );
}
