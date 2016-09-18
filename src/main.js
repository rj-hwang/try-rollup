import { version } from '../package.json';
import m1 from "./m1";
import {add} from "./m2";
import * as $ from "jquery"; // external

console.log(m1);
console.log(add(1, 2));
console.log($);
export default () => console.log(m1 + add(2 + 3));