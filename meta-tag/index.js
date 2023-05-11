import fs from 'fs'
import meta from './meta.js'

const template = fs.readFileSync('./meta-tag/meta.html', 'utf-8')
let output = template.replace(/<!--[\s\S]*?-->/g, '')

const metaList = Object.values(meta).map(Object.entries).flat(1)
metaList.forEach(([key, value]) => {
  if (Array.isArray(value)) {
    value = value.join(', ')
  }

  output = output.replaceAll(`$${key}`, value)
})

const trimed = output.replace(/\n{2,}/gm, '\n').trim()
fs.writeFileSync('./meta-tag/README.text', trimed)
