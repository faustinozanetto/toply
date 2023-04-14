import React, { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import type { Toast, ToastContextState } from './reducer/types';
import { ToastActionType } from './reducer/types';

const initialState: ToastContextState = {
  state: { toasts: [] },
  dispatch: () => {},
};

const ToastContext = createContext<ToastContextState>(initialState);

type ToastProviderProps = {
  children: React.ReactNode;
};

/**
 * Hook that returns the toast context.
 * @returns The context if valid.
 */
export const useToastContext = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('Tried to use ThemeContext with no context avaiable!');
  return context;
};

/**
 * Hook that returns a function to create toasts.
 * @returns The function to create toast.
 */
export const useToast = () => {
  const { dispatch } = useToastContext();

  const toast = (toastData: Omit<Toast, 'id'>, duration: number = 3000) => {
    const toastId = Math.random().toString(12).substring(2, 10);
    dispatch({
      type: ToastActionType.ADD_TOAST,
      payload: {
        toast: { ...toastData, id: toastId },
      },
    });

    setTimeout(() => {
      dispatch({
        type: ToastActionType.REMOVE_TOAST,
        payload: {
          toast: toastId,
        },
      });
    }, duration);
  };

  return { toast };
};

export const ToastProvider: React.FC<ToastProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, {
    toasts: [],
  });

  return <ToastContext.Provider value={{ state, dispatch }}>{children}</ToastContext.Provider>;
};
