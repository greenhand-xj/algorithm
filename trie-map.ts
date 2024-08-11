class TrieNode {
  pass: number = 0
  end: number = 0
  nexts: Map<number, TrieNode | null> = new Map()
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
      path = word.charCodeAt(i)
      if (!node.nexts.get(path)) {
        node.nexts.set(path, new TrieNode())
      }
      node = node.nexts.get(path)!
      node.pass++
    }
    node.end++
  }
  findNode(word: string): TrieNode | null {
    let node = this.root
    for (let i = 0, len = word.length, path: number; i < len; i++) {
      path = word.charCodeAt(i)
      if (!node.nexts.get(path)) {
        return null
      }
      node = node.nexts.get(path)!
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
      path = word.charCodeAt(i)
      if (--node.nexts.get(path)!.pass === 0) {
        node.nexts.set(path, null)
        return
      }
      node = node.nexts.get(path)!
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