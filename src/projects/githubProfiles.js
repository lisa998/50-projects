import { styled } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import axios from "axios";
export default function GithubProfiles() {
  const [user, setUser] = useState("");
  const [result, setResult] = useState({});
  const [repo, setRepo] = useState([]);

  const Search = async (e) => {
    if (e.keyCode === 13) {
      setRepo([]);
      try {
        const result = await axios.get(`https://api.github.com/users/${user}`);
        let {
          node_id,
          avatar_url,
          name,
          bio,
          followers,
          following,
          public_repos,
        } = result.data;
        setResult({
          node_id,
          avatar_url,
          name,
          bio,
          followers,
          following,
          public_repos,
        });
        const repoDate = await axios.get(
          `https://api.github.com/users/${user}/repos?sort=created&per_page=5`
        );
        repoDate.data.forEach((ele) => {
          let { name, html_url } = ele;
          setRepo((repo) => [...repo, { name, href: html_url }]);
        });
      } catch {
        setResult(false);
      }
    }
  };
  return (
    <Body>
      <Input
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder={"Search a Github User"}
        onKeyDown={Search}
      />
      {result.node_id ? (
        <Container>
          <Img src={result.avatar_url} />
          <div>
            <h1 style={{ fontSize: 27 }}> {result.name || "null"}</h1>
            <p>{result.bio || "null"}</p>
            <Span>{result.followers} Followers</Span>
            <Span>{result.following} Following</Span>
            <Span>{result.public_repos} Repos</Span>
            <div
              style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap" }}
            >
              {repo.map((repo) => (
                <Repos repo={repo} />
              ))}
            </div>
          </div>
        </Container>
      ) : null}

      {!result ? (
        <h1 style={{ fontSize: 27 }}>'No profile with this username'</h1>
      ) : null}
    </Body>
  );
}

const Repos = ({ repo }) => {
  return (
    <div
      style={{
        padding: "0.5rem",
        backgroundColor: "#222",
        margin: "0.5rem",
        overflow: "hidden",
      }}
    >
      <a href={repo.href} style={{ textDecoration: "none", color: "white" }}>
        {repo.name}
      </a>
    </div>
  );
};

const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
  backgroundColor: "#333",
  fontFamily: "'Poppins', sans-serif",
});
const Input = styled("input")({
  width: "45vw",
  backgroundColor: "#e2e2e2",
  color: "#5a5a5a",
  border: "none",
  borderRadius: 10,
  padding: "1rem",
  marginBottom: "2rem",
  fontSize: "1rem",
  boxShadow: "0 5px 10px rgb(154 160 185 / 5%), 0 15px 40px rgb(0 0 0 / 10%)",
  "&:focus-visible ": {
    outline: "none",
  },
});
const Container = styled("div")({
  padding: "2rem",
  backgroundColor: "#e2e2e2",
  borderRadius: 10,
  color: "#5a5a5a",
  display: "flex",
  fontSize: 18,
  width: "50vw",
  minWidth: 750,
  overflow: "hidden",
});
const Img = styled("div")({
  height: 150,
  width: 150,
  minWidth: 150,
  backgroundImage: (props) => `url('${props.src}')`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "50%",
  border: "7px solid #222",
  marginRight: "2rem",
});
const Span = styled("span")({
  marginRight: "3rem",
});
