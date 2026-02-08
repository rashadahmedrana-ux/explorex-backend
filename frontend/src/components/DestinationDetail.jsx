import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DestinationDetail() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/destinations/${id}`)
      .then((res) => setDestination(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!destination) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-3">{destination.title}</h2>

      <img
  src={destination.image}
  alt={destination.title}
  className="img-fluid rounded mb-4"
  style={{ maxHeight: "400px", objectFit: "cover", width: "100%" }}
/>


      <p className="lead">{destination.description}</p>

      <button
  className="btn btn-success mt-3"
  onClick={() => {
    axios.post(
      "http://localhost:5000/api/trips/add",
      {
        destination: destination._id,
        date: new Date().toLocaleDateString(),
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    alert("Trip added!");
  }}
>
  Select This Destination
</button>



    </div>
  );
}

export default DestinationDetail;
