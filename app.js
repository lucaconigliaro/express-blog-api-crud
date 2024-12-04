const express = require(`express`); 
const postsRouters = require("./routers/posts"); // Importiamo il router che conterrà le rotte relative alla gestione post

const app = express();
const port = 3001; 

//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static(`public`));

// Usa il router `postsRouters` per tutte le richieste che iniziano con `/posts`.
app.use(`/posts`, postsRouters);

// Creiamo una rotta per la homepage (`/`) che risponde con un messaggio JSON.
app.get(`/`, (req, res) => {
    res.json({
        message: "Server del mio blog"
    })
});

// Avviamo il server sull'indirizzo localhost alla porta specificata (3001).
app.listen(port, () => {
    console.log("Server is listenin")
});
