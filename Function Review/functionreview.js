
function fib(n) {
    if (n == 1) return 0;
    if (n == 2) return 1;

    return fib(n-1) + fib(n-2);
}

function fibOptimized(n, results){
    if (n == 1) return 0;
    if (n == 2) return 1;

    if (!results[n]){
        results [n] = fibOptimized(n-1, results) + fibOptimized(n-2, results);
    }
    return results[n];

}









function factorial(n){
    if(n == 1) return 1;

    return n * factorial(n - 1);
}

let results = [];

function factOptimized(n, results){
    if(n == 1) return 1;

    let fact = results[n];

    if(!fact){
        results[n] = n * factOptimized(n - 1, results);
    }

    return results[n];
}


