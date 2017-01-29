'use strict'

module.exports = function() {

    let stack = {},
    top = 0,
    elements = []

    stack.push = function(val) {
        elements.push(val)
        ++top;
    }

    stack.peek = function() {
        if(top === 0) {
            return null;
        } else {
            return elements[top-1]
        }
    }

    stack.pop = function() {
        if(top === 0) {
            return null;
        } else {
            --top;
            return elements.pop()
        }
    }

    return stack
}