import React from 'react'

export default function BT2() {
   function delayedCallback(a:number,callback:Function=(()=>{console.log(2);})){
       setTimeout(callback,a)
   }
   delayedCallback(2);
  return (
    <div>
        <p>Bài 2</p>
    </div>
  )
}
