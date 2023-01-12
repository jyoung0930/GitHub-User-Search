export default function Form({ change, user, submit }) {
  return (
    <form onSubmit={(e) => submit(e)}>
      <input
        placeholder="Search GitHub Username..."
        type="text"
        onChange={(e) => change(e)}
        name="userName"
        value={user}
      />
      <button>Submit</button>
    </form>
  );
}
