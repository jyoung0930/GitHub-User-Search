export default function Form({ change, user, submit, error }) {
  const style = {
    color: error ? "red" : "white",
  };

  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="icon-input">
        <i className="fa fa-search fa-lg"></i>
        <input
          style={style}
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
