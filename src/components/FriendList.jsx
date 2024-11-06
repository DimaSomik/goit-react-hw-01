import css from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <div className={css.container}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.cardName}>{name}</p>
            <p className={isOnline ? css.isOnline : css.isOffline}>
                {isOnline 
                ? "Online" 
                : "Offline" 
                }
            </p>
        </div>
    );
};

const FriendList = ({friends}) => {
    return (
        <ul className={css.listContainer}>
            {friends.map((friend) => {
                return <li key={friend.id}>
                    <FriendListItem 
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    />
                </li>
            })}
        </ul>
    );
};

export default FriendList;