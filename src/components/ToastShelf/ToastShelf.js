import React, { useContext } from "react";

import Toast from "../Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";

import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts, dismissToast } = useContext(ToastContext);
  return (
    <ol role='region' aria-live='polite' aria-label='Notification' className={styles.wrapper}>
      {toasts.map((t) => (
        <li key={t.id} className={styles.toastWrapper}>
          <Toast variant={t.variant} message={t.message} id={t.id} dismissToast={dismissToast}>
            Example error toast
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
