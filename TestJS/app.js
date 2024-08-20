let dt = new Date(2020, 07, 25);
let dt1 = new Date(2020, 01, 22);
let n = dt.getTime() - dt1.getTime();
n = n / 1000 / 3600 / 24;
console.log(n);
