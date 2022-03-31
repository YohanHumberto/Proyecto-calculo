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



function Evaluar(integral, variable, limInferior, LimiteSuperior) {
    if (integral && variable && limInferior && LimiteSuperior) {
        try {
            let EvaluLimiteSuperior = integral.replace(variable, LimiteSuperior);
            let EvaluLimiteInferior = integral.replace(variable, limInferior);

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