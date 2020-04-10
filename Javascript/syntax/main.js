//
// ─── COMMENTS: ──────────────────────────────────────────────────────────────────
//
// single line
/*
multi
line
*/

// ─── DECLARING VARIABLES: ───────────────────────────────────────────────────────

// var nama = "budi";

// let nama = "budi";
// nama = "citra";
// const umur = 18;
// umur = 16;

//
// ─── LOGGING TO THE CONSOLE: ────────────────────────────────────────────────────
//

// let x = "nama saya budi";
// console.log(17);
// console.info(x);
// console.warn(x);
// console.error(x);

//
// ─── TYPES OF VALUES: ───────────────────────────────────────────────────────────
//
// PRIMITIVE:
// ----------
// booleans
// let x = false;
// console.log(x);
// console.log(typeof x);

// numbers
// let x = 10.5;
// console.log(x);
// console.log(typeof x);

// strings
// let x = 'a';
// console.log(x);
// console.log(typeof x);

// undefined
// let x;
// console.log(x);
// console.log(typeof x);

// null
// let x = null;
// console.log(x);
// console.log(typeof x);

// symbols
// bigInts
//
// NON PRIMITIVE:
// ---------
// function
// object

//
// ─── OPERATORS: ─────────────────────────────────────────────────────────────────
//
// booleans
// let x = false && true;
// let y = false || true;
// console.log(x, y);

// numbers
// let x = 2 * 3;
// let y = 9 / 3;
// let z = 9 + 3;
// let a = 9 - 3;
// let b = 10 % 3;
// console.log(x, y, z, a, b);

// strings
// let x = "nama " + "saya";
// console.log(x);

// Comparison
// let x = 3 < 6;
// let y = 3 > 6;
// let z = 3 <= 6;
// let a = 3 >= 6;
// let b = 3 === 6;
// let c = 3 !== 6;
// console.log(x, y, z, a, b, c);


//
// ─── CONTROL FLOW STATEMENTS: ───────────────────────────────────────────────────
//
// if
// let x = 4;
// if (x !== 4) {
//     console.log("disini")
// } else if (x > 4) {
//     console.log("> 4")
// } else {
//     console.log("lainnya")
// }

// switch
// let x = 5;
// switch (x) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;

//     default:
//         console.log("default")
//         break;
// }

//
// ─── LOOPING: ───────────────────────────────────────────────────
//
// for
// for (let x = 0; x < 5; x++) {
//     console.log(x);
// }

// do while
// while
// for in
// for of

//
// ─── ORDINARY FUNCTION DECLARATIONS: ────────────────────────────────────────────
//
// let addVar = function add(a, b) {
//     return a + b;
// }
// console.log(addVar(3, 5));

//
// ─── ARROW FUNCTION EXPRESSIONS ─────────────────────────────────────────────────
//
// let add = a => a + 100;
// console.log(add(3))

//
// ─── OBJECTS: ───────────────────────────────────────────────────────────────────
//
// let orang = {
//     nama: "budi",
//     umur: 18,
//     sudahMenikah: false,
//     tanggalLahir: {
//         tanggal: 18,
//         bulan: 1,
//     },
//     add: (a, b) => a + b
// };
// console.log(orang.jenisKelamin);

//
// ─── ARRAY: ─────────────────────────────────────────────────────────────────────
//
// let arr = ["budi", 18, false, { tanggal: 18, bulan: 1 }, (a, b) => a + b, [1, 2, 3]];
// console.log(arr[10]);

//
// ─── MORE DATA STRUCTURES ───────────────────────────────────────────────────────
//
// - MAP
// - SET