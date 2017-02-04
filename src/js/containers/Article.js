import React from 'react'
import { connect } from 'react-redux'
import showdown from 'showdown'
import ArticleComponent from '../components/Article'

const mapStateToProps = (state) => {
  const id = state.routing.locationBeforeTransitions.query.post
  const posts = state.PostsReducer.posts
  const post = posts.filter((post) => {
    if (post.id == id) {
      return post
    }
  })

  const article = {
    id: post[0].id,
    title: post[0].title,
    text: convertMarkdownToHTML(post[0].text)
  }
  return {
    article
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const Article = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleComponent)

const convertMarkdownToHTML = (md) => {
  const converter = new showdown.Converter()
  const convertText = md.split('\/n').map((text) => {
    return converter.makeHtml(text)
  });
  return convertText.join('')
}

export default Article
