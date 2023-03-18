export const getSlug = (slug) => {
  if (slug && slug.length) {
    return slug[0]
  } else {
    return null
  }
}
