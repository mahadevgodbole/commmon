const {Subjects}=require("./subject");
const {TicketCreatedEvent}=require("./ticket-created-event");
// const {nats.stan}=require("node-nats-streaming");
//client=nats.stan
const Event= {
    subject:Subjects,
    data:TicketCreatedEvent.data
}

class Publisher {
    //subject and client are abstract property.
    subject;
    #client;


    constructor(client) {
        if (new.target === Publisher) {
          throw new TypeError("Cannot instantiate Abstract Class Publisher directly.");
        }
        this.client=client;
      }

  
    //data type of data object(Parameter) {id,title,price} 
    publish(data) {

        return new Promise((resolve,reject)=>{
            this.client.publish(this.subject,JSON.stringify(data),(err)=>{
                if (err){
                    return reject(err);
                }
                console.log("Event publish to subject", this.subject);
                resolve();
            })
        })
       
    }
}

module.exports={Publisher};