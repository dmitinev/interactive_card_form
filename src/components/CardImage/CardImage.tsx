import { FC } from 'react';
import cardLogo from '../../assets/card-logo.svg';
import styles from './CardImage.module.scss';

interface CardImageProps {
  url: string;
  back?: boolean;
}

export const CardImage: FC<CardImageProps> = ({ url, back }) => {
  return (
    <div className={styles.card}>
      <img src={url} alt="credit card" className={styles.card__image} />
      {!back && (
        <img className={styles.card__logo} src={cardLogo} alt="card logo" />
      )}
      {!back && (
        <div className={styles.card__number}>
          0000&nbsp;0000&nbsp;0000&nbsp;0000
        </div>
      )}
      {!back && (
        <div className={styles.card__holderInfo}>
          <div className={styles.card__holderInfo__name}>JANE APPLESEED</div>
          <div className={styles.card__holderInfo__validThru}>02/22</div>
        </div>
      )}
      {back && <div className={styles.card__cvc}>123</div>}
    </div>
  );
};
