from os import getcwd
from pickle import FALSE
from flask import Flask, jsonify, request, send_file, render_template
from sympy import *
from flask_cors import CORS

app = Flask(__name__) 

cors = CORS(app, resources={"/*":{"origins": "*"}})
# Rutas
@app.route('/')
def home():
   return render_template('index.html')

@app.route('/integral', methods=['POST'])
def about():
  try:
      print(request.json["Funcion"])
      print(request.json["Variable"])
      x=symbols(request.json["Variable"])
      res = integrate(request.json["Funcion"], x)
      print(res)

      return jsonify({
        "Estatus":True,
        "funcion": request.json["Funcion"],
        "variableDeIntegracion": request.json["Variable"],
        "INTEGRAL":str(res)
      })

  except:
    return jsonify({
      "Error": True,
      "Estatus":False,
    "funcion": request.json["Funcion"],
        "variableDeIntegracion": request.json["Variable"],
    })

if __name__ == '__main__':
  app.run(debug=True, port=4000)  

