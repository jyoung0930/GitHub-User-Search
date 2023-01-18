import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";

export default function Header({ isDark, setDarkMode }) {
  const modeStyle = {
    color: isDark ? "#FFFFFF" : "#90A4D4",
  };
  const headerStyle = {
    color: isDark ? "#FFFFFF" : "#222731",
  };
  return (
    <div className="header" style={headerStyle}>
      <h1 className="title">Devfinder</h1>
      <div className="mode" style={modeStyle} onClick={setDarkMode}>
        <h2>{isDark ? "LIGHT" : "DARK"}</h2>
        <img src={isDark ? sun : moon} alt="icon" />
      </div>
    </div>
  );
}
