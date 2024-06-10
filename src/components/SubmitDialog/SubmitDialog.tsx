import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import successImg from '../../assets/icon-complete.svg';
import styles from './SubmitDialog.module.scss';

export const SubmitDialog = forwardRef<HTMLElement>(({}, ref) => {
  return (
    <section ref={ref} className={`${styles.submitDialog} container`}>
      <div className={styles.submitDialog__wrapper}>
        <img
          src={successImg}
          alt="success logo"
          className={styles.submitDialog__logo}
        />
        <h2 className={styles.submitDialog__title}>THANK YOU!</h2>
        <p className={styles.submitDialog__text}>
          We’ve added your card details
        </p>
        <button type="button" className={styles.submitDialog__button}>
          Continue
        </button>
      </div>
    </section>
  );
});

export const MSubmitDialog = motion(SubmitDialog);
