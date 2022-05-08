import PropTypes from 'prop-types';
import defaultImg from 'img/default-image.jpg'
import styles from './socialNetworkProfile.module.css'

export function Profile({
    username = 'unknown',
    tag = 'unknown',
    location = 'unknown',
    avatar = defaultImg,
    stats })
{
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img src={avatar} alt={username} className={styles.avatar}/>
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                <li className={styles.statsItem}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers} </span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.statsItem}>
                    <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf( PropTypes.number)
}

