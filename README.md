# Miraseti Landing Page

Landing page professionale per Miraseti S.r.l.

## 📋 Contenuto del Pacchetto

- `index.html` - Pagina principale
- `styles.css` - Stili e animazioni
- `script.js` - Funzionalità JavaScript
- `logo-color.png` - Logo aziendale
- `README.md` - Questo file

## 🚀 Deployment su GitHub Pages

### Opzione 1: Upload tramite interfaccia web GitHub

1. Vai su [github.com](https://github.com) ed effettua il login
2. Vai al repository: `https://github.com/[tuo-username]/miraseti.com`
3. Clicca su "Add file" → "Upload files"
4. Trascina tutti i file di questo pacchetto (index.html, styles.css, script.js, logo-color.png)
5. Scrivi un messaggio di commit (es. "Initial landing page")
6. Clicca "Commit changes"
7. Vai su "Settings" → "Pages"
8. In "Source", seleziona "main" branch
9. Clicca "Save"
10. Il sito sarà disponibile su `https://[tuo-username].github.io/miraseti.com`

### Opzione 2: Upload tramite Git (se hai Git installato)

```bash
# Clone il repository
git clone https://github.com/[tuo-username]/miraseti.com.git
cd miraseti.com

# Copia tutti i file in questa cartella

# Aggiungi i file
git add .
git commit -m "Initial landing page"
git push origin main

# Attiva GitHub Pages dalle impostazioni del repository
```

## ✏️ Personalizzazione

### Informazioni Societarie da Completare

Nel file `index.html`, cerca e sostituisci i seguenti placeholder:

```html
<p>Via [Inserire indirizzo completo]</p>
<p>REA: MI-[Inserire numero REA]</p>
<p>Capitale Sociale: € [Inserire importo]</p>
```

### Modificare i Contenuti

1. **Testo della storia**: Modifica la sezione `<div class="story-text">` in `index.html`
2. **Testo immagine**: Modifica la sezione `<div class="image-text">` in `index.html`
3. **Colori**: Modifica le variabili CSS in `styles.css` (sezione `:root`)

### Personalizzare i Colori

In `styles.css`, modifica queste variabili:

```css
:root {
    --primary-color: #C93534;  /* Rosso principale (dal logo) */
    --text-dark: #1a1a1a;      /* Testo scuro */
    --text-light: #666;         /* Testo chiaro */
    --bg-light: #fafafa;        /* Sfondo chiaro */
    --white: #ffffff;           /* Bianco */
}
```

## 📱 Caratteristiche

- ✨ Design moderno e pulito
- 📱 Completamente responsive (mobile, tablet, desktop)
- 🎨 Animazioni fluide e transizioni eleganti
- 📧 Form di contatto integrato con mailto
- ⚡ Performance ottimizzate
- 🎯 SEO-friendly

## 🛠️ Tecnologie Utilizzate

- HTML5
- CSS3 (con variabili CSS e animazioni)
- JavaScript vanilla (senza dipendenze)
- Google Fonts (Cormorant Garamond, Archivo)

## 📧 Form di Contatto

Il form utilizza il protocollo `mailto:` che apre il client di posta dell'utente. Per un sistema più avanzato con invio email automatico, considera l'integrazione di servizi come:
- Formspree
- EmailJS
- Netlify Forms
- SendGrid

## 🔧 Manutenzione

Il sito è statico e non richiede manutenzione server. Per aggiornamenti:
1. Modifica i file localmente
2. Carica su GitHub seguendo la stessa procedura

## 📄 Licenza

© 2026 Miraseti S.r.l. - Tutti i diritti riservati

## 💡 Supporto

Per assistenza tecnica, contatta: info@miraseti.com
