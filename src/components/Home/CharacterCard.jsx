const CharacterCard = ({ character }) => {
    return (
      <div className="character">
        <img src={character.image} alt={character.name} />

        <div className="meta">
          <div className="name">{character.name}</div>

          <div className="gender">
            <span>Gender:</span> {character.gender}
          </div>

          <div className="status">
            <span>Status:</span> {character.status}
          </div>

          <div className="species">
            <span>Species:</span> {character.species}
          </div>

          <div className="l-k-l">
            <span>Last Known Location:</span> {character.location.name}
          </div>
        </div>
      </div>
    );
}

export default CharacterCard;