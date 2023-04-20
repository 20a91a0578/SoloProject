const express=require('express')
const cors=require('cors');
const monk=require('monk');
const port=8009;
const server=express();
server.use(cors());
server.use(express.json());
var ar;
const db=monk('mongodb+srv://20a91a0578:mongodb1818@cluster0.matux8t.mongodb.net/SoloProject');
db.then(()=>{
    console.log('db connected ......');
})
let students;
let data=db.get("Data");
data.find({role:null}).then((result)=>{
    students=result;
})
server.get('/',(req,res)=>{
    let data=db.get('Data');
  //  data.insert([{rollno:'20a91a0578'},{rollno:'20a91a0569'},{rollno:'20a91a0580'},{rollno:'20a91a0596'}])
  data.find().then((result)=>{
    res.send(result)
    });

})
server.get('/students',(req,res)=>{
    let data=db.get('Data');
    students.forEach(element => {
       data.insert({date:new Date(),rollno:element.rollno,status:'Absent'}); 
    });
// data.find({role:null,date: { $ne: null }}).then((result)=>{
//     res.send(result);
// })
server.post('/postAttendace',(req,res)=>{
    const collection = db.get('Data');
    const filter = { date:ISODate(req.body.date), rollno:req.body.rollno };
    const update = { $set: {status:'Present'} };
    collection.updateOne(filter, update);
})

})

server.listen(8009,()=>{
    console.log(`server is runnig on the port number ${port} ....`);
})