(async () => {
    // const information = await fetch('https://backend.ichenglin.net/email_tracking/test').then(response => response.json());
    
    // let textLabels = information.foo;
    // let numbers = information.test;


var canvasElement = document.getElementById("basicbar");


var textLabels = ["Email 1", "Email 2", "Email 3"];
var numbers = [3,5,8];

var title = "Number of Opens";

var colors = ["rgba(255,159,64,0.2)" , "rgba(255, 99, 132, 0.2)", "rgba(153, 102, 255, 0.2)"]; 
var borders = ["rgba(255,159,64,1)" , "rgba(255, 99, 132, 1)", "rgba(153, 102, 255, 1)"];

var config = {
    type: "bar",
    data: {labels: textLabels, 
    datasets: [
        {label: title, 
        data: numbers,
        backgroundColor: colors,
        borderColor: borders,
        borderWidth: 3,
    
    }]},


};

var barChart = new Chart(canvasElement, config);
}
)();


