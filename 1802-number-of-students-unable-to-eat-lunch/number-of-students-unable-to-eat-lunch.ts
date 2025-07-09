function countStudents(students: number[], sandwiches: number[]): number {

     let count = 0;

  while (students.length > 0) {
    if (students[0] === sandwiches[0]) {
      // Student takes the sandwich
      students.shift();
      sandwiches.shift();
      count = 0; // reset mismatch counter
    } else {
      // Move student to end of the queue
      students.push(students.shift()!);
      count++;
    }

    // If all students have been rotated without a match, break
    if (count === students.length) {
      break;
    }
  }

  return students.length;
    
};