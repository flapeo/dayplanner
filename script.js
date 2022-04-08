var saveBtn = $(".saveBtn")
var m = moment();
$("#currentDay").html("<h2>" + m.format("dddd ll") + "</h2>")
function info () {
    var userdata = JSON.parse(localStorage.getItem('userdata'))
  
    console.log(userdata)
    
    
}
saveBtn.on("click",function () {    
  var value = $(this).parent().attr("id");
  var time = $(this).siblings("ran").val();
  console.log(time)
  console.log(value)


  
  localStorage.setitem(time, value);
  


})





  

 




