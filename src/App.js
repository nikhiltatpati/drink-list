import React from "react";
import "./App.css";
import axios from "axios";
import data from "./data";
import image from "./picture";
import List from "./components/list";

const getBeerBrands = async () => {
  let config = {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Access-Control-Allow-Headers": "content-type",
    },
  };
  const data = await axios.get(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json",
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    }
  );
  return data.json();
};

function App() {
  const [beerBrands, setBeerBrands] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [start, setStart] = React.useState(1);
  //const [imageNumber, setImageNumber] = React.useState(-1);

  let imageNumber = -1;

  React.useEffect(() => {
    setBeerBrands(data);
  }, []);

  return (
    <div className="App">
      <h1>Beer Brand List</h1>
      <div class="ui input">
        <input
          type="text"
          placeholder="search.."
          onChange={(evt) => {
            setSearch(evt.target.value);
          }}
        />
      </div>

      <div
        style={{
          margin: 20,
        }}
      >
        {beerBrands
          .slice(start * 20 - 20, start * 20)
          .filter((item) =>
            item.name.toLowerCase().startsWith(search.toLowerCase())
          )
          .map((item) => {
            imageNumber = imageNumber === 4 ? 0 : imageNumber + 1;
            return <List value={item} img={image[imageNumber]} />;
          })}
      </div>
      <div>
        {start > 1 && (
          <i
            class="fas fa-arrow-left"
            style={{
              margin: 10,
            }}
            onClick={() => {
              setStart(start - 1);
            }}
          ></i>
        )}
        {start}
        <i
          class="fas fa-arrow-right"
          style={{
            margin: 10,
          }}
          onClick={() => {
            setStart(start + 1);
          }}
        ></i>
      </div>
    </div>
  );
}

export default App;
