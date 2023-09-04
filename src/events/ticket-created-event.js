const { Subjects }= require("./subject");

let id,title,price,userId;
const TicketCreatedEvent = {
    subject: Subjects.TicketCreated,
   
    data:{
        id,title,price,userId
    }
};

// class TicketCreatedEvent {
//    constructor(){
//     this.subject= Subjects.TicketCreated;

//     this.data={
//         id,title,price
//     };
//    }
// }


module.exports={
    TicketCreatedEvent
}