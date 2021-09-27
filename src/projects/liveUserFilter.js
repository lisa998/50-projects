import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function LiveUserFilter() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    const getData = async () => {
      const result = await axios("https://randomuser.me/api?results=50");
      result.data.results.forEach((result) => {
        let { name, location, picture } = result;
        setUsers((users) => [
          ...users,
          {
            name: name.first + " " + name.last,
            location: location.city + ", " + location.country,
            img: picture.thumbnail,
            hide: false,
          },
        ]);
      });
    };
    if (!users[0]) {
      getData();
    }
  }, [users, setUsers]);

  useEffect(() => {
    if (value) {
      let seacrh = value.toLowerCase();

      setUsers((users) =>
        users.map((ele) => {
          if (
            ele.name.toLowerCase().includes(seacrh) ||
            ele.location.toLowerCase().includes(seacrh)
          ) {
            return { ...ele, hide: false };
          } else {
            return { ...ele, hide: true };
          }
        })
      );
    }
  }, [value]);

  return (
    <Body>
      <Div>
        <Search value={value} setValue={setValue} />
        <Users>
          {users.map((user, i) => (
            <User user={user} key={i} />
          ))}
        </Users>
      </Div>
    </Body>
  );
}
const Search = ({ value, setValue }) => {
  return (
    <SearchDiv>
      <h2>Live User Filter</h2>
      <p>Search by name and/or location</p>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
    </SearchDiv>
  );
};
const User = ({ user }) => {
  const { hide, img, name, location } = user;
  return (
    <StyledUser hide={hide}>
      <img
        src={img}
        alt=""
        style={{ borderRadius: "50%", width: 50, height: 50 }}
      />
      <div style={{ marginLeft: 10 }}>
        <h4 style={{ margin: 0 }}>{name}</h4>
        <p style={{ margin: "5px 0" }}>{location}</p>
      </div>
    </StyledUser>
  );
};
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Roboto', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});

const Div = styled("div")({
  width: 300,
  boxShadow: "3px 3px 10px rgb(0 0 0 / 20%)",
  borderRadius: 5,
  overflow: "hidden",
});
const Users = styled("div")({
  width: "100%",
  height: 400,
  overflowY: "scroll",
});
const StyledUser = styled("div")({
  width: "100%",
  height: 105,
  padding: 20,
  display: (props) => (props.hide ? "none" : "flex"),
  borderBottom: "1px solid #eee",
});
const SearchDiv = styled("div")({
  width: "100%",
  backgroundColor: "#3e57db",
  color: "white",
  padding: "30px 20px",
});
const Input = styled("input")({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  border: 0,
  borderRadius: 50,
  color: "#fff",
  fontSize: 14,
  padding: "10px 15px",
  width: "100%",
  "&:focus-visible": {
    outline: "none",
  },
});
