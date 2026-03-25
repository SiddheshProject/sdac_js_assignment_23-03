movies = [
    {title: "abc", rating: 8.02},
    {title: "def", rating: 7.98},
    {title: "def", rating: 9.19}
]

const ratingsAbove8 = movies.filter((movie) => {
    return movie.rating > 8
})

console.log(ratingsAbove8);