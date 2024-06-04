import React from 'react'

export default function BT8() {
    let myFind = (arr: number[], n: number, cb: Function) => {
        for (let i = 0; i < arr.length; i++) {
          if (cb(arr[i], n)) {
            return arr[i];
          }
        }
        return null;
      };
      
      let arr1 = [1, 2, 3, 4, 5, 2, 7];
      const callback = (arr: number, n: number) => arr === n;
      const result = myFind(arr1, 2, callback);
      console.log(result);
  return (
    <div>BT8</div>
  )
}
