/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {

    let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // Skip the duplicate
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
    
};