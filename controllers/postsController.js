const posts = require("../data/data");

const index = (req, res) => {
    const queryString = req.query; // Ottengo la query string dalla richiesta
    let postDaInviare = posts; // Includo tutti i post nell'array da inviare
    // Se la query string contiene il parametro "tags", filtra i post
    if (queryString.tags !== undefined) {
        postDaInviare = posts.filter((curPost) => curPost.tags.includes(queryString.tags));
    };
     // Risponde con un oggetto contenente i post filtrati e il numero totale
    res.json({
        data: postDaInviare,
        count: postDaInviare.length
    });
};

const show = (req, res) => {
    let post = null; // Variabile per conservare il post trovato
    // Cerco il post nell'array in base all'ID fornito nei parametri della richiesta
    for (let i = 0; i < posts.length; i++) {
        const curPost = posts[i];
        if (curPost.id === parseInt(req.params.id)) {
            post = curPost
        };
    };
    // Se il post non è stato trovato, restituisce un errore 404
    if (post === null) {
        res.sendStatus(404);
         // Altrimenti restituisce il post come risposta JSON
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
     // Trovo l'indice del post nell'array
    const postIndex = posts.findIndex((curPost) => curPost.id === postsId);
     // Se il post non è trovato, restituisce un errore 404
    if (postIndex === -1) {
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Post non trovato"
        })
    } else {
         // Rimuove il post dall'array usando splice
        posts.splice(postIndex, 1);
        res.sendStatus(204); // Restituisce uno stato 204 per indicare che l'eliminazione è avvenuta con successo
        console.log(posts); // stampa i post aggiornati nella console 
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};