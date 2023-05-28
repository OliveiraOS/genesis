interface TreeArticleProps {
  title: string
  description: string
  href: string
}

export const TreeArticle = (props: TreeArticleProps) => {
  return (
    <article>
      <h3>{props.title}</h3>

      <p>{props.description}</p>

      <a href={props.href}>Ver mais</a>
    </article>
  )
}