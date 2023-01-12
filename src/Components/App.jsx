import { useState, useEffect } from "react";
import Form from "./Form";

export default function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Update User
  useEffect(() => {
    fetch(`https://api.github.com/users/${user === "" ? "octacat" : user}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [submitted]);

  console.log(data);

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
    <div>
      <h1>Hello World</h1>
      <Form user={user} change={handleChange} submit={handleSubmit} />
    </div>
  );
}
