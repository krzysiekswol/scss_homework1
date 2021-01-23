import { sum } from "./sum";
import style from "./css/index.scss"
console.log("Hello World");
console.log(sum(2,3));


let heading = document.querySelector("#demo"),
 sumValue = sum(10,300);
heading.innerHTML = `10 + 300 = ${sumValue}`;