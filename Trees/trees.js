
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

    }

    add(word) {
        if(this.root == null){
            this.root = new TreeNode(word);
        }

        else{
            insert(this.root, word);
        }
        function insert(node, word){
            //compare node we're at with the word
            //case 1 their the same
            if(lower(node.word) === lower(word)){ //need .word so you're not comparing different types
                return null;
            }
            //case 2 word is less than node
            if (lower(word) < lower(node.word)){
                if(node.left == null){
                    node.left = new TreeNode(word);
                }
                else{
                    return insert(node.left, word)
                }
            }
            //case 3 word is greater than node
            else{
                if(node.right = null){
                    node.right = new TreeNode(word);
                }
                else{
                    return insert(node.right, word);
                }
            }
        }

    }
    remove(word) {


    }
}

class TreeNode{
    constructor(word) {
        this.word = word;
        this.left = null;
        this.right = null;
    }

}

function lower(){
    return string.toLowerCase();
}

let myTree = new BinaryTree();

myTree.root = new TreeNode('m');
myTree.root.left = new TreeNode('d');
myTree.root.right = new TreeNode('a');
myTree.root.right = new TreeNode('b');
