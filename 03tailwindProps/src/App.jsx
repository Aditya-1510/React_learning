import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Check Tailwind
      </h1>
      <Card userName="Aditya Pare" btnText="Visit here" />
      <Card userName="Chai aur Code" btnText="Click here" />
    </>
  );
}
export default App;
