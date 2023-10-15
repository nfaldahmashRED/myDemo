import axios from "axios";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: String;
  phone: string;
  website: string;
}
const Body = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErr] = useState("");
  const [loading, setLoading] = useState(true);
  //const [filteredResults, setFilteredResults] = useState<User[]>([]);

  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredResults = users.filter((filterdData: any) =>
    filterdData.username.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setErr(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container__row">
      <input placeholder="Search by username" onChange={handleChange} />
      {error && <p className="text-danger">{error}</p>}
      {filteredResults.map((user) => (
        <div className="bodyCard" key={user.id}>
          <div className="cardHeader">{user.username} </div>
          <div className="cardInfo ">
            <div style={{ fontWeight: "bold" }}>Name:</div> {user.name}
          </div>
          <div className="cardInfo">
            <div style={{ fontWeight: "bold" }}>Email:</div>
            {user.email}
          </div>
          <div className="cardInfo">
            {" "}
            <div style={{ fontWeight: "bold" }}>website:</div>
            {user.website}
          </div>

          <div className="cardInfo ">
            {" "}
            <div style={{ fontWeight: "bold" }}>Phone:</div> {user.phone}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Body;
