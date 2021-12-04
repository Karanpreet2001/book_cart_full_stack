const books = [
    {
        _id: "b101",
        title: "Code: The Hidden Language of Computer Hardware and Software",
        category:"Programming",
        author: "Charles",
        numberInStock: 5,
        price: 31.56,
        publishYear: "October 23, 1999",
        image: "./img/b101.jpg"
    },
    {
        _id: "b102",
        title: "R for Data Science",
        category:  "Data Science",
        author: "Garret Grolemund and Hadley Wickham",
        numberInStock: 15,
        price: 159.00,
        publishYear: "2020-01-03",
        image: "./img/b102.jpg"
    },
    {
        _id: "b103",
        title: "Hacking the Hacker: Learn From the Experts Who Take Down Hackers",
        category:  "Hacking",
        author: "Roger A. Grimes",
        numberInStock: 9,
        price: 19.49,
        publishYear: "2017-04-18",
        image: "./img/b103.jpg"
    },
    {
        _id: "b104",
        title: "Guide to Big data Hadoop Distributed File System",
        category:  "Big Data",
        author: "Kartikeya Mishra",
        numberInStock: 9,
        price: 232.49,
        publishYear: "2016-00-0Y789:10:28.809Z",
        image: "./img/b104.jpg"
    },
    {
        _id: "b105",
        title: "Data Structures and Algorithms in Python",
        category: "Phyton",
        author: "Roberto Tamassia and Michae H. Goldwasser",
        numberInStock: 19,
        price: 156.99,
        publishYear: "2012-01-0A123:60:18.809Z",
        image: "./img/b105.jpg"
    },
    {
        _id: "b106",
        title: "Eloquent JavaScript",
        category: "JavaScript",
        author: "Marijn Haverbeke",
        numberInStock: 19,
        price: 156.99,
        publishYear: "2012-01-0A123:60:18.809Z",
        image: "./img/b106.jpg"
    },
   
    {
        _id: "b107",
        title: "JavaScript: The Good Parts",
        category: "JavaScript",
        author: "Douglas Crockford",
        numberInStock: 4,
        price: 120.89,
        publishYear: "2014-31-5A123:40:18.809Z",
        image: "./img/b107.jpg"
        },
    {
        _id: "b108",
        title: "The Robotic Process Automation Handbook",
        category:"Big Data",
        author: "Tom Taulli",
        numberInStock: 3,
        price: 125.90,
        publishYear: "2017-02-03T19:05:28.809Z",
        image: "./img/b108.jpg"
    },
    {
        _id: "b109",
        title: "Stream Data Mining",
        category:"Big Data" ,
        author: "Leszek Rutkowski",
        numberInStock: 13,
        price: 239.00,
        publishYear: "2019-01-06T19:05:28.809Z",
        image: "./img/b109.jpg"
    },
    {
        _id: "b110",
        title: "Introduction to Statistical Learning",
        category: "Data Science" ,
        author: "Gareth James",
        numberInStock: 17,
        price: 239.00,
        publishYear: "2018-01-05T39:04:28.809Z",
        image: "./img/b110.jpg"
    }
];

export function getBooks() {
    return books;
}