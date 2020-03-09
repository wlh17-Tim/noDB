const express = require("express");
const cors = require("cors");
const pc = require('./controllers/pictureController')

const app = express();
const PORT = 3456;

app.use(cors());
app.use(express.json());

app.get("/api/monsterPic/:id", pc.getMonsterPic);
app.get("/api/monsterTrait/:id", tc.getMonsterTrait)

// app.get("/api/pokemon", pokemonCtrl.getCaughtPokemon)
// app.post("/api/pokemon", pokemonCtrl.catchPokemon)
// app.put("/api/pokemon/:id", pokemonCtrl.editPokemonName)
// app.delete("/api/pokemon/:id", pokemonCtrl.releasePokemon)

app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));
