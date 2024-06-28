DEPLOY EM: https://bentricode-tirar-fundo-da-imagem.onrender.com/
# Projeto de Redução de Desigualdades

## Descrição

Neste projeto, estamos desenvolvendo uma solução de software que contribui para o Objetivo de Desenvolvimento Sustentável (ODS) número 10: Redução das desigualdades. A aplicação, que utiliza técnicas avançadas de processamento de imagens como morfologia matemática, limiarização global, Sobel e Canny para remover o fundo de imagens e substituí-lo por outro fundo selecionado pelo usuário, tem como objetivo reduzir as desigualdades no acesso a ferramentas de edição de imagens avançadas, proporcionando uma solução gratuita e de alta qualidade para um número maior de indivíduos.

## Problema a ser Resolvido

O problema que nossa solução visa resolver é a barreira de acesso que muitas pessoas enfrentam ao tentar utilizar ferramentas de edição de imagens avançadas devido a custos elevados ou falta de recursos. Nosso objetivo é democratizar o acesso a essas ferramentas, oferecendo uma solução gratuita e eficiente que possa ser utilizada por qualquer pessoa, independentemente de sua condição socioeconômica.

## Tipo de Solução

A aplicação será implementada como um novo site do zero, abrangendo tanto o front-end, responsável pela interface com o usuário, quanto o back-end, que realizará o processamento das imagens e a lógica de negócios. Isso garantirá que a solução seja acessível e inclusiva para todos os usuários, contribuindo para a redução das desigualdades no acesso a recursos tecnológicos avançados.

## Requisitos Funcionais

- Capacidade de upload de imagens
- Aplicação das técnicas de morfologia matemática, limiarização global, Sobel e Canny para remover o fundo da imagem
- Seleção de fundo substituto
- Visualização do resultado final

## Requisitos Não Funcionais

- Eficiência do processamento de imagens
- Usabilidade da interface
- Suporte a diferentes formatos de imagens

## Diagrama de Caso de Uso

- Ator: Usuário
- Casos de Uso:
  - Upload de imagem
  - Remoção de fundo utilizando técnicas avançadas
  - Seleção de fundo substituto
  - Visualização do resultado final

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
