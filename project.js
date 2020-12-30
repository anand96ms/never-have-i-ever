var list = [
"Never have I ever played hooky from school or work.",
"Never have I ever rode a motorcycle.",
"Never have I ever lost a bet.",
"Never have I ever went skinny-dipping.",
"Never have I ever cheated on someone.",
"Never have I ever sang karaoke.",
"Never have I ever broken a bone.",
"Never have I ever lived alone.",

"Never have I ever played hooky from school or work.",
"Never have I ever rode a motorcycle.",
"Never have I ever lost a bet.",
"Never have I ever went skinny-dipping.",
"Never have I ever cheated on someone.",
"Never have I ever sang karaoke.",
"Never have I ever broken a bone.",
"Never have I ever lived alone.",
"Never have I ever played hooky from school or work.",
"Never have I ever rode a motorcycle.",
"Never have I ever lost a bet.",
"Never have I ever went skinny-dipping.",
"Never have I ever cheated on someone.",
"Never have I ever sang karaoke.",
"Never have I ever broken a bone.",
"Never have I ever lived alone.",
"Never have I ever played hooky from school or work.",
"Never have I ever rode a motorcycle.",
"Never have I ever lost a bet.",
"Never have I ever went skinny-dipping.",
"Never have I ever cheated on someone.",
"Never have I ever sang karaoke.",
"Never have I ever broken a bone.",
"Never have I ever lived alone.",
"Never have I ever played hooky from school or work.",
"Never have I ever rode a motorcycle.",
"Never have I ever lost a bet.",
"Never have I ever went skinny-dipping.",
"Never have I ever cheated on someone.",
"Never have I ever sang karaoke.",
"Never have I ever broken a bone.",
"Never have I ever lived alone.",
"Never have I ever played hooky from school or work.",
"Never have I ever rode a motorcycle.",
"Never have I ever lost a bet.",
"Never have I ever went skinny-dipping.",
"Never have I ever cheated on someone.",
"Never have I ever sang karaoke.",
"Never have I ever lived alone.",
"Never have I ever broken a bone.",
];
var usedList = [];

var btn = document.querySelector('.button');
var usedListSection = document.querySelector('#usedListSection');
var availableListSection = document.querySelector('#availableListSection');
var availableListSectionAllPara = document.getElementById("availableListSection").querySelectorAll("p");
var oldLabel = document.querySelector('#oldLabel');

function manipulateList(){
  for(var i=0;i<list.length;i++){
    availableListSection.innerHTML += '<p>'+list[i]+'</p>';
  }
  document.getElementById("availableListSection").classList.add("bkgrnd");
}
(function(){
  manipulateList();
})();

function findTask(){
  const index = Math.floor(Math.random() * list.length);
  if(list[index] !== undefined){
      usedList.push(list[index]);
      oldLabel.style.display = 'block';
      usedListSection.innerHTML += '<p>'+list[index]+'</p>';
      document.getElementById("usedListSection").classList.remove("bkgrnd2");
      document.getElementById("usedListSection").classList.add("bkgrnd2");
  }
  if(list.length){
    alert("Next Question is - "+"\n"+list[index])
  }else{
    alert('Please add more tasks to the list!!')
  }

  list.splice(index,1);
  //availableListSectionAllPara.remove();
  manipulateList();
  console.log(usedList)

}
btn.addEventListener('click',findTask)
