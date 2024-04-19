# Background Eraser

## Descrição

O Background Eraser é uma aplicação web que utiliza técnicas avançadas de processamento de imagens, como morfologia matemática, limiarização global, Sobel e Canny, para remover o fundo de imagens e substituí-lo por outro fundo selecionado pelo usuário.

## Contribuição para o ODS 10 - Redução das desigualdades

Ao oferecer uma ferramenta gratuita e acessível para edição de imagens de alta qualidade, nossa aplicação contribui para a redução das desigualdades no acesso a recursos tecnológicos avançados, promovendo maior inclusão e igualdade de oportunidades.

## Funcionalidades

- Upload de imagem: Permite ao usuário fazer o upload da imagem que deseja editar.
- Remoção de fundo: Aplica técnicas de morfologia matemática, limiarização global, Sobel e Canny para remover o fundo da imagem.
- Seleção de fundo substituto: Permite ao usuário escolher um novo fundo para substituir o fundo removido.
- Visualização do resultado final: Mostra ao usuário a imagem editada com o novo fundo aplicado.

## Tecnologias Utilizadas

- Front-end: HTML, CSS, JavaScript, Jquery
- Back-end: Python (Flask)
- Bibliotecas: OpenCV (para as técnicas de processamento de imagens)

## Como Usar

1. Obter bibliotecas pelo PIP rodando no cmd ou shell: pip install opencv-python numpy matplotlib flask flask-cors scipy
2. Entrar na pasta ./backend e abrir terminal, rodando "flask run"
3. Acessar o endereço fornecido pelo Flask
4. OU rodar o bash executavel

## Equipe

Este projeto foi desenvolvido por Márlon Bento Azevedo.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Abra um pull request com suas alterações e ficaremos felizes em revisar.
