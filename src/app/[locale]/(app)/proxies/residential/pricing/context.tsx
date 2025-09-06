'use client';
import { getAllPackages } from '@/apis/packages';
import { PACKAGE_TYPE_ENUM } from '@/apis/packages/enums';
import { PackageRecord } from '@/apis/packages/types';
import { useRequest, useResetState } from 'ahooks';
import React, { createContext, useContext, useMemo } from 'react';

interface FormData {
  duration: number;
  packageId?: PackageRecord['id'];
}

const CheckoutContext = createContext<{
  packages?: PackageRecord[];
  loading?: boolean;
  formData?: FormData;
  setFormData: (formData: FormData) => void;
  currentPackage?: PackageRecord;
} | null>(null);

const CheckoutProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [formData, setFormData] = useResetState<FormData>({
    duration: 30,
    packageId: undefined,
  });
  const { data: packages, loading } = useRequest(async () => {
    return await getAllPackages({
      type: PACKAGE_TYPE_ENUM.RESIDENTIAL,
    }).then((res) => res.data);
  });

  const currentPackage = useMemo(() => {
    if (!formData?.packageId || !packages) return;
    return packages.find((f) => f.id === formData.packageId);
  }, [packages, formData]);

  return (
    <CheckoutContext.Provider
      value={{
        packages,
        loading,
        formData,
        setFormData,
        currentPackage,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within the CheckoutProvider');
  }
  return context;
};

export { CheckoutProvider, useCheckout };
