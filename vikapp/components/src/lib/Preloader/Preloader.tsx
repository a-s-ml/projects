import styles from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-full h-20">
      <span className={styles.loader} />
    </div>
  );
};
