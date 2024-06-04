import React from 'react'

export default function BT1() {

    function callback(a:number,b:number){
        console.log(a+b);
    }
    function calculate(a:number,b:number,callback:Function) {
      callback(a,b);
    }
    calculate(0.5,0.5,callback);
  return (
    <div>
       <p>Bài 1</p>
    </div>
  )
}
