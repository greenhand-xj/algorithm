/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const n = board.length
  const m = board[0].length
  // 构建字典树
  const trie = new Trie()
  for (const word of words) {
    trie.insert(word)
  }
  const ans = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dfs(i, j, trie.root)
    }
  }
  // 四个方向搜索
  function dfs(i, j, node) {
    if (i < 0 || i >= n || j < 0 || j >= m || board[i][j] === '#') return 0
    const temp = board[i][j]
    const path = board[i][j].charCodeAt(0)
    const trieNode = node.nexts.get(path)
    if (!trieNode) return 0
    if (trieNode.pass === 0) return 0
    board[i][j] = '#'
    let fix = 0
    if (trieNode.end) {
      ans.push(trieNode.end)
      trieNode.end = null
      fix++
    }
    fix += dfs(i + 1, j, trieNode)
    fix += dfs(i - 1, j, trieNode)
    fix += dfs(i, j + 1, trieNode)
    fix += dfs(i, j - 1, trieNode)
    trieNode.pass -= fix
    board[i][j] = temp
    return fix
  }
  return ans
}

class TrieNode {
  constructor() {
    this.pass = 0
    this.end = null
    this.nexts = new Map()
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    node.pass++
    for (let i = 0, len = word.length, path; i < len; i++) {
      path = word.charCodeAt(i)
      if (!node.nexts.get(path)) {
        node.nexts.set(path, new TrieNode())
      }
      node = node.nexts.get(path)
      node.pass++
    }
    node.end = word
  }
}
