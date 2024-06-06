import cn from 'classnames';
import { Field, Form, FormikProps, withFormik } from 'formik';
import * as Yup from 'yup';
import backImage from '../../assets/bg-card-back.png';
import frontImage from '../../assets/bg-card-front.png';
import { CardImage } from '../CardImage';
import styles from './Form.module.scss';

export interface FormValues {
  cardholderName: string;
  cardNumber: number | string;
  expireDateMonth: number | string;
  expireDateYear: number | string;
  cardCvc: number | string;
}

export const BaseForm = ({ errors, touched }: FormikProps<FormValues>) => {
  const containerClassesHeader = cn(
    styles.form__formHeader__container,
    'container',
  );
  const containerClassesForm = cn(
    styles.form__fieldsBlock__container,
    'container',
  );

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
      <section className={styles.form__fieldsBlock}>
        <div className={containerClassesForm}>
          <div className={styles.form__formBlock}>
            <div className={styles.form__formBlock__field}>
              <label htmlFor="cardholderName">Cardholder's Name</label>
              <Field
                type="text"
                name="cardholderName"
                id="cardholderName"
                placeholder="e.g. Jane Appleseed"
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
              />
            </div>
            {errors.cardNumber && touched.cardNumber && (
              <div className={styles.formError}>Wrong format, numbers only</div>
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
      </section>
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
  handleSubmit: (values, { resetForm }) => {
    console.log(values);
    resetForm();
  },
})(BaseForm);
