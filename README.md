# Template sito attività locale

Eleventy + CSS puro. Nessun framework, nessuna build complicata.
Un sito di 5 pagine si mette online in poche ore partendo da qui.

## Avvio

```bash
npm install
npm start          # http://localhost:8080, si ricarica da solo
npm run build      # genera _site/ da caricare online
```

## Come si fa un sito nuovo

1. Copia questa cartella e rinominala `AAAA-MM-nomecliente`.
2. Apri `src/_data/site.json` e cambia **solo quello**: nome, telefono,
   indirizzo, orari, listino, colori. Il 90% del sito si aggiorna da lì.
3. Metti le foto del cliente in `src/kuvat/`.
4. Ritocca i testi nelle pagine `src/*.njk` dove serve.
5. `npm run build`, poi trascina `_site/` su Cloudflare Pages o Netlify.

## Bilingue

Ogni testo ha `data-fi` e `data-en`. Il pulsante FI/EN in alto scambia i
testi via JavaScript e ricorda la scelta nel browser. Nel template puoi
scrivere `{{ "Palvelut" | t("Services") | safe }}`.

Se il cliente non vuole l'inglese, togli il blocco `.lang` dall'header:
il resto continua a funzionare, mostrando il finlandese.

## Le cose che decidono se il cliente rinnova

Non il design. Queste cinque, in quest'ordine:

1. Numero di telefono cliccabile, visibile senza scorrere
2. Orari di apertura corretti e aggiornati
3. Indirizzo con link alla mappa
4. Foto vere del posto, non stock
5. Profilo Google Business allineato al sito

Se il sito fa suonare il telefono, il cliente rinnova. Se è solo bello, no.

## Prima di consegnare — controlla

- [ ] Il telefono si compone toccandolo dal cellulare
- [ ] Il sito si legge su uno schermo da 360px di larghezza
- [ ] Gli orari corrispondono a quelli sul profilo Google
- [ ] `<title>` e `description` contengono città e servizio
      (es. "Kampaamo Riihimäki | Vire")
- [ ] Il dominio è intestato al CLIENTE, non a te
- [ ] Il cliente ha ricevuto la password e sa che il dominio è suo
