'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Exo, DM_Serif_Display } from "next/font/google";

const exo = Exo({ subsets: ['latin'], variable: '--font-exo' });
const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dmserif',
  display: 'swap',
});

const user = null;
const auth = {};
const signOut = () => console.log('Signing out...');
const signin = () => console.log('Signing in...');
const isChatRoute = true; // Update with actual logic if needed

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isHelpMenuOpen, setIsHelpMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const userMenuRef = useRef(null);
  const helpMenuRef = useRef(null);

  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);
  const toggleHelpMenu = () => setIsHelpMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (helpMenuRef.current && !helpMenuRef.current.contains(event.target)) {
        setIsHelpMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center p-5 sticky top-0 bg-black z-50">
      <Link href="/" className="flex items-center ml-4 no-underline">
        <img src="/TravelLogo.png" alt="PlanMyTrip-Logo" className="w-8 h-auto" />
        <h1 style={{ fontFamily: 'Exo, sans-serif' }} className="text-lg md:text-xl font-semibold text-white ml-2">
          PlanMyTrip<span className="text-blue-500">.</span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div style={{ fontFamily: 'DM_Serif_Display, sans-serif' }} className="hidden md:flex justify-center items-center gap-7 flex-1 mr-14">
        {[
          { name: 'Home', path: '/' },
          { name: 'Travel Planning', path: '/planning' },
        ].map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`text-md font-semibold ${
              pathname === link.path ? 'text-white' : 'text-gray-400 hover:text-white'
            } transition`}
          >
            {link.name}
          </Link>
        ))}

        {/* Help Menu */}
        <div ref={helpMenuRef} className="relative">
          <button
            className="text-sm font-semibold flex text-gray-400 hover:text-white transition focus:outline-none"
            onClick={toggleHelpMenu}
          >
            Help
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="22"
              fill="currentColor"
              className="bi bi-chevron-down ml-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 011.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708"
              />
            </svg>
          </button>
          {isHelpMenuOpen && (
            <div className="absolute top-10 left-0 bg-black/60 backdrop-blur-lg shadow-xl rounded-2xl z-50 p-4 w-40 border border-gray-700">
              <ul className="space-y-2">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Contact Us', path: '/contact' },
                  { name: 'Help Center', path: '/help-center' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} className="block text-white text-base hover:text-cyan-400 transition">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Desktop User Menu */}
      <div ref={userMenuRef} className="relative hidden md:inline-block">
        <div style={{ fontFamily: 'Ancizar Serif, sans-serif' }} className="flex items-center space-x-4">
          {isChatRoute && (
            user ? (
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition"
                onClick={() => signOut(auth)}
              >
                Sign Out
              </button>
            ) : (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                onClick={signin}
              >
                Sign In
              </button>
            )
          )}
          <button
            className="text-gray-400 hover:text-blue-400 text-2xl cursor-pointer flex items-center focus:outline-none"
            onClick={toggleUserMenu}
          >
            <i className="bi bi-person-fill"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 011.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708"
              />
            </svg>
          </button>
        </div>

        {isUserMenuOpen && (
          <div className="absolute top-12 right-0 bg-black/60 backdrop-blur-lg shadow-xl rounded-2xl z-50 p-4 w-48 border border-gray-700">
            <ul className="space-y-2">
              <li><Link href="/contact" className="block text-white text-base hover:text-blue-500">Contact Us</Link></li>
              <li><Link href="/help-center" className="block text-white text-base hover:text-blue-500">Help Center</Link></li>
              <li><Link href="/privacypolicy" className="block text-white text-base hover:text-blue-500">Privacy Policy</Link></li>
              <li><Link href="/termsandconditons" className="block text-white text-base hover:text-blue-500">Terms & Conditions</Link></li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div ref={mobileMenuRef} className="relative md:hidden">
        <button
          className="text-gray-400 text-2xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <i className="bi bi-list"></i>
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg z-50 p-4 w-56">
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Travel Planning', path: '/planning' },
                { name: 'About', path: '/about' },
                { name: 'Contact Us', path: '/contact' },
                { name: 'Help Center', path: '/help-center' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`block text-base ${pathname === link.path ? 'text-blue-500' : 'text-black hover:text-blue-500'} transition`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {isChatRoute && (
              user ? (
                <button
                  className="px-6 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition mt-4 w-full"
                  onClick={() => {
                    signOut(auth);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign Out
                </button>
              ) : (
                <button
                  className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition mt-4 w-full"
                  onClick={() => {
                    signin();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Sign In
                </button>
              )
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
