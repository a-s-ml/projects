import styles from './fsf.module.css';

/* eslint-disable-next-line */
export interface FsfProps {}

export function Fsf(props: FsfProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Fsf!</h1>
    </div>
  );
}

export default Fsf;
