import { pretend, proxy } from ".";

console.log(proxy.any.property.anyfunc().anyarray[42]);

pretend(JSON).stringify({ answer: 42 }, null, 2);
