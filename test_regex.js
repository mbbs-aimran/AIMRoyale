const s = '{ "question": "Le téléphone Poco F7 vient de sortir et Hannah veut acheter un chargeur rapide qui lui permettra de charger son téléphone à \\n80\\n%\\n80% en 30 minutes. Si le chargeur coûte 25 euros et que';
const key = 'question';
const regex = new RegExp(`"${key}"\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)`, 's');
console.log(regex);
const m = s.match(regex);
console.log("MATCH: ", m ? m[1] : 'null');
