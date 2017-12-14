const slugify = require('slugify')
const shortid = require('shortid')

export default async event => {
  const { title } = event.data
  const kebabTitle = slugify(title, { lower: true })
  const suffix = shortid.generate()
  const slug = `${kebabTitle}-${suffix}`

  event.data.slug = slug

  return { data: event.data }
}