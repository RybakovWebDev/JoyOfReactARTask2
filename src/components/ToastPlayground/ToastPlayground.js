import React, { useContext, useEffect, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";
import { ToastContext } from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = useState("");
  const [radio, setRadio] = useState("notice");
  const { newToast } = useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>

      {/* {showToast && <Toast type={radio} message={message} dismiss={dismissToast} />} */}

      <ToastShelf radio={radio} message={message} />
      <form
        className={styles.controlsWrapper}
        onSubmit={(e) => {
          e.preventDefault();
          newToast(radio, message);
          setMessage("");
        }}
      >
        <div className={styles.row}>
          <label htmlFor='message' className={styles.label} style={{ alignSelf: "baseline" }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div role='radiogroup' className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((v) => {
              const variant = `variant-${v}`;
              return (
                <label key={variant} htmlFor={variant}>
                  <input
                    id={variant}
                    type='radio'
                    name='variant'
                    value={v}
                    checked={radio === v}
                    onChange={(e) => setRadio(e.currentTarget.value)}
                  />
                  {v}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
