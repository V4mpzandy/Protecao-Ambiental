// Função para adicionar item ao carrinho
let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

// Função para atualizar o carrinho de compras
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    const totalLi = document.createElement('li');
    totalLi.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
    cartItems.appendChild(totalLi);
}

// Função para abrir e fechar o menu de navegação em telas menores
const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Adicione outras funcionalidades conforme necessário
