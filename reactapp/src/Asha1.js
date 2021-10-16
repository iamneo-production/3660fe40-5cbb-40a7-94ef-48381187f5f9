import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "./components/MovieComponent";
import MovieInfoComponent from "./components/MovieInfoComponent";

export const API_KEY = "a9118a3a";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

function Asha1() {
  const [searchQuery, updateSearchQuery] = useState("");

  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();

  const [timeoutId, updateTimeoutId] = useState();

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
    );
    updateMovieList(response.data.Search);
  };

  const onTextChange = (e) => {
    onMovieSelect("")
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    updateTimeoutId(timeout);
  };
  return (
    <Container>
      <Header>
        <AppName>
         
          React Movie App
        </AppName>
        <SearchBox>
         
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {selectedMovie && <MovieInfoComponent selectedMovie={selectedMovie} onMovieSelect={onMovieSelect}/>}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
          <Placeholder src="data:image/jpeg;base64,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c1w0gtc03BBtsQVUjiUzucsn3nf3X5NZJ/Ef94/3WqGHlBZYysu5Fix3D0rezt97lqXOsy62ueZJZJnvdzc4gl1gALkt8AF8pMuNontkikla9pu1w03afHcKlekP+s74lfOKfrH4lS7GdrZ/Qf1DA/8AWXzf4NQ9Nrf+un/mbG78wuWidW4azRT1hY25NuBEblxLiSbb7krOvSX/AF3fEr0FdK3lI/7zv7qlYGKWW0bdMqsePH4GW9B+U2aI/GMYZ6ta0+2KIf8AzK8XZnxqD94x/sbT/lYFUaPF54+Ur/eb/muqLMtRH9MH2tH6WUPYKa17Om/0r8HjxHD58qsfCSf1LPhXaBXYCxsckLHMaLDWxzSAPB7TY+O4K6Ze1iUg8Glgjeebjqdf3DTf3lV2DN72+vG0/ZJH4G66RV0OJ7PaI3Hqbj+obfFQngcO5OVSitd7X18UmkFRo1NKGI8pJxfz2+hXsWxKXFpDLUPL3u6noOgAGwA8Ao9S2N4WcMeBe7Hbtd+YPmFErpQacVl2OVWpTpTcKis1uERFIqCIiAIiIAiIgCIiAIiID7dLr4iAIiIAiIgCIiAIiIAiIgCIiAL9Ar8ogJCuxB1W1jSLNjFmjn4bk9Tso9EXiSWxOpUlUlmk7v8An2CIi9IBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREB//9k="  width="100"/>
        )}
      </MovieListContainer>
    </Container>
  );
}

export default Asha1;
