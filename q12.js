student = [
    {name: "abc", marks: 82},
    {name: "def", marks: 78},
    {name: "ghi", marks: 91}
];

function findMaxMarks() {
    return Math.max(...student.map(s => s.marks));
}

console.log(findMaxMarks());