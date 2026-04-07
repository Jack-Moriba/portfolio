import { useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

export interface ToastContextType {
  addToast: (message: string, type: ToastType, duration?: number) => void;
  removeToast: (id: string) => void;
}

let toastContext: ToastContextType | null = null;

export const setToastContext = (context: ToastContextType | null) => {
  toastContext = context;
};

export const getToastContext = () => toastContext;

export const useToast = () => {
  return {
    addToast: useCallback((message: string, type: ToastType = 'info', duration = 5000) => {
      toastContext?.addToast(message, type, duration);
    }, []),
    removeToast: useCallback((id: string) => {
      toastContext?.removeToast(id);
    }, [])
  };
};
