const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item.likes
    }

    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return {};
    }

    var max = blogs[0].likes;
    var maxIndex = 0;

    for (var i = 0; i < blogs.length; i++) {
        if (blogs[i].likes > max) {
            maxIndex = i;
            max = blogs[i].likes;
        }
    }

    return blogs[maxIndex];
}

const mostLikes = (blogs) => {
    if (blogs.length === 0) {
        return {};
    }

    var count = {};
    var name = "";
    var likes = 0;
    for (var i = 0; i < blogs.length; i++) {
        name = blogs[i].author
        likes = blogs[i].likes
        count[name] = (count[name] || 0) + likes; 
    }
    authors = Object.keys(count)
    var bestValue = 0;
    var value = 0;
    var name = "";
    var bestName = "";
    for (var i = 0; i < authors.length; i++) {
        name = authors[i]
        value = count[name]
        if (value > bestValue) {
            bestName = name;
            bestValue = value;
        }
    }
    return { author: bestName, likes: bestValue };
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) {
        return {};
    }
    var authors = blogs.map(a => a.author);
    var count = {};
    authors.forEach(function (i) { count[i] = (count[i] || 0) + 1; });
    authors = Object.keys(count)
    var bestValue = 0;
    var value = 0;
    var name = "";
    var bestName = "";
    for (var i = 0; i < authors.length; i++) {
        name = authors[i]
        value = count[name]
        if (value > bestValue) {
            bestName = name;
            bestValue = value;
        }
    }
    return { author: bestName, blogs: bestValue };
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}