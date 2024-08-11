class TrieNode {
  pass: number = 0
  end: number = 0
  nexts: (TrieNode | null)[] = new Array(26).fill(null)
}

class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string) {
    let node = this.root
    node.pass++
    for (let i = 0, len = word.length, path: number; i < len; i++) {
      path = word.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!node.nexts[path]) {
        node.nexts[path] = new TrieNode()
      }
      node = node.nexts[path]!
      node.pass++
    }
    node.end++
  }
  findNode(word: string): TrieNode | null {
    let node = this.root
    for (let i = 0, len = word.length, path: number; i < len; i++) {
      path = word.charCodeAt(i) - 'a'.charCodeAt(0)
      if (!node.nexts[path]) {
        return null
      }
      node = node.nexts[path]!
    }
    return node
  }

  countWordsEqualTo(word: string): number {
    const node = this.findNode(word)
    return node ? node.end : 0
  }

  countWordsStartingWith(prefix: string): number {
    const node = this.findNode(prefix)
    return node ? node.pass : 0
  }

  erase(word: string): void {
    const count = this.countWordsEqualTo(word)
    if (count === 0) return
    let node = this.root
    node.pass--
    for (let i = 0, len = word.length, path: number; i < len; i++) {
      path = word.charCodeAt(i) - 'a'.charCodeAt(0)
      if (--node.nexts[path]!.pass === 0) {
        node.nexts[path] = null
        return
      }
      node = node.nexts[path]!
    }
    node.end--
  }
}

const trie = new Trie()
trie.insert('acb')
trie.insert('acc')
trie.insert('ac')
trie.insert('acb')
trie.insert('cab')
console.log(trie.countWordsEqualTo('acb'))
trie.erase('acb')
console.log(trie.countWordsEqualTo('acb'))
console.log(trie.countWordsStartingWith('ac'))

export { }