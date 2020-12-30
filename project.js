var list = [
  "Never have I ever broken a bone",
  "Never have I ever given wrong direction when asked for an address",
  "Never have I ever lived alone",
  "Never have I ever fought in public",
  "Never have I ever taken part in a talent show - Explain",
  "Never have I ever lied to a boss",
  "Never have I ever went 24 hours without showering",
  "Never have I ever got a tattoo",
  "Never have I ever Got thrown out of class as punishment",
  "Never have I ever pretended to have network issues",
  "Never have I ever binged an entire series in one day",
  "Never Have I Ever Had A Near-Death Experience - Explain",
  "Never Have I Ever Been Caught Talking To Myself",
  "Never Have I Ever Ordered Food And Didn’t Have Enough For The Bill",
  "Never Have I Ever Forgotten An Anniversary in this year",
  "Never Have I Ever Hidden In The Bathroom At Work To Kill Time",
  "Never Have I Ever Stolen Office Supplies From Work",
  "Never have I ever scored over 150 while bowling - Explain",
  "Never Have I Ever Surfed The Internet At Work",
  "Never Have I Ever Walked Around With My Pants Zipper Open",
  "Never have I ever Escaped from class",
  "Never have I ever Took a sick leave but was never sick",
  "Never have I ever ran a marathon",
  "Never have I ever cheated on a test",
  "Never have I ever had alcohol",
  "Never have I ever Fought in the street - Explain",
  "Never have I ever Been stuck in a lift",
  "Never have I ever reread an email immediately after sending it",
  "Never have I ever Googled my own name to see what comes up",
  "Never have I ever participated in a drinking competition",
  "Never have I ever Googled meaning of something so I'd know how to spell it",
  "Never have I ever shoplifted from a store",
  "Never have I ever made a fake social media account",
  "Never have I ever Fallen asleep in the cinema - Explain",
  "Never have I ever lost count of how many drinks I drank",
  "Never have I ever used a cheesy pick-up line on someone",
  "Never have I ever pretended to laugh at a joke which wasn't funny",
  "Never have I ever locked my keys in my car/bike/house",
];
var usedList = [];

var btn = document.querySelector('#nxtBtn');
var btn1 = document.querySelector('#beginBtn');
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
      //oldLabel.style.display = 'block';
      usedListSection.innerHTML += '<p>'+list[index]+'</p>';
      document.getElementById("usedListSection").classList.remove("bkgrnd2");
      document.getElementById("usedListSection").classList.add("bkgrnd2");
  }
  if(list.length){
    document.getElementById("modalId").innerHTML = '<strong>'+list[index]+'</strong>';
    modal.style.display = "block";
    //alert("Next Question is - "+"\n"+list[index])
  }else{
    alert('Please add more tasks to the list!!')
  }

  list.splice(index,1);
  //availableListSectionAllPara.remove();
//  manipulateList();
//  console.log(usedList)
if(document.getElementById("beginBtn").style.display !== "none"){
  document.getElementById("beginBtn").style.display = "none";
}

if(document.getElementById("nxtBtn").style.visibility === "hidden"){
  document.getElementById("nxtBtn").style.visibility = "visible";
}
}
btn.addEventListener('click',findTask)
btn1.addEventListener('click',findTask)








var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn7 = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn7.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
