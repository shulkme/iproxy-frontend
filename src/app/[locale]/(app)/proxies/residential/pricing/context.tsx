'use client';
import { PackageRecord } from '@/apis/packages/types';
import { useMap } from 'ahooks';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface CheckoutRecord extends PackageRecord {
  total_price: number;
}

export interface SkuRecord {
  product: CheckoutRecord;
  count: number;
}

const CheckoutContext = createContext<{
  skus: Map<string, SkuRecord>;
  setSku: (key: string, val: SkuRecord) => void;
  initSkus: (map: Map<string, SkuRecord>) => void;
  removeSku: (key: string) => void;
  resetSku: () => void;
  hasSku: (key: string) => boolean;
  getSku: (key: string) => SkuRecord | undefined;
  totalCount: number;
  formData?: Record<string, unknown>;
  setFormData: (formData: Record<string, unknown>) => void;
} | null>(null);

const CheckoutProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [
    _skus,
    {
      set: setSku,
      remove: removeSku,
      reset: resetSku,
      get: getSku,
      setAll: initSkus,
    },
  ] = useMap<string, SkuRecord>([]);

  const [formData, setFormData] = useState<Record<string, unknown>>({
    duration: 30,
    continent: 'all',
  });

  const skus = useMemo(() => {
    return new Map(Array.from(_skus).filter((f) => f[1].count > 0));
  }, [_skus]);

  const totalCount = useMemo(() => {
    return Array.from(skus.values()).reduce((sum, next) => {
      return sum + next.count;
    }, 0);
  }, [skus]);

  const hasSku = useCallback(
    (key: string) => {
      return Array.from(skus.keys()).find((f) => f === key) !== undefined;
    },
    [skus],
  );

  return (
    <CheckoutContext.Provider
      value={{
        skus,
        setSku,
        removeSku,
        resetSku,
        initSkus,
        getSku,
        hasSku,
        totalCount,
        formData,
        setFormData,
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
