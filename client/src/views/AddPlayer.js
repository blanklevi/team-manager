import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const NewPlayer = (props) => {
  const [name, setName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");
  const [errors, setErrors] = useState({});

  const handleCreate = (event) => {
    event.preventDefault();
    const newPlayer = {
      name: name,
      preferredPosition: preferredPosition,
    };
    axios
      .post("http://localhost:8000/api/players/new", newPlayer)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return (
    <div>
      <div className="container">
        <h1>Add Player</h1>
        <a href="/">List</a>
        <div>
          <form
            onSubmit={(event) => {
              handleCreate(event);
            }}
          >
            <div className="form-group">
              <label>Player Name: </label>
              <input
                className="form-control"
                type="text"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              {errors.name ? (
                <span style={{ color: "red", marginLeft: "5px" }}>
                  {errors.name.message}
                </span>
              ) : (
                ""
              )}{" "}
              <br />
              <label>Preferred Position: </label>
              <input
                className="form-control"
                type="text"
                onChange={(event) => {
                  setPreferredPosition(event.target.value);
                }}
              />
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPlayer;
