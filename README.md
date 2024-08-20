# Ascensão Impulsiva
Descrição do Objetivo e Regras do Jogo:
Ascensão Impulsiva é um jogo interativo em que o jogador controla um círculo verde que deve subir verticalmente para evitar obstáculos retangulares vermelhos que se movem horizontalmente na tela. O objetivo é sobreviver o maior tempo possível, desviando dos obstáculos e acumulando pontos cada vez que um obstáculo é evitado com sucesso.

As regras são simples: o jogador controla a altura do círculo pressionando a seta para cima. Cada pressão aumenta a força de elevação aplicada ao círculo, permitindo que ele suba na tela. A pontuação aumenta à medida que o jogador passa pelos obstáculos. O jogo termina quando o círculo colide com um obstáculo, e o jogador pode reiniciar o jogo pressionando a tecla "R".

Utilização de Elementos Geométricos no Design:  
Os elementos geométricos são fundamentais para o design de Ascensão Impulsiva. O jogador é representado por um círculo verde, escolhido por sua simplicidade visual e fácil manipulação em termos de movimento e colisão. Os obstáculos são retângulos vermelhos de tamanhos variados, gerados aleatoriamente na parte superior e inferior da tela, criando passagens estreitas que o jogador deve atravessar. A escolha de formas geométricas básicas como círculos e retângulos permite uma clareza visual que facilita o entendimento imediato das mecânicas do jogo, ao mesmo tempo que mantém um nível de desafio conforme a velocidade dos obstáculos aumenta.

Lógica Implementada:  
A lógica do jogo é centrada em três principais aspectos: controle do movimento, detecção de colisões e gestão da pontuação. O movimento do círculo é controlado pela força de gravidade que o puxa para baixo, contrabalançada pela força de elevação aplicada quando a seta para cima é pressionada. Cada pressão na seta para cima acumula uma força que é aplicada ao círculo, permitindo que ele suba mais alto. A detecção de colisões é implementada verificando se as bordas do círculo tocam nos retângulos dos obstáculos, o que resulta no fim do jogo. A pontuação é incrementada cada vez que o círculo passa com sucesso por um obstáculo, incentivando o jogador a continuar jogando e melhorando sua performance. 

A combinação desses elementos geométricos e lógicos cria um jogo envolvente, desafiador e acessível, ideal para quem busca um entretenimento que também exercite habilidades de reação e estratégia.
