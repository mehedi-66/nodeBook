
const CHART = document.getElementById('lineChart');
// console.log(CHART);   
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
        datasets: [
            // DSA past_color
            {
                label: "DSA",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75, 192, 192, 05)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderCapStyle: 'butt', 
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192,192, 1)",
                pointHoverBorderColor: "rgba(220,220, 220, 1))",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                // Rang[0-2]
                data: [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            },

            // JavaScript blue_color

            {
                label: "javaScript",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(0, 0, 192, 05)",
                borderColor: "rgba(0, 0, 192, 1)",
                borderCapStyle: 'butt', 
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75, 192, 192, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192,192, 1)",
                pointHoverBorderColor: "rgba(220,220, 220, 1))",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                // Rang[2-4]
                data: [3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 2, 3, 3, 3, 3, 3, 2, 3],
            },

            // English Red_color
            {
                label: "English",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(255, 0, 0, 1)",
                borderColor: "rgba(255, 0, 0, 1)",
                borderCapStyle: 'butt', 
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(0, 0, 0, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192,192, 1)",
                pointHoverBorderColor: "rgba(220,220, 220, 1))",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                //Rang[4-6]
                data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 , 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5],
            },

            // Tech Artical pinck_color 
            {
                label: "Tech Reading",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(222, 49, 99, 1)",
                borderColor: "rgba(222, 49, 99, 1)",
                borderCapStyle: 'butt', 
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(0, 0, 0, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192,192, 1)",
                pointHoverBorderColor: "rgba(220,220, 220, 1))",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                //Rang[4-6]
                data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 6, 7],
            },
                // Current Affaires 
            {
                label: "Current Affairs",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(40, 44, 99, 1)",
                borderColor: "rgba(40, 49, 99, 1)",
                borderCapStyle: 'butt', 
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(255, 255, 255, 1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75, 192,192, 1)",
                pointHoverBorderColor: "rgba(220,220, 220, 1))",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                //Rang[4-6]
                data: [9, 9, 9, 8, 9, 9, 9, 8, 9, 9, 9, 9, 9, 9, 9, 8, 8, 8, 8, 8, 8, 8],
            },






            {
             // label: "English",
                data: [10],
            }
        ]
    }

    
});