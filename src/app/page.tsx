import { HeaderButtons } from "@/components/HeaderButtons";
import { Logo } from "@/components/Logo";
import { TreeArticle } from "@/components/TreeArticle";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="h-32 px-4 sm:px-8 relative bg-base-200 flex justify-center items-center">
        <Logo />

        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 flex gap-2">
          <HeaderButtons />
        </div>
      </header>

      <nav className="bg-base-100 flex justify-center py-1">
        <a href="/#tree">Árvore</a>
        <a href="/#about" className="absolute right-4 sm:right-8">
          Sobre
        </a>
      </nav>

      <main className="h-[calc(100vh-160px)] px-4 sm:px-8 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-6xl font-bold text-center">
          Bem-vindo ao{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-base-content to-base-300">
            Gênesis
          </span>
        </h1>

        <p className="text-2xl font-bold text-center">
          Adquira conhecimento através da origem
        </p>
      </main>

      <section id="tree">
        <div className="px-4 sm:px-8">
          <h2 className="flex justify-center text-lime-600 text-4xl font-bold">
            Árvores
          </h2>

          <p className="flex justify-center text-xl text-center font-semibold mb-12">
            Uma planta perene, de tronco lenhoso, que apresenta ramos e folhas.
          </p>
        </div>

        <TreeArticle
          title="Semente"
          description="As sementes podem ser encontradas em diferentes formatos, tamanhos e cores, variando de acordo com a espécie da planta."
          href="/tree/seed"
          imgUrl="/images/semente.jpg"
          side="left"
        />

        <TreeArticle
          title="Folha"
          description="As folhas são estruturas fundamentais para a sobrevivência das plantas, responsáveis pela realização da fotossíntese."
          href="/tree/leaf"
          imgUrl="/images/folha.jpg"
          side="right"
        />

        <TreeArticle
          title="Flor"
          description="Elas são consideradas uma das mais belas criações da natureza, apresentando uma grande diversidade de cores, formas e perfumes."
          href="/tree/flower"
          imgUrl="/images/flor.jpg"
          side="left"
        />

        <TreeArticle
          title="Fruta"
          description="Elas são amplamente consumidas em todo o mundo e apresentam uma grande diversidade de cores, sabores e texturas."
          href="/tree/fruit"
          imgUrl="/images/fruta.jpg"
          side="right"
        />
      </section>

      <section id="about"></section>

      <footer className="flex justify-between items-center py-6 px-4 sm:px-8 text-sm bg-base-200">
        <Logo size="sm" />

        <div className="flex flex-col gap-1">
          <h2 className="mb-1 text-base font-bold">Tema</h2>

          <Link href="/#tree" className="hover:underline underline-offset-2">
            Árvore
          </Link>
          <Link
            href="/tree/seed"
            className="hover:underline underline-offset-2"
          >
            Semente
          </Link>
          <Link
            href="/tree/leaf"
            className="hover:underline underline-offset-2"
          >
            Folha
          </Link>
          <Link
            href="/tree/flower"
            className="hover:underline underline-offset-2"
          >
            Flor
          </Link>
          <Link
            href="/tree/fruit"
            className="hover:underline underline-offset-2"
          >
            Fruta
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="mb-1 text-base font-bold">Desenvolvido por</h2>

          <a
            href="http://linktr.ee/gabriel_vs_frasao"
            className="hover:underline underline-offset-2"
          >
            Gabriel VS Frasão
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-oliveira-926599238"
            className="hover:underline underline-offset-2"
          >
            OliveiraOS
          </a>
        </div>
      </footer>
    </>
  );
}
