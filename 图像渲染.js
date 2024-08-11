/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const oldColor = image[sr][sc]
  const n = image.length
  const m = image[0].length
  function dfs(i, j) {
    if (i < 0 || i >= n || j < 0 || j >= m || image[i][j] !== oldColor) return
    image[i][j] = color
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }
  if (oldColor !== color) dfs(sr, sc)
  return image
}
