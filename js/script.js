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
  - Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
  - Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
- **4 MILESTONE**
  - Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
- **5 MILESTONE**
  ? - Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato (non fatto).
  
**BONUS**
Dei bonus che vorrei fare:
? - FARE LA INTRO DELLA CHAT come ha fatto Marco L. e sicuramente devo modificare created e non fargli settare al caricamento del primo contatto corrente.
? - FARE IL RESPONSIVE questo è facile, devo cambiare le col in class nell'HTML secondo la convenzione di Bootstrap.
? - Se scrivo il messaggio nel campo testo l'icona accanto deve cambiare. (sicuramente è una funzione FOCUS con il ref="" da inserire in HTML)
? - Mentre l'interlocutore mi scrive sotto alla contact list deve apparirmi il testo (sta scrivendo). Questo forse saprei come farlo, sicuramente andrà aggiunto nella methods in "addMESSAGE" e in setTimeout. Nell'HTML devo aggiungere lo <span> con dati dinamici.
? - ELIMINAZIONE DEL CONTATTO idem con l'esercizio fatto TO DO LIST (se riesco a finirlo, tornerò qui ad aggiungerlo).
*/
// # Preparo la parte statica in HTML e CSS

// # verifiche JS
console.log("Vue OK, Vue");
const dt = luxon.DateTime;

// # inizializzo Vue JS
const app = Vue.createApp({
  data() {
    return {
      searchText: "",
      newMessage: "",
      currentNumber: null,
      user: data.user,
      contacts: data.contacts,
    };
  },
  computed: {
    currentContact() {
      return this.contacts.find((contact) => contact.id === this.currentNumber);
    },

    currentChat() {
      return this.currentContact.messages;
    },
    filteredContacts() {
      const term = this.searchText.toLowerCase();

      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(term);
      });
    },
  },
  methods: {
    renderPicture(person) {
      return `img/avatar${person.avatar}.jpg`;
    },
    setCurrentNumber(number) {
      this.currentNumber = number;
    },
    sendMessage() {
      if (!this.newMessage) return;
      const message = {
        id: new Date().getTime(),
        date: dt
          .now()
          .setLocale("it")
          .toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
        message: this.newMessage,
        status: "sent",
      };
      this.currentChat.push(message);
      this.newMessage = "";

      setTimeout(() => {
        const replay = {
          id: new Date().getTime(),
          date: dt
            .now()
            .setLocale("it")
            .toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
          message: "ok",
          status: "received",
        };
        this.currentChat.push(replay);
      }, 1000);
    },
  },
  created() {
    this.currentNumber = this.contacts[0].id;
  },
});

//La monto nell'elemento HTML "radice"
app.mount("#root");
