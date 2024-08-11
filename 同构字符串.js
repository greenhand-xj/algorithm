/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const s2tMap = new Map()
  const t2sMap = new Map()
  for (let i = 0, n = s.length; i < n; i++) {
    if (s2tMap.has(s[i]) && s2tMap.get(s[i]) !== t[i]) return false
    if (t2sMap.has(t[i]) && t2sMap.get(t[i]) !== s[i]) return false
    s2tMap.set(s[i], t[i])
    t2sMap.set(t[i], s[i])
  }
  return true
}
