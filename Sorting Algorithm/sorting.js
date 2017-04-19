
var items = [2, 3, 5, 1, 4];

function selectionSort(items) {
    var length = items.length;
    for ( var i = 0; i < length - 1; i ++){
        //number of passes
        var min = i; //min holds the current minimum number position for each pass; i holds the initial min number
        for (var j = i + 1; j < length; j ++){
            if(items[j] < items[min]) {
                min = j;
            }
        }
        if (min != i){
            var tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
        }
    }
    console.log(items);
};

