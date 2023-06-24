/*
Descrizione
Trovate la descrizione dell'esercizio nel brief in allegato. Fate riferimento alla registrazione dell'assegnazione per eventuali dubbi. In alternativa non esitate a contattare me al mattino o i tutor al pomeriggio, taggandoci sul canale GENERAL
Milestones
Cercate di lavorare in ordine di milestone: sono state pensate con ordine logico per agevolare il vostro lavoro. Per oggi ci aspettiamo il completamento della Milestone 1 che riguarda per lo più la grafica.
Vi ricordo che Milestone 5 è opzionale e che se ne aveste voglia abbiamo ulteriori bonus su richiesta.


- **1 MILESTONE**
  - Preparo la parte statica in HTML e CSS
  - Copio il file data
- **2 MILESTONE**
  - 
- **3 MILESTONE**
  - 
  **4 MILESTONE**
  - 
 **5 MILESTONE**
  - 
  
*/


// # Preparo la parte statica in HTML e CSS


// # verifiche JS
console.log('JS OK');
console.log('Vue OK, Vue');

// # inizializzo Vue JS
    const app = Vue.createApp ({
        data() {
            return {
               user: data.user,
               contacts: data.contacts
            }
        }
    });

    //La monto nell'elemento HTML "radice"
    app.mount('#root');
