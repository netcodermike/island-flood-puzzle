import assert from 'node:assert/strict';
import { newBoard, island, flood, budget } from './app.mjs';
assert.deepEqual([...island([0,1,0,1,0,1,0,1,1], 3)], [0]);
assert.equal(island(flood([0,1,0,1], 2, 1), 2).size, 4);
assert.deepEqual(newBoard(123), newBoard(123));
for (let seed = 0; seed < 150; seed++) assert.ok(budget(newBoard(seed), 6) <= 37);
