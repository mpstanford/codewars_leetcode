/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function(head) {
  this.head = head;
};

/**
* Returns a random node's value.
* @return {number}
*/
Solution.prototype.getRandom = function() {
  var size = 0;
  var currentNode = this.head;
  while (currentNode !== null) {
      size++;
      currentNode = currentNode.next;
  }
  currentNode = this.head;

  var position = Math.floor(Math.random() * size);  //0 to size - 1
  while (position > 0) {
      position--;
      currentNode = currentNode.next;
  }
  return currentNode.val;


};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/