import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
};