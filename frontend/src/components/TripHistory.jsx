import axios from "axios";
import { useEffect, useState } from "react";

function TripHistory() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/trips/history", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setTrips(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Trips</h2>

      <div className="row">
        {trips.map((trip, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow">
              <img
                src={`http://localhost:5000${trip.destination.image}`}
                alt={trip.destination.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5>{trip.destination.title}</h5>
                <p className="text-muted">Date: {trip.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripHistory;
