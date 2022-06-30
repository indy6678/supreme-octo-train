var today = new Date();
var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()

var addDate = function () {
    $("#currentDay")
        .text(date);   
}

var test = $("list-group")

console.log(test.on("click","I clicked"))

var createEvent = function (eventText) {
    var eventLi = $("list-group")
    var event = $("<li>").addClass("eventListItem");
    var eventP = $("<p>").addClass("eventListP").text(eventText)
    var eventText = $("<textarea>")
    
    

    eventLi.appendChild(eventP);

}
addDate();


