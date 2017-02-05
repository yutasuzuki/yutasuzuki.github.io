import React from 'react'

const Article = ({article}) => {
  console.log('Article', article)
  return (
    <section className={'post'}>
      <article className={'article'}>
        <p className={'post__title'}>{article.title}</p>
        <div dangerouslySetInnerHTML={{ __html: article.text} } />
      </article>
    </section>
  )
}

export default Article
