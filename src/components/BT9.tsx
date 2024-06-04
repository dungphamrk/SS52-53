import React from 'react'

export default function BT9() {
    const numbers:number[]=[1,2,3,2,5,6];
    let result:number[]|any=[];
    let myFilter = (arr: number[], n: number, cb: Function) => {
        for (let i = 0; i < arr.length; i++) {
          if (cb(arr[i], n)) {
            result.push(arr[i])
          }
        }
        if (result.length) {
          return result;
        }
        return null;
      };
      
      const callback = (arr: number, n: number) => arr === n;
      result=myFilter(numbers,2,callback);
      console.log(result);
  return (
    <div>BT9</div>
  )
}
