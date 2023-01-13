export default function Form({ change, user, submit }) {
  return (
    <form onSubmit={(e) => submit(e)}>
      <div className="icon-input">
        <i className="fa fa-search"></i>
        <input
          placeholder="Search GitHub Username..."
          type="text"
          onChange={(e) => change(e)}
          name="userName"
          value={user}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
