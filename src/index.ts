#!/usr/bin/env node

import { HyakuninIsshu, hyakuninIsshuData } from './hyakuninIsshu';

function getRandomPoem(): HyakuninIsshu {
  const randomIndex = Math.floor(Math.random() * hyakuninIsshuData.length);
  return hyakuninIsshuData[randomIndex];
}

// 実行部分
const randomPoem = getRandomPoem();
console.log(`No.${randomPoem.no} - ${randomPoem.nameKanji} (${randomPoem.nameKana})`);
console.log(`漢字: ${randomPoem.bodyKanji}`);
console.log(`仮名: ${randomPoem.bodyKana}`);
