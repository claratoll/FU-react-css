import { useState } from "react";
import workout1 from "../assets/img/workout1.png";
import workout2 from "../assets/img/workout2.png";
import workout3 from "../assets/img/workout3.png";
import workout4 from "../assets/img/workout4.png";
import workout5 from "../assets/img/workout5.png";
import "./gallery.css";
import Bordered from "./Bordered";

const Gallery = () => {
  const [columns, setColumns] = useState(2);

  let imagesClass = "images";

  switch (columns) {
    case 1:
      imagesClass += " one-column";
      break;
    case 2:
      imagesClass += " two-column";
      break;
    case 3:
      imagesClass += " three-column";
      break;
  }

  return (
    <div className="gallery">
      <Bordered>
        <section>
          <button onClick={() => setColumns(1)}>One Column</button>
          <button onClick={() => setColumns(2)}>Two Column</button>
          <button onClick={() => setColumns(3)}>Three Column</button>
        </section>
      </Bordered>

      <section className={imagesClass}>
        <img src={workout1} alt="workout 1" />
        <img src={workout2} alt="workout 2" />
        <img src={workout3} alt="workout 3" />
        <img src={workout4} alt="workout 4" />
        <img src={workout5} alt="workout 5" />
      </section>
    </div>
  );
};

export default Gallery;
