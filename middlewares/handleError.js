const handleError = (err, req, res, next) => {
    console.log("Gestione di errori interni al server");
    res.statusCode = 500;
    res.json({
        error: true,
        message: "Errore interno del server"
    });
};

module.exports = handleError;