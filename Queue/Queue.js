function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.empty = empty;
    this.toList = toList;
}

function enqueue(element){
    this.dataStore.push(element);
}

function dequeue(){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length-1];
}

function toList(){
    var reStr = "";
    for(var i =0; i < this.dataStore.length; i ++){
        reStr += this.dataStore[i] + "--";
    }
    return reStr;
}

function empty(){
    if(this.dataStore.length === 0){
        return true;
    }
    else{
        return false;
    }
}

var q = new Queue();
q.enqueue("Mic");
q.enqueue("Trent");
q.enqueue("Cole");
q.enqueue("Tim");
console.log(q.toList());
q.dequeue();
console.log(q.toList());