// CREO LO SLICE PER GESTIRE IL FETCH ASINCRONO CON createAsyncThunk
// DOPO AVERLO CREATO LO COLLEGO ALLO STORE

// Importiamo le funzioni necessarie da Redux Toolkit:
// 1) createAsyncThunk serve a creare un'azione asincrona per fare il fetch dei dati
// 2) createSlice serve a creare lo "slice" (stato + reducer)

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// 1.... CREO LA CONST PER IL FETCH ASINCRONO DEI DATI CON LA FUNZIONE createAsyncThunk
export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes", // Nome dell'azione (identificatore)
  async () => {
    // Chiamimao l'API per prendere le ricette
    const res = await fetch("https://dummyjson.com/recipes"); 
    
    // Se la risposta non va bene, lanciamo un errore
    if (!res.ok) throw new Error("Errore nel fetch delle ricette");
    
    // Convertiamo la risposta in formato JSON perché la rispotsa nn arriva in formato leggibile,
    // ma è un oggetto "Response" che contiene metodi e proprietà per gestire la risposta ma non ancora i dati
    // per avere i dati veri e propri convertiamo in json
    const data = await res.json();
    
    // Ritorniamo i dati: saranno disponibili come action.payload nello slice
    return data;
  }
);

// 2..... CREO LO SICE DELLE RICETTE: 
// CIoè una parte dello store Redux che gestisce uno specifico set di dati, in questo caso le ricette. ---

// Lo slice contiene lo stato iniziale e le info su come modificare lo stato
const recipesSlice = createSlice({
  name: "recipes", 
  initialState: {
    items: [],       // Qui salveremo l'array delle ricette
    status: "idle",  // idle: fetch non iniziato. - Stati del fetch: idle, loading, succeeded, failed
    error: null,     // Stato iniziale degli errori
    searchTerm:"", // Altin -> aggiunto per salvare il testo digitato
  },
  reducers: {}, // Qui metteremmo azioni sincrone 
  // (es.: setFilter --> per filtrare le ricette in base ai tag)


  // Questa funzione viene eseguita ogni volta che l’utente scrive nell’input
    // Serve per aggiornare lo stato "searchTerm" con ciò che ha digitato
  setSerach: (state, action) => { state.searchTerm = action.payload; }, // -> aggiorna searchTerm con il testo dell’utente

  extraReducers: (builder) => { /* extrareducer è una proprietà dello slice di redux Toolkit 
     che serve a definire azioni non incluse nel reducer, quindi asincrone come 
     in questo caso del createAsyncThunk che fa a generare automaticamente le 3 azioni: 
     pending(fetch partito), fullfilled (fetch riuscito), rejected(fetch fallito)
     Quindi comunichiamo allo slice come cambiare lo stato durante queste 3 azioni,
     scrivendo al'interno di extraReducers cosa deve cambiare :
     builder: È lo strumento che Redux Toolkit ti passa dentro extraReducers 
     quando lo scrivi come parametro della funzione extraReducers. */

    builder // builder in uesto caso lo stiamo usando come parametro per chiamare i metodi (.addCase ecc.).
      
    // Quando il fetch parte 
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading"; // aggiorniamo lo stato del fetch delle ricette in "loading"
        /* così nello store lo status sarà in loading e i componenti "sapranno" che i dati 
         stanno per arrivare */
         console.log("Fetch in corso…", state.status);
      })

      // Quando il fetch ha successo
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";  // stato: il fetch è stato eseguito con successo
        state.items = action.payload; // salviamo in action.payload nello store Redux (state) i dati ricevuti
        // Quindi state.items ora contiene l’array delle ricette ( i dati fetchati) e rimane nello store
        console.log("Fetch completato con successo!", state.status, state.items);

      })

      // Quando il fetch fallisce
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";  // stato. il fetch è fallito
        state.error = action.error.message; // salviamo nello store redux (lo state) il messaggio d'errore generato dal fetch fallito
        // action.error contiene informazioni sull’errore se il fetch fallisce
        console.log("Errore fetch:", state.error); // in caso di errore vediamo il messaggio in console
    });
  },
});



// Esportiamo il reducer per collegarlo allo store
export default recipesSlice.reducer;


/* 

FUNZIONE createAsyncThunk PER FETCH ASINCRONO:

1. La funzione createAsyncThunk crea in automatico le 3 azioni asincrone (le thunk): 
pending fulfilled e rejected.

2. Con la proprietà extraReducers diciamo a Redux che mentre sono in esecuzione 
queste 3 azioni lo stato deve cambiare rispettivamente in loading (i dati stanno arrivando), 
succeded (i dati sono pronti e possono usarli) o failed ( la chiamata è fallita). 

3. Lo stato aggiornato viene salvato nello store Redux, che è il contenitore centrale 
dei dati dell’app, così qualsiasi componente React può leggerlo in tempo reale usando 
useSelector e reagire di conseguenza (mostrando un messaggio di loading (loader), 
utlizzando i dati ricevuti se lo stato è Succeded o mandando un messaggio d’errore 
se lo stato è failed).

*/