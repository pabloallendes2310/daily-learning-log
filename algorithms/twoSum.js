// class Solution {
//   /**
//    * @param {number[]} nums
//    * @param {number} target
//    * @return {number[]}
//    */
//   twoSum(nums, target) {
//     const hashMap = {};
//     for (let i = 0; i < nums.length; i++) {
//       hashMap[nums[i]] = i;
//     }

//     for (let i = 0; i < nums.length; i++) {
//       let complement = target - nums[i];

//       if (hashMap[complement]) return [hashMap[complement], i];

//       hashMap[nums[i]] = i;
//     }
//   }
// }

// Respuesta sugerida

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const hashMap = {};

    // iteramos por cada valor del arreglo de numeros

    for (let i = 0; i < nums.length; i++) {
      // calculamos el complemente que es uno de los posibles valores
      let complement = target - nums[i];
      // si el complemente existe en el arreglo de hashmap retornamos el indice del complemente y
      //  el indice de iteracion
      if (hashMap[complement] !== undefined) {
        return [hashMap[complement], i];
      }

      // si no existe agregamos el numero actual y su indice

      hashMap[nums[i]] = i;
    }

    return [];
  }
}
