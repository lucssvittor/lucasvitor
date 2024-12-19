
// Digitação
document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.getElementById('typing-text');
    const text = typingText.innerHTML;
    typingText.innerHTML = '';

    let i = 0;
    const speed = 100; 

    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); 
});

// Função para revelar elementos ao rolar a página
function revealOnScroll() {
    console.log("Função revealOnScroll foi chamada"); 
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}


// Eventos para chamar as funções no carregamento e rolagem da página
window.addEventListener('scroll', () => {
    revealOnScroll();
    animateSkills();
});
window.addEventListener('load', () => {
    revealOnScroll();
    animateSkills();
});

    
// Modal
const projectDetails = {
    "CALCULADORA": {
      description: "Uma calculadora básica desenvolvida para realizar operações matemáticas simples, como soma, subtração, multiplicação e divisão. É uma aplicação prática para quem precisa de uma ferramenta rápida e eficiente para calcular resultados no dia a dia.",
      icons: ["/img/icon/js.png", "/img/icon/css.png","/img/icon/html.png" ],
      video: "/videos/calculadora.mp4",
      git: "https://github.com/lucssvittor/Calculator",
      site: "https://calculator-eight-lyart.vercel.app/"
    },
    "CONECTADOS PELA FÉ": {
      description: "Este projeto visa evangelizar jovens e adultos. Ela apresenta relatos como exemplos de vida de santos jovens, uma galeria de milagres eucarísticos, conteúdo audiovisual, quiz interativo, um mapa de milagres e frases. Logo menos atualização!",
      icons: ["/img/icon/js.png", "/img/icon/css.png","/img/icon/html.png" ],
      video: "/videos/conectados.mp4", 
      git: "https://github.com/lucssvittor/Conectados-Pela-Fe",
      site: "https://conectados-pela-fe-lucssvittors-projects.vercel.app/"
    },
    "MURAL": {
      description: "Este projeto foi um simples presente para minha amada, Clarice ❤",
      icons: ["/img/icon/css.png","/img/icon/html.png","/img/icon/js.png" ],
      video: "/videos/mural.mp4",
      site: "https://mural-nu.vercel.app/"
    },

    "CONFISSÃO": {
      description: "Essa aplicação, permitindo registrar, atualizar, visualizar e remover pecados. Ele usa PySimpleGUI para interface gráfica e armazena dados de usuários e pecados em arquivos JSON, com autenticação de usuários e controle de dados dos pecados.",
      icons:["/img/icon/python.png"],
      video: "videos/confissao.mp4",
      git: "https://github.com/lucssvittor/Gerenciador",
    },
    "SISTEMA DE ESTOQUE": {
        description: "Sistema basico de estoque que permite adicionar, buscar e exibir produtos, além de gerar relatórios e salvar/recuperar dados em arquivos de texto. Inclui funcionalidades como controle de validade, fornecedor, custo, preço de venda, descontos e categorias..",
        icons: ["/img/icon/c.png" ],
        video: "/videos/sistema.mp4",
        git: "https://github.com/lucssvittor/System-Basic"

      },
      "GERENCIADOR DE TAREFAS":{
        description: "A aplicação adiciona, remove, lista, salva e carrega os dados. Conta com uma interface gráfica, construída com Java Swing e exibe gráficos de barras e pizza para visualização de estatísticas de tarefas por prioridade e status. Essa aplicação está em fase beta. Em breve atualizações! ",
        icons: ["/img/icon/java.png" ],
        video: "/videos/tarefas.mp4",
        git: "https://github.com/projeto1"

      },
};

// Função para exibir os detalhes do projeto
function showDetails(projectId) {
    const modal = document.getElementById("projectDetails");
    const content = document.getElementById("projectContent");
    const project = projectDetails[projectId];

    content.innerHTML = `
        <h1>${projectId}</h1>
        <p>${project.description}</p>
         <div class="icons">${project.icons.map(icon => `<img src="${icon}" alt="Ícone" class="icon" />`).join("")}</div>

        <video controls width="100%">
            <source src="${project.video}" type="video/mp4">
            <source src="${project.video.replace('.mp4', '.webm')}" type="video/webm">
            <source src="${project.video.replace('.mp4', '.ogg')}" type="video/ogg">
            Seu navegador não suporta a tag de vídeo.
        </video>
            <div class="project-buttons">
            <a href="${project.git}" target="_blank" class="git-button">
            REPOSITORIO<img src="/img/icon/git.png" alt="Ícone GitHub" class="contact-icon"> 
            </a>
            <a href="${project.site}" target="_blank" class="site-button">
           TESTAR <img src="/img/icon/site.png" alt="Ícone Site" class="contact-icon">
            </a>
        </div>
    `;
    modal.style.display = "block";
}

// Função para fechar o modal
function closeDetails() {
    document.getElementById("projectDetails").style.display = "none";
}
