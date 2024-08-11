class TrieNode {
  constructor() {
    this.children = new Map()
    this.pass = 0
    this.end = 0
  }
}
class Trie {
  root
  constructor() {
    this.root = new TrieNode()
  }

  insert(word) {
    let node = this.root
    node.pass++

    for (let i = 0; i < word.length; i++) {
      let path = word.charCodeAt(i)
      if (!node.children.has(path)) {
        node.children.set(path, new TrieNode())
      }
      node = node.children.get(path)
      node.pass++
    }
    node.end++
  }

  search(node, word, index) {
    if (index === word.length) {
      return node.end > 0
    }

    let path = word.charCodeAt(index)
    if (path !== '.'.charCodeAt(0)) {
      if (!node.children.has(path)) return false
      return this.search(node.children.get(path), word, index + 1)
    } else {
      for (let child of node.children.values()) {
        if (this.search(child, word, index + 1)) return true
      }
      return false
    }
  }
}

class WordDictionary {
  constructor() {
    this.trie = new Trie()
  }

  addWord(word) {
    this.trie.insert(word)
  }

  search(word) {
    return this.trie.search(this.trie.root, word, 0)
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wordDictionary = new WordDictionary()
wordDictionary.addWord('bad')
wordDictionary.addWord('dad')
wordDictionary.addWord('mad')
wordDictionary.search('pad') // 返回 False
wordDictionary.search('bad') // 返回 True
wordDictionary.search('.ad') // 返回 True
wordDictionary.search('b..') // 返回 True
