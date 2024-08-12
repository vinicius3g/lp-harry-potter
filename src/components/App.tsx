import { useEffect, useState } from "react";
import styles from './App.module.scss';
import CharacterCard from "./CharacterCard/CharacterCard";

interface Character {
  id: string;
  name: string;
  dateOfBirth: string;
  house: string;
  patronus: string;
  actor: string;
  alive: boolean;
  image: string;
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>([]);
  const [loadMore, setLoadMore] = useState(20);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        setVisibleCharacters(data.slice(0, loadMore));
      })
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  const handleLoadMore = () => {
    const newLoadMore = loadMore + 20;
    setLoadMore(newLoadMore);
    setVisibleCharacters(characters.slice(0, newLoadMore));
  };

  return (
    <>
      <div className={styles.container}>
        {visibleCharacters.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            image={character.image}
            dateOfBirth={character.dateOfBirth}
            house={character.house}
            patronus={character.patronus}
            actor={character.actor}
            alive={character.alive}
          />
        ))}
      </div>

      {loadMore < characters.length && (
        <div className={styles.buttonWrapper}>
          <button className={styles.loadMoreButton} onClick={handleLoadMore}>
            <span>Carregar Mais</span>
          </button>
        </div>
      )}
    </>
  );
}

export default App;
