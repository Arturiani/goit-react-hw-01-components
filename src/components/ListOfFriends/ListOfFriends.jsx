import PropTypes from "prop-types";
import styles from './listOfFriends.module.css'

export function FriendList({friends }) {
    return (
        <section className={styles.friends}>
            <ul className={styles.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li className={styles.item} key={id}>
                            <span className={styles.status}>{isOnline? 'Online': 'Offline' }</span>
                            <img className={styles.avatar} src={avatar} alt={name} width="48" />
                            <p className={styles.name}>{ name}</p>
                        </li>
                    )
               })} 
            </ul>
        </section>
    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number,
      }))
}
