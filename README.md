# Documentazione del Progetto React Boolflix

Questa documentazione descrive i principali file e componenti dell'applicazione "BOOTFLIX", un progetto React per la ricerca e la visualizzazione di film e serie TV. Include dettagli sulla struttura, funzionalità e utilizzo dei file chiave come `SearchContext.jsx`, `Header.jsx` e `Home.jsx`, fornendo una guida completa per comprendere e contribuire al progetto.


### Documentazione del file SearchContext.jsx

Il file `SearchContext.jsx` definisce un contesto React per gestire lo stato globale dell'applicazione. Questo contesto consente di condividere dati e funzioni tra i componenti senza dover passare esplicitamente le props. È progettato per gestire la ricerca di film e serie TV, il filtraggio per genere e il recupero di informazioni aggiuntive come gli attori principali.

### Struttura del file

1. **Importazioni**
   - `createContext`: Crea un contesto React.
   - `useContext`: Consente ai componenti di accedere al contesto.
   - `useState`: Gestisce lo stato locale del contesto.
   - `useEffect`: Esegue effetti collaterali come chiamate API.

2. **Creazione del contesto**
   - `SearchContext` è il contesto creato per condividere lo stato e le funzioni.

3. **Stati gestiti**
   Il contesto utilizza diversi stati per gestire i dati dell'applicazione:
   - `searchQuery`: Contiene la query di ricerca inserita dall'utente.
   - `movies`: Contiene i risultati della ricerca per i film.
   - `series`: Contiene i risultati della ricerca per le serie TV.
   - `genres`: Contiene la lista dei generi disponibili.
   - `selectGenre`: Contiene il genere selezionato dall'utente.
   - `actors`: Contiene i nomi degli attori principali di un film.

4. **Chiavi API**
   - La chiave API è recuperata dalle variabili d'ambiente per garantire sicurezza e flessibilità.

5. **Funzioni principali**
   - `handleSubmit`: Aggiorna la query di ricerca e recupera i risultati per film e serie TV.
   - `getActors`: Recupera i primi 5 attori principali di un film specifico.
   - `handleSelectGenres`: Aggiorna il genere selezionato dall'utente.
   - `filterMoviesByGenre`: Filtra i film in base al genere selezionato.

6. **Effetti collaterali**
   - Recupera la lista dei generi disponibili all'avvio dell'applicazione.

7. **Provider del contesto**
   - Condivide lo stato e le funzioni con i componenti figli.

8. **Hook personalizzato**
   - Fornisce un modo semplice per accedere al contesto nei componenti.

### Funzionalità offerte dal contesto

- **Gestione della ricerca**: Recupera film e serie TV in base alla query.
- **Filtraggio per genere**: Mostra solo i film che appartengono al genere selezionato.
- **Recupero degli attori**: Mostra i primi 5 attori principali di un film.
- **Gestione dei generi**: Recupera e aggiorna la lista dei generi disponibili.

### Esempio di utilizzo

Nel componente `Header.jsx`:

### Conclusione

Il file `SearchContext.jsx` è il cuore della gestione dello stato globale dell'applicazione. Fornisce un modo centralizzato per gestire la ricerca, il filtraggio e il recupero dei dati, semplificando la comunicazione tra i componenti.



### Documentazione del file Header.jsx

Il file `Header.jsx` rappresenta l'intestazione dell'applicazione "BOOTFLIX". Include un logo, una barra di ricerca, un pulsante per avviare la ricerca e un menu a tendina per selezionare i generi. Utilizza il contesto `SearchContext` per gestire lo stato della ricerca e le azioni correlate.

### Struttura del file

1. **Importazioni**
  - `useSearchContext`: Hook personalizzato per accedere al contesto di ricerca.

2. **Elementi principali**
  - **Logo**: Collega alla homepage dell'applicazione.
  - **Barra di ricerca**: Campo di input per inserire la query di ricerca.
  - **Pulsante di ricerca**: Attiva la funzione `handleSubmit` per inviare la query.
  - **Menu a tendina per i generi**: Permette di filtrare i contenuti per genere.

3. **Stati gestiti**
  - `searchQuery`: Contiene la query di ricerca inserita dall'utente.
  - `genres`: Contiene un array di oggetti che rappresentano i generi disponibili.

4. **Funzioni principali**
  - `handleSubmit`: Gestisce l'invio della query di ricerca.
  - `setSearchQuery`: Aggiorna lo stato della query di ricerca.
  - `handleSelectGenres`: Gestisce la selezione di un genere.

5. **Renderizzazione**
  - Mostra il logo come link cliccabile alla homepage.
  - Visualizza una barra di ricerca controllata legata allo stato `searchQuery`.
  - Include un pulsante con un'icona per inviare la ricerca.
  - Mostra un menu a tendina popolato dinamicamente con i generi disponibili.

### Funzionalità offerte dal componente

- **Navigazione**: Consente di tornare alla homepage tramite il logo.
- **Ricerca**: Permette di cercare film o serie TV tramite una query.
- **Filtraggio per genere**: Consente di filtrare i contenuti in base al genere selezionato.

### Conclusione

Il file `Header.jsx` è un componente fondamentale per l'interazione dell'utente con l'applicazione. Fornisce strumenti per la ricerca e il filtraggio, migliorando l'esperienza utente.

---

### Documentazione del file SearchList.jsx

Il file `SearchList.jsx` è responsabile della visualizzazione di un elenco di film o serie TV basato sui risultati della ricerca.

### Struttura del file

1. **Importazioni**
  - `useSearchContext`: Hook personalizzato per accedere al contesto di ricerca.

2. **Elementi principali**
  - **Elenco dei risultati**: Mostra i film o le serie TV corrispondenti alla query di ricerca.

3. **Accesso al contesto**
  - `movies` e `series`: Contengono i risultati della ricerca per i film e le serie TV.

4. **Renderizzazione**
  - Mostra un elenco di risultati con dettagli come titolo, immagine e descrizione.

### Funzionalità offerte dal componente

- **Visualizzazione dei risultati**: Mostra i film e le serie TV corrispondenti alla query di ricerca.
- **Esperienza utente migliorata**: Fornisce un'interfaccia chiara e intuitiva per esplorare i risultati.

### Conclusione

Il file `SearchList.jsx` è un componente chiave per la visualizzazione dei risultati di ricerca. Migliora l'esperienza utente mostrando i contenuti in modo organizzato e accessibile.

### Documentazione del file Home.jsx

Il file `Home.jsx` rappresenta la pagina principale dell'applicazione "BOOTFLIX". È responsabile della visualizzazione dei film e delle serie TV popolari e della transizione ai risultati di ricerca.

### Struttura del file

1. **Importazioni**
  - `useEffect` e `useState`: Gestiscono lo stato locale e gli effetti collaterali.
  - `ReactCountryFlag`: Mostra la bandiera del paese in base alla lingua originale.
  - `SearchList`: Componente per visualizzare i risultati di ricerca.
  - `useSearchContext`: Hook per accedere al contesto di ricerca.

2. **Stati locali**
  - `popularMovies`: Contiene i film popolari.
  - `popularSeries`: Contiene le serie TV popolari.

3. **Accesso al contesto**
  - `movies`: Contiene i risultati della ricerca per i film.

4. **Effetti collaterali**
  - Recupera i dati dei film e delle serie TV popolari tramite chiamate API.

5. **Renderizzazione**
  - Mostra i risultati di ricerca tramite `SearchList` se disponibili.
  - Altrimenti, visualizza i film e le serie TV popolari con dettagli come titolo, lingua, voto e descrizione.

### Funzionalità offerte dal componente

- **Visualizzazione dei contenuti popolari**: Mostra i primi 8 film e serie TV popolari.
- **Transizione ai risultati di ricerca**: Passa ai risultati di ricerca se presenti.


### Conclusione

Il file `Home.jsx` è il punto di ingresso per la visualizzazione dei contenuti principali dell'applicazione. Gestisce sia i contenuti popolari che i risultati di ricerca, offrendo un'esperienza utente dinamica e interattiva.







