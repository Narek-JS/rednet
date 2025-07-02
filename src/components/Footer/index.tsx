'use client';

import Link from 'next/link';
import { Logo } from '../UI';
import {
  Facebook,
  Github,
  Linkedin,
  DribbbleIcon,
  NotepadText,
  X as TwitterX,
} from 'lucide-react';

const socials = [
  { icon: TwitterX, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Github, href: '#' },
  { icon: DribbbleIcon, href: '#' },
  { icon: NotepadText, href: '#' },
];

const titles = ['Title', 'Title', 'Title', 'Title', 'Title', 'Title'];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2">
              <Logo fill="white" />
            </div>
            <p className="mt-4 text-[#9CA3AF]">Text about Rednet</p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[#9CA3AF] font-semibold">
              {titles.map((title, idx) => (
                <Link key={idx} href="#" className="hover:text-white transition">
                  {title}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-full max-w-[200px]" />
        </div>

        <div className="border-t border-[#262626] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-200">© 2024 Rednet. All rights reserved.</p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            {socials.map(({ icon: Icon, href }, idx) => (
              <Link key={idx} href={href} aria-label={`Social ${idx}`}>
                <Icon className="w-5 h-5 text-gray-200 hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
