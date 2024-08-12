import styles from './CharacterCard.module.scss';

interface CharacterCardProps {
  name: string;
  image: string;
  dateOfBirth: string;
  house: string;
  patronus: string;
  actor: string;
  alive: boolean;
}

const houseStyles: { [key: string]: { backgroundColor: string; color: string } } = {
  Gryffindor: { backgroundColor: '#740001', color: '#FFD700' }, // Dourado para a fonte
  Slytherin: { backgroundColor: '#2a623d', color: '#AAAAAA' }, // Prata para a fonte
  Ravenclaw: { backgroundColor: '#222f5b', color: '#A0A0FF' }, // Azul claro para a fonte
  Hufflepuff: { backgroundColor: '#ffdb00', color: '#3C2A00' }, // Marrom para a fonte
};

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  image,
  dateOfBirth,
  house,
  patronus,
  actor,
  alive,
}) => {
  const cardStyle = houseStyles[house] || { backgroundColor: '#cccccc', color: '#000000' };
  const imageRender = !image ? './image-not-found.png' : image

  return (
    <div className={styles.card} data-testid="character-card">
      <div className={styles.cardInner} role="presentation">

        <div className={styles.cardFront} style={cardStyle} data-testid="character-card-front">
          <img src={imageRender} alt={name} className={styles.image} />
          <h2>{name}</h2>
        </div>

        <div className={styles.cardBack} style={cardStyle} data-testid="character-card-back">
          <div className={styles.cardTitle}>
            <h3>Informações</h3>
          </div>

          <p><strong>Data de Nascimento:</strong> {dateOfBirth}</p>
          <p><strong>Casa:</strong> {house}</p>
          <p><strong>Patrono:</strong> {patronus}</p>
          <p><strong>Ator:</strong> {actor}</p>
          <p><strong>Status:</strong> {alive ? 'Vivo' : 'Falecido'}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;