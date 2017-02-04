'use strict'
// Don't touch
const fs = require('fs');
const path = require("path");
const util = require("util");

const md_dir = path.join(__dirname, "md");

fs.readdir(md_dir, (err, files) =>{
  let items = []
  files.forEach((file) => {
    const fp = path.join(md_dir, file);
    const st = fs.statSync(fp);
    const id = st.birthtime.getTime()
    // TODO:readFileは非同期処理のため、promiseを返すように変更
    fs.readFile(fp, {
      encoding: 'utf-8'
    }, (err, text) => {
      items.push({
        id: id,
        title: file.replace( /.md/g , '' ),
        text: text
      })
      fs.writeFile(`${__dirname}/data.json`, JSON.stringify(items));
    });
  });
});
