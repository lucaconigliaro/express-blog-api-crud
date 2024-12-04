const posts = require("../data/data");

const index = (req, res) => {
    res.json({
        data: posts,
        count: posts.length
    });
};

const show = (req, res) => {
    let post = null;
    for (let i = 0; i < posts.length; i++) {
        const curPost = posts[i];
        if (curPost.id === parseInt(req.params.id)) {
            post = curPost
        }
    }
    if (post === null) {
        res.sendStatus(404);
    } else {
        res.json(post);
    }
};

const create = (req, res) => {
    res.json("Aggiungo un nuovo post");
};

const update = (req, res) => {
    const postsId = req.params.id;
    res.json("Aggiorno tutti i dati del post " + postsId);
};

const destroy = (req, res) => {
    const postsId = parseInt(req.params.id);
    const postIndex = posts.findIndex((curPost) => curPost.id === postsId);
    if (postIndex === -1) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato"
        })
    } else {
        posts.splice(postIndex, 1);
        res.sendStatus(204);
        console.log(posts)
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};