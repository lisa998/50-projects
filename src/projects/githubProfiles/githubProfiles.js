import React from "react";
import { useState } from "react";
import axios from "axios";
import { Body, Input, Container, Img, Span } from "./styled";

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
              {repo.map((repo, i) => (
                <Repos repo={repo} key={i} />
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
