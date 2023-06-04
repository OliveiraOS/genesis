import Image from "next/image";

interface TreeArticleProps {
  title: string;
  description: string;
  href: string;
  imgUrl: string;
  side: "left" | "right";
}

export const TreeArticle = (props: TreeArticleProps) => {
  const side = props.side === "left" ? "left-4 sm:left-8" : "right-4 sm:right-8";

  return (
    <article className="relative">
      <div className="relative w-full h-[512px]">
        <Image src={props.imgUrl} alt={props.title} fill className="object-cover" />
      </div>

      <div className="absolute inset-0 bg-black/25" />

      <div className={`flex flex-col justify-between items-center w-[calc(100%-32px)] max-w-[400px] absolute top-4 bottom-4 sm:top-8 ${side} sm:bottom-8 bg-zinc-400/30 backdrop-blur-lg rounded p-10`}>
        <h3 className="text-4xl font-bold">{props.title}</h3>

        <p className="text-2xl font-medium text-center">{props.description}</p>

        <a href={props.href} className="bg-zinc-300 py-6 px-12 rounded-lg text-base-100 hover:bg-zinc-300/80 transition-colors duration-150">Ver mais</a>
      </div>
    </article>
  )
}