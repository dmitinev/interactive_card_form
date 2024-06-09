import { useFormikContext } from 'formik';
import { FC } from 'react';
import cardLogo from '../../assets/card-logo.svg';
import { FormValues } from '../Form';
import styles from './CardImage.module.scss';

interface CardImageProps {
  url: string;
  back?: boolean;
}

export const CardImage: FC<CardImageProps> = ({ url, back }) => {
  const { values } = useFormikContext<FormValues>();

  const formattedCardNumber = values.cardNumber
    .toString()
    .split(/(.{4})/g)
    .join(' ');

  return (
    <div className={styles.card}>
      <img src={url} alt="credit card" className={styles.card__image} />
      {!back && (
        <img className={styles.card__logo} src={cardLogo} alt="card logo" />
      )}
      {!back && (
        <div className={styles.card__number}>
          {formattedCardNumber.length === 0
            ? `1234 5678 9123 0000`
            : formattedCardNumber}
        </div>
      )}
      {!back && (
        <div className={styles.card__holderInfo}>
          <div className={styles.card__holderInfo__name}>
            {values.cardholderName.length === 0
              ? 'JANE APPLESEED'
              : values.cardholderName.toUpperCase()}
          </div>
          <div className={styles.card__holderInfo__validThru}>
            {values.expireDateMonth === '' ? '02' : values.expireDateMonth}/
            {values.expireDateYear === '' ? '22' : values.expireDateYear}
          </div>
        </div>
      )}
      {back && (
        <div className={styles.card__cvc}>
          {values.cardCvc === '' ? '123' : values.cardCvc}
        </div>
      )}
    </div>
  );
};
