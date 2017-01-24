'use strict'

module.exports = function() {

    let queue = {},
    top = 0, bottom = 0,
    elements = []

    queue.enq = function(val) {
        elements.push(val)
        ++top;
    }

    queue.deq = function() {
        if(top === bottom) {
            return null;
        } else {
            return elements[bottom++];
        }
    }

    return queue
}