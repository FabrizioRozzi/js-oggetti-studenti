// CREO UN arrClasse CHE CONTENGA GLI objStudenti( OGGETTI ) CHE CONTENGONO LE PROPRIETA': NOME, COGNOME E ETA'.

var arrClasse = [{
  
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 14  
},
{
  firstName: 'Mfeario',
  lastName: 'Roswefwsi',
  age: 13
},
{
  firstName: 'pepe',
  lastName: 'Rospeeesi',
  age: 10
}];

var studenti = 
{  
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 14  
};



	// STAMPO LE PROPRIETA' DELL' OGGETTO STUDENTI
	
// for( var key in studenti ){

// 	console.log('Chiave:  ' + key + '- valore:  '+ studenti[key] )        //STAMPO CHIAVE VALORE
// }
// console.log('--------------------------------------')


  // CHIEDO ALL'UTENTE SE VUOLE INSERIRE UN ALTRO STUDENTE
  
  var scelta = prompt("Vuoi inserire un altro studente? si/no");
  while(scelta === 'si'){
    var newFirstName = prompt(" Nome dello studente? ");
    var newLastName = prompt(" Cognome dello studente? ");
    var newAge = prompt(" Etá dello studente? ");
    
    arrClasse.push({
      firstname: newFirstName  ,                             // PUSHO I DATI RICEVUTI DENTRO UN ARRAY
      lastname: newLastName ,          
      age :newAge        
    });
    scelta = prompt("Vuoi inserire un altro studente? si/no")
    
    for(var classe of arrClasse){
  
      for(var chiave in classe){
        //usando disc[chiave] richiamo il valore delle chiavi
        console.log("chiave : " + chiave + " valore: " + classe[chiave]);
      }
      console.log("-------------------");
    }
    
    }
  
  

 