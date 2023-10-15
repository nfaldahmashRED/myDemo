import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue: React.SetStateAction<string>) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <input
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      {searchInput.length > 1
        ? filteredResults.map((item) => {
            return (
              <div>
                <div>{item.name}</div>
                <div>{item.email}</div>
              </div>
            );
          })
        : APIData.map((item) => {
            return (
              <Card>
                <Card.Content>
                  <Card.Header>{item.name}</Card.Header>
                  <Card.Description>{item.email}</Card.Description>
                </Card.Content>
              </Card>
            );
          })}
    </div>
  );
}
