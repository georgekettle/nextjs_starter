'use client';

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useAuth } from '@/lib/auth'
import { Logo } from '@/components/logo';

export default function Navbar() {
  const { user, signOut } = useAuth()

  return (
    <nav className="fixed top-0 inset-x-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          <div className="flex gap-4">
            {user ? (
              <Button 
                variant="outline"
                onClick={() => signOut()}
              >
                Sign out
              </Button>
            ) : (
              <>
                <Button 
                  variant="outline"
                  asChild
                >
                  <Link href="/auth/login">
                    Sign in
                  </Link>
                </Button>
                <Button
                  asChild
                >
                  <Link href="/auth/signup">
                    Sign up
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 