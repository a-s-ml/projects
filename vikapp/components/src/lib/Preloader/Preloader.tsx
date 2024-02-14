import styles from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className="flex items-center justify-center w-full h-full my-auto">
      <span className={styles.loader} />
    </div>
  );
};
