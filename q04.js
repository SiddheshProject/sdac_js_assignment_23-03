student = [34, 57, 16, 25, 48, 64];

function filterPassingMarks(student) {
    let result = [];

    for (let mark of student) {
        if (mark >= 40) {
            result.push(mark);
        }
    }

    return result;
}

console.log(filterPassingMarks(student));