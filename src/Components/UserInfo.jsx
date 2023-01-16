export default function UserInfo({
  login,
  bio,
  created,
  url,
  repos,
  followers,
  following,
  location,
  imgUrl,
}) {
  const year = created.toString().slice(0, 4);
  const month = created.toString().slice(5, 7);
  const day = created.toString().slice(8, 10);

  const date = new Date(year, month, day).toDateString();

  return (
    <div className="user-info">
      <div className="heading">
        <img src={imgUrl} alt="user image" />
        <div className="user-name-bio">
          <h1 className="user-name">{login}</h1>
          <h4 className="joined-date">{`Joined ${date}`}</h4>
        </div>
      </div>
      <h3 className="bio">{bio === null ? "No bio to display" : bio}</h3>
      <div className="stats">
        <div className="stat">
          <h4>Repos</h4>
          <span>{repos}</span>
        </div>
        <div className="stat">
          <h4>Followers</h4>
          <span>{followers}</span>
        </div>
        <div className="stat">
          <h4>Following</h4>
          <span>{following}</span>
        </div>
      </div>
    </div>
  );
}
