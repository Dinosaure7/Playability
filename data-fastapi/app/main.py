import uvicorn
from fastapi import FastAPI
import pandas as pd
from sklearn.neighbors import NearestNeighbors

app = FastAPI()
csv_path = 'app/game_df_detailed_v2.csv'
game_df = pd.read_csv(csv_path, index_col='Unnamed: 0')


@app.get('/')
def fn_fast_api():
# -------  INSERER VOTRE CODE ICI -----------------

    return { "key" : 'value'}
@app.get('/recommandation/{id_game}')
def recommande_game(id_game):
    dict_game = {}

    X = game_df.drop(['Game','Summary','Rating','Genres','Platforms','Companies','Cover','Video'],axis=1)

    knn = NearestNeighbors(n_neighbors=4)
    knn.fit(X)

    distances, indices = knn.kneighbors(X)

    for i in range(len(X)):
        index_list = indices[id_game][1:]
        dict_game['jeu 1'] = index_list[0]
        dict_game['jeu 2'] = index_list[1]
        dict_game['jeu 3'] = index_list[2]

        
    return {dict_game}

# ---------------- FIN DE TON CODE ----------------
#__________________________________________________

if __name__ == '__main__':
    uvicorn.run(app, port=8000, host='0.0.0.0')