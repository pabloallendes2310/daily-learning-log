class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    // Hacemos las cuentas como un hashMap de cada letra disponible y sumamos 1 si existe
    const freqMap = {};
    for (let i = 0; i < t.length; i++) {
      freqMap[t[i]] = (freqMap[t[i]] || 0) + 1;
    }
    // Verificamos si existe la letra de la otra palabra en
    // objeto hashMap si existe le restamos 1 a la frecuencia si todo llega a 0 es un enagrama

    for (let i = 0; i < s.length; i++) {
      if (!freqMap[s[i]]) return false;
      freqMap[s[i]] -= 1;
    }

    return true;
  }
}

Solution.isAnagram();
