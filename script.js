var saveBtn = $(".saveBtn")
var m = moment();
$("#currentDay").html("<h2>" + m.format("dddd ll") + "</h2>")
function info () {
    var userdata = JSON.parse(localStorage.getItem('userdata'))
    console.log(userdata)
    
}
saveBtn.on("click",function () {    
  var hour = $(time).parent().attr("id");
  
  console.log(time)
  


})





  

 




