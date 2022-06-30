// set the date using moment and jquery
var now = moment().format('dddd, MMMM Do');
$("#currentDay").text(now);

var getTask = function(){
    JSON.parse(localStorage.getItem("taskInput"));
};

var saveTask = function(input){
    localStorage.setItem("taskInput", JSON.stringify(input));
};

$(".saveBtn").on("click", function(){
    var taskInput = $(this)
        .parent(".row")
        .children(".task-textarea")
        .val();

            if (taskInput) {
            saveTask(taskInput);
        }
});


