# ⚠️ IMPORTANTE - Configurazione Form di Contatto

## 🎯 Come Funziona l'Invio Email

Il form di contatto usa **Formsubmit.co**, un servizio gratuito che invia le email direttamente senza bisogno di backend.

### Prima Configurazione (OBBLIGATORIA)

**ATTENZIONE**: Al primo invio di un form, Formsubmit ti chiederà di confermare l'email.

#### Procedura di Attivazione:

1. **Pubblica il sito** su GitHub Pages normalmente
2. **Vai sul sito** e compila il form di contatto
3. **Invia il primo messaggio** di prova
4. **Controlla la casella email** info@miraseti.com
5. **Troverai un'email da Formsubmit** con un link di conferma
6. **Clicca sul link** per attivare il servizio
7. **Fatto!** Da questo momento tutti i messaggi arriveranno direttamente a info@miraseti.com

### Come Funziona per gli Utenti

Una volta attivato, quando qualcuno compila il form:

1. ✅ Compila il form sulla tua pagina
2. ✅ Clicca "Invia Richiesta"
3. ✅ Il messaggio viene inviato istantaneamente
4. ✅ L'utente vede una pagina di conferma di Formsubmit
5. ✅ Tu ricevi l'email con tutti i dati a info@miraseti.com

**Nessun client email si apre!** Tutto avviene online.

## 🔧 Funzionalità Incluse

- ✉️ **Invio diretto** a info@miraseti.com
- 🛡️ **Protezione anti-spam** integrata
- 📧 **Oggetto personalizzato**: "Nuova richiesta informazioni da Miraseti.com"
- 🎨 **Template email formattato** in modo professionale
- 🔒 **Honeypot anti-bot** nascosto

## 🎨 Personalizzazioni Opzionali

Se vuoi personalizzare ulteriormente, puoi:

### 1. Cambiare la pagina di ringraziamento

Aggiungi questa riga nel form (in `index.html`):

```html
<input type="hidden" name="_next" value="https://tuosito.com/grazie.html">
```

Poi crea una pagina `grazie.html` con un messaggio personalizzato.

### 2. Ricevere una copia all'utente

Aggiungi:

```html
<input type="hidden" name="_autoresponse" value="Grazie per averci contattato! Ti risponderemo presto.">
```

### 3. Cambiare l'email di destinazione

Nel file `index.html`, cerca:

```html
<form action="https://formsubmit.co/info@miraseti.com" method="POST"...
```

E cambia `info@miraseti.com` con la tua email.

## 🚨 Risoluzione Problemi

**Le email non arrivano?**
- Controlla di aver confermato l'email al primo invio
- Verifica la cartella SPAM
- Assicurati che info@miraseti.com sia l'email corretta

**La pagina di conferma è in inglese?**
- È normale, è la pagina di Formsubmit
- Puoi creare una pagina di ringraziamento personalizzata (vedi sopra)

## 💡 Alternative (Se Formsubmit Non Ti Piace)

Puoi sostituire Formsubmit con:

### Opzione 1: Formspree (più professionale)
1. Registrati su [formspree.io](https://formspree.io)
2. Crea un nuovo form
3. Sostituisci l'URL nel form con quello di Formspree

### Opzione 2: Web3Forms
1. Vai su [web3forms.com](https://web3forms.com)
2. Inserisci la tua email e ricevi una Access Key
3. Modifica il form per usare Web3Forms

### Opzione 3: EmailJS
Più complesso ma più personalizzabile - richiede JavaScript aggiuntivo.

## ✅ Checklist Pre-Pubblicazione

- [ ] Ho pubblicato il sito su GitHub Pages
- [ ] Ho testato il form inviando un messaggio
- [ ] Ho confermato l'email cliccando sul link di Formsubmit
- [ ] Ho testato di nuovo per verificare che le email arrivino
- [ ] Le email arrivano correttamente a info@miraseti.com

---

**Il sistema è pronto!** Formsubmit è gratuito per sempre e gestisce fino a 1000 email al mese senza alcun costo.
