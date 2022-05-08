import PropTypes from 'prop-types'
import styles from './transactionHistory.module.css'

export function TransactionHistory({ transactions }) {
    const headTitles = Object.keys(transactions[0]).filter(item => item !== 'id');
    return (
        <table className={styles.table}>
            <thead className={styles.tHead}>
                <tr>
                    {headTitles.map(headTitle => {
                        return <th key={headTitle} className={styles.headTitle}>{headTitle}</th>;
                    })}
                </tr>
            </thead>
            <tbody >
                {transactions.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={styles.data}>
                            <td >{type}</td>
                            <td >{amount}</td>
                            <td >{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}

