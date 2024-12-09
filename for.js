let a,
  b,
  c,
  d,
  e,
  k,
  kg = 0,
  m,
  n,
  counter = 0,
  sum = 0,
  price,
  product = 1;

//for1
k = 4;
n = 5;
for (let i = 1; i <= n; i++) {
  console.log(i + " = " + k);
}

// //for2
// a = 2;
// b = 10;
// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

// //for3
// // a<b bo'lsin
// a = 2;
// b = 10;
// for (let i = b - 1; i > a; i--) {
//   console.log(i);
//   counter++;
// }
// console.log("Jami sonlar soni = " + counter);

// // for4
// price = 12000;
// for(let i=1; i<=10; i++){
//   console.log(i + " kg narxi = " + (price*i));
// }

// // for5
// price = 12000;
// for(let i=1; i<=10; i++){
//   console.log((kg+(i/10)) + " kg narxi = " + (price*(i/10)));
// }

// // for6
// price = 12000;
// kg = 1;
// for(let i=1; i<=10; i++){
//   console.log((kg +(i/10)) + "kg narxi = " + (price*(kg + (i/10))));
// }

// //for7
// a=1;
// b=5;
// for (let i = a; i <= b; i++) {
//   sum += i;
// }
// console.log(sum);

// //for8
// a=1;
// b=5;
// for (let i = a; i <= b; i++) {
//   product *= i;
// }
// console.log(product);

// //for9
// a=1;
// b=3;
// for (let i = a; i <= b; i++) {
//   sum += i**2;
// }
// console.log(sum);

// // for10
// n=4;
// for(let i=1; i<=n; i++){
//   sum +=1/i;
// }
// console.log(sum);

// // for11
// n=3;
// for(let i=0; i<n; i++){
//   sum+=(n+i)**2
// }
// console.log(sum);

// //for12
// n=4;
// product=1
// for(let i=1; i<=n; i++){
//   console.log(1+(i/10));
//   product*=(1+(i/10))
// }
// console.log(product);




















































// // 4

// let sumEven=0;
// for(let i=1; i<=n; i++){
//     if(i%2==0){
//         sumEven+=i;
//     }
// }
// console.log(sum);

// alert("Juft sonlar yig'indisi = " + sumEven);

// calculator

// alert(
//   "Jami sonlar ko'paytmasini topuvchi dastur ishga tushdi. Sonni kiriting. To'xtatish uchun 0 ni kiriting."
// );

// let product = 1;
// for (let i = 1; ; ) {
//   i = +prompt("Sonni kiriting. i = ");
//   if (i != 0) {
//     product *= i;
//   } else break;
// }

// alert("Ko'paytma = " + product);

// for3

// let a = +prompt("A sonni kiriting. a = ");
// let b = +prompt("B sonni kiriting. b = ");
// let sum = 0;
// for (let i = b; i >= a; i--) {
//   console.log(i);
//   sum++;
// }
// console.log(sum);

// 5
// 2

// 5-2=3-2=1
//while3
// let m = +prompt("A sonni kiriting. m = ");
// let n = +prompt("B sonni kiriting. n = ");

// // let m=9;
// // let n=2;
// let int = 0;
// let modulus = 0;
// while (m >= n) {
//   console.log(m);
//   m -= n;
//   int++;
//   modulus = m;
// }
// alert(int + " butun " + modulus + " qoldiq");

// console.log(int);
// console.log(modulus);

//////////////////////////////////////////////

// let date = new Date();
// let hour = date.getHours();
// let minute = date.getMinutes();

// if(hour>=9 && minute>=0){
//   // console.log("hour: ", hour, "\n", "minute: ", minute);
//   console.log(hour, ":", minute);
//   console.log("Bank ochiq");
// }else {
//   console.log("Bank yopiq");
// }

// //////////////////////////////////////////////

// function boilWater(callback) {
//     console.log("Boiling water...");
//     setTimeout(() => {
//       console.log("Water is ready!");
//       callback(); // Call the callback when boiling is done.
//     }, 3000); // Simulate 3 seconds of waiting.
//   }

//   function addTeaBag() {
//     console.log("Adding the tea bag.");
//   }

//   boilWater(addTeaBag);

//   function washClothes(callback) {
//     console.log("Washing clothes...");

//     // Simulate time taken for washing
//     setTimeout(() => {
//       console.log("Clothes are washed!");
//       callback(); // Call the second task
//     }, 2000); // 2 seconds to wash clothes
//   }

//   function dryClothes() {
//     console.log("Drying clothes...");
//   }

//   // Start washing and add the drying step as a callback
//   washClothes(dryClothes);
