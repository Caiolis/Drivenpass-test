import app, { init } from '@/app';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 4000;

init().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
});