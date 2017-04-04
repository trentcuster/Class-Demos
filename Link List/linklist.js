function LinkedList() {
    var head = null;
    this.length = 0;
    this.insert = insert;
    this.remove = remove;
    this.find = find;



    function insert(data) {
        var myNode = new Node(data);
        if(head != null) {
            var node = head,
                prev = null;
            while (node && node.data.name.toLowerCase() < myNode.data.name.toLowerCase()) {

                    prev = node;
                    node = node.next;
            }
            if (!prev) {
                myNode.next = node;
                head = myNode;
                this.length++;
            }
            else {
                prev.next = myNode;
                myNode.next = node;
                this.length++;
            }
        }
        else {
            head = myNode;
            this.length++;
            return;
        }
    }

    function remove(id) {

    }

    function find(name) {
        var node = head;
        while (node != null && node.date.name != name) {
            node = node.next;
        }

        return node ? node.data : null;
    }

    function Node(data) {
        this.data = data;
        this.next = null;
    }
}

