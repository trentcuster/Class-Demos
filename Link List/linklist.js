function LinkedList(){
    var head = null;
    this.length = 0;
    this.insert = insert;
    this.remove = remove;
    this.find = find;

    function insert(data){

    }
    function remove(id){

    }
    function find(name){
        var node = head;
        while(node != null && node.date.name != name){
            node = node.next;
        }

        var returnObject = node? node.data : null;
    }

    function Node(data){
        this.data = data;
        this.next = null;
    }
    function Node(data){
        this.data = data;
        this.next = nulls;
    }


}
