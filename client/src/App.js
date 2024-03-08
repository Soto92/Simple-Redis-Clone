import React, { useState } from "react";
import axios from "axios";

function RedisClient() {
  const [response, setResponse] = useState("");

  const handleRequest = async (path, params) => {
    try {
      const { data } = await axios.post(`http://localhost:6379${path}`, params);
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleRequest("/set", { key: "name", value: "John" })}
      >
        SET
      </button>
      <button onClick={() => handleRequest("/get", { key: "name" })}>
        GET
      </button>
      <button onClick={() => handleRequest("/remove", { key: "name" })}>
        REMOVE
      </button>
      <button
        onClick={() =>
          handleRequest("/maps/set", {
            mapKey: "user:1",
            field: "name",
            fieldValue: "John Doe",
          })
        }
      >
        MAPS.SET
      </button>
      <button
        onClick={() =>
          handleRequest("/maps/get", { mapKey: "user:1", mapField: "name" })
        }
      >
        MAPS.GET
      </button>
      <button onClick={() => handleRequest("/maps/keys", { mapKey: "user:1" })}>
        MAPS.KEYS
      </button>
      <button
        onClick={() => handleRequest("/maps/values", { mapKey: "user:1" })}
      >
        MAPS.VALUES
      </button>
      <div>Response: {response}</div>
    </div>
  );
}

export default RedisClient;
