import "./App.css";
import { Chart, Check, Grid, Header } from "./components";

function App() {
  const data = [
    { name: "10/02/25", study: 3, job: 2 },
    { name: "11/02/25", study: 2, job: 3 },
    { name: "12/02/25", study: 3, job: 4 },
    { name: "13/02/25", study: 6, job: 3 },
    { name: "14/02/25", study: 5, job: 2 },
    { name: "15/02/25", study: 1, job: 9 },
    { name: "16/02/25", study: 4, job: 4 },
  ];

  return (
    <>
      <Header />
      <Grid data="data teste" />
      <div style={{display: "flex"}}>
        <Chart data={data} />
        <Check />
      </div>
    </>
  );
}

export default App;
