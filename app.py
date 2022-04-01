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

@app.route('/<fun>/<intregrar_respectoa>')
def ping(fun, intregrar_respectoa):
    print(fun)
    x=symbols(intregrar_respectoa)
    res = integrate(fun, x)
    print(res)

    return jsonify({
      "Estatus":True,
      "funcion": fun,
      "variableDeIntegracion": intregrar_respectoa,
      "INTEGRAL":str(res)
    })



if __name__ == '__main__':
  app.run(debug=True, port=4000)  

