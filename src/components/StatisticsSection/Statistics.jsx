import PropTypes from 'prop-types';
import styles from './statistics.module.css'

export function Statistics({data }) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>
            <ul className={styles.statList}>
                {data.map(({ id, label, percentage =0 }) => {
                    return(
                    <li className={styles.item} key={id}>
                            <span className={styles.label}>{label}</span>
                        <span className={styles.percentage}>{percentage}%</span>
                    </li>)
               })} 
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
      }))
}