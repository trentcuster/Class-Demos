
class BinaryTree {
    constructor(){
        this.root = null;
    }
    find(word) {
        return search(root, word);

        function search(node, word){
            if(node == null){
                return undefined;
            }
            if(lower(node.word) == lower(word)){
                return node.word;
            }
            if(lower(word) < lower(node.word)){
                node = node.left;
                return search(node.left);
            }
            else{
                return search(node.right);
            }
        }
        function lower(){
            return string.toLowerCase();
        }
    }

    add(word) { }
    remove(word) { }
}

class TreeNode{
    constructor(word) {
        this.word = word;
        this.left = null;
        this.right = null;
    }

}

let myTree = new BinaryTree();

