import cn from 'classnames';
import backImage from '../../assets/bg-card-back.png';
import frontImage from '../../assets/bg-card-front.png';
import { CardImage } from '../CardImage';
import styles from './Form.module.scss';

// interface FormValues {
//   cardholderName: string;
//   cardNumber: string;
//   expireDateMonth: string;
//   expireDateYear: string;
//   cardCvc: string;
// }

export const BaseForm = () => {
  const containerClasses = cn(styles.form__formHeader__container, 'container');

  return (
    <form className={styles.form} autoComplete="off">
      <header className={styles.form__formHeader}>
        <div className={containerClasses}>
          <div className={`${styles.form__image} ${styles.imageBack}`}>
            <CardImage url={backImage} />
          </div>
          <div className={`${styles.form__image} ${styles.imageFront}`}>
            <CardImage url={frontImage} />
          </div>
        </div>
      </header>
      <section className="form__fieldsBlock"></section>
    </form>
  );
};
