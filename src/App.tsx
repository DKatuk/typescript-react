import "./App.css";
import ChildComponent from "./components/ChildComponent";
import Employees from "./components/Employees";
import Greet from "./components/Greet";
import Layout from "./components/Layout";
import Status from "./components/Status";

function App() {
  //you don't need to define type of this array of objects
  const namesList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    { first: "Klark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];
  return (
    <div className="App">
      {/**If you forget to pass one prop, TypeScript will complain :) */}
      <Greet userName="Dilara" isLoggedIn={true} />
      <div style={{ margin: "10px" }}>
        <Employees names={namesList} />
      </div>
      <div style={{ margin: "10px" }}>
        <Status status={"error"} />
        {/**Shows you the possible string options as props, because we defined the type as union of string literals. */}
        <Layout>
          <ChildComponent />
        </Layout>
      </div>
    </div>
  );
}

export default App;
