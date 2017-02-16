import React from 'react'
import { Link } from 'react-router'

const Article = ({article}) => {
  console.log(article)
  return (
    <section>
      <article className={'article'}>
        <div className={'tags'}>
          {article.tags.map((tag, index) => (
            <Link to={{ pathname: `/tag`, query: { keyword: tag } }} key={index}>
              <span className={'tag'}>{tag}</span>
            </Link>
          ))}
        </div>
        <p className={'post__title'}>{article.title}</p>
        <div dangerouslySetInnerHTML={{ __html: article.text}} />
      </article>
    </section>
  )
}

export default Article
