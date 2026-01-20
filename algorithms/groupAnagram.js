class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    //Creamos nuestro hashMap
    const hashMap = {};
    // iteramos sobre todas los string disponibles en el array
    // y obtenemos su key con el sort. y verifiamos si existe
    // su no existe hacemos un bucket sort
    // evaluamos si la key de las demas palabras del array existe
    // pusheamos el str a la key correspondiente
    for (let str of strs) {
      const key = str.split("").sort().join("");
      if (!hashMap[key]) {
        hashMap[key] = [];
      }
      hashMap[key].push(str);
    }
    return Object.values(hashMap);
  }
}
