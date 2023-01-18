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
  isDark,
}) {
  const year = created.toString().slice(0, 4);
  const month = created.toString().slice(5, 7);
  const day = created.toString().slice(8, 10);

  const date = new Date(year, month, day).toDateString();

  const lightModeStyleHeader = {
    color: isDark ? "#FFFFFF" : "#2B3442",
  };

  const lightModeStyleUserBody = {
    backgroundColor: isDark ? "#1E2A47" : "#FEFEFE",
  };

  return (
    <div style={lightModeStyleUserBody} className="user-info">
      <div className="heading">
        <img src={imgUrl} alt="user image" />
        <div className="user-name-bio">
          <h1 style={lightModeStyleHeader} className="user-name">
            {login}
          </h1>
          <h4
            style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
            className="joined-date"
          >{`Joined ${date}`}</h4>
        </div>
      </div>
      <h3 style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }} className="bio">
        {bio === null ? "No bio to display" : bio}
      </h3>
      <div
        style={{ backgroundColor: isDark ? "#141D2F" : " #F2F2F2" }}
        className="stats"
      >
        <div className="stat">
          <h4 style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}>Repos</h4>
          <span style={{ color: isDark ? "#FFFFFF" : "#2B3442" }}>{repos}</span>
        </div>
        <div className="stat">
          <h4 style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}>Followers</h4>
          <span style={{ color: isDark ? "#FFFFFF" : "#2B3442" }}>
            {followers}
          </span>
        </div>
        <div className="stat">
          <h4 style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}>Following</h4>
          <span style={{ color: isDark ? "#FFFFFF" : "#2B3442" }}>
            {following}
          </span>
        </div>
      </div>
      <div
        style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }}
        className="link-grid"
      >
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
          <a style={{ color: isDark ? "#FFFFFF" : "#4B6A9B" }} href={url}>
            {url}
          </a>
        </div>
        <div className="item">
          <img src={twitterIcon} />
          <h4>{twitter === null ? "Not Available" : twitter}</h4>
        </div>
      </div>
    </div>
  );
}
