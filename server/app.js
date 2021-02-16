import express from 'express';
import config from 'config';
import mongoose from 'mongoose';

import authRouter from './routes/auth.routes.js';
import customerRouter from './routes/customer.routes.js'
import { cors } from './middleware/cors.middleware.js';

const PORT = config.get('port') || 5000;
const app = express();

app.use(cors)
//Покдлючить json
app.use(express.json({ extended: true }));
//Роуты
app.use('/api/auth', authRouter)
app.use('/api/customer', customerRouter)

async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
    } catch (e) {
        console.log('Error in start server', e.message);
    }
}

start();