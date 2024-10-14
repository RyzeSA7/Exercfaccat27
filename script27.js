function verificarTriangulo() {
    // Lendo os valores dos lados
    let A = parseFloat(prompt("Digite a medida do lado A:"))
    let B = parseFloat(prompt("Digite a medida do lado B:"))
    let C = parseFloat(prompt("Digite a medida do lado C:"))

    // Verificando se formam um triângulo
    if (A < B + C && B < A + C && C < A + B) {
        console.log("Os valores formam um triângulo.")
    } else {
        console.log("Os valores não formam um triângulo.")
    }
}

// Chamando a função
verificarTriangulo()