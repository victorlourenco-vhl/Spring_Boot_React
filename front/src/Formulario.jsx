export function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar }) {
  return (
    <form>
      <input type="text" value={obj.name} onChange={eventoTeclado} name="name" placeholder="Nome" className="form-control" />
      <input type="text" value={obj.brand} onChange={eventoTeclado} name="brand" placeholder="Marca" className="form-control" />
      {botao ? (
        <input type="button" value="Cadastrar" onClick={cadastrar} objclassName="btn btn-primary" />
      ) : (
        <div>
          <input type="button" value="Alterar" className="btn btn-warning" />
          <input type="button" value="Remover" className="btn btn-danger" />
          <input type="button" value="Cancelar" className="btn btn-secondary" onClick={cancelar}/>
        </div>
      )}
    </form>
  );
}
