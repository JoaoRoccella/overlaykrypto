// Cria o elemento de imagem
const img = document.createElement("img");
img.src = chrome.runtime.getURL("overlay.png");

// Define o estilo da imagem
img.style.position = "fixed";
img.style.bottom = "0";   // distância da borda inferior
img.style.right = "5px";    // distância da borda direita
img.style.width = "200px";   // largura fixa
img.style.height = "auto";   // mantém a proporção original
// img.style.opacity = "0.8";   // leve transparência opcional
img.style.pointerEvents = "none"; // não bloqueia cliques
img.style.zIndex = "999999"; // fica acima de todos os elementos

// Adiciona a imagem à página
document.body.appendChild(img);
