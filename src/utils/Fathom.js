'use client'
import { load, trackPageview } from 'fathom-client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Fathom() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    load('PUUZZITA', {
      includedDomains: ['kryptonum.eu'],
      spa: 'auto',
    })
    trackPageview()
  }, [pathname, searchParams])
  return null
}