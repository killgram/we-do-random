/**
 * @description line separator
 * @param {string} str current string
 * @param {number} size how many pieces to divide
 * @return {Array<string>}
 */
const chunkSubstr = (str: string, size: number) => {
  const numChunks = Math.ceil(str.length / size)
  const chunks = new Array(numChunks)

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size)
  }

  return chunks
}

export { chunkSubstr }
