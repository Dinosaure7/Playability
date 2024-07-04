import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sklearn.neighbors import NearestNeighbors
import pandas as pd
import json

app = FastAPI(docs_url = "/documentation")

# -------------------------------------------------   CONFIGURATION CORS   ------------------------------------------------------

origins = [
    "http://localhost:8080",
    # Vous pouvez ajouter d'autres origines si nécessaire
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -------  INSERER VOTRE CODE ICI -----------------
csv_path = 'app/game_df_detailed_v3.csv'
game_df = pd.read_csv(csv_path)
game_df["Unnamed: 0"] = game_df.index
game_df.rename(columns = {"Unnamed: 0": "ID"}, inplace = True)

json_game = game_df.loc[:, :"Video"].to_json(orient = "index")
json_game = json.loads(json_game)

# Home page of the API with all the information by game
@app.get('/')
def fn_home():
    
    return json_game

# Page with all the information of the game
@app.get('/game/{ind}')
def fn_home(ind):
    id_string = str(ind)
    return json_game[id_string]


# Page with the id and the name of the game
@app.get('/game')
def fn_game_name():
    game_name = {}
    
    for key, value in json_game.items():
        game_name[key] = value["Game"]  

    return game_name

# Get the summary of a specific id
@app.get('/summary/{ind}')
def fn_game_summary(ind):
    id_string = str(ind)
    return json_game[id_string]["Summary"]

# Get the rating of a specific id
@app.get('/rating/{ind}')
def fn_game_rating(ind):
    id_string = str(ind)
    return json_game[id_string]["Rating"]

# Get the genres of a specific id
@app.get('/genres/{ind}')
def fn_game_genres(ind):
    id_string = str(ind)
    return json_game[id_string]["Genres"]

# Get the platforms of a specific id
@app.get('/platforms/{ind}')
def fn_game_platforms(ind):
    id_string = str(ind)
    return json_game[id_string]["Platforms"]

# Get the companies of a specific id
@app.get('/companies/{ind}')
def fn_game_companies(ind):
    id_string = str(ind)
    return json_game[id_string]["Companies"]

# Get the cover of a specific id
@app.get('/cover/{ind}')
def fn_game_cover(ind):
    id_string = str(ind)
    return json_game[id_string]["Cover"]

# Get the video of a specific id
@app.get('/video/{ind}')
def fn_game_video(ind):
    id_string = str(ind)
    return json_game[id_string]["Video"]

@app.get('/recommandation/{ind}')
def recommande_game(ind):
    import json
    import numpy as np

    class NpEncoder(json.JSONEncoder):
        def default(self, obj):
            if isinstance(obj, np.integer):
                return int(obj)
            if isinstance(obj, np.floating):
                return float(obj)
            if isinstance(obj, np.ndarray):
                return obj.tolist()
            return super(NpEncoder, self).default(obj)

    dict_game = {}
    X = game_df.drop(['Game','Summary','Rating','Genres','Platforms','Companies','Cover','Video'],axis=1)
    knn = NearestNeighbors(n_neighbors=4)
    knn.fit(X)
    distances, indices = knn.kneighbors(X)
    for i in range(len(X)):
        index_list = indices[int(ind)][1:]
        dict_game['game 1'] = index_list[0]
        dict_game['game 2'] = index_list[1]
        dict_game['game 3'] = index_list[2]

    json_game = json.dumps(dict_game, cls=NpEncoder)
                           
    
    return  json_game

# ---------------- FIN DE TON CODE ----------------


#_______________________________________________________________________________________________________________________


if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0', reload = True)