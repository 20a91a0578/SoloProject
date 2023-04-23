const express=require('express')
const cors=require('cors');
const monk=require('monk');
const port=8009;
const server=express();
server.use(cors());
server.use(express.json());
const db=monk('mongodb+srv://20a91a0578:mongodb1818@cluster0.matux8t.mongodb.net/SoloProject');
db.then(()=>{
    console.log('db connected ......');
})
let students;
let data=db.get("Data");
data.find({role:'student'}).then((result)=>{
    students=result;
   
})


// server.get('/',(req,res)=>{
//     let data=db.get('Data');
//    data.insert([{rollno:'20a91a0578'},{rollno:'20a91a0569'},{rollno:'20a91a0580'},{rollno:'20a91a0596'}])
//   data.find({role:{$ne:null}}).then((result)=>{
//     res.send(result)
// data.remove({status:'Absent'}).then((res1)=>res.send(res1));
//     });

// })

//to get absentees details
server.get('/getabsents',(req,res)=>{
    const collection=db.get('Data');
   
    // var absents=new Array();
    // collection.find({date:new Date(),role:'student'}).then((result)=>{
    //     absents.push(result);
    // })
    // console.log(absents)
    // if(absents.length===0){
    //     console.log('intial')
    //     students.forEach(element => {
    //         collection.insert({date:new Date(),name:element.name,rollnumber:element.rollnumber,email:element.email,branch:element.branch,college:element.college,status:'Absent'})
    //     });
    // }
    // else{
    //     console.log('alerady done')
    // }
    collection.find({date:new Date(),role:'student'}).then((result)=>{
        res.send(result);
    })
    
})

//to add the students into the database
server.post('/addupdate',(req,res)=>{
    const collect=db.get('Data');
    collect.insert({name:req.body.name,rollnumber:req.body.rollnumber,email:req.body.email,branch:req.body.branch,college:req.body.college,backlog:req.body.backlog,cgpa:req.body.cgpa,dob:req.body.dob,
    academicyear:req.body.academicyear,address:req.body.address,role:'student'}).then((res)=>console.log(res));
})

//get student details from the data  base
server.get('/getstudents',(req,res)=>{
    const data=db.get('Data');
    data.find({role:"student"}).then((result)=>res.send(result));
})

//to delete student from database
server.post('/deleteStudents',(req,res)=>{
    const data=db.get('Data');
    data.remove({rollnumber:req.body.rollnum,role:'student'}).then((result)=>{
        console.log(result)
    })
})

// server.get('/students',(req,res)=>{
//     let data=db.get('Data');
//     students.forEach(element => {
//        data.insert({date:new Date(),rollno:element.rollno,status:'Absent'}); 
//     });
// data.find({role:null,date: { $ne: null }}).then((result)=>{
//     res.send(result);
// })
// server.post('/postAttendace',(req,res)=>{
//     const collection = db.get('Data');
//     const filter = { date:new Date(req.body.date), rollno:req.body.rollno };
//     const update = { $set: {status:'Present'} };
//     collection.updateOne(filter, update);
// })

// })

server.listen(8009,()=>{
    console.log(`server is runnig on the port number ${port} ....`);
})