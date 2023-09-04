const {Subjects}=require("./subject");


//class interface
class Event{
    subject=Subjects;
    data
}

//abstract class
 class Listener  {

    //thats topic
    //here subject type is enum
   subject;
   //queuegroupt for multiple instance
   queueGroupName;
    //send acknowlegdement
   ackWait=5*1000;


   //data is also define in ticket-created class
  onMessage(data,msg) {
    //get msgdata(stringFormat) and msg
    //return void
    throw new Error("Abstract method onMessage must be implemented.");
  }
    //nats client (stan)
   #client

   //assign preconnected client
//    constructor(client){
//     this.client=client;
//    }

   constructor(client) {
    if (new.target === Listener) {
      throw new TypeError("Cannot instantiate AbstractClass directly.");
    }
    this.client=client;
  }


   subscriptionOptions(){
    return this.client
        .subscriptionOptions()
        .setDeliverAllAvailable()
        .setManualAckMode(true)
        .setAckWait(this.ackWait)
        .setDurableName(this.queueGroupName)
   }


   //listener
   listen(){
    const subcription=this.client.subscribe(
        this.subject,
        this.queueGroupName,
        this.subscriptionOptions()
    );

    subcription.on("message",(msg)=>{
        console.log(
            `Message received: ${this.subject}/ ${this.queueGroupName}`
        );

        const parsedData= this.parseMessage(msg);
        this.onMessage(parsedData,msg);
    });
   }





   parseMessage(msg){
    const data= msg.getData();
    return typeof data==='string'
    ? JSON.parse(data)
    :JSON.parse(data.toString("utf8"));
   }
}


module.exports={Listener}