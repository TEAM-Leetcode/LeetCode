function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

ListNode.prototype.arrayToList = function (nums) {
    if (nums.length === 0) {
        throw new Error('Empty array not allowed');
    }
    this.val = nums[0];
    let ptr = this;

    for (const num of nums.slice(1)) {
        ptr.next = new ListNode(num);
        ptr = ptr.next;
    }
};

ListNode.prototype.print = function () {
    let ptr = this;
    let ret = '';

    while (ptr !== null) {
        ret += ptr.val + ' -> ';
        ptr = ptr.next;
    }

    ret += 'null';

    console.log(ret);
};

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let ret = new ListNode(0, head);
    let ptr = ret;

    let dummy = new ListNode(0, null);
    let dummyEnd = dummy;

    while (ptr.next !== null) {
        if (ptr.next.val >= x) {
            dummyEnd.next = ptr.next;
            dummyEnd = dummyEnd.next;

            ptr.next = ptr.next.next;
        } else {
            ptr = ptr.next;
        }
    }

    dummyEnd.next = null;
    ptr.next = dummy.next;

    return ret.next;
};

let head = new ListNode(0, null);

head.arrayToList([1, 4, 3, 2, 5, 2]);

head.print();

result = partition(head, 3);

result.print();
