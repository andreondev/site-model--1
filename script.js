let currentIndex = 0;
const slides = document.querySelector('.carousel-slides');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length; // Total de imagens reais

function showNextImage() {
    currentIndex++;

    if (currentIndex >= totalImages) {
        // Transição invisível para reiniciar a animação
        slides.style.transition = 'none'; 
        currentIndex = 0; // Reseta o índice
        slides.style.transform = `translateX(0%)`; // Volta ao início sem animação

        // Aguarda um breve tempo para a transição ser reativada
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out'; // Reativa a transição
            showNextImage(); // Chama novamente para garantir a continuidade da animação
        }, 50); // O tempo deve ser pequeno, mas suficiente para garantir a reatividade da transição
    } else {
        slides.style.transition = 'transform 0.5s ease-in-out'; // Reativa a transição
        slides.style.transform = `translateX(-${currentIndex * 100}%)`; // Move para a próxima imagem
    }
}

// Define o intervalo para a rotação automática
setInterval(showNextImage, 2500); 
