// src/app/page.tsx
'use client'

import Home from '@/components/Home/Home'
import { useNavbar } from '@/contexts/NavbarContext';
import { useEffect } from 'react';

export default function Page() {
  const { setPageTitle } = useNavbar();

  useEffect(() => {
    setPageTitle('Home');
  }, [setPageTitle]);

  return <Home />;
}
