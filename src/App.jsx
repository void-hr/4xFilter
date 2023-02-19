import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import { data } from "./components/Data";
function App() {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Filter />
      <Card data={data} />
    </>
  );
}

export default App;
