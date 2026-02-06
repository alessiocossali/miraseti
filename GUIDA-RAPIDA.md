# Guida Rapida - Miraseti Landing Page

## 🎯 Come Pubblicare il Sito

### Passo 1: Prepara i file
Hai già tutti i file necessari in questa cartella!

### Passo 2: Completa le informazioni aziendali
Apri `index.html` con un editor di testo (anche il Blocco Note va bene) e cerca queste righe verso la fine:

```html
<p>Via [Inserire indirizzo completo]</p>
<p>REA: MI-[Inserire numero REA]</p>
<p>Capitale Sociale: € [Inserire importo]</p>
```

Sostituiscile con i dati reali della tua azienda.

### Passo 3: Carica su GitHub
1. Vai su [github.com](https://github.com)
2. Se non hai un account, creane uno (è gratuito)
3. Crea un nuovo repository chiamato `miraseti.com` (o il nome che preferisci)
4. Nella pagina del repository, clicca "uploading an existing file"
5. Trascina TUTTI i file di questa cartella nella finestra
6. Clicca "Commit changes"

### Passo 4: Attiva GitHub Pages
1. Nel tuo repository, vai su "Settings" (in alto a destra)
2. Nel menu a sinistra, clicca "Pages"
3. In "Source", seleziona "main" dal menu a tendina
4. Clicca "Save"
5. Aspetta 2-3 minuti

Il tuo sito sarà online all'indirizzo:
`https://[tuo-nome-utente].github.io/miraseti.com`

## 📝 Modifiche Comuni

### Cambiare il testo della storia
1. Apri `index.html`
2. Cerca `<section class="story">`
3. Modifica i paragrafi `<p>` con il tuo testo

### Cambiare il testo sulla foto
1. Apri `index.html`
2. Cerca `<section class="image-section">`
3. Modifica il titolo `<h2>` e il paragrafo `<p>`

### Cambiare i colori
1. Apri `styles.css`
2. All'inizio del file trovi:
```css
:root {
    --primary-color: #C93534;  /* Colore principale */
}
```
3. Cambia il codice colore (es. `#C93534` con un altro)
4. Puoi usare [questo sito](https://htmlcolorcodes.com/it/) per scegliere i colori

## ❓ Domande Frequenti

### Il form di contatto funziona?
Sì! Quando qualcuno compila il form, si aprirà il suo programma di posta con tutti i dati già compilati, indirizzato a info@miraseti.com

### Posso usare un dominio personalizzato?
Sì! Nelle impostazioni di GitHub Pages puoi configurare un dominio personalizzato come www.miraseti.com

### Come aggiorno il sito?
1. Modifica i file sul tuo computer
2. Torna su GitHub
3. Trascina i file aggiornati (sovrascriveranno i vecchi)
4. Le modifiche saranno online in 1-2 minuti

### Il sito è responsive?
Sì! Funziona perfettamente su cellulari, tablet e computer.

## 🆘 Serve Aiuto?

Se hai problemi:
1. Controlla che tutti i file siano nella stessa cartella
2. Verifica che i nomi dei file siano esatti (maiuscole/minuscole)
3. Aspetta qualche minuto dopo aver caricato su GitHub
4. Scrivi a info@miraseti.com per assistenza

## ✅ Checklist Prima di Pubblicare

- [ ] Ho aggiornato l'indirizzo completo
- [ ] Ho aggiunto il numero REA
- [ ] Ho inserito il capitale sociale
- [ ] Ho verificato email e telefono
- [ ] Ho personalizzato il testo della storia
- [ ] Ho testato il sito in locale (aprendo index.html)
- [ ] Tutti i file sono nella stessa cartella

Buona pubblicazione! 🚀
