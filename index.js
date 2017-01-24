const queue = require('./lib/queue')()

queue.enq(3);
queue.enq(6);
queue.enq(9);

let n = queue.deq()
while(n !== null) {
    console.log(n)
    n = queue.deq()
}
console.log('end')