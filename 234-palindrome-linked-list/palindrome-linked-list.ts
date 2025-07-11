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

function isPalindrome(head: ListNode | null): boolean {

   if (!head || !head.next) return true;

  //Find the middle of the linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
  }

  //Reverse the second half
  let prev: ListNode | null = null;
  let curr: ListNode | null = slow;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  //Compare both halves
  let left = head;
  let right = prev; // Start of reversed second half

  while (right) {
    if (left.val !== right.val) return false;
    left = left.next!;
    right = right.next!;
  }

  return true;
    
};