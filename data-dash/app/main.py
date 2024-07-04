from dash import Dash, html, dcc, Input, Output
import dash_bootstrap_components as dbc
import plotly.express as px
import pandas as pd

# Création de l'application
app = Dash(__name__)

# Exemple de données
df = pd.DataFrame({
    'x': [1, 2, 3, 4, 5],
    'y': [10, 11, 12, 13, 14]
})

# Définition du layout avec un Slider
app.layout = html.Div([
    
    ################################################# Nav Bar ################################################################
    dbc.NavbarSimple(
        children=[
            dbc.NavItem(dbc.NavLink("Page 1", href="#")),
            dbc.DropdownMenu(
                children=[
                    dbc.DropdownMenuItem("More to come", header=True),
                    dbc.DropdownMenuItem("Page 2", href="#"),
                ],
                nav=True,
                in_navbar=True,
                label="Droplist",
            ),
        ],
        brand="PlayAbility",
        brand_href="#",
        color="primary",
        dark=True,
    ),
    
    # Header
    html.Br(style={"line-height": "5"}),
    html.H1("State of the Art", style = {"textAlign": "center"}),
    html.Br(style={"line-height": "5"}),
    html.H2("An accessibility and inclusivity overview in video games", style = {"textAlign": "center"}),
    
    
    html.Br(),
    dbc.Container(
        [dbc.Row(                                                                                                   
            dbc.Col(html.H4("Video game industry"))),
    
            # Button for the modal
        dbc.Row(
            dbc.Col(html.P("More than "))),
        dbc.Row(
            dbc.Col(dbc.Button("Help", id = "open_modal", n_clicks = 0))),
])
])

# # Callback pour mettre à jour le graphique
# @app.callback(
#     Output('line-graph', 'figure'),
#     [Input('slider', 'value')]
# )
# def update_graph(slider_value):
#     # Filtrer les données en fonction du curseur
#     filtered_df = df[df['x'] <= slider_value]
#     fig = px.line(filtered_df, x='x', y='y', title='Graphique Simple')
#     return fig

# Exécution de l'application
if __name__ == '__main__':
    app.run_server(debug=True, host='0.0.0.0')