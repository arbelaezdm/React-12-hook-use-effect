import { useState, useEffect } from "react";

export default function ComponenteHookUseEffect() {
  const [personajes, setPersonajes] = useState([]);
  const [pagina, setPagina] = useState(2);

  //pedido a la API
  useEffect(() => {
    console.log("%c se montó el componente", "color: green");
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log("%cSe actualizó el componente", "color: yellow");
  }, [personajes]);

  useEffect(() => {
    return () => {
      console.log("%cse demontó el componente", "color: red");
    };
  }, []);

  const cargarMas = async () => {
    await setPagina(pagina + 1);
    console.log(pagina);
    console.log(`https://rickandmortyapi.com/api/character?page=${pagina}`);

    fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Soy el Componente</h1>
      <ul>
        {personajes.length === 0 && <p>Cargando...</p>}

        {personajes.map((personaje, i) => {
          return (
            <li key={personaje + i}>
              <h3>{personaje.name}</h3>
              <img src={personaje.image} alt="avatar" width="150" />
            </li>
          );
        })}
        <button onClick={cargarMas}>Siguiente Pagina</button>
      </ul>
    </div>
  );
}
