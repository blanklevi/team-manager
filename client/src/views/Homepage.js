import React, { useState, useEffect } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const Homepage = (props) => {
  const [players, setPlayers] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8000/api/players").then((res) => {
      console.log(res);
      setPlayers(res.data.players);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/api/players/delete/" + id)
      .then((res) => {
        const filteredPlayers = players.filter((player) => {
          return player._id !== id;
        });

        setPlayers(filteredPlayers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (players === null) {
    return "Loading...";
  }
  return (
    <div className="container">
      <a href="">Manage Player</a> <a href="">Manage Player Status</a>
      <div>
        <a href="">List</a> <a href="/players/addplayer">Add Player</a>
        <div>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Team Name</th>
                <th scope="col">Preferred Position</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => {
                return (
                  <tr key={player._id}>
                    <th scope="row">{player.name}</th>
                    <td>{player.preferredPosition}</td>
                    <td>
                      <button
                        onClick={(event) => {
                          handleDelete(player._id);
                        }}
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
