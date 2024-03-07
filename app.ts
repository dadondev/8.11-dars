// function myFunction(a: number, b: number): number {
//   return a + b;
// }

// console.log(myFunction(1, 2));

// function myFunction(a: number, b: number): boolean {
//   return a === b;
// }

// console.log(myFunction(1, 2));

// function myFunction(a: any): string {
//   return typeof a;
// }
// console.log(myFunction(1));

// function myFunction(a: string, n: number): string {
//   return a.charAt(n - 1);
// }
// console.log(myFunction("salom", 1));

// function myFunction(a: string): string {
//   return a.slice(3);
// }

// console.log(myFunction("salom"));

// function myFunction(str: string): string {
//   return str.slice(-3);
// }
// console.log(myFunction("salom"));

// function myFunction(a: string): string {
//   return a.slice(0, 3);
// }
// console.log(myFunction("salom"))

// function myFunction(a: string): number {
//   return a.indexOf("is");
// }

// console.log(myFunction("Islom"))

// function myFunction(a: string): string {
//   return a.slice(0, a.length / 2);
// }
// console.log(myFunction("Farhod"))

// function myFunction(a: string): string {
//   return a.slice(0, -3);
// }
// console.log(myFunction("Farhod"))

// function myFunction(a: number, b: number): number {
//   return (b / 100) * a;
// }

// console.log(myFunction(19, 100));

// function myFunction(
//   a: number,
//   b: number,
//   c: number,
//   d: number,
//   e: number,
//   f: number
// ): number {
//   return (((a + b - c) * d) / e) ** f;
// }
// -----------------------------------------------

// function myFunction(a: string, b: string): string {
//   return a.includes(b) ? b + a : a + b;
// }
// myFunction('cheese', 'cake')

// function myFunction(a: number): boolean {
//   return a % 2 === 0;
// }

// myFunction(2);

// function myFunction(a: string, b: string): number {
//   return b.split(a).length - 1;
// }
// console.log(myFunction("a", "salam"));

// function myFunction(a: number): boolean {
//   return Math.trunc(a) === a;
// }

// console.log(myFunction(7));

// function myFunction(a: number, b: number): number {
//   return a < b ? a / b : a * b;
// }
// console.log(myFunction(7, 28));

// function myFunc(a: number): number {
//   return Number(a.toFixed(2));
// }

// console.log(myFunc(12.10201));

// function myFunc(a: number): number[] {
//   let num = a.toString().split("");
//   return num.map((e) => Number(e));
// }

// console.log(myFunc);

// function myFunc(a: number[], n: number): number {
//   return a[n - 1];
// }
// console.log(myFunc([1, 2, 3, 4, 5], 3));

// function myFunc(a: number[]): number[] {
//   return a.slice(3);
// }
// console.log(myFunc([1, 2, 3, 45]));

// function myFunc(a: number[]): number[] {
//     return a.slice(-3);
//   }
//   console.log(myFunc([1, 2, 3, 45]));

// function myFunc(a: number[]): number[] {
//     return a.slice(0, 3);
//   }
//   console.log(myFunc([1, 2, 3, 45]));

// function myFunc(a: number[], n:number): number[] {
//     return a.slice(-n);
//   }
//   console.log(myFunc([1, 2, 3, 45], 2));

// function myFunc(a: number[], n:number): number[] {
//     return a.filter((e)=>e!==n)
//   }
//   console.log(myFunc([1, 2, 3, 45], 2));

// function myFunc(a: number[]): number {
//     return a.length
//   }
//   console.log(myFunc([1, 2, 3, 45]));

// function myFunc(a: number[]): number {
//   return a.filter((el) => el < 0).length;
// }

// console.log(myFunc([1, 2, 3, -1]));

// function myFunc(a: number[]): number[] {
//   return a.sort((a, b) => b - a);
// }

// console.log(myFunc([1, 2, 3, -1]));

// function myFunc(a: number[]): number {
//   return a.reduce((acc, i) => acc + i, 0);
// }
// console.log(myFunc([1, 2, 3, -1]));

// function myFunc(arr: number[]): number {
//   return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
// }
// console.log(myFunc([1, 2, 3, -1]));

// function myFunc(arr: string[]): string {
//   return arr.reduce((acc, el) => (acc.length < el.length ? el : acc), "");
// }
// console.log(myFunc(["salom", "help"]));

// function myFunc(arr: any[]): boolean {
// return new Set(arr).size === 1
//   let cur = arr[0];
//   let theSame = true;
//   arr.forEach((e) => {
//     if (e !== cur) theSame = false;
//   });
//   return theSame;
//   return arr.reduce((acc, el) => (acc === el ? el : false), arr[0]);
// }

// function myFunc(...arr: any[]) {
//   return arr.flat();
// }

// console.log(myFunc([1, 2, 3, 4], [1, 2, 3]));

// function myFunc(arr: any[]):any[] {
//   return arr.sort((a, b) => {
//     // Compare property b of objects a and b
//     return a.b - b.b;
//   });
// }

// function myFunt(a: number[], b: number[]): number[] {
//   const arr = new Set([...a, ...b]);
//   return [...arr].sort();
// }

// function myFunc(a: { country }): string {
//   return a.country;
// }

// function myFunction(a: { "prop-2" }): any {
//   return a["prop-2"];
// }

// function myFunc(a: {}, b: string): boolean {
//   return b in a;
// }
// console.log(myFunc({ x: "a", y: "b", z: undefined }, "9"));

// function myFunc(a:{}, b:any):boolean{
//    return  Boolean(a[b])
// }

// function myFun(a: string): { key } {
//   return {
//     key: a,
//   };
// }

// function myFun(a: string, b: string): {} {
//   return {
//     [a]: b,
//   };
// }

// function myFun(a: any[], b: any[]): {} {
//   return a.reduce((acc, cur, i) => ({ ...acc, [cur]: b[i] }), {});
// }

// console.log(myFun(["a", "b", "c"], [1, 2, 3]));

// function myFunction(a: {}): string[] {
//   return Object.keys(a);
// }

// console.log(myFunction({ a: 1, 2: 3 }));

// function myFunction(obj: { a: { b } }): any {
//   return obj?.a?.b;
// }

// function myFun(obj: {}): number {
//   return Number(Object.values(obj).reduce((acc, e) => acc + e, 0));
// }

// function myFun(obj: {}): {} {
//   const { b, ...rest } = obj;
//   return rest;
// }

// function myFunc(x: {}, y: { b }): {} {
//   const { b, ...rest } = y;
//   return { ...y, ...rest, d: b };
// }

// function myFunc(obj: {}, n: number) {
//   return Object.keys(obj).reduce(
//     (acc, e, i) => ({ ...acc, [e]: obj[e] * n }),
//     {}
//   );
// }

// console.log(myFunc({ a: 1, b: 2 }, 2));

// function myFunction(a: Date, b: Date): boolean {
//   return a.getTime() === b.getTime();
// }

// function func(a:Date, b:Date):number {
//     const timeDiff = b.getTime() - a.getTime();
//     return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//   }
//   func(new Date("2000-01-01"), new Date("2020-06-01"));

// function func(a: Date, b: Date): boolean {
//   return a.getDay() === b.getDay();
// }

// function myFun(a: Date, b: Date): boolean {
//   return Math.abs(a - b) / 1000 / 60 <= 60;
// }

// function myFun(a: Date, b: Date): boolean {
//   return a < b;
// }

// function myFun(set: Set, b: number): boolean {
//   return set.has(b);
// }

// function myFun(set: Set): any[] {
//   return [...set]
// }

// function myFun(a: Set, b: Set): Set {
//   const result = new Set(a);
//   b.forEach((el) => result.add(el));
//   return result;
// }

// function myFun(a:any,b:any,c:any):Set{
//     return new Set([a,b,c])
// }
