import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { portfolioData } from '@/data/portfolio';

// Define the shape of the context data
// We'll use the specific types from portfolio.ts to ensure type safety
type PortfolioData = typeof portfolioData;

interface PortfolioContextType {
    data: PortfolioData;
    updateData: (section: keyof PortfolioData, payload: any) => void;
    updateNestedData: (path: string[], value: any) => void;
    addItem: (section: keyof PortfolioData | string, item: any) => void;
    removeItem: (section: keyof PortfolioData | string, index: number) => void;
    updateItemInArray: (section: keyof PortfolioData | string, index: number, item: any) => void;
    resetToDefaults: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    // Initialize state from local storage or default data
    const [data, setData] = useState<PortfolioData>(() => {
        const savedData = localStorage.getItem('portfolioData_v2');
        return savedData ? JSON.parse(savedData) : portfolioData;
    });

    // Save to local storage whenever data changes
    useEffect(() => {
        localStorage.setItem('portfolioData_v2', JSON.stringify(data));
    }, [data]);

    const updateData = (section: keyof PortfolioData, payload: any) => {
        setData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                ...payload,
            },
        }));
    };

    // Helper to deep update based on path ['about', 'heading1']
    const updateNestedData = (path: string[], value: any) => {
        setData((prev) => {
            const newData = JSON.parse(JSON.stringify(prev)); // Deep clone for simplicity
            let current = newData;
            for (let i = 0; i < path.length - 1; i++) {
                current = current[path[i]];
            }
            current[path[path.length - 1]] = value;
            return newData;
        });
    };

    const addItem = (sectionPath: string, item: any) => {
        setData((prev) => {
            const newData = JSON.parse(JSON.stringify(prev));
            const path = sectionPath.split('.');
            let current = newData;
            for (let i = 0; i < path.length; i++) {
                current = current[path[i]];
            }
            if (Array.isArray(current)) {
                current.push(item);
            }
            return newData;
        });
    };

    const removeItem = (sectionPath: string, index: number) => {
        setData((prev) => {
            const newData = JSON.parse(JSON.stringify(prev));
            const path = sectionPath.split('.');
            let current = newData;
            for (let i = 0; i < path.length; i++) {
                current = current[path[i]];
            }
            if (Array.isArray(current)) {
                current.splice(index, 1);
            }
            return newData;
        });
    };

    const updateItemInArray = (sectionPath: string, index: number, updatedItem: any) => {
        setData((prev) => {
            const newData = JSON.parse(JSON.stringify(prev));
            const path = sectionPath.split('.');
            let current = newData;
            for (let i = 0; i < path.length; i++) {
                current = current[path[i]];
            }
            if (Array.isArray(current)) {
                current[index] = { ...current[index], ...updatedItem };
            }
            return newData;
        });
    };

    const resetToDefaults = () => {
        setData(portfolioData);
        localStorage.removeItem('portfolioData_v2');
    };

    return (
        <PortfolioContext.Provider value={{ data, updateData, updateNestedData, addItem, removeItem, updateItemInArray, resetToDefaults }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error('usePortfolio must be used within a PortfolioProvider');
    }
    return context;
};
