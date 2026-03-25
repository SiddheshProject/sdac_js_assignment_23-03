movies = [
    {title: "abc", budget: 802000},
    {title: "def", budget: 798000},
    {title: "def", budget: 919000}
];

const totalBudget = movies.reduce((total, movie) => {
    return total + movie.budget;
}, 0);

console.log(totalBudget);