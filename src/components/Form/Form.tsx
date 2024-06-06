import cn from 'classnames';
import { Field, Form, withFormik } from 'formik';
import backImage from '../../assets/bg-card-back.png';
import frontImage from '../../assets/bg-card-front.png';
import { CardImage } from '../CardImage';
import styles from './Form.module.scss';

interface FormValues {
  cardholderName: string;
  cardNumber: string;
  expireDateMonth: string;
  expireDateYear: string;
  cardCvc: string;
}

export const BaseForm = () => {
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
  handleSubmit: (values) => {
    console.log(values);
  },
})(BaseForm);
