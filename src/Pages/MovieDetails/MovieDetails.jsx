import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../Context/Components/Modal";
import { useStateValue } from "../Context/StateProvider";
import "./movieDetails.scss";

function MovieDetails() {
  const params = useParams();
  console.log("Params:", params.index);

  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useStateValue();

  const [bookingData, setBookingData] = useState({
    movie: state.movie[0].show.name,
    name: "",
    no_of_guest: "",
    date: "",
  });

  console.log("Data set:", bookingData);

  console.log("State :", state);

  return (
    <>
      <div className="movie">
        <div className="imageContainer">
          <img
            className="movieImageBG"
            src={state.movie[0].show.image.original}
            alt=""
          />
        </div>
        <div className="movieDetails">
          <h1>{state.movie[0].show.name}</h1>
          <div
            className="summaryHolder"
            dangerouslySetInnerHTML={{ __html: state.movie[0].show.summary }}
          />
          <div className="movieStats">
            <details>
              <p>Type:{state.movie[0].show.type}</p>
              <p>Language : {state.movie[0].show.language}</p>
              <p>Status : {state.movie[0].show.status} </p>
              <p>Runtime : {state.movie[0].show.runtime}</p>
              <p>Premiered : {state.movie[0].show.premiered}</p>
              <p>
                Official Site : <a>{state.movie[0].show.officialSite}</a>
              </p>
              <p>Rating : {state.movie[0].show.rating.average} </p>
            </details>
          </div>
          <button onClick={() => setIsOpen(true)}>Book Now</button>
        </div>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modalForm">
          <h1>Book A Ticket</h1>
          <form>
            <label>Movie:</label>
            <br />
            <input
              type="text"
              value={state.movie[0].show.name}
              onChange={(e) =>
                setBookingData({ ...bookingData, movie: e.target.value })
              }
            />
            <br />
            <label>Name:</label>
            <br />
            <input
              type="text"
              value={bookingData.name}
              onChange={(e) =>
                setBookingData({ ...bookingData, name: e.target.value })
              }
            />
            <br />
            <label>Number Of Guest:</label>
            <br />
            <input
              type="number"
              value={bookingData.no_of_guest}
              onChange={(e) =>
                setBookingData({ ...bookingData, no_of_guest: e.target.value })
              }
            />
            <br />
            <label>Date:</label>
            <br />
            <input
              type="date"
              value={bookingData.date}
              onChange={(e) =>
                setBookingData({ ...bookingData, date: e.target.value })
              }
            />
            <br />
            <button
              className="bookBtn"
              onClick={() => {
                setIsOpen(false);
                localStorage.setItem("MovieBooking", bookingData);
                alert("Movie Booking is Done!! Please Check Local Storage");
                alert(
                  "Bonus The App is Responsive Without using media query at all!! "
                );
              }}
            >
              Book
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default MovieDetails;
