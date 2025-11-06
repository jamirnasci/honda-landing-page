document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('deliveryCarousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Fun��o para mostrar um item espec�fico
    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            item.style.display = 'none'; // Esconde todos
        });

        items[index].classList.add('active');
        items[index].style.display = 'block'; // Mostra o item ativo
    }

    // Fun��o para avan�ar o carrossel
    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    // Inicia o carrossel na primeira imagem
    showItem(currentIndex);

    // Configura o intervalo de troca de imagens (a cada 5 segundos)
    if (items.length > 1) {
        setInterval(nextItem, 5000); 
    }
});

function goWhatsapp(){
    window.open('https://wa.me/5591981073539?text=Olá%2C+quero+falar+sobre+as+condições+de+compras+de+motos')
}