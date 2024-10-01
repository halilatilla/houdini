import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-6 sm:py-8 px-4 sm:px-6 border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm">
            &copy; 2024 Houdini Swap. All rights reserved.
          </p>
        </div>
        <nav
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
          aria-label="Footer Navigation"
        >
          <Button variant="link" asChild className="text-sm">
            <Link href="/privacy">Privacy Policy</Link>
          </Button>
          <Button variant="link" asChild className="text-sm">
            <Link href="/terms">Terms of Service</Link>
          </Button>
          <Button variant="link" asChild className="text-sm">
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </footer>
  );
}
