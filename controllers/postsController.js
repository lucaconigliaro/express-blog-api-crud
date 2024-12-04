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
    const postsId = req.params.id;
    res.json("Cancellazione del post " + postsId);
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};