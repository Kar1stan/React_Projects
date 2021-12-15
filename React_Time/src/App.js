import "./styles.css";

function doClick() {
  console.log("Clicked...");
}
function Test() {
  return (
    <button type="button" onClick={doClick}>
      Click me
    </button>
  );
}
export default function App(props) {
  return (
    <div className="App">
      <Test />
    </div>
  );
}
