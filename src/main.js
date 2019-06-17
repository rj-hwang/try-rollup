import { version } from '../package.json';

let i = 1;
const j = 2

export default (n = 1) => console.log(version + " - " + (n + i + j));