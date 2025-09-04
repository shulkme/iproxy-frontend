import React, { createContext, useContext, useState } from 'react';

const DashboardContext = createContext<{
  currentTab: string;
  setCurrentTab: (tab: string) => void;
} | null>(null);

const DashboardProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<string>('isp');
  return (
    <DashboardContext.Provider
      value={{
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};

export { DashboardProvider, useDashboard };
