import React from 'react'
import { connect } from 'react-redux'
import showdown from 'showdown'
import hljs from 'highlight.js'
import ArticleComponent from '../components/Article'

const mapStateToProps = (state) => {
  const id = state.routing.locationBeforeTransitions.query.post
  const posts = state.PostsReducer.posts
  const post = posts.filter((post) => {
    if (post.id == id) {
      return post
    }
  })

  let htmlText = convertMarkdownToHTML(post[0].text)
  const preTags = htmlText.match(/<pre>[\s\S]*?<\/pre>/g)
  if (preTags) {
    preTags.forEach((preTag) => {
      const pre = preTag.match(/<pre><code[\s\S]*?\">/i)
      const code = pre.input.replace(pre[0], '').replace(/<\/code><\/pre>/, '')
      console.log(code)
      const tag = hljs.highlightAuto(sanitize.decode(code))
      htmlText = htmlText.replace(preTag, `${pre[0]}${tag.value}</code></pre>`)
    });
  }
  console.log('htmlText', htmlText)

  const article = {
    id: post[0].id,
    title: post[0].title,
    text: htmlText
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

const convertStringToDom = (string) => {
  var parser = new DOMParser();
  var doc = parser.parseFromString(string, 'text/html');
  return doc.body.childNodes[0];
}

const sanitize = {
  encode : (str) => {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },
  decode: (str) => {
    return str.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, '\'').replace(/&amp;/g, '&');
  }
}

export default Article
