import { useState, useEffect } from "react";
import UserInfo from "./UserInfo";
import Form from "./Form";
import Header from "./Header";

export default function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState({
    avatar_url: "https://avatars.githubusercontent.com/u/18667658?v=4",
    followers: 1,
    following: 0,
    html_url: "https://github.com/octacat",
    login: "octacat",
    bio: null,
    created_at: "2016-04-25T20:47:18Z",
    public_repos: 0,
    url: "https://api.github.com/users/octacat",
    company: null,
    twitter_username: null,
  });
  const [error, seterror] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // Update User
  useEffect(() => {
    fetch(`https://api.github.com/users/${user === "" ? "octacat" : user}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Not Found") {
          setUser("No Results");
          seterror(true);
        } else {
          setData(data);
          seterror(false);
        }
      });
  }, [submitted]);

  console.log(user);
  console.log(data);
  console.log(error);

  // Set user on every input change
  function handleChange(e) {
    setUser(e.target.value);
  }
  // Removes default form behavior and updates Sumbmitted
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted((prev) => !prev);
  }

  //  Set dark mode
  function handleDark() {
    setIsDark((prev) => !prev);
  }
  console.log(isDark);
  return (
    <div className="main-container">
      <Header isDark={isDark} setDarkMode={handleDark} />
      <Form
        user={user}
        change={handleChange}
        submit={handleSubmit}
        error={error}
      />
      <UserInfo
        login={data.login}
        bio={data.bio}
        created={data.created_at}
        url={data.html_url}
        repos={data.public_repos}
        followers={data.followers}
        following={data.following}
        location={data.location}
        imgUrl={data.avatar_url}
        company={data.company}
        twitter={data.twitter_username}
      />
    </div>
  );
}
