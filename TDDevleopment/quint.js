QUnit.test("hello test", function(assert){
    assert.equal (checkNumber(7), 4.5, "Result should be half of param")
});

function checkNumber (num){
    var result = num * .5;
    return result;
}