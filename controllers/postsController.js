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
        res.json(post);
};

const store = (req, res) => {
    const newPost = req.body; // Recupero i dati del nuovo post dal corpo della richiesta
    console.log(req.body);
    newPost.id = posts[posts.length - 1].id + 1; // Assegno al nuovo post un nuovo ID prendendo l'ID dell'ultimo elemento nell'array incrementandolo di 1
    posts.push(newPost); // Pusho il nuovo post con l'ID nell'array
    res.json(newPost);
};

const update = (req, res) => {
    const postsId = parseInt(req.params.id); // Estrae l'ID del post dai parametri della richiesta
    const updatedPost = req.body; // Recupero i dati aggiornati del post dal corpo della richiesta
    updatedPost.id = postsId; // Associo l'ID estratto al post aggiornato, garantendo che l'ID rimanga invariato
    const indexToFind = posts.findIndex(curPost => curPost.id === postsId); // Trovo l'indice del post nell'array che ha lo stesso ID
        posts[indexToFind] = updatedPost; // Aggiorno l'elemento nell'array  con i nuovi dati
        res.json(updatedPost);
};

const destroy = (req, res) => {
    const postsId = parseInt(req.params.id);
    // Trovo l'indice del post nell'array
    const postIndex = posts.findIndex((curPost) => curPost.id === postsId);
        posts.splice(postIndex, 1);
        res.sendStatus(204); // Restituisce uno stato 204 per indicare che l'eliminazione è avvenuta con successo
        console.log(posts); // stampa i post aggiornati nella console 
};

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};