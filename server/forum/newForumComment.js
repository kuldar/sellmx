const shortid = require('shortid')
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@')

export default async event => {
  const id = shortid.generate()
  event.data.shortId = id
  return { data: event.data }
}