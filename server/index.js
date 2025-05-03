import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import compression from 'compression'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { database } from './src/database/database.js'
import mainRouter from './src/routes/main.route.js'
import {defaultUser} from './src/default.js'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
const app = express()
const PORT = process.env.PORT

if (process.env.NODE_ENV === 'development') {
  app.use(cors({
    origin: 'http://localhost:5174',
    credentials: true
  }));
} else {
  // En production : même domaine → pas besoin de CORS
  app.use(cors({
    credentials: true
  }));
}
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compression())
// Routes API toujours avant le frontend
app.use('/api', mainRouter);

// 💡 Empêche express.static d'interpréter un mauvais fichier
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all React seulement pour le reste
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api') && !req.path.startsWith('/assets')) {
    res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
  } else {
    next();
  }
});




database
  .sync()
  .then(async() => {
    await defaultUser()
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error)
  })

export default app
