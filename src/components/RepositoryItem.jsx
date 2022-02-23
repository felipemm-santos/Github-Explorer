// Cria um componente RepositoryItem
// que é o item de uma lista de repositórios

export function RepositoryItem(props) {
  return (
    <li>
      {/* props.repository?.name
        o ? testa se a propiedade existe
        Se ela não exister o operador ?? permite deixar um valor default
        */}

      <strong>{props.repository?.name ?? "Nome"}</strong>
      <p>{props.repository?.description ?? "Descrição"}</p>

      <a href="">{props.repository?.link ?? "Link"}</a>
    </li>
  );
}
