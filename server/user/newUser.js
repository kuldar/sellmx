const slugify = require('slugify')
const shortid = require('shortid')

export default async event => {
  const { name } = event.data
  const kebabName = slugify(name, { lower: true })
  const suffix = shortid.generate()
  const slug = `${kebabName}-${suffix}`

  event.data.slug = slug

  return { data: event.data }
}