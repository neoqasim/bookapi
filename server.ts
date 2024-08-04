
import app from "./src/app";

const startServer = () => {
    const port = process.env.PORT || 3001




    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    })
}

startServer()