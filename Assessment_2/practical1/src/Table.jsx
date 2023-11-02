//changed the variable we're destructuring out to be persons since that's what it's named in the attribute for the Table element in App.js.  Also changed people to persons to map over the data in the theCharacters variable data to access the data from persons and create one table row for each element in the persons object.

const Table = (props) => {
  const { persons } = props;
  const theCharacters = persons.map((character) => {
    return (
      <tr key={character.name}>
        <td>{character.name}</td>
        <td>{character.height}</td>
        <td>{character.mass}</td>
        <td>{character.hair_color}</td>
        <td>{character.eye_color}</td>
      </tr>
    );
  });

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Star Wars Characters</h1>
      <table className="table table-striped m-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Eye Color</th>
          </tr>
        </thead>
        <tbody>{theCharacters}</tbody>
      </table>
    </div>
  );
};
//changed to have it be a default export since it's the only thing being exported.
export default Table;
