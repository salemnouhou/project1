from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Bienvenue sur la première application Flask de SALEM SOULEYMANE NOUHOU!"

if __name__ == '__main__':
    app.run(debug=True)
