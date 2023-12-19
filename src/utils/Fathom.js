'use client'
import { useEffect } from 'react'
import { load, trackPageview } from 'fathom-client'
import { usePathname } from 'next/navigation'

export default function Fathom() {
  const pathname = usePathname();
  useEffect(() => {
    load('PUUZZITA', {
      includedDomains: ['kryptonum.eu'],
      spa: 'auto',
    })
    trackPageview()
  }, [pathname, searchParams])
  return null;
}