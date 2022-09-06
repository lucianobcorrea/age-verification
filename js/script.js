let ano = document.getElementById("ano")
let botao = document.getElementById("btnVerificar")
let idadeLabel = document.getElementById("labelIdade")
let sexo = document.getElementsByName("sexo")
let res = document.querySelector("div#res")

botao.addEventListener("click", calculaIdade)

let img = document.createElement("img")
img.setAttribute("id", "foto")

function calculaIdade() {
    if (ano.value.length == 0) {
        alert("Digite um ano válido, por favor!")
    } else {

        let anoConvertido = Number(ano.value)
        let dataAtual = new Date().getFullYear()

        let idade = dataAtual - anoConvertido
        let genero = ""

        if(anoConvertido.toString().length < 4 || anoConvertido > dataAtual || anoConvertido < 1900) {
            alert("Digite um ano válido, por favor!")
        }else {
            if(sexo[0].checked) {
                genero = "Homem"
                if(idade >= 0 && idade < 10) {
                    img.setAttribute("src", "../images/foto-bebe-m.png")
                }else if(idade < 21) {
                    img.setAttribute("src", "../images/foto-jovem-m.png")
                }else if(idade < 50){
                    img.setAttribute("src", "../images/foto-adulto-m.png")
                }else {
                    img.setAttribute("src", "../images/foto-idoso-m.png")
                }
            }else if(sexo[1].checked) {
                genero = "Mulher"
                if(idade >= 0 && idade < 10) {
                    img.setAttribute("src", "../images/foto-bebe-f.png")
                }else if(idade < 21) {
                    img.setAttribute("src", "../images/foto-jovem-f.png")
                }else if(idade < 50){
                    img.setAttribute("src", "../images/foto-adulto-f.png")
                }else {
                    img.setAttribute("src", "../images/foto-idoso-f.png")
                }
            }
            res.style.textAlign = "center"
            idadeLabel.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
    }
}