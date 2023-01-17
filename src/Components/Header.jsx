import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

export default function Header({ isDark, setDarkMode }) {
  const style = {
    color: isDark ? "#FFFFFF" : "#90A4D4",
  };
  return (
    <div className="header">
      <h1 className="title">Devfinder</h1>
      <div className="mode" style={style} onClick={setDarkMode}>
        <h2>{isDark ? "Light" : "Dark"}</h2>
        <img src={isDark ? sun : moon} alt="icon" />
      </div>
    </div>
  );
}
