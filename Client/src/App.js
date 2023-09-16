import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const [characters, setCharacters] = React.useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { data } = await axios.get(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
      if (access) {
        navigate("/home");
      } else {
        window.alert("El usuario o contraseña son incorrectos.");
      }
    } catch (error) {
      window.alert("Hubo un error en la autenticación.");
    }
  };

  const logout = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data) {
        if (characters.some((character) => character.id === data.id)) {
          window.alert("Ya hay un personaje agregado con ese ID");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  };

  const numRandom = () => {
    return Math.floor(Math.random() * 827);
  };

  function randomChar() {
    const idRandom = numRandom();
    axios(`http://localhost:3001/rickandmorty/character/${idRandom}`).then(
      ({ data }) => {
        if (data) {
          if (characters.some((character) => character.id === data.id)) {
            window.alert("Ya hay un personaje agregado con ese ID");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    const updateCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(updateCharacters);
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} randomChar={randomChar} logout={logout} />
      ) : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        />
        <Route path="favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
