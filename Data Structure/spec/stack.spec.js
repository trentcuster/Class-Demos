var Stack = require('../stack');

describe('Stack', function(){
    var stack;

    beforeEach(function () {
        stack = new Stack();
    })

    describe('push', function () {
        it('should increase the size of stack by 1', function () {
            stack.push('a string');
            expect(stack.size()).toBe(1)
        })
        it('the last element should be at the top', function () {
            var orange = 'orange';
            stack.push('strawberry');
            stack.push(orange);
            expect(stack.peek()).toEqual(orange);
        })
        it('the popped element should be orange', function () {
            var orange = 'orange';
            stack.push('strawberry');
            stack.push(orange);
            expect(stack.pop()).toEqual(orange);
        })
    })
    describe('pop', function () {
        it('should decrese the size of stack by 1',function () {
            stack.pop('string');
            expect(stack.size()).toBe(0);
        })
        it('peek should be strawberry', function () {
            var orange = 'orange';
            var strawberry = 'strawberry';
            stack.push(strawberry);
            stack.push(orange);
            stack.pop();
            expect(stack.peek()).toEqual(strawberry);
        })
        describe('peek', function () {
            it('stack size should be the same', function () {
                var orange = 'orange';
                var strawberry = 'strawberry';
                stack.push(orange);
                stack.push(strawberry);
                stack.peek();
                expect(stack.size()).toBe(2);
            })
        })
    })

})
