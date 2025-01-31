'number' + 3 + 3
let x1 = 'number';
x1 = 'number'+3+3;
console.log(x1);
// 3 і 3 перетворилися у строку і результатом стала строка number33//


null + 3
let x = null;
x = null +3;
console.log(x);
// null перетворився на цифру і додався до значення 3//

5 && "qwerty"
let d = 5;
let e = 'qwerty';
let f = d && e;
console.log(f);
//перевіряє значення d оскільки d не false то повертає значення e//


+'40' + +'2' + "hillel";
let ab = "40";
let bc = "2";
let cd = "hillel";
console.log(+ab + +bc + cd);
//дві строки перетворилися на числа а потім на строку та утворили строку 42hillel//


'10' - 5 === 6;
let xa = '10';
let xx = 5;
console.log('10' - 5 === 6);
//строка перетворюється на число, результат вичету не дорівнює вказанному значенню та повертається false boolean//


true + false
let g = true;
let h = false;
let j = g + h;
let k = typeof(j);
console.log(k);
//true та false перетворюються на числа та результатом є число 1//

'4' - 3
let fs = '4';
let sf = 3;
console.log(fs -sf);
//строка перетворюється на число та результатом стає число 1//


'4px' - 3
let ba = '4px';
let ca = 3;
console.log(ba -ca);
// не перетворюэться тому що різні типи данних - строка та номер.//


'6' + 3 ** 0;
let qw = '6';
let wq = 3;
let wqq = 0;
console.log(qw + wq ** wqq);
//спочатку відбулася математична дія а потім отримане число перетворилося на строку і додалося до строки утворивши строку 61//


12 / '6'
let er = 12;
let re = '6';
console.log(er/re);
//строка '6' перетворилася на число та в результаті математичной дії отримано число 2//


'10' + (5 === 6);
let rt ='10';
let tr = 5;
let trt = 6;
console.log(rt + (tr === trt));
//спочатку дією у дужках був отриман результат boolean false який потім перетворився на строку і додався до строки '10' утворивши строку 10false//


null == ''
let ty = null;
let yt = '';
console.log(ty == yt);
//порівнюються null та пуста строка що дорівнює boolean false//


3 ** (9 / 3);
let uy = 3;
let yu = 9;
let uyu = 3;
console.log(uy ** (yu/uyu));
//перетворень данних не відбувається, все числа//


!!'false' == !!'true'
let az = 'false';
let za = 'true';
console.log(!!az == !!za);
//строка перетворилась на boolean і пезультатом став boolean true//


0 || '0' && 1
let vb = 0;
let bv = '0';
let vbv = 1;
console.log(vb || bv && vbv);
//данні не перетворювалися і в результаті логічних аперацій утворилося число 1//


(+null == false) < 1;
let gh = null;
let hg = false;
let hgh = 1;
console.log((+gh == hg) < hgh);
//дані в лабках перетворюються на числа, потім ці числа порівнюються та отримуємо boolean false//


false && true || true
let nm = false;
let mn = true;
let mnm = true;
console.log(nm && mn || mnm);
//перетворень не відбуваєтьсяб в результаті логічних операцій з boolean отримаєм boolean true//


false && (false || true)
let km = false;
let mk = false; 
let kkm = true;
console.log(km && (mk || kkm));
//перетворень не відбуваєтьсяб в результаті логічних операцій з boolean отримаєм boolean false//


(+null == false) < 1 ** 5
let lk = null;
let kl = false;
let llk = 1;
let kkl = 5;
console.log((+lk == kl) < llk ** kkl);
// в дужках отримуєм boolean який перетворюється на число, яке потім  в результаті логічних операцій перетворюється на boolean false//








