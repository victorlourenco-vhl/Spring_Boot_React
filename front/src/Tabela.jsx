export function Tabela({ vetor, selecionar }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Marca</th>
          <th>Selecionar</th>
        </tr>
      </thead>
      <tbody>
        {vetor.map((obj, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{obj.name}</td>
            <td>{obj.brand}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={() => {
                  selecionar(index);
                }}
              >
                Selecionar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
