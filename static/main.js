
// Event Click calcular
document.getElementById("calcular").addEventListener("click", (event) => {
    event.preventDefault();

    const { Funcion, Variable, LimiteSuperior, LimiteInferior, ResultadoIntegraccion, ResultadoEvaluacion } = Inputs();

    fetch(`http://localhost:4000/${(Funcion.value).toLowerCase()}/${(Variable.value).toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            ResultadoIntegraccion.value = data.INTEGRAL;
            ResultadoEvaluacion.value = Evaluar(data.INTEGRAL, data.variableDeIntegracion, LimiteInferior.value, LimiteSuperior.value);
        }).catch(err => console.log(err));
});


//Event click Teclado
document.addEventListener("click", (event) => {


    event.preventDefault();

    const { Funcion } = Inputs();

    switch (event.target.id) {
        case "sin":
            Funcion.value += "sin()";
            Funcion.focus();
            Funcion.setSelectionRange(3, 4)
            break;
        case "sinh":
            Funcion.value += "sinh()";
            Funcion.focus();
            break;
        case "cos":
            Funcion.value += "cos()";
            Funcion.focus();
            break;
        case "cosh":
            Funcion.value += "cosh()";
            Funcion.focus();
            break;
        case "tan":
            Funcion.value += "tan()";
            Funcion.focus();
            break;
        case "tanh":
            Funcion.value += "tanh()";
            Funcion.focus();
            break;
        case "acos":
            Funcion.value += "acos()";
            Funcion.focus();
            break;
        case "acosh":
            Funcion.value += "acosh()";
            Funcion.focus();
            break;
        case "asin":
            Funcion.value += "asin()";
            Funcion.focus();
            break;
        case "asinh":
            Funcion.value += "asinh()";
            Funcion.focus();
            break;
        case "atan":
            Funcion.value += "atan()";
            Funcion.focus();
            break;
        case "atanh":
            Funcion.value += "atanh()";
            Funcion.focus();
            break;
        case "parentecis1":
            Funcion.value += "(";
            Funcion.focus();
            break;
        case "parentecis2":
            Funcion.value += ")";
            Funcion.focus();
            break;
        case "suma":
            Funcion.value += "+";
            Funcion.focus();
            break;
        case "resta":
            Funcion.value += "-";
            Funcion.focus();
            break;
        case "multiplicacion":
            Funcion.value += "*";
            Funcion.focus();
            break;
        case "divicion":
            Funcion.value += "/";
            Funcion.focus();
            break;
        case "exponenciacion":
            Funcion.value += "**";
            Funcion.focus();
            break;
    }
});




//#region "FUNCIONES" 

function Evaluar(integral, variable, limInferior, LimiteSuperior) {
    if (integral && variable && limInferior && LimiteSuperior) {
        try {
            let EvaluLimiteSuperior = SubTrig(integral.replaceAll(variable, LimiteSuperior));
            let EvaluLimiteInferior = SubTrig(integral.replaceAll(variable, limInferior));

            console.log(EvaluLimiteSuperior);
            console.log(EvaluLimiteInferior);

            let Resultado = eval(EvaluLimiteSuperior) - eval(EvaluLimiteInferior);

            return Resultado;

        } catch (error) {
            console.log(error);
            return "Ha ocurrido  un error";
        }
    } else {
        console.log("Todos los parametros deben contener un valor");
        return "Todos los parametros deben contener un valor";
    }
}

function SubTrig(func) {
    func = func.replaceAll("sin", "Math.sin");
    func = func.replaceAll("sinh", "Math.sinh");
    func = func.replaceAll("cos", "Math.cos");
    func = func.replaceAll("cosh", "Math.cosh");
    func = func.replaceAll("tan", "Math.tan");
    func = func.replaceAll("tanh", "Math.tanh");
    func = func.replaceAll("acos", "Math.acos");
    func = func.replaceAll("acosh", "Math.acosh");
    func = func.replaceAll("asin", "Math.asin");
    func = func.replaceAll("asinh", "Math.asinh");
    func = func.replaceAll("atan", "Math.atan");
    func = func.replaceAll("atanh", "Math.atanh");
    func = func.replaceAll("atan2", "Math.atan2");
    func = func.replaceAll("hypot", "Math.hypot");
    func = func.replaceAll("sqrt", "Math.sqrt");
    return func;
}

function Inputs() {
    return {
        Funcion: document.getElementById("funcion"),
        Variable: document.getElementById("variable"),
        LimiteSuperior: document.getElementById("limiteSuperior"),
        LimiteInferior: document.getElementById("limiteInferio"),
        ResultadoIntegraccion: document.getElementById("resultadoIntegracion"),
        ResultadoEvaluacion: document.getElementById("resultadoEvaluacion"),
    }
}

//#endregion