const posts = require(`../data/data`);

const checkPostExists = (req, res, next) => {
    console.log("Controllo se il post esiste");
    const postId = parseInt(req.params.id);
    const post = posts.find((curPost) => curPost.id === postId);
    if (post !== undefined) {
        next ();
    } else {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato"
        });
    }
};

module.exports = checkPostExists;