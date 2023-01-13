import { useState, useEffect } from "react";
import Form from "./Form";

export default function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [error, seterror] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div className="main-container">
      <Form
        user={user}
        change={handleChange}
        submit={handleSubmit}
        error={error}
      />
    </div>
  );
}
