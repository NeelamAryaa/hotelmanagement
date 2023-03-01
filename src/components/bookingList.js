import React, { Component } from "react";

class BookingList extends Component {
  render() {
    return (
      <div>
        <div className="mx-3 d-flex justify-content-between">
          <header className="fs-3 fw-bold">All Bookings</header>
          <div>
            <div class="dropdown m-2">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="list-group mx-auto w-50 my-5">
          <li class="list-group-item d-flex justify-content-between">
            <div>An item </div>
            <div>
              <button
                className="edit-btn"
                type="button"
                // onClick={() => this.editTodo(idx, obj)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="delete-btn"
                type="button"
                // onClick={() => this.deleteTodo(obj)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
          <li class="list-group-item">A fourth item</li>
          <li class="list-group-item">And a fifth one</li>
        </ul>
      </div>
    );
  }
}

export default BookingList;
