// Script para manipulação do carrinho
function adicionarAoCarrinho(produtoId) {
    const produto = {
      id: produtoId,
      nome: `Camisa ${produtoId}`,
    };
    const cartItems = document.getElementById('cart-items');
    const li = document.createElement('li');
    li.textContent = produto.nome;
    cartItems.appendChild(li);
  }
  