const fs = require('fs');
const sk = require('./dist/systreKey')


function* entries(lines) {
  let lineno = 0;
  let block = null;
  let key = null;

  for (const line of lines) {
    ++lineno;

    const fields = line.trim().split(/\s+/);
    if (fields.length == 0 || fields[0].length == 0)
      continue;

    const newKey = fields[0].toLowerCase();

    if (newKey == 'end') {
      yield block;
      block = null;
    }
    else if (block == null) {
      if (newKey == 'periodic_graph')
        block = {};
      else {
        throw new Error(
          `expected "PERIODIC_GRAPH" on line ${lineno}`
        );
      }
    }
    else {
      if (newKey.match(/^[a-z]/)) {
        key = newKey;
        fields.shift();
      }

      if (fields.length) {
        if (key == 'name') {
          block.name = fields.join(' ');
        }
        else if (key == 'edges') {
          const nums = fields.map(s => parseInt(s));
          if (block.edges == null)
            block.edges = [];
          block.edges.push([nums[0], nums[1], nums.slice(2)]);
        }
        else if (key == 'key') {
          block.key = fields.join(' ');
        }
        else {
          throw new Error(
            `expected "NAME", "EDGES" or "KEY" on line ${lineno}`
          );
        }
      }
    }
  }

  if (block)
    yield block;
};


process.argv.slice(2).forEach(file => {
  const lines = fs.readFileSync(file, { encoding: 'utf8' }).split('\n');

  for (const block of entries(lines)) {
    try {
      const key = sk.systreKey(block.edges);
      if (key == block.key) {
        console.log(`${block.name}: OK`);
        const result = sk.systreKeyWithMapping(block.edges);

        for (const v in result.mapping)
          console.log(`    ${v}\t=>  ${result.mapping[v]}`);

        for (const e in result.edgeMapping)
          console.log(`    ${e}  \t=>  ${result.edgeMapping[e]}`);

        console.log();
      }
      else {
        console.log(`${block.name}: mismatch --`);
        console.log(`    -- expected: ${block.key}`);
        console.log(`    -- found:    ${key}`);
      }
    }
    catch (ex) {
      console.log(`${block.name}: ${ex}`);
    }
  }
});
