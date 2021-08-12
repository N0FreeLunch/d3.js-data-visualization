
console.log("select body",
  d3.
  select("body")
);
// d3의 돔 엘리먼트 body를 선택한 상태

console.log("select p",
  d3
  .select("body")
  .append("p")
);
// append 함수는
// body 태그 안의 p 태그를 넣는 작업
// 넣은 p 태그를 선택하는 작업
// 두 가지 작업을 수행한다.
// 최종적으로 선택 된 대상은 p 태그가 된다.
// 선택된 p 태그는 d3의 돔 엘리먼트 이다.

console.log("select p and print text",
d3
.select("body")
.append("p")
.text("New paragraph!")
);

// d3의 돔 엘리먼트 p에 "New paragraph!"라는 태그를 넣는다.
