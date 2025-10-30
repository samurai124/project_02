/* 
fonction qui verifie de la disponibilité 
prendre la liste de taxis comme paramètres
*/
function verifie_disponibilite(Taxis){
    let taxis_disponible = []
    for(let i = 0 ; i < Taxis.length ; i++){
        if(Taxis[i].available == true){
            taxis_disponible.push(Taxis[i])
        }
    }
    return taxis_disponible
}
/* 
fonction qui vérifie le taxi le plus proche
prendre la liste de taxis disponibles et la position de la demande comme paramètres
et return l'id du taxi le plus proche
*/
function verifie_taxi_plus_proche(taxis_disponible, dp) {
    if (taxis_disponible.length === 0){
        return null;
    } 
    let dpp = Infinity;            
    let taxi_plus_proche = null;   
    for (let i = 0; i < taxis_disponible.length; i++) {
        let db = Math.abs(taxis_disponible[i].position - dp);
        if (db < dpp) {
            dpp = db;
            taxi_plus_proche = taxis_disponible[i].id;
        }
    }
    return taxi_plus_proche; 
}



/* 
fonction qui met à jour la disponibilité 
prendre la liste de taxis disponibles et l'ID du taxi le plus proche comme paramètres
et met à jour sa disponibilité
*/
function met_a_jour_disponibilite(Taxis , taxi_id){
    let taxis_pour_changer ;
    for(let i = 0 ; i < Taxis.length ; i++){
        if(Taxis[i].id == taxi_id){
            taxis_pour_changer = Taxis[i]
        }
    }
    taxis_pour_changer.available = !taxis_pour_changer.available
}



/*
fonction qui gère le trajet
*/
function gerer_trajet(Taxis, taxi_id, duree) {
    return new Promise(resolve => {
        let minute = 0;
        const minuterie = setInterval(() => {
            minute++;
            console.log(`min : ${minute}/${duree}`);
        }, 1000);
        setTimeout(() => {
            clearInterval(minuterie);
            met_a_jour_disponibilite(Taxis, taxi_id);
            console.log(`Trajet du taxi ${taxi_id} terminé`);
            resolve();
        }, duree * 1000+1000);
    });
}


async function timer(Taxis,taxi_id,duree) {
    await gerer_trajet(Taxis, taxi_id,duree);
}



/*
fonction pour assigner les taxis
*/
async function  assigner_taxi(){
    const Taxis = [
        { id: 1, position: 5 , available: true, timeRemaining: 0, totalRides:0 },
        { id: 2, position: 12, available: false, timeRemaining: 0, totalRides: 0 },
        { id: 3, position: 20, available: false, timeRemaining: 0, totalRides: 0 }
    ]
    const Requests = [
        { reqId: 1, position: 10, duration: 3, time: 0 },
        { reqId: 2, position: 3, duration: 4, time: 2 },
        { reqId: 3, position: 18, duration: 2, time: 4 },
        { reqId: 4, position: 7, duration: 5, time: 5 }
    ]
    let attente = []
    req = { reqId: 1, position: 10, duration: 3, time: 0 }
    const taxis_dispo = verifie_disponibilite(Taxis);
    //console.log(taxis_dispo);
    if(taxis_dispo.length != 0){
        const taxi_plus_proche_id = verifie_taxi_plus_proche(taxis_dispo,req.position)
        //console.log(taxi_plus_proche_id);
        met_a_jour_disponibilite(Taxis , taxi_plus_proche_id)
        console.log(Taxis.find((e)=> e.id == taxi_plus_proche_id))
        await timer(Taxis,taxi_plus_proche_id,req.duration);
        console.log(Taxis.find((e)=> e.id == taxi_plus_proche_id))
    }
}

assigner_taxi()
