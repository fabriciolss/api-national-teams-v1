import { connectMongo } from "./server/db.js";
import {TeamController} from './controller/TeamController.js';
import {StadiumController} from './controller/StadiumController.js';
import express from "express";
import {Middlewares} from "./middlewares/middleware-api.js";
const app = express();
const port = 3000;
app.use(express.json());
connectMongo();

app.get('/teams/', TeamController.readTeams);
app.get('/teams/search', TeamController.searchTeam);
app.get('/teams/:id', TeamController.readTeam);
app.post('/teams/', TeamController.createTeam);
app.post('/teams/', TeamController.createTeams);
app.put('/teams/:id', TeamController.updateTeam);
app.delete('/teams/:id', TeamController.deleteTeam);

app.get('/stadiums/', StadiumController.readStadiums);
app.get('/stadiums/search', StadiumController.searchStadium);
app.get('/stadiums/:id', StadiumController.readStadium);
app.post('/stadiums/', StadiumController.createStadium);
app.post('/stadiums/', StadiumController.createStadiums);
app.put('/stadiums/:id', StadiumController.updateStadium);
app.delete('/stadiums/:id', StadiumController.deleteStadium);

app.use(Middlewares.notFounded);
app.use(Middlewares.erroHandling);
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})