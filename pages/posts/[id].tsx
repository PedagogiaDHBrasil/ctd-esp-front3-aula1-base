import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

const recipePage = {
  // As propriedades de título e descrição podem ser usadas para adicionar metadados nesta página
  title: "Receita",
  description:
    "Detalhe dos ingredientes e passos necessários para preparar o prato",
  content: "ID da receita:",
};

// Criamos uma página dinâmica que nos permitirá
// mostra a receita escolhida pelo usuário.
const Recipe: NextPage = () => {
  // Usando o hook useRouter podemos acessar o id da receita
  // que é dado pela url

  const { query } = useRouter();
  const id = query.id;

  // Também podemos obter as informações com base no idioma selecionado...
  // Por enquanto esses dados estão armazenados neste arquivo, mas devem depender do idioma selecionado
  const { title, content } = recipePage;

  return (
    <>
      {/* Podemos criar um Head diferente para esta página, para alterar o título ou a descrição */}
      <div>
        <h3>{title}</h3>
        <p>
          {content} #{id}
        </p>
      </div>
    </>
  );
};

export default Recipe;
