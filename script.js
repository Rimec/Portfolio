// window.addEventListener('DOMContentLoaded', function () {
//     const overlay_block = document.querySelector('.overlay-block');
//     const carouselImages = document.querySelectorAll('.carousel-inner img');

//     function adjustOverlayBlock() {
//         // Só aplica para telas grandes
//         if (window.innerWidth >= 769) {
//             if (!(overlay_block.scrollHeight > overlay_block.clientHeight + 10)) {
//                 // Mantém o bloco sobre a imagem
//                 console.log('Mantém o bloco sobre a imagem');
//                 overlay_block.style.position = 'absolute';
//                 overlay_block.style.width = '60%';
//                 overlay_block.style.top = '50%';
//                 overlay_block.style.left = '50%';
//                 overlay_block.style.transform = 'translate(-50%, -50%)';
//                 overlay_block.style.color = 'white';
//                 overlay_block.style.padding = '20px';
//                 overlay_block.style.textAlign = 'justify';
//                 overlay_block.style.maxWidth = '90%';
//                 overlay_block.style.maxHeight = '70%';
//             }
//             console.log('scrollHeight: ' + overlay_block.scrollHeight, 'clientHeight: ' + overlay_block.clientHeight);
//         }
//     }

//     // Chama ao abrir e ao redimensionar
//     adjustOverlayBlock();

//     // Debounce para resize
//     let resizeTimeout;
//     window.addEventListener('resize', function() {
//         clearTimeout(resizeTimeout);
//         resizeTimeout = setTimeout(() => {
//             requestAnimationFrame(adjustOverlayBlock);
//         }, 150); // 150ms após parar de redimensionar
//     });

//     // Chama sempre que uma imagem do carrossel carregar
//     carouselImages.forEach(img => {
//         img.addEventListener('load', adjustOverlayBlock);
//     });
// });