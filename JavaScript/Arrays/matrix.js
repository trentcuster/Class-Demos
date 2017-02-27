var n1 =[[1,2],
        [3,4]];

var n2 =[[5,6],
        [7,8]];

// multiply by doing the dot product

var result = [[],[]];

result[0][0] = n1[0][0] * n2[0][0] + n1[0][1] * n2[1][0];
result[0][1] = n1[0][0] * n2[0][1] + n1[0][1] * n2[1][1];
result[1][0] = n1[1][0] * n2[0][0] + n1[1][1] * n2[1][0];
result[1][1] = n1[1][0] * n2[0][1] + n1[1][1] * n2[1][1];

console.log(result);
