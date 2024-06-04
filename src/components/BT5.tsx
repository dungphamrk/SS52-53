import React from 'react'

export default function BT5() {


    function checkCondition (value: boolean, cb =((i:boolean)=>{console.log(`Điều kiện trả về :${i}`);}) ){
      cb(value);
    }
    checkCondition(true)
  return (
    <div>

    </div>
  )
}
