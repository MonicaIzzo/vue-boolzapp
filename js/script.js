/*
Descrizione
Trovate la descrizione dell'esercizio nel brief in allegato. Fate riferimento alla registrazione dell'assegnazione per eventuali dubbi. In alternativa non esitate a contattare me al mattino o i tutor al pomeriggio, taggandoci sul canale GENERAL
Milestones
Cercate di lavorare in ordine di milestone: sono state pensate con ordine logico per agevolare il vostro lavoro. Per oggi ci aspettiamo il completamento della Milestone 1 che riguarda per lo più la grafica.
Vi ricordo che Milestone 5 è opzionale e che se ne aveste voglia abbiamo ulteriori bonus su richiesta.


- **1 MILESTONE**
  - Preparo la parte statica in HTML e CSS
  - Copio il file data (ho scelto di importare il file data dall'esterno per avere un file script più semplice da leggere)
- **2 MILESTONE**
  - Userò l'ID come logica in tutto lo script per una maggiore coerenza con la prassi comune
- **3 MILESTONE**
  ? - Aggiunta di un messaggio: in console visualizzo dinamicamente il valore del campo riempito, ma non riesco a generare il nuovo messaggio. Probalbilmente c'è ub errore nel methods in "addMESSAGE".
  ? - Risposta dall’interlocutore: idem il problema sta in "addMESSAGE".
  **4 MILESTONE**
  ? - Ricerca utenti: Sicuramente si fa con "filter" devo andarmi a vedere l'esercizio precedente (To do List) - (che non ho finito) 
 **5 MILESTONE**
  ? - Cancella messaggio: idem per sopra è una funzione che abbiamo visto in TO DO LIST.
  
**BONUS**
Dei bonus che vorrei fare:
? - FARE LA INTRO DELLA CHAT come ha fatto Marco L. e sicuramente devo modificare il methods(created) Non fargli settare al caricamento il primo contatto corrente.
? - FARE IL RESPONSIVE questo è facile, devo cambiare le col in class nell'HTML secondo la convenzione di Bootstrap.
? - Se scrivo il messaggio nel campo testo l'icona accanto deve cambiare. (sicuramente è una funzione FOCUS con il ref="" da inserire in HTML)
? - Mentre l'interlocutore mi scrive sotto alla contact list deve apparirmi il testo (sta scrivendo). Questo forse saprei come farlo, sicuramente andrà aggiunto nella methods in "addMESSAGE" e in setTimeout. Nell'HTML devo aggiungere lo <span> con dati dinamici.
? - ELIMINAZIONE DEL CONTATTO idem con l'esercizio fatto TO DO LIST (se riesco a finirlo, tornerò qui ad aggiungerlo).
*/


// # Preparo la parte statica in HTML e CSS


// # verifiche JS
console.log('JS OK');
console.log('Vue OK, Vue');

// # inizializzo Vue JS
    const app = Vue.createApp ({
        data() {
            return {
              newMessage: '',
              currentNumber: null,
              user: data.user,
              contacts: data.contacts
            }
        },

        computed: {
          currentContact() {
            return this.contacts.find(contact => contact.id === this.currentNumber)
          },

          currentChat() {
            return this.currentContact.massages;
          },

        },

        methods: {
          renderPicture(person) {
            return `img/avatar${person.avatar}.jpg`;
          },
          setCurrentNumber(number) {
            this.currentNumber = number;
          },

          addMessage(message, status) {
            const newMessage = {
              id: new Date().getTime(),
              date: "new Date().toLocalString()",
              message,
              status
            };

            this.currentChat.message.push(newMessage);

          },

          sendMessage () {
            if(!this.newMessage) return;
           
            this.addMessage(this.newMessage, "sent");
            this.newMessage ="";
            
            setTimeout(() => {
              this.addMessage("ok!", "received");
              }, 1000 );
          }
        },
        created () {
          this.currentNumber = this.contacts[0].id;
        }
        
    });

    //La monto nell'elemento HTML "radice"
    app.mount('#root');
