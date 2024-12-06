const express = require(`express`); 
const postsRouters = require("./routers/posts");
const handleError = require(`./middlewares/handleError`);

const app = express();
const port = 3001; 

// Aggiungo il body parser in formato JSON per poter leggere il body della richiesta quando arriva alle rotte post/put/patch
app.use(express.json());

//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static(`public`));

// Usa il router `postsRouters` per tutte le richieste che iniziano con `/posts`.
app.use(`/posts`, postsRouters);

// Creiamo una rotta per la homepage (`/`) che risponde con un messaggio JSON.
app.get(`/`, (req, res) => {
    ops(); //funzione che non esiste e da l'errore
    console.log("La rotta è stata chiamata");
    res.json({
        message: "Server del mio blog"
    })
});

// Dopo tutte le rotte inseriamo il middleware che gestisce l'errore
app.use(handleError);

// Avviamo il server sull'indirizzo localhost alla porta specificata (3001).
app.listen(port, () => {
    console.log("Server is listenin")
});
