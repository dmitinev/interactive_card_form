import cn from 'classnames';
import { Field, Form, FormikProps, withFormik } from 'formik';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import backImage from '../../assets/bg-card-back.png';
import frontImage from '../../assets/bg-card-front.png';
import { CardImage } from '../CardImage';
import { MSubmitDialog } from '../SubmitDialog';
import styles from './Form.module.scss';
export interface FormValues {
  cardholderName: string;
  cardNumber: number | string;
  expireDateMonth: number | string;
  expireDateYear: number | string;
  cardCvc: number | string;
}

export const BaseForm = ({
  errors,
  touched,
  submitCount,
}: FormikProps<FormValues>) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const containerClassesHeader = cn(
    styles.form__formHeader__container,
    'container',
  );
  const containerClassesForm = cn(
    styles.form__fieldsBlock__container,
    'container',
  );

  function isFormBeenSubmitted() {
    if (submitCount > 0) {
      setSubmitted(true);
    }
  }

  useEffect(() => {
    isFormBeenSubmitted();
  }, [submitCount]);

  return (
    <Form className={styles.form} autoComplete="off">
      <header className={styles.form__formHeader}>
        <div className={containerClassesHeader}>
          <div className={`${styles.form__image} ${styles.imageBack}`}>
            <CardImage url={backImage} back />
          </div>
          <div className={`${styles.form__image} ${styles.imageFront}`}>
            <CardImage url={frontImage} />
          </div>
        </div>
      </header>
      {!submitted && (
        <AnimatePresence>
          <motion.section
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4 }}
            data-testid="formFields"
            className={styles.form__fieldsBlock}
          >
            <div className={containerClassesForm}>
              <div className={styles.form__formBlock}>
                <div className={styles.form__formBlock__field}>
                  <label htmlFor="cardholderName">Cardholder's Name</label>
                  <Field
                    type="text"
                    name="cardholderName"
                    id="cardholderName"
                    placeholder="e.g. Jane Appleseed"
                    className={
                      errors.cardholderName && touched.cardholderName
                        ? styles.formErrorField
                        : ''
                    }
                  />
                </div>
                {errors.cardholderName && touched.cardholderName && (
                  <div className={styles.formError}>Can not be empty</div>
                )}
              </div>
              <div className={styles.form__formBlock}>
                <div className={styles.form__formBlock__field}>
                  <label htmlFor="cardNumber">Card Number</label>
                  <Field
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="e.g. 1234 5678 9123 0000"
                    className={
                      errors.cardNumber && touched.cardNumber
                        ? styles.formErrorField
                        : ''
                    }
                  />
                </div>
                {errors.cardNumber && touched.cardNumber && (
                  <div className={styles.formError}>
                    Wrong format, numbers only
                  </div>
                )}
              </div>
              <div className={styles.form__formBlock}>
                <div className={styles.form__rowBlock}>
                  <div className={styles.form__formBlock__rowField}>
                    <div className={styles.form__formBlock__field}>
                      <label htmlFor="expireDateMonth">EXP. DATE</label>
                      <Field
                        type="text"
                        name="expireDateMonth"
                        id="expireDateMonth"
                        placeholder="MM"
                        className={
                          errors.expireDateMonth && touched.expireDateMonth
                            ? styles.formErrorField
                            : ''
                        }
                      />
                    </div>
                    {errors.expireDateMonth && touched.expireDateMonth && (
                      <div className={styles.formError}>Can’t be blank</div>
                    )}
                  </div>
                  <div className={styles.form__formBlock__rowField}>
                    <div className={styles.form__formBlock__field}>
                      <label htmlFor="expireDateYear">(MM/YY)</label>
                      <Field
                        type="text"
                        name="expireDateYear"
                        id="expireDateYear"
                        placeholder="YY"
                        className={
                          errors.expireDateYear && touched.expireDateYear
                            ? styles.formErrorField
                            : ''
                        }
                      />
                    </div>
                    {errors.expireDateYear && touched.expireDateYear && (
                      <div className={styles.formError}>Can’t be blank</div>
                    )}
                  </div>
                  <div className={styles.form__formBlock__rowField}>
                    <div className={styles.form__formBlock__field}>
                      <label htmlFor="cardCvc">CVC</label>
                      <Field
                        type="text"
                        name="cardCvc"
                        id="cardCvc"
                        placeholder="e.g. 123"
                        className={
                          errors.cardCvc && touched.cardCvc
                            ? styles.formErrorField
                            : ''
                        }
                      />
                    </div>
                    {errors.cardCvc && touched.cardCvc && (
                      <div className={styles.formError}>Can’t be blank</div>
                    )}
                  </div>
                </div>
              </div>
              <button type="submit" className={styles.form__submit}>
                Confirm
              </button>
            </div>
          </motion.section>
        </AnimatePresence>
      )}
      {submitted && (
        <AnimatePresence>
          <MSubmitDialog
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
      )}
    </Form>
  );
};

export const FormikForm = withFormik<object, FormValues>({
  mapPropsToValues: () => {
    return {
      cardholderName: '',
      cardNumber: '',
      expireDateMonth: '',
      expireDateYear: '',
      cardCvc: '',
    };
  },
  enableReinitialize: false,
  validationSchema: () => {
    return Yup.object().shape({
      cardholderName: Yup.string().required('Can not be empty'),
      cardNumber: Yup.number()
        .required('Wrong format, numbers only')
        .integer('Wrong format, numbers only'),
      expireDateMonth: Yup.number()
        .required('Can’t be blank')
        .integer('Can’t be blank')
        .positive('Can’t be blank'),
      expireDateYear: Yup.number()
        .required('Can’t be blank')
        .integer('Can’t be blank')
        .positive('Can’t be blank'),
      cardCvc: Yup.number().required('Can’t be blank').integer(),
    });
  },
  handleSubmit: () => {},
})(BaseForm);
