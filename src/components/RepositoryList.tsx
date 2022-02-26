import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";

import { useEffect, useState } from "react";

// Criar interface para tipar o estado do repositório
interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  // useState<Repository[]> -> generic
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/felipemm-santos/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {/* map passa por cada elemento do array e executa uma função*/}

        {repositories.map((repository) => {
          {
            /* Cada item numa lista precisa de um elemento chave único */
          }
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
        {/* O repositório pode ser retornado de várias formas 

          Com chaves
          {repositories.map((repository) => { 
            return <RepositoryItem repository={repository} />;
          })}  

          Com parenteses
          {repositories.map((repository) => (
            <RepositoryItem repository={repository} />
          ))} 

          Uma linha só
          {repositories.map((repository) => <RepositoryItem repository ={repository} />)}

        */}
      </ul>
    </section>
  );
}
