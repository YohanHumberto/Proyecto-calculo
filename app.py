from ast import parse
from distutils.log import debug
from pickle import FALSE
from flask import Flask, jsonify, request
from sympy import *
from flask_cors import CORS

app = Flask(__name__) 

cors = CORS(app, resources={"/*":{"origins": "*"}})
# Rutas
@app.route('/<fun>/<intregrar_respectoa>')
def ping(fun, intregrar_respectoa):
    print(fun)
    x=symbols(intregrar_respectoa)
    res = integrate(fun, x)
    print(res)

    return jsonify({
      "Estatus":True,
      "msg": "hello ping",
      "funcion": fun,
      "variableDeIntegracion": intregrar_respectoa,
      "INTEGRAL":str(res)
    })



if __name__ == '__main__':
  app.run(debug=True, port=4000)  

