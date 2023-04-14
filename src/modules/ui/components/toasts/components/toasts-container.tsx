import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
import React from 'react';

import { useToastContext } from '../context/toast-context';
import { Toast } from './toast';

export const ToastsContainer: React.FC = () => {
  const { state } = useToastContext();

  return (
    <LazyMotion features={domAnimation}>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex flex-col">
        <ul className="mx-auto max-w-xl">
          <AnimatePresence initial={false}>
            {state.toasts &&
              state.toasts.map((toast) => {
                return <Toast key={toast.id} toast={toast} />;
              })}
          </AnimatePresence>
        </ul>
      </div>
    </LazyMotion>
  );
};
