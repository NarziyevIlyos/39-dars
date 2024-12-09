let num = 5;
let str = "10";
let result = num + str;
console.log(result);

num = 5;
str = "10";
result = num + Number(str);
console.log(result);

// qo'shuv operatoridan boshqa arifmetik operatorlar string turdagi sonlarni number turiga aylantiradi.
let a = "5";
let b = 2;
console.log(a * b); // 10

// parseFloat() => float turdagi songa o'zgartiradi
a = "5.5";
console.log(typeof a);
b = parseFloat(a);
console.log(typeof b); // son

// qo'shuv operatori  string turdagi raqam bilan bilan biror amalni bajarsa, uning turi STRING bo'ladi va natijasi operandlar birlashmasi bo'ladi

result = "3" + 2;
console.log(result); // 32

result = "3" + true;
console.log(result); // 3true

result = "3" + undefined;
console.log(result); // 3undefined 

result = "3" + null;
console.log(result); // 3null


//Qo'shuvdan boshqa arifmetik operatorlar string turdagi sonlarni number turiga aylantiradi.

result = "3" - "2";
console.log(result); // 1

result = "3" - 2;
console.log(result); // 1

result = "3" * "2";
console.log(result); // 1

result = "3" * 2;
console.log(result); // 1

result = "6" / "2";
console.log(result); // 3

result = "6" / 2;
console.log(result); // 3

// son bo'lmagan yoki tarkibida sondan tashqari belgi bo'lgan string turdagi qiymat ishtirok etgan arifmetik amalning natijasi => NaN bo'ladi

result = "hello" - "world";
console.log(result); // NaN

result = "4" - "world";
console.log(result); // NaN

result = "hello" - "1";
console.log(result); // NaN

// agar boolean turdagi qiymat bilan arifmetik amal bajarilganda, true = 1 ga teng, false = 0 ga tengligi bois arifmetik amal bajariladi

result = "4" - true;
console.log(result); // 3

result = false - true;
console.log(result); // -1

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

result = 4 / true;
console.log(result); // 4

result = 4 * (true + true );
console.log(result); // 8

// null = 0 ga tengligi bois, u bilan ham arifmetik amal bajarsa bo'ladi
// null = 0
result = 4 + null;
console.log(result); // 4

result = 4 - null;
console.log(result); // 4

result = 4 * null;
console.log(result); // 0

result = 4 / null;
console.log(result); // infinity

// UNDEFINED bilan NUMBER, BOOLEAN, NULL arifmetik amal bajarishga urinish NAN ni qaytaradi

result = 4 * undefined;
console.log(result); // NaN

result = "string" * undefined;
console.log(result); // NaN

result = 4 / undefined;
console.log(result); // NaN

result = 4 - undefined;
console.log(result); // NaN

result = 4 + undefined;
console.log(result); // NaN

result = true * undefined;
console.log(result); // NaN

result = true / undefined;
console.log(result); // NaN

result = true + undefined;
console.log(result); // NaN

result = true - undefined;
console.log(result); // NaN

result = null * undefined;
console.log(result); // NaN

result = null / undefined;
console.log(result); // NaN

result = null + undefined;
console.log(result); // NaN

result = null - undefined;
console.log(result); // NaN


// Number funksiyasi yordamida raqamga aylantirish

result = Number("324");
console.log(result); // 324

result = Number("324e-1");
console.log(result); // 32.4

result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0

// BO'SH STRING va NULL'ni Raqamga aylantirsa NOL bo'ladi

result = Number(null);
console.log(result); // 0

result = Number(" ");
console.log(result); // 0

// Number() funksiyasi ichidagi qiymatni raqamga aylantira olmasa NaN beradi

result = Number("true");
console.log(result); // Nan

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// parseInt(),
// parseFloat(), => funksiyalari ham string turdagi raqamni songa aylantiradi
// Math.floor()
// unary operatori ( + )

result = parseInt("123");
console.log(result); // 123

result = parseFloat("123");
console.log(result); // 123

result = +("123");
console.log(result); // 123

result = Math.floor("123");
console.log(result); // 123

// String() funksiyasi yordamida => boshqa ma'lumot turlarini Stringga aylantirish 

result = String(123);
console.log(result); // "123"

result = String(1 + 2);
console.log(result); // "3"

result = String(null);
console.log(result); // "null"

result = String(undefined);
console.log(result); // "undefined"

result = String(NaN);
console.log(result); // "NaN"

result = String(true);
console.log(result); // "true"

result = String(false);
console.log(result); // "false"

// toString() funksiyasi yordamida => boshqa ma'lumot turlarini Stringga aylantirish 


// sonni guruhlash operatori ichida yozish orqali, toString() funksiyasidan foydalanib, uni stringga o'zgartirish mumkin
result = (324).toString();
console.log(result); // "324"

result = true.toString();
console.log(result); // "true"

// Ammo UNDEFINED bilan NULL'ni toString() funksiyasi yordamida stringga o'tkazib bo'lmaydi

// result = undefined.toString();
// console.log(result); // undefined xossasini o'qib bo'lmaydi

// result = null.toString();
// console.log(result); // null xossasini o'qib bo'lmaydi

// BOOLEAN() funksiyasi yordamida turni boolean qiymatga aylantirish

result = Boolean(" ");
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false

// falsy qiymatlarga quyidagilar kiradi: 

// 1) 0;
// 2) -0;
// 3) 0n;
// 4) false;
// 5) undefined;
// 6) null;
// 7) NaN;
// 8) "bo'sh string";

// shulardan boshqa qiymatlar TRUTHY qiymatlar hisoblanadi. 

// TRUTHY qiymatlarga:

// 1) har qanday raqam => 1, -1, 3.14 ...
// 2) Bo'sh bo'lmagan string => " ", "Hello", "\n" va boshqalar;
// 3) har qanday obyekt: { }, [ ];
// 4) Date, Function va boshqa turdagi obyektlar






