(() => {
  let message = "Hello";
  console.log(message);

  let n = 123;
  n++;
  console.log(n);

  // const price = 200;
  // if (price > 500) {
  //   console.log("500以上");
  // } else {
  //   console.log("500以下");
  // }

  const price = 1000;
  const tax = 0.1;
  console.log(price * tax);

  const a = 80 + 90 + 60 + 85 + 100;
  const b = 40 + 30 + 50 + 25 + 60;
  console.log(a, b);
  if (a > 300 && b > 300) {
    console.log("素晴らしい");
  } else if (a > 300 || b > 300) {
    console.log("普通");
  } else {
    console.log("頑張ろう");
  }

  const i = "小吉";

  switch (i) {
    case "大吉":
      console.log("大吉です！");
      break;
    case "中吉":
      console.log("中吉です！");
      break;
    case "小吉":
      console.log("小吉です！");
      break;
    case "吉":
      console.log("吉です！");
      break;
    case "末吉":
      console.log("末吉です！");
      break;
    case "凶":
      console.log("凶です！");
      break;
    case "大凶":
      console.log("大凶です！");
      break;
  }

  const p = 1800;
  p < 1000
    ? console.log("安い")
    : p > 2000
    ? console.log("高い")
    : console.log("ちょうどいい");

  const array = ["A", "B", "C", "D"];
  array.push("F");
  array.unshift("0");
  const found = array.includes("B");
  console.log(found);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result = numbers.map(function (item) {
    if (item % 2 == 0) {
      return item * 2;
    }
    return item;
  });
  console.log(result);
})();
