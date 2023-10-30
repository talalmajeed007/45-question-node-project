const Guestlist:string[] =['Ali','Ashfaq','Ahmed','Abubakar']

const memwhoarenotcomming=['Ashfaq'];
console.log(`${memwhoarenotcomming} are not comming.`);

const indexofmemwhoarenotcomming =Guestlist.indexOf(memwhoarenotcomming[0])
console.log(indexofmemwhoarenotcomming)

const newguest =Guestlist.splice(1,1,'elif')
 for(let i=0;i<Guestlist.length;i++){
    console.log(`asslamualikum"${Guestlist[i]}"I would like to invite you at my place tonight at 12'0clock for dinner.`

    )
 }
export{Guestlist}