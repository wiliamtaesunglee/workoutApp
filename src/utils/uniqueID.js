export const uniqueID = () => {
  let ids = []
  for (let init = 0; init < 4; init++) {
    ids.push(Math.random().toString(16).slice(-4))
  }

  return ids.join('-')
}
