"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Wand } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background shadow-sm py-4 px-4 sm:px-6 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-semibold">
          <Link
            href="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
          >
            Houdini
            <Wand className="w-5 h-5 inline-block ml-1" />
          </Link>
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="pl-10 pr-4 py-2 bg-[#F5F5F7] dark:bg-gray-700 border-none rounded-full text-sm w-64 dark:text-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300 w-4 h-4" />
          </div>
          <nav
            className="hidden md:flex space-x-6"
            aria-label="Main Navigation"
          >
            <Button variant="ghost" asChild>
              <Link
                href="/dashboard"
                className="dark:text-gray-300 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                href="/how-it-works"
                className="dark:text-gray-300 dark:hover:text-white"
              >
                How it Works
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                href="/analytics"
                className="dark:text-gray-300 dark:hover:text-white"
              >
                Analytics
              </Link>
            </Button>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 dark:text-gray-300" />
          </Button>
          <ThemeToggle />
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white dark:bg-gray-800 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-semibold dark:text-white">Menu</h2>
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 dark:text-gray-300" />
            </Button>
          </div>
          <nav
            className="flex flex-col space-y-4 p-4"
            aria-label="Mobile Navigation"
          >
            <Button variant="ghost" asChild className="justify-start">
              <Link
                href="/dashboard"
                className="dark:text-gray-300 dark:hover:text-white"
              >
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link
                href="/how-it-works"
                className="dark:text-gray-300 dark:hover:text-white"
              >
                How it Works
              </Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link
                href="/analytics"
                className="dark:text-gray-300 dark:hover:text-white"
              >
                Analytics
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
