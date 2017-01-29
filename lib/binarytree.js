'use strict'

module.exports = function() {
    
    let Node = function(val) {
        this.val = val,
        this.left = null,
        this.right = null
    }
    
    let binarytree = {}
    binarytree.root = null
    
    binarytree.add = function(val) {
        let node = new Node(val)
        if(this.root === null) {
            this.root = node
        } 
        else {
            let current = this.root
            while(current !== null) {
                if(val < current.val) {
                    if(current.left === null) {
                        current.left = node
                        break;
                    }
                    else {
                        current = current.left
                    }
                } 
                else {
                    if(current.right === null) {
                        current.right = node
                        break;
                    }
                    else {
                        current = current.right
                    }
                }
            }
            
        }
    }
    
    binarytree.printPreOrder = function(node) {
        if(node === null) {
            return;
        }
        
        console.log(node.val)
        this.printInOrder(node.left)
        this.printInOrder(node.right)
    }
    
    binarytree.printInOrder = function(node) {
        if(node === null) {
            return;
        }
        
        this.printInOrder(node.left)
        console.log(node.val)
        this.printInOrder(node.right)
    }
    
    binarytree.printPostOrder = function(node) {
        if(node === null) {
            return;
        }
        
        this.printInOrder(node.left)
        this.printInOrder(node.right)
        console.log(node.val)
    }
    
    binarytree.print = function() {
        this.printInOrder(this.root)  
    }
    
    return binarytree
}