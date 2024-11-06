import css from './Profile.module.css';

const Profile = ({name, tag, location, image, stats}) => {
    return (
        <div className={css.container}>
            <div className={css.secondContainer}>
                <img
                className={css.imageCircle}
                src={image}
                alt='User avatar'
                />
                <p className={css.nameParagraph}>{name}</p>
                <p className={css.tagParagraph}>@{tag}</p>
                <p className={css.locationParagraph}>{location}</p>
            </div>

            <ul className={css.statsList}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;