import styles from './CardImage.module.scss';

interface CardImageProps {
  url: string;
}

export const CardImage = ({ url }: CardImageProps) => {
  return <img src={url} alt="credit card" className={styles.cardImage} />;
};
