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
//logins
server.get('/',(req,res)=>{
    let data=db.get('Logins');
    data.find({}).then((result)=>{
        res.send(result);
    })
})

//to get count

server.get('/count',(req,res)=>{
    const date=new  Date();
    const data=db.get('Data');
    data.find({date:date.toLocaleDateString(),status:'Present'}).then((result)=>{
        res.send({total:students.length,presents:result.length})
    })
})

//to get final absents list
server.get('/finalabsent',(req,res)=>{
    const data=db.get('Data');
    let date=new Date().toLocaleDateString();
    data.find({date:date,status:"Absent"}).then((result)=>{
        res.send(result);
    })
})

//to get absentees details
server.get('/getabsents',(req,res)=>{
    const date = new Date()
    let d=db.get('Data');
    d.find({date:date.toLocaleDateString()}).then((result)=>{
        if(result.length===0)
        {
            students.forEach(element => {
                d.insert({date:date.toLocaleDateString(),name:element.name,rollnumber:element.rollnumber,email:element.email,branch:element.branch,college:element.college,status:'Absent'})
            });
            d.find({date:date.toLocaleDateString(),status:'Absent'}).then((res1)=>{
                res.send(res1);
            })
        }
        else
        {
            d.find({date:date.toLocaleDateString(),status:'Absent'}).then((res1)=>{
                res.send(res1);
            })
        }
       
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

//to post Attendance
server.get('/details/:id',(req,res)=>{
    const date=new Date();
    console.log(req.params.id)
    const collection = db.get('Data');
    const filter = { date:date.toLocaleDateString(), rollnumber:req.params.id };
    const update = { $set: {status:'Present'} };
    collection.update(filter, update).then((result)=>{
        collection.find({date:date.toLocaleDateString(),rollnumber:req.params.id,status:'Present'}).then((result)=>{
            res.send(result);
        })
    });
   
}) 

//to get specific user deatils 
server.get('/user/:id',(req,res)=>{
    const data=db.get('Data');
    data.find({rollnumber:req.params.id,role:'student'}).then((result)=>{
        res.send(result)
    })
})

//to get user status
server.get('/userstat/:id',(req,res)=>{
    const data=db.get('Data');
    data.find({rollnumber:req.params.id,date:{$ne:null}}).then((result)=>{
        res.send(result);
    })
})

server.listen(8009,()=>{
    console.log(`server is runnig on the port number ${port} ....`);
})