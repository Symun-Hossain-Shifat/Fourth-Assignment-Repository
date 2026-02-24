// add all element
let totalJob = document.getElementById("total");
let InterviewJob =document.getElementById('interview');
let rejectedJob = document.getElementById('rejected');
let maincontainer = document.getElementById('cardscontainer');
const setText = document.getElementById("noText");
const setText2 = document.getElementById('totalJobfield');
// catch the Main button
const allbtn = document.getElementById('button-all');
const interviewbtn = document.getElementById('button-interview');
const rejectedbtn = document.getElementById('button-rejected');
const mainsection = document.querySelector('main');
console.log(mainsection);

let interviewList = [];
let rejectedList = [];

// start function call
function calculateJob(){
totalJob.innerText = maincontainer.children.length;
InterviewJob.innerText = interviewList.length;
rejectedJob.innerText = rejectedList.length;
}
calculateJob();

 setText2.innerText = maincontainer.children.length;

function changebtn(id){
  allbtn.classList.remove('bg-blue-600','text-white')
  interviewbtn .classList.remove('bg-blue-600','text-white')
  rejectedbtn .classList.remove('bg-blue-600','text-white')

  allbtn.classList.add('bg-white','text-black')
   interviewbtn .classList.add('bg-white','text-black')
 rejectedbtn.classList.add('bg-white','text-black')

 id.classList.remove('bg-white','text-black')
 id.classList.add('bg-blue-600','text-white')
}
