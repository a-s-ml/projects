import styles from './Preloader.module.css';

export const Preloader = () => {
  return (
    <div className="flex items-center content-center justify-center w-full my-auto">
      <span className={styles.loader} />
    </div>
  );
};
