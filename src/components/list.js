export default function List({ value, img }) {
  return (
    <div className="ui cards">
      <div class="card">
        <div class="content">
          <img class="left floated mini ui image" alt="logo" src={img.image} />
          <div class="header">{value.name}</div>
          <div
            class="description"
            style={{
              textAlign: "left",
            }}
          >
            <b>Style</b>: {value.style}
          </div>
          <div
            class="description"
            style={{
              textAlign: "left",
            }}
          >
            <b>Abv</b>: {value.abv}
          </div>
          <div
            class="description"
            style={{
              textAlign: "left",
            }}
          >
            <b>Ounces</b>: {value.ounces}
          </div>
        </div>
      </div>
    </div>
  );
}
