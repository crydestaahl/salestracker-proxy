const corsProxy = require('cors-anywhere');

const PORT = process.env.PORT || 8080;
corsProxy.createServer({
    originWhitelist: [], // Allow all origins
}).listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});
