var dataset = [ 5, 10, 15, 20, 25 ];

var d3Body = d3.select("body");
// d3Body.append("p");
// d3Body.append("p");
// d3Body.append("p");
// body에 3개의 p 태그를 추가한다.

console.log("append and select all tag",
d3
.select("body")
.selectAll("p")
);
// 3개의 p 태그를 선택한 d3의 돔 엘리먼트

console.log("d3 dom element have exit, exit have dataset, have 5 tag (dataset array length)",
d3
.select("body")
.selectAll("p")
.data(dataset)
);
// p 태그를 선택하고 있으며
// 선택한 3개의 p 태그 뿐만 아니라 dataset의 데이터 갯수에 맞춰서 2개의 태그가 추가 되었다.
// 추가된 2개의 태그는 실제 태그를 선택한 것이 아니며, 태그를 넣을 수 있는 공간 2개가 추가 됨

console.log("d3 dom element have update",
d3
.select("body")
.selectAll("p")
.data(dataset)
.enter()
);
// p태그 3개를 선택한 d3 돔 엘리먼트 2개의 빈 태그가 선택된 상태
// enter는 dataset의 원소 갯수보다 태그의 수가 작을 때 dataset의 원소 수 많큼 부족한 태그를 생성하는 역할을 한다.
// 선택된 태그에 모두에 어떤 설정을 하기 위한 것.
// 이 배열에는 update 메서드가 포함되어 있다.


console.log(
d3
.select("body")
.selectAll("p")
.data([1,2,3,4])
.enter()
.append("div")
);
// p태그를 3개 선택한 d3 돔 엘리먼트에 빈 태그 1개를 p태그로 바꿔 실제 돔 안에 넣은 것.
// 선택된 3개의 p 태그와 1개의 빈 태그를 p태그로 모두 바꾸고 실제 돔에 태그를 추가한다.
// 그래서 브라우저에 나타난 div 태그를 보면 5개의 div 태그가 body에 추가된 것을 알 수 있다.

// console.log(
// d3
// .select("body")
// .selectAll("p")
// .data(dataset)
// .enter()
// .append("p")
// .text("New paragraph!")
// );
// 3 개의 p 태그를 선택하고 2 개의 빈 태그를 만든 후
// 이 5개의 태그를 모두 p 태그로 바꾸어 실제 돔에 반영한다.
// 그리고 모든 p 태그에 text를 추가한다.
