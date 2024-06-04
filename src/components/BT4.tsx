import React from 'react'

export default function BT4() {
    let a=1;
    let arr: number[] = [1, 2, 3, 4, 5, 6];
    function callback(){ 
      console.log(`Đây là số thứ ${a}`);
      a++;
      
      displayNumbers(1000,callback)
     }
    function displayNumbers(time:number,callback:Function){
     setTimeout(callback,time)
    }
    displayNumbers(1000,callback)
  return (
    <div>BT4</div>
  )
}
