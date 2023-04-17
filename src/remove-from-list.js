const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  class List {
		constructor() {
			this.head = l;
		}
		removeAt(x) {
			let position = this.indexOf(x);
			if (position < 0 || position >= this.length) {
				return;
			}
			let cur = this.head;
			if (position === 0) {
				this.head = cur.next;
			} else {
				let prev = null;
				let index = 0;

				while(index < position) {
					prev = cur;
					cur = cur.next;
					index++;
				}
				prev.next = cur.next;
			}
			this.length--;
		}
		indexOf(x) {
			let cur = this.head;
			let index = 0;
			while(cur) {
				if (cur.value === x) {
					return index;
				}
				cur = cur.next;
				index++;
			}
			return -1;
		}
		remove(x) {
			while(this.indexOf(x) !== -1) {
				this.removeAt(x);
			}
		}
	}
	const list = new List();
	list.remove(k)
	return list.head
}

module.exports = {
  removeKFromList
};
