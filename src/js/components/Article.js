import React from 'react'

const Article = ({article}) => {
  console.log(article)
  return (
    <section>
      <article className={'article'}>
        <div className={'tags'}>
          {article.tags.map((tag, index) => <span className={'tag'} key={index}><a>{tag}</a></span>)}
        </div>
        <p className={'post__title'}>{article.title}</p>
        <div dangerouslySetInnerHTML={{ __html: article.text}} />
      </article>
    </section>
  )
}

export default Article
