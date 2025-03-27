// src/contexts/NavbarContext.tsx
'use client'

import React, { createContext, useContext, useState } from 'react';

interface NavbarContextType {
    pageTitle: string;
    setPageTitle: (title: string) => void;
}

const NavbarContext = createContext<NavbarContextType>({
    pageTitle: 'Home',
    setPageTitle: () => {},
});

export function NavbarProvider({ children }: { children: React.ReactNode }) {
    const [pageTitle, setPageTitle] = useState('Home');

    return (
        <NavbarContext.Provider value={{ pageTitle, setPageTitle }}>
            {children}
        </NavbarContext.Provider>
    );
}

export function useNavbar() {
    return useContext(NavbarContext);
}
