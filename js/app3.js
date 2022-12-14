$(function(){
    let myGraph3 = document.getElementById("myGraph3");
    let myChart = echarts.init(myGraph3, "dark");

    let option;
   
    const gaugeData = [
       {
         value: 59,
         title: {
           offsetCenter: ["0%", "0%"],
         },
         detail: {
           valueAnimation: true,
           offsetCenter: ["0%", "0%"],
         },
       },
     ];
     option = {
       series: {
         type: "gauge",
         startAngle: 90,
         endAngle: -270,
         max: 70,
         min: 0,
         pointer: {
           show: false,
         },
         progress: {
           show: true,
           overlap: false,
           roundCap: true,
           clip: false,
         
           itemStyle: {
             
             color: {
               type: "linear",
               x: 0,
               y: 1,
               x2: 1,
               y2: 1,
               colorStops: [
                 {
                   offset: 0,
                   color: "rgb(223, 55, 190)",
                 },{
                   offset: 1,
                   color: "rgb(106, 64, 204)",  
                 },
               ],
             },
           },
         },
         axisLine: {
           lineStyle: {
             width: 15,
           },
         },
         splitLine: {
           show: false,
         },
         axisTick: {
           show: false,
         },
         axisLabel: {
           show: false,
         },
         data: gaugeData,
         detail: {
           width: 50,
           height: 14,
           color: "#FFFFFF",
           fontSize: 48,
           valueAnimation: true,
           formatter: "{value}",  
         },
       },
     }; 
   
     option && myChart.setOption(option);
   
   });