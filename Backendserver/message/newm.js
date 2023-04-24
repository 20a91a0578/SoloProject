/*
      1) Install Courier SDK: npm install @trycourier/courier
      2) Make sure you allow ES module imports: Add "type": "module" to package.json file
      */
    //   import { CourierClient } from "@trycourier/courier";

    //   const courier = CourierClient(
    //     { authorizationToken: "pk_prod_3TGBG0MK74MRE3JFH46J8876AFZK"});

    //   const  {requestId}  = await courier.send({
    //     message: {
    //       content: {
    //         title: "Welcome to Courier!",
    //         body: "Want to hear a joke? {{joke}}"
    //       },
    //       data: {
    //         joke: "Hell!, Why was the JavaScript developer sad? Because they didn't Node how to Express themselves"
    //       },
    //       to: {
    //         email:"rajesheevana143@gmail.com"
           
    //       }
    //     }
    //   });
    //   console.log(requestId);
    /*
      1) Install Courier SDK: npm install @trycourier/courier
      2) Make sure you allow ES module imports: Add "type": "module" to package.json file
      */
    //   import { CourierClient } from "@trycourier/courier";

    //   const courier = CourierClient(
    //     { authorizationToken: "pk_prod_3TGBG0MK74MRE3JFH46J8876AFZK"});

    //   const { requestId } = await courier.send({
    //     message: {
    //       to: {
    //         phone_number: "919392744919"
    //       },
    //       content: {
    //         title: "Welcome to Courier!",
    //         body: "Want to hear a joke? {{joke}}"
    //       },
    //       data: {
    //         joke: "Why was the JavaScript developer sad? Because they didn't Node how to Express themselves"
    //       },
    //     }
    //   });
    //   console.log(requestId);
//     const CourierClient = require('@trycourier/courier').Client;

// const courier = CourierClient({
//   authorizationToken: 'pk_prod_3TGBG0MK74MRE3JFH46J8876AFZK'
// });

// const message = {
//   event: 'message1242',
//   recipient: '+1234567890',
//   data: {
//     message: 'Hello from Courier!'
//   }
// };

// courier.send(message)
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
// Install with: npm install @trycourier/courier
// import { CourierClient } from "@trycourier/courier";

// const courier = CourierClient({ authorizationToken: "pk_test_RH9JEP97H643TDMVHMH87SPQK59E" });

// const { requestId } = await courier.send({
//   message: {
//     to: {
//       email: "rajesheevana123@gmail.com",
//     },
//     template: "2HM1AWENGXMD0EM4Y8H2WT4PT7Q2",
//     data: {
//       recipientName: "rajesheevana1@gmail.com",
//     },
//   },
// });











/*
      1) Install Courier SDK: npm install @trycourier/courier
      2) Make sure you allow ES module imports: Add "type": "module" to package.json file
      */
      import { CourierClient } from "@trycourier/courier";

      const courier = CourierClient(
        { authorizationToken: "pk_prod_3TGBG0MK74MRE3JFH46J8876AFZK"});
const SendEmail=async(emai,rollno)=>{
  const { requestId } = await courier.send({
    message: {
      content: {
        title: "Aditya Engineering College",
        body: "Hi {{joke}}!, you are absent today to the college.If you are present to the college , PLease meet the operator to check the attendance."
      },
      data: {
        joke:rollno
      },
      to: {
        email: emai
      }
    }
  });
}
const arr=[{email:"20a91a0578@aec.edu.in",rollno:'20a91a0578'}];
arr.forEach((ele)=>{
  SendEmail(ele.email,ele.rollno);
})
module.exports=SendEmail;