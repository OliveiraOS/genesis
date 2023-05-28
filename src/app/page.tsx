import Image from "next/image";
import { HeaderButtons } from "@/components/HeaderButtons"
import { TreeArticle } from "@/components/TreeArticle"

export default function Home() {
  return (
    <>
      <header className="h-32 px-4 sm:px-8 relative bg-base-200 flex justify-center items-center">
        <div className="relative w-14 h-20 sm:w-20 sm:h-28">
          <Image
            src="/images/logo.png"
            alt="Gênesis logo"
            fill={true}
          />
        </div>

        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex gap-2">
          <HeaderButtons />
        </div>
      </header>

      <nav className="bg-base-100 flex justify-center py-1">
        <a href="/#tree">Árvore</a>
        <a href="/#about" className="absolute right-4 sm:right-8">Sobre</a>
      </nav>

      <main className="h-[calc(100vh-160px)] px-4 sm:px-8 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-6xl font-bold text-center">
          Bem-vindo ao{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-base-content to-base-300">
            Gênesis
          </span>
        </h1>
        <p className="text-2xl font-bold text-center">Adquira conhecimento através da origem</p>
      </main>

      <section id="tree" className="px-4 sm:px-8">
        <div >
          <h2 className="text-lime-600">Árvore</h2>
          <p>Uma planta perene, de tronco lenhoso, que apresenta ramos e folhas.</p>

          <a href="https://wope.com/">ACESSA AQUI VAGABUNDO</a>
        </div>

        <TreeArticle
          title="Semente"
          description="As sementes podem ser encontradas em diferentes formatos, tamanhos e cores, variando de acordo com a espécie da planta."
          href="/tree/seed"
        />

        <TreeArticle
          title="Folha"
          description="As folhas são estruturas fundamentais para a sobrevivência das plantas, responsáveis pela realização da fotossíntese."
          href="/tree/leaf"
        />

        <TreeArticle
          title="Flor"
          description="Elas são consideradas uma das mais belas criações da natureza, apresentando uma grande diversidade de cores, formas e perfumes."
          href="/tree/flower"
        />

        <TreeArticle
          title="Fruta"
          description="Elas são amplamente consumidas em todo o mundo e apresentam uma grande diversidade de cores, sabores e texturas."
          href="/tree/fruit"
        />
      </section>

      <section id="about"></section>

      <footer></footer>
    </>
  );
};
