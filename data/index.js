'use strict'
// Don't touch
const fs = require('fs')
const path = require('path')
const util = require('util')

const md_dir = path.join(__dirname, 'md')

fs.readdir(md_dir, (err, files) =>{
  let items = []
  let settings = {
    id: [],
    titles: [],
    promises: []
  }
  // 記事要素になる配列を作成
  files.forEach((file) => {
    const fp = path.join(md_dir, file)
    const st = fs.statSync(fp)
    const id = st.birthtime.getTime()
    const title = file.replace( /.md/g , '' )
    settings.id.push(id)
    settings.titles.push(title)
    settings.promises.push(readMarkdown(fp))
  })

  // Markdownファイルが全て取得できたら配列に入れて、data.jsonに書き出す
  Promise.all(settings.promises).then((texts) => {
    texts.forEach((str, index) => {
      let text = str
      const defaultTags = text.match(/(?!#\s)(?!##+)(#.+?\s)/g)
      const tags = defaultTags.map((tag) => {
        text = text.replace(tag, '')
        return tag.replace('#', '').replace(' ','').replace(/\n/, '')
      })
      items.push({
        id: settings.id[index] + index,
        title: settings.titles[index],
        text,
        tags
      })
    })
    fs.writeFile(`${__dirname}/data.json`, JSON.stringify(items))
  })
})

// readFileをPromiseを返すように変更
const readMarkdown = (fp) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fp, {
      encoding: 'utf-8'
    }, (err, text) => {
      resolve(text)
    })
  })
}
