import React from 'react'

export default function BT10() {
    const numbers:number[]=[1,2,3,2,5,6];
    let myFindIndex = (arr: number[], n: number, cb: Function) => {
        for (let i = 0; i < arr.length; i++) {
          if (cb(arr[i], n)) {
            return i;
          }
        }
        return -1;
      };
      
      const callback = (arr: number, n: number) => arr === n;
     let result=myFindIndex(numbers,2,callback);
      console.log(result);
  return (
    <div>BT10</div>
  )
}
