// content.js - insere a imagem com sombra no canto inferior direito

// Ajustes que você pode modificar:
const DISTANCE_BOTTOM = "-5px";   // distância da borda inferior
const DISTANCE_RIGHT  = "5px";   // distância da borda direita
const WIDTH            = "200px"; // largura da imagem
const SHADOW_OFFSET_X  = "40px";   // deslocamento horizontal da sombra
const SHADOW_OFFSET_Y  = "10px";  // deslocamento vertical da sombra
const SHADOW_BLUR      = "10px";  // raio de desfoque da sombra
const SHADOW_COLOR     = "rgba(0,0,0,0.15)"; // cor e opacidade da sombra

// Cria um container para manter estilo e, se quiser, permitir cliques no conteúdo abaixo
const container = document.createElement("div");
container.style.position = "fixed";
container.style.bottom = DISTANCE_BOTTOM;
container.style.right = DISTANCE_RIGHT;
container.style.zIndex = "999999";
container.style.pointerEvents = "none"; // define como "none" se quiser que cliques atravessem a imagem
container.style.display = "flex";
container.style.alignItems = "flex-end";
container.style.justifyContent = "flex-end";
container.style.width = WIDTH;
container.style.height = "auto";
container.style.gap = "0";
container.style.padding = "0";
container.style.margin = "0";
container.style.overflow = "visible"; // garante que a sombra não seja cortada

// Cria a imagem
const img = document.createElement("img");
img.src = chrome.runtime.getURL("overlay.png"); // ou URL direta se for externa
img.style.width = "100%";  // usa a largura do container
img.style.height = "auto";
img.style.display = "block";
img.style.border = "none";
img.style.borderRadius = "8px"; // opcional; suave nos cantos do container
img.style.boxSizing = "content-box";
img.style.willChange = "filter, transform"; // ajuda performance em animações

// Aplica a sombra que segue o contorno do PNG (drop-shadow)
img.style.filter = `drop-shadow(${SHADOW_OFFSET_X} ${SHADOW_OFFSET_Y} ${SHADOW_BLUR} ${SHADOW_COLOR})`;

// Opcional: leve elevação visual (sutil translateY)
img.style.transform = "translateY(0)";

// Se você quiser que o usuário consiga interagir com a imagem,
// troque container.style.pointerEvents e img.style.pointerEvents para "auto"
// e remova a linha acima que define pointerEvents = "none".

// Anexa
container.appendChild(img);
document.body.appendChild(container);
