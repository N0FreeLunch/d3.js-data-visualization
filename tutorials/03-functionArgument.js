var dataset = [ 5, 10, 15, 20, 25 ];

d3
.select("body")
.selectAll("p")
.data(dataset)
.enter()
.append("p")
.text("New paragraph!")
.text(function(d) { return d; });
// d3 메서드에 함수를 넣으면 넣은 함수의 인자로
// data에서 할당한 값을 넣어 준다.


// d3
// .select("body")
// .selectAll("p")
// .style("color", function(d) {
//     if (d > 15) {   //Threshold of 15
//         return "red";
//     } else {
//         return "black";
//     }
// })
// .data(dataset)
// .enter()
// .append("p")
// .text("New paragraph!")
// .text(function(d) {
//   return d;
// });

console.log(
d3
.select("body")
.selectAll("p")
.data(dataset)
.enter()
.append("p")
);

d3
.select("body")
.selectAll("p")
.data(dataset)
.enter()
.append("div")
.text("New paragraph!")
.text(function(d) {
  return d;
})
.style("color", function(d) {
    if (d > 15) {   //Threshold of 15
        return "blue";
    } else {
        return "black";
    }
});
