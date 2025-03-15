function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let tipoFull = document.querySelector(`#tipo-ingresso option[value="${tipo}"]`).textContent;
  let qtd = parseFloat(document.getElementById("qtd").value);
  let qtdMax = parseFloat(document.getElementById(`qtd-${tipo}`).textContent);
  let ingressoComprado;
  if (qtd <= qtdMax) {
    ingressoComprado = qtdMax - qtd
    document.getElementById(`qtd-${tipo}`).textContent = ingressoComprado;
    setTimeout(() =>{
      alert("Compra realizada com sucesso")
    }, 0)
  } else {
    alert(`A quantidade inserida está indisponível para o tipo: ${tipoFull}`)
  }
}
