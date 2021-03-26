function query(strings, ...keys) {
  console.log(strings, keys)

  let result = []
  let params = []
  for (let I in strings) {
    result.push(strings[I])
    result.push('?')
    params.push(keys[I])
  }

  return [result.join(' '), params]
}

export {query}