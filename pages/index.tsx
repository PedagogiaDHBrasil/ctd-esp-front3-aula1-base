import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

import styles from "../styles/Home.module.css";

const home = {
  // O appName e a descrição podem ser usados ​​para incluir metadados específicos para esta página
  appName: "ReceitApp",
  description: "Blog com receitas fabulosas para preparar os melhores pratos",
  heroText:
    "Um lugar onde você pode encontrar todas as suas receitas favoritas...",
  recipes: [
    {
      id: "espetosDeQueijo",
      link: "/posts/espetosDeQueijo",
      name: "Espetos de carne com queijo",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/39029/50425.jpg",
        alt: "espetinhos-com-queijo",
        width: 200,
        height: 100,
      },
    },
    {
      id: "arrozPrimavera",
      link: "/posts/arrozPrimavera",
      name: "Salada de Arroz Primavera",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/38554/49497.jpg",
        alt: "arroz-primavera",
        width: 200,
        height: 100,
      },
    },
    {
      id: "Tortilha Espanola",
      link: "/posts/tortilhaEspanola",
      name: "Tortilha Española",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/39384/51406.jpg",
        alt: "tortilha-espanola",
        width: 200,
        height: 100,
      },
    },
    {
      id: "hotcakes",
      link: "/posts/hotcakes",
      name: "Hotcakes saudáveis",
      image: {
        src: "https://cdn7.kiwilimon.com/recetaimagen/39016/50393.jpg",
        alt: "hotckakes",
        width: 200,
        height: 100,
      },
    },
  ],
};

const Home: NextPage = () => {
  // Através do useRouter podemos acessar o idioma selecionado e extrair as informações com base nele.

  // Por enquanto os dados estão codificados neste arquivo, mas devem ser dinâmicos com base no idioma selecionado...
  const { heroText, recipes } = home;

  return (
    <Layout>
      {/* Aqui podemos adicionar um Head específico com conteúdo para esta página */}
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.description}>{heroText}</h1>
          <figure>
            {/* Aqui adicionamos a imagem do chef que está dentro da pasta public */}
          </figure>
        </div>
        <div className={styles.grid}>
          {/* Nós iteramos sobre a lista de receitas */}
          {recipes.map((recipe) => (
            // Adicionamos o componente Link para navegar até a página
            // que contém o detalhe do post com a receita
            <Link href={recipe.link} key={recipe.id}>
              <div className={styles.card}>
                <h3>{recipe.name}</h3>
                {/* Adicionamos o componente Image com a imagem do prato que obtemos de uma URL externa
                IMPORTANTE: Quando usamos um URL externo, devemos adicioná-lo dentro dos domínios permitidos
                no arquivo next.config.js
               */}
                <Image
                  src={recipe.image.src}
                  alt={recipe.image.alt}
                  width={recipe.image.width}
                  height={recipe.image.height}
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Home;
