function operacion(n1,n2,operador)
{
    switch (operador){
        case "+":
            return n1+n2;
        case "-":
            return n1-n2;
        case "*":
            return n1*n2;
        case "/":
            return n1/n2;
        default:
            break;
    }
}
function saludar(nombre)
{
    return 'hola(nombre)';
}
exports.module= {
    iva:12,
    funcion1:operacion,
    saludar,
}
