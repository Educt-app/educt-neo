# Marca

Versões escolhidas em 20 out 2026:

| Arquivo | O que é | Onde usar |
|---|---|---|
| `logo-educt.svg` | Logo **D · Degradê**: "Educt" branco com contorno de tinta e nove degraus de azul → violeta → coral, com a sombra para a direita | Redes sociais, pôster, tela de abertura, cabeçalho do app |
| `icone-educt.svg` | Ícone **três camadas** em fundo branco, com borda e canto arredondado | Favicon, avatar das redes, selo "oficial" |
| `icone-educt-loja.svg` | O mesmo ícone em quadrado cheio, sem borda nem canto | App Store e Play Store, que aplicam a própria máscara |
| `selo-pro.svg` | Selo PRO **Marca-texto**: pílula amarela com raio, contorno e sombra dura | Ao lado da logo e do nome no perfil |

PNGs prontos em `png/`:
- `icone-loja-1024.png`: lojas;
- `icone-512.png` e `icone-192.png`: PWA;
- `apple-touch-icon-180.png`;
- `favicon-32.png`;
- `logo-educt-1200.png`: 1200×400, com fundo transparente.

## Regras

- O selo PRO fica chapado, sem a sombra colorida, para não repetir a logo ao lado.
- Não recolorir. As cores vêm de `stripe` (azul `#5B8DF5`, violeta `#7A4BE6`, coral `#FF6B57`).
- Em tamanho pequeno (abaixo de 40px de altura), use o ícone no lugar da logo.

## Regerar

Os arquivos são gerados a partir de `site/index.html` (seção Logo). Se a logo mudar lá, rode:

```sh
CHROME=/caminho/do/chrome node scripts/export-marca.mjs
```

O script também precisa do ImageMagick (`convert`) para recortar os PNGs.
