import search from "../assets/icon-search.svg";

export default function Form({ change, user, submit, error, isDark }) {
  const errorStyle = {
    color: error ? "red" : "white",
    backgroundColor: isDark ? "#1E2A47" : "#FEFEFE",
  };

  const lightModeStyleInput = {
    color: isDark ? "#FFFFFF" : "#4B6A9B",
    backgroundColor: isDark ? "#1E2A47" : "#FEFEFE",
  };

  const lightModeStyleForm = {
    backgroundColor: isDark ? "#1E2A47" : "#FEFEFE",
  };
  return (
    <form style={lightModeStyleForm} onSubmit={(e) => submit(e)}>
      <div className="icon-input">
        <img src={search} alt="search icon" />

        <input
          style={error ? errorStyle : lightModeStyleInput}
          placeholder="Search GitHub Username..."
          type="text"
          onChange={(e) => change(e)}
          name="userName"
          value={user}
        />
      </div>
      <button>Search</button>
    </form>
  );
}
