const {Subjects}=require("./subject");


let id,title,price,userId;
const TicketUpdatedEvent={
    subject: Subjects.TicketUpdated,
    data:{
        id,title,price,userId
    }

}



module.exports={
    TicketUpdatedEvent
}