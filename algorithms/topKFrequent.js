class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    // creamos nuestro hashMap
    const hashMap = {};

    for (let num of nums) {
      // Iteramos por cada numero y verificamos si existe la llave del num
      //  si no existe la inicializamos en 0
      // para luego sumar 1 mas si se repite
      if (!hashMap[num]) {
        hashMap[num] = 0;
      }
      hashMap[num] += 1;

      // esto da algo como { '1': 1 ,'2':2, }
    }

    // creamos un nuevo array con las entries del hashMap
    let newArray = Object.entries(hashMap);
    // luego obtemos todas las valores del nuevo array,
    // que seria 1,2
    const resultado = newArray
      .sort((a, b) => b[1] - a[1]) // ordenamos por valor mayor
      .slice(0, k) // cortamos de 0 a k frecuencia
      .map((pair) => pair[0]); // y mapeamos la llave del valor con mas frecuencia
    return resultado;
  }
}
