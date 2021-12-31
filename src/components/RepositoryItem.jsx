export function RepositoryItem(props) {
  return (
    <li>
      {/* props.repository?.name
        o ? testa se a propiedade existe
        */}
      <strong>{props.repository?.name ?? "Nome"}</strong>
      <p>{props.repository?.description ?? "Descrição"}</p>

      <a href="">{props.repository?.link ?? "Link"}</a>
    </li>
  );
}
