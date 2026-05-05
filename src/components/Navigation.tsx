'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-secondary-900 hover:text-primary-600 focus:outline-none"
        aria-label="メニュー"
        aria-expanded={isOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>

      {/* Navigation Menu */}
      <nav
        className={cn(
          'fixed md:static top-20 left-0 right-0 md:top-auto md:left-auto md:right-auto',
          'bg-[#fffaf1] md:bg-transparent',
          'hidden md:flex md:items-center md:justify-center',
          isOpen && 'flex flex-col',
          isOpen && 'z-40'
        )}
      >
        <ul className="w-full md:w-auto flex flex-col md:flex-row gap-0 md:gap-1 py-2 md:py-0">
          {mainNavigation.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  'block px-4 py-3 md:py-2',
                  'text-secondary-700 hover:text-primary-800',
                  'hover:bg-secondary-100 md:hover:bg-transparent',
                  'transition-colors',
                  'md:text-sm font-medium'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>

              {/* Dropdown Menu */}
              {item.children && item.children.length > 0 && (
                <ul className="z-50 md:absolute md:left-0 md:top-full md:hidden md:min-w-48 md:flex-col md:border md:border-secondary-200 md:bg-[#fffaf1] md:py-2 md:group-hover:flex">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className={cn(
                          'block px-4 py-3 md:py-2',
                          'text-secondary-700 hover:text-primary-800',
                          'hover:bg-secondary-100',
                          'transition-colors',
                          'text-sm'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
