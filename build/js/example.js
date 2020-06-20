let person = {
    surname: '',
    name: '',
    middle_name: '',
    position: '',
    harmful: false,
    size: {
        head: 0,
        foot: 0,
        body: 0,
        height: ''
    }
};

let Grishin = {
    surname: "Гришин",
    name: "Алексей",
    middle_name: "Валерьевич",
    position: "Начальник отдела",
     size: {
        head: 55,
        foot: 41,
        body: 52,
        height: '3-4'
    }
};

Grishin.__proto__ = person;

// first

let n = 3,
    result_1 = 1,
    result_3 = 1,
    result_4 = 1; 

for (let i = 1; i <= n; i++) {
    result_1 *= i; 
}

console.log(result_1);

// third
 let k = 1;
while ( k <= n) {
    result_3 *= k;
    k++;   
}

console.log(result_3);

// forth


n = 7;

function fib(n) {
    if (n==1) {
        result_4 = 1;
    } else if ( n==2 ) {
        result_4 = 2;
    } else {result_4 = fib(n-1) + fib(n-2);}
   
    return result_4; 
}

fib(n);

console.log(result_4);



