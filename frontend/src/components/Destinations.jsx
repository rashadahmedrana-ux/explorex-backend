import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Destinations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/destinations")
      .then((res) => setDestinations(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center mb-4">Popular Destinations</h2>

      <div className="row">
        {destinations.map((d) => (
          <div className="col-md-3 mb-4" key={d._id}>
            <div className="card h-100 shadow">

              {/* IMAGE */}
              <img
                src={d.image}
                alt={d.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              {/* BODY */}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{d.title}</h5>
                <p className="card-text">{d.description}</p>

                {/* EXPLORE BUTTON */}
                <Link
                  to={`/destinations/${d._id}`}
                  className="btn btn-primary mt-auto"
                >
                  Explore
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
