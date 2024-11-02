import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-[#171717] px-6 py-3 lg:px-10'>
      <Link href="/" className="flex items-center gap-1">
        <Image 
          src="/icons/logo.svg"
          width={28}
          height={28}
          alt="LearnX logo"
          className='max-sm: size-10'
        />
        <p className="text-[22px] font-extrabold text-white max-sm:hidden">LearnX Talky</p>      
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;