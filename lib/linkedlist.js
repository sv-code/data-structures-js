'use strict'

module.exports = function() {

    let Node = function(val) {
        this.val = val,
        this.next = null
    }

    let linkedlist = {}
    linkedlist.head = null
    
    linkedlist.add = function(val) {
        let node = new Node(val)
        if(this.head === null) {
            this.head = node
        } 
        else {
            let current = this.head
            while(current.next !== null) {
                current = current.next
            }
            current.next = node
        }       
    }

    linkedlist.print = function() {
        let current = this.head
        while(current !== null) {
            console.log(current.val)
            current = current.next
        }
        console.log()
    }

    linkedlist.delete = function(val) {
        if(this.head.val === val) {
            current = this.head.next
            delete this.head
            this.head = current
        }
        else if(this.head.next !== null) {
            let current = this.head, next = current.next
            while(next !== null) {
                if(next.val === val) {
                    current.next = next.next
                    next = null
                    break;
                } 
                else {
                    next = next.next
                }
            }
        }

    }

    return linkedlist
}