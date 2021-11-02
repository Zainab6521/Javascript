'use strict';
// let x = 23;
// if (x === 23) {
//   console.log(23);
// }
// // const arr = [12, 5, -5, 0, 4];
// const arr = [17, 21, 23];
// const printForecast = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${arr[i]} C in ${i + 1} day.`);
//   }
// };
// printForecast(arr);

//problem for calculate Amplitude
const temperatures = [-3, -7, -9, -1, 'error', 4, 8, 5, 19];
const calcAmplitude = temps => {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  // console.log(max, min);
  return max - min;
};
const amplitude = calcAmplitude(temperatures);
console.log(amplitude);
