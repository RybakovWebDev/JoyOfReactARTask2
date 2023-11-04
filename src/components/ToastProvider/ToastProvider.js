import React, { createContext, useEffect, useState } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const newToast = (radio, message) => {
    const nextToasts = JSON.parse(JSON.stringify(toasts));
    nextToasts.push({ variant: radio, message, id: crypto.randomUUID() });
    setToasts(nextToasts);
  };

  const dismissToast = (id) => {
    const nextToasts = JSON.parse(JSON.stringify(toasts));
    setToasts(nextToasts.filter((t) => t.id !== id));
  };

  const dismissAll = (e) => {
    e.key === "Escape" && setToasts([]);
  };

  useEscapeKey(dismissAll);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        newToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
