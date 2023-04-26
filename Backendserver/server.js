require('dotenv').config();
const mongourl = process.env.Mongourl
const authorizationToken=process.env.AuthorizationToken
const express=require('express')
const cors=require('cors');
const monk=require('monk');
const { CourierClient } = require('@trycourier/courier');
const port=8009;
const server=express();
server.use(cors());
server.use(express.json());
const courier = CourierClient({ authorizationToken:authorizationToken});
const SendEmail = async (email, rollno,body) => {
    const { requestId } = await courier.send({
      message: {
        content: {
          title: 'Aditya Engineering College',
          body:body,
        },
        data: {
          joke: rollno,
        },
        to: {
          email: email,
        },
      },
    });
    console.log(requestId);
  };


const db=monk(mongourl);
db.then(()=>{
    console.log('db connected ......');
})
let students;
let data=db.get("Data");
data.find({role:'student'}).then((result)=>{
students=result;
   
})

//sending messages

server.get('/send-emails', async (req, res) => {
    try {
        let data=db.get('Data');
        let date=new Date().toLocaleDateString();
        data.find({date:date,status:"Absent"}).then(async(result)=>{
            for (const recipient of result) {
            await SendEmail(recipient.email, recipient.rollnumber, 'Hi {{joke}}!, you are absent today to the college.If you are present to the college , PLease meet the operator to check the attendance.');
              }
              res.send(result); 
        })
     
    } catch (error) {
      console.error(error);
      res.status(500).send('Error sending emails');
    }
  });

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
    console.log(students);
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
    const data=db.get('Logins')
    data.insert({username:req.body.rollnumber,password:'12345',role:'user',email:req.body.email});
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
    const collection = db.get('Data');
    const filter = { date:date.toLocaleDateString(), rollnumber:req.params.id };
    const update = { $set: {status:'Present'} };
    collection.update(filter, update).then((result)=>{
        collection.find({date:date.toLocaleDateString(),rollnumber:req.params.id,status:'Present'}).then((result)=>{
        res.send(result);
        })
    });
   
}) 
//to update user password
server.post('/updatepassword',(req,res)=>{
    data=db.get('Logins');
    data.update({username:req.body.username},{$set:{password:req.body.password}}).then((resu)=>{
        console.log(resu);
    })
})

//to handle forgot password

server.post('/sendpassword',async(req,res)=>{
   
    let data=db.get('Logins');
    data.find({email:req.body.email}).then(async(result)=>{
        const email = req.body.email;
        const body = 'You are password for the  Adtiya Educational Institiutes website is :{{joke}}';
        SendEmail(email, result[0].password,body);
        res.send("Email sent Succesfully");

    
    })
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