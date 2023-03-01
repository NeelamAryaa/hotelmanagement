import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import BookingList from "../components/bookingList";

class Homepage extends Component {
  state = {
    detail: {
      email: null,
      room_no: 0,
      start_date: null,
      end_date: null,
    },
    allbookings: [],
  };

  onBooking = (e) => {
    e.preventDefault();
    const { allbookings, detail } = this.state;
    if (this.state.detail !== null) {
      this.setState(
        (prevState) => ({
          allbookings: [...prevState.allbookings, detail],
        }),
        () => console.log(allbookings)
      );
    }
    // console.log(allbookings);
  };

  handleChange = (e) => {
    const { detail } = this.state;
    console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);

    this.setState((prevState) => ({
      detail: { ...detail, [e.target.name]: e.target.value },
    }));
    console.log(detail);
  };

  render() {
    return (
      <div className="App">
        <div className=" d-flex flex-column justify-content-center align-items-center mx-auto">
          <header className="text-center fs-3 fw-bold my-3">Booking</header>
          <form class="row g-3 w-50  border p-3" onSubmit={this.onBooking}>
            <div class="col-md-12">
              <label for="inputEmail4" class="form-label">
                Email
              </label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="inputEmail4"
                onChange={this.handleChange}
                value={this.state.detail.email}
              />
            </div>

            <div class="col-12">
              <label for="rn" class="form-label">
                Room Number
              </label>
              <input
                name="room_no"
                type="text"
                class="form-control"
                id="rn"
                placeholder="eg. A1"
                onChange={this.handleChange}
                value={this.state.detail.room_no}
              />
            </div>

            <div class="col-md-6">
              <label for="start-date" class="form-label">
                Start Date
              </label>
              <input
                name="start_date"
                type="date"
                class="form-control"
                id="start-date"
                onChange={this.handleChange}
                value={this.state.detail.start_date}
              />
            </div>

            <div class="col-md-6">
              <label for="end-date" class="form-label">
                End Date
              </label>
              <input
                name="end_date"
                type="date"
                class="form-control"
                id="end-date"
                onChange={this.handleChange}
                value={this.state.detail.end_date}
              />
            </div>

            <div class="col-12">
              <button
                type="submit"
                class="btn btn-primary"
                // onClick={this.onBooking}
              >
                Book Now
              </button>
            </div>
          </form>

          <div class="mx-auto my-3">
            <Link to="all_bookings">
              <button
                onClick={BookingList}
                type="submit"
                class="btn btn-primary"
              >
                All Bookings
              </button>
            </Link>
          </div>

          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        </div>

        {/* <BookingList /> */}
      </div>
    );
  }
}

export default Homepage;
