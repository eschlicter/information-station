const app = require('./app');
const http = require('http');
const port = normalizePort(process.env.PORT || 5000);
app.set("port", port);

const server = http.createServer(app);

server.listen(port);

function normalizePort(val){
    const port = parseInt(val, 10);
    if (isNan(port)) {
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

server.on("listening", () => {
    console.log("Server is listening for requests on port ${server.address().port}");
});