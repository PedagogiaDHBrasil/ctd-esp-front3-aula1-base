import Link from "next/link";
import { FC } from "react";
import styles from "../../styles/Layout.module.css";

// Este Layout pode ser usado para compartilhar o hader em todas as páginas
// do aplicativo
const Layout: FC<{ children: JSX.Element }> = ({ children }) => {
  // Devemos buscar as informações do idioma usando useRouter()

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Ao clicar no logotipo voltamos sempre à página principal */}
        <Link href="/">
          <div className={styles.logo}>
            {/* Adicionamos o logotipo do aplicativo */}
            <p className={styles.title}>RecetApp</p>
          </div>
        </Link>
        {/* Adicionamos um switch para alternar o idioma */}
      </header>
      {children}
    </div>
  );
};

export default Layout;
