const dave = [50,9];

    const data = {
      labels: ['OPENED', 'UNOPENED'],
      datasets: [{
        label: 'Number of Emails',
        data: dave,
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
        cutout: '70%',
        needleValue: dave[0]

      }]
    };

const gaugeNeedle = {
  id: 'gaugeNeedle',
  afterDatasetDraw(chart, args, plugins) {
    const {ctx, data} = chart;

    ctx.save();
    const xCenter = chart.getDatasetMeta(0).data[0].x;
    const yCenter = chart.getDatasetMeta(0).data[0].y;
    const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius;
    const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
    const wSlice = (outerRadius - innerRadius) / 2;
    const radius = 15;
    const angle = Math.PI / 180;

    const needleValue = data.datasets[0].needleValue;

    const dataTotal = data.datasets[0].data.reduce((a,b) => a+b, 0);
    const circumference = ((chart.getDatasetMeta(0).data[0].circumference / Math.PI) / data.datasets[0].data[0]) * needleValue;

    ctx.translate(xCenter, yCenter);
    ctx.rotate(Math.PI * (circumference + 1.5));

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'grey';
    ctx.lineWidth = 3;

    ctx.moveTo(0 - radius, 0);
    ctx.lineTo(0, 0 - innerRadius - wSlice);
    ctx.lineTo(0 + radius, 0);

    ctx.stroke();
    ctx.fill();
    

    ctx.beginPath();
    ctx.arc(0 , 0 , radius, 0, angle * 360, false);
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    ctx.restore();


  const perVal = circumference * 100;

  ctx.font = 'bold 30px sans-serif';
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(` ${perVal.toFixed(1)}%`, xCenter, yCenter + 47);

  ctx.restore();
    
  }
}


    // config 
    const config = {
      type: 'doughnut',
      data,
      options: {
        aspectRatio: 1.5,
        animation: {
          duration: 3000  // Set to 2000 milliseconds for half-speed animation
        },
        plugins: {
          legend: {
            display: false
          }
        }
      },
      plugins: [gaugeNeedle]
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    // Instantly assign Chart.js version
    const chartVersion = document.getElementById('chartVersion');
    chartVersion.innerText = Chart.version;