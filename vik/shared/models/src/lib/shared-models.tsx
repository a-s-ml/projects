import styles from './shared-models.module.css'

/* eslint-disable-next-line */
export interface SharedModelsProps {}

export function SharedModels(props: SharedModelsProps) {
	return (
		<div className={styles['container']}>
			<h1>Welcome to SharedModels!</h1>
		</div>
	)
}

export default SharedModels
