let a,
  b,
  c,
  d,
  degree = 0,
  isDegree = false,
  e,
  k,
  kg = 0,
  m,
  n,
  counter = 0,
  sum = 0,
  pow = 0,
  price,
  product = 1;

// //while1

// a=7;
// b=4;
// while(a>b){
//     a-=b;
//     counter++;
// }
// console.log(a);

//=========================

// //while2
// a=7;
// b=2;
// while(a>b){
//     a-=b;
//     counter++;
// }
// console.log(counter);

//=========================

// //while3
// a=7;
// b=2;
// while(a>b){
//     a-=b;
//     counter++;
// }
// console.log(a);
// console.log(counter);

//=========================

//while4

// 27 = 3 * 3 * 3
// ruxsat yo'q / va %

// n=81;
// while(n>product){
//     product *=3;
//     counter++;
// }
// // console.log(product);
// // console.log(counter);

// if((n-product) == 0){
//     isDegree = true;
// }

// if(isDegree){
//     console.log(n + " soni" + " 3 ning darajasi");
// }else {
//     console.log(n + " soni" + " 3 ning darajasi emas");
// }

//=========================

//while5
// 2^4 = 16 = n
// k=4;
// 2*2*2*2 = 16
// n=30;
// while(n>product){
//   product*=2;
//   counter++;
// }

// if((n-product) == 0){
//     isDegree = true;
// }

// if(isDegree){
//   console.log("2 sonining daraja ko'rsatkichi " + counter + " ga teng");
// }else {
//     console.log(n + " soni" + " 2 ning darajasi emas");
// }

//=========================

// // while17

// // n>m
// n=27;
// m=4;
// while(n>m){
//     n-=m;
//     counter++;
// }
// console.log("butun qismi = " + counter);
// console.log("qoldiq qismi = " + n);

//=========================

// //while18

// a = 12345;
// let tempVar = a;
// // 123%10=3 => 12%10=2 => 1%10=>1
// // 123/10=12 => 12/10=1 => 1/10=>0
// let reverseNum = 0;
// while(a>0){
//   reverseNum = (reverseNum * 10) + (a%10);
//   a = parseInt(a/10);
// }
// console.log(tempVar + " soniga teskari raqam = " + reverseNum);

//=========================

// // while19
// a = 12345;
// // 123%10=3 => 12%10=2 => 1%10=>1
// // 123/10=12 => 12/10=1 => 1/10=>0

// while(a>0){
//   sum +=a%10
//   a = parseInt(a/10);
//   counter++
// }
// console.log("Raqamlar yig'indisi = " + sum + " ga teng");
// console.log("Raqamlar soni = " + counter + " ga teng");

//=========================

// // while20
// n = 134;
// let isHave2 = false;
// let aNumber = 0;

// while(n>0){
//   aNumber = n%10;
//   if(aNumber == 2) {
//     isHave2 = true;
//     break;
//   }
//   n = parseInt(n/10);
// }

// if(isHave2){
//   console.log("Ha. kiritilgan sonda 2 bor");
// }else {
//   console.log("Yo'q, kiritilgan sonda 2 yo'q");
// }

//=========================

// // while21
// n = 1234;
// let isHaveOddNumber = false;
// let aNumber = 0;

// while(n>0){
//   aNumber = n%10;
//   if(aNumber%2 !== 0) {
//     isHaveOddNumber = true;
//     break;
//   }
//   n = parseInt(n/10);
// }

// if(isHaveOddNumber){
//   console.log("Ha, kiritilgan sonda toq son bor");
// }else {
//   console.log("Yo'q, kiritilgan sonda toq son yo'q");
// }


// //while22

// n = 16;
// // 1 va o'ziga bo'linishi kerak
// let isPrime = false;
// let numberOfDividers = 0;
// let diveder = 1;

// while(n>=diveder){
//   if(n%diveder == 0) {
//     numberOfDividers++
//   }
//   diveder++
// }
// if(numberOfDividers==2){
//   console.log("Kiritilgan " + n + " soni" + " TUB son");
// }else {
//   console.log("Yo'q, kiritilgan son TUB son emas");
// }
