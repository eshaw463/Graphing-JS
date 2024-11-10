(async () => {
    // const information = await fetch('https://backend.ichenglin.net/email_tracking/test').then(response => response.json());
    
    // let textLabels = information.foo;
    // let numbers = information.test;


var canvasElement = document.getElementById("basicline");

var numbers = [3, 5, 8, 16, 4];
var numbers2 = [8,4,5,2,4];

var textLabels = ["12 AM", "6 AM", "12 PM", "6 PM" , "11:59 PM"];
var email = ["Email 1" , "Email 2"];

var colors = ["rgba(255,159,64,0.2)", "rgba(255, 99, 132, 0.2)"]; 
var borders = ["rgba(255,159,64, 1)", "rgba(255, 99, 132, 1)"]; 

var config = {
    type: "line",
    data: {labels: textLabels, 
    datasets: [
        {label: email[0], 
        data: numbers,
        backgroundColor: colors[0],
        borderColor: borders[0],
        //borderWidth: 3,
        },

        {label: email[1], 
            data: numbers2,
            backgroundColor: colors[1],
            borderColor: borders[1],
            //borderWidth: 3,
        }
    
    ]},


};

var barChart = new Chart(canvasElement, config);

})();