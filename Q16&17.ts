const Guestslist:string[] =['Ali','Ashfaq','Ahmed','Abubakar'];

console.log(`i have just founded a bigger tabel."${Guestslist}"so i decided to inform you that three more friends are joining us tonight.`)
Guestslist.unshift("ibrahim");
Guestslist.push('sara');
// const middexindexnum:number=(Guestslist.length/2);
Guestslist.splice(Guestslist.length/2,0,'ashraf');

for(let i=0;i<Guestslist.length;i++){
    console.log(`asslamualikum"${Guestslist[i]}"I would like to invite you at my place tonight at 12'0clock for dinner.`)}

    for(let i=0;i<Guestslist.length;i++){
        console.log(`i have just founded that our bigger tabel won't arrive in time.So i decided to inform you "${Guestslist[i]}" that i am abel to invite only two friends.`)
    }
   
    for(let x=Guestslist.length-1;x>=2;x--){
    const removefriend =Guestslist.pop();
    console.log(`sorry'${removefriend}' i cant invite you at dinner tonight.`)}

    for(let i=0;i<Guestslist.length;i++){
        console.log(`"${Guestslist[i]}"you are still invited plz reach in time`)
    }
    for(let i=0;i<=Guestslist.length;i++){
    Guestslist.pop();
    }
    console.log(`${Guestslist} array is empty now`);
    
   