#! /usr/bin/env node
import inquirer from "inquirer"
const idNumber :number = Math.floor(Math.random()*100000);//five digit id numbers


let newStudent  = await inquirer.prompt([{
   name : "students",
   type : "input",
   message : "Enter Student name !",
   default :"true"
   },
    {
      name: "courses",
      type : "list",
      message : "Select the course to Enrolled !",
      choices : ['Web Marketing','Web Designing','Cloud Engineering','IT']
   }
]); 
   const tutionFee: {[type :string] :number} = {
      'Web Marketing' : 5000,
      'Web Designing' : 6000,
      'Cloud Engineering' : 20000,
      'IT'        :  15000 
   };
   console.log(`TutionFee :${tutionFee[newStudent.courses]}`);
   
   let paymentType = await inquirer.prompt([{
      name : 'payment',
      type : 'list',
      message : 'Select payment method !',
      choices : ['Cash counter','Bank transfer']
   },{
      name : 'amount',
      type : 'input',
      message : 'Transfer Money !',
      default : 'true'
      }   
]);
   console.log(`Select Payment method : ${paymentType.payment}`);

   const tutionFees = tutionFee[newStudent.courses];
   const paymentAmount = parseFloat(paymentType.amount);//parseFloat method used for conversion string to number
   if(tutionFees === paymentAmount){
      console.log(`Congratulations ! you have Enrolled in this program ${newStudent.students} .`);
   }else{`Sorry you cannot Enrolled in this Batch !`};

   let newStudents = await inquirer.prompt([{
       name : 'Select',
       type : 'input',
       message : 'What would you like to do Next!',
       choices : ['View Status ', 'Exit' ]
   }]);
       if(newStudents.choices !== 'View Status'){
          console.log('Status')
         console.log(`Student Name : ${newStudent.students}`),
         console.log(`Student ID  : ${idNumber}`);
         console.log(`Course : ${newStudent.courses}`);
         console.log(`Tution Fee Paid : ${paymentAmount}`);
       }else{ console.log(`Exit !`)

       };

    
   
  
