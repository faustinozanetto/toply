import React from 'react';

import { useToastContext } from '../context/toast-context';
import { Toast } from './toast';

export const ToastsContainer: React.FC = () => {
  const { state } = useToastContext();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col">
      <ul className="mx-auto max-w-xl">
        {state.toasts &&
          state.toasts.map((toast) => {
            return <Toast key={toast.id} toast={toast} />;
          })}
      </ul>
    </div>
  );
};
