# Mascotes: Grafite e Tinta

`Mascote.dc.html` é o componente do canvas "Mascotes Educt" no Claude Design. É um SVG paramétrico com estas props:

| Prop | Valores |
|---|---|
| `personagem` | `grafite` (lápis) · `tinta` (caneta azul) |
| `humor` | neutro, feliz, animado, confiante, pensando, surpreso, tedio, triste, zoeira, determinado |
| `pose` | nenhuma, relaxado, aceno, comemora, aponta, joinha, pensa, cintura, segura |
| `corte` | `inteiro` · `rosto` (avatar) |
| `sombra`, `largura`, `altura`, `olharx`, `olhary`, `recorte` | ajustes de tamanho, olhar e enquadramento |

O formato `.dc.html` depende do runtime do Claude Design. Os SVGs exportados por humor e pose, prontos para o app, ainda não estão aqui.

## Regras

- **Grafite** é o rascunho: início, sequência semanal e telas vazias.
- **Tinta** é a versão final: nota, feedback e conquistas.
- Nas telas, eles espiam inclinados de um canto. Não cobrem texto nem nota.
- Nada de rosto gigante cortado.
- Sem dentes. Braço preto grosso com luva de 4 dedos.
- **Tamanhos:** espiando, destaque, lista (64px), avatar (56/40px) e ícone (24px).
- Não esticar, não trocar as cores, não usar sombra borrada.
