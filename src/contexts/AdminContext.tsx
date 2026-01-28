import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
    isAdmin: boolean;
    enableAdmin: () => void;
    disableAdmin: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    const enableAdmin = () => setIsAdmin(true);
    const disableAdmin = () => setIsAdmin(false);

    return (
        <AdminContext.Provider value={{ isAdmin, enableAdmin, disableAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (context === undefined) {
        throw new Error('useAdmin must be used within an AdminProvider');
    }
    return context;
};
