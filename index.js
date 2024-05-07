
var heading = document.querySelector("h2");

anime({
    targets: heading,
    innerHTML: [0, 100],
    round: 1,
    delay:500,
    duration:1000,
    easing: 'linear'
  });

  anime({
    targets : ".loader",
    top: -1000,
    delay:1800,
    duration:1000,
    easing: 'linear'
    
})



const chart = document.querySelector("#myChart");

let delayed;
 const config = new Chart(chart, {
  type: "bar",
  data: {
    labels: [ "DC", "GT", "LSG", "MI", "KKR", "RR", "RCB", "SRH","PBKS","CSK",],
    datasets: [{
        label: "IPL Points Table",
        data: [10,10,8,12,6,14,16,8,12,8,12],
        borderWidth: 2,
        backgroundColor: [
            'rgb(255, 255, 140)',
            'rgb(41, 41, 240)',
            'rgb(27, 33, 51)',
            'rgb(30, 13, 107)',
            'rgb(53, 53, 255)',
            ' rgb(48, 5, 48)',
            'rgb(255, 146, 164)',
            'rgb(209, 34, 34)',
            ' rgb(241, 112, 37)',
            ' rgb(235, 84, 84)'
          ],},],},
          options: {
            animation: {
              onComplete: () => {
                delayed = true;
              },
              delay: (context) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                  delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                delay += 2600;
                return delay;
              },
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true
              }
            }
          }

});