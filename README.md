# Miraseti Landing (static)

Contenuto pronto per GitHub Pages. Nessun backend.

## Struttura
- index.html
- assets/css/styles.css
- assets/js/main.js
- assets/img/*

## Dove cambiare i contenuti
- Testi e sezioni: `index.html`
- Colori/stile: `assets/css/styles.css`
- Immagini: `assets/img/`

Immagini già normalizzate:
- `assets/img/logo.png`
- `assets/img/hero.jpg`
- `assets/img/og.jpg`
- `assets/img/favicon.png`
- `assets/img/case-1.jpg`, `case-2.jpg`, `gallery-1.jpg`, `gallery-2.jpg`

## Form contatti
Nel form è impostato Formspree come placeholder:

`action="https://formspree.io/f/XXXXXXXX"`

Sostituisci `XXXXXXXX` con il tuo endpoint Formspree.

## Pubblicazione con GitHub Pages
1. Crea un repository su GitHub (es. `miraseti-landing`).
2. Carica questi file (o fai push via git).
3. Repo → **Settings** → **Pages**
   - Source: Deploy from a branch
   - Branch: `main` / Folder: `/ (root)`
4. L’URL sarà: `https://<username>.github.io/<repo>/`

## Dominio personalizzato (www.miraseti.it)
Repo → **Settings** → **Pages** → Custom domain: `www.miraseti.it`

Nel DNS del dominio:
- CNAME `www` → `<username>.github.io`
- (opzionale ma consigliato) A record `@` → 185.199.108.153 / 109.153 / 110.153 / 111.153
