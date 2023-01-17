import locationIcon from "../assets/icon-location.svg";
import companyIcon from "../assets/icon-company.svg";
import websiteLink from "../assets/icon-website.svg";
import twitterIcon from "../assets/icon-twitter.svg";

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
  company,
  twitter,
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
      <div className="link-grid">
        <div className="item">
          <img src={locationIcon} />
          <h4>{location === null ? "Not Available" : location}</h4>
        </div>
        <div className="item">
          <img src={companyIcon} />
          <h4>{company === null ? "Not Available" : company}</h4>
        </div>
        <div className="item">
          <img src={websiteLink} />
          <a href={url}>{url}</a>
        </div>
        <div className="item">
          <img src={twitterIcon} />
          <h4>{twitter === null ? "Not Available" : twitter}</h4>
        </div>
      </div>
    </div>
  );
}
