import React from "react";

export default function BT3() {
  function processArray(
    arr: number[],
    callback: Function = (i: number) => {
      console.log(`Đây là phần tử thứ ${i}`);
    }
  ) {
    let time = 1000;
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        callback(i);
      }, time);
      time += 1000;
    }
  }
  let arr: number[] = [1, 2, 3, 4, 5, 6];
  processArray(arr);
  return <div>Bài 3</div>;
}
