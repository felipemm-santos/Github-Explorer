// Cria um componente RepositoryItem
// que é o item de uma lista de repositórios

export function RepositoryItem(props) {
  return (
    <li>
      {/* {props.repository?.name ?? "Nome"}
        o ? testa se a propiedade existe
        Se ela não exister o operador ?? permite deixar um valor default
        */}

      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description}</p>

      <a href="">{props.repository?.html_ur}</a>
    </li>
  );
}
