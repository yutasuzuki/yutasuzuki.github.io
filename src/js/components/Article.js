import React from 'react'

const Article = ({article}) => {
  console.log('Article', article)
  return (
    <section className={'post'}>
      <article className={'article'}>
        <h1 className={'postTitle'}>{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.text} } />
      </article>
    </section>
  )
}

export default Article
