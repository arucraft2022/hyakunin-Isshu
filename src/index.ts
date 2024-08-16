#!/usr/bin/env node

import { HyakuninIsshu, hyakuninIsshuData } from './hyakuninIsshu';

// 絵文字を追加する関数
function addEmojis(poem: HyakuninIsshu): string {
  const emojis: { [key: number]: string } = {
    1: "🌾🌙💧",
    2: "🌸🌿⛰️",
    3: "🐦🌙🌌",
    4: "🌊🗻❄️",
    5: "🍁🦌😢",
    6: "🌉❄️🌃",
    7: "🌌🌕⛰️",
    8: "🏡🌳👤",
    9: "🌸💔😢",
    10: "🏞️🚶‍♂️🚶‍♀️",
    11: "🌊🚣‍♂️🏝️",
    12: "🌬️☁️👧",
    13: "💔🌊💦",
    14: "💔❓😢",
    15: "🌿❄️👘",
    16: "🗻🏔️🌲",
    17: "⛩️🍁🌊",
    18: "🌊🌙💤",
    19: "⛵🌊💔",
    20: "😢💔🌊",
    21: "🌙⏳🌙",
    22: "🍃🍁🌬️",
    23: "🌕💧😢",
    24: "🎁🍁🙏",
    25: "🏞️🌿💔",
    26: "🍁🏔️🙏",
    27: "🌊💧💔",
    28: "🏡❄️🌾",
    29: "❄️🌼❓",
    30: "🌙💔😢",
    31: "🌕❄️🏔️",
    32: "🍁🍃🌊",
    33: "🌸🍃😢",
    34: "🌲🏞️👤",
    35: "🌸🏡💭",
    36: "🌕☁️🌙",
    37: "💧🍃💔",
    38: "💔😭👤",
    39: "🌾🏞️💔",
    40: "💔💧👀",
    41: "💔👤💭",
    42: "🌊🌲💔",
    43: "💔💭💭",
    44: "💔👤😢",
    45: "😢👤💭",
    46: "🚣‍♂️💔⛴️",
    47: "🏡🍁🌬️",
    48: "🌊💔🌊",
    49: "🔥🌕💭",
    50: "👘💭⏳",
    51: "🔥🌿💭",
    52: "🌅😢💭",
    53: "😢💭🌅",
    54: "😢💭💧",
    55: "🌊🌧️🎶",
    56: "💭💔😢",
    57: "🌕💭🌥️",
    58: "🌬️💧👤",
    59: "🌙🌕🌌",
    60: "🗻⛩️🚶‍♀️",
    61: "🌸🌸⛩️",
    62: "🐦🌌⛩️",
    63: "💭💔👤",
    64: "🌁⛵💧",
    65: "😢💭💧",
    66: "🌸🌲👤",
    67: "🌸🌙💭",
    68: "🌌🌙💔",
    69: "🍁🌬️🌊",
    70: "🏞️🍁🌅",
    71: "🌾🌬️🌙",
    72: "🌊🌧️💧",
    73: "🌸🌁🏞️",
    74: "💔💨💭",
    75: "💧🌧️🍂",
    76: "🌊🚣‍♂️🌥️",
    77: "🌊🌬️💔",
    78: "🏝️🐦🌌",
    79: "🍁🌬️🌕",
    80: "💔💧🌙",
    81: "🐦🌕🌌",
    82: "😭💭💧",
    83: "🏞️🌌💭",
    84: "💭💔💧",
    85: "💭🌅💧",
    86: "💧🌙😢",
    87: "🌧️🍃🌅",
    88: "🌾💔💭",
    89: "💔💭⏳",
    90: "🌊💧👘",
    91: "❄️💤😢",
    92: "💧🌊⛩️",
    93: "⛵💧🌅",
    94: "🍂🌬️🏡",
    95: "🌸🍂👤",
    96: "🌸❄️🌬️",
    97: "🌊🔥🌅",
    98: "🍃⛩️🌇",
    99: "😢💭🌌",
    100: "🏯⛩️🌸"
  };

  return `${poem.bodyKanji} ${emojis[poem.no] || ""}`;
}

// 特定の番号の歌を取得する関数
function getPoemByNumber(no: number): HyakuninIsshu | undefined {
  return hyakuninIsshuData.find(poem => poem.no === no);
}

// 百人一首のリストをテキスト形式で返す関数
function listAllPoems(): void {
  hyakuninIsshuData.forEach(poem => {
    console.log(`${String(poem.no).padStart(2, '0')}: ${addEmojis(poem)}`);
  });
}

// 百人一首のリストをJSON形式で返す関数
function listAllPoemsAsJson(): void {
  const jsonOutput = hyakuninIsshuData.map(poem => ({
    number: String(poem.no).padStart(2, '0'),
    kanji: poem.bodyKanji,
    kana: poem.bodyKana,
    author: {
      kanji: poem.nameKanji,
      kana: poem.nameKana
    },
    emojis: addEmojis(poem)
  }));
  console.log(JSON.stringify(jsonOutput, null, 2));
}

// 指定したキーワードで歌を検索する関数
function searchPoems(keyword: string): void {
  const results = hyakuninIsshuData.filter(poem =>
    poem.bodyKanji.includes(keyword) ||
    poem.bodyKana.includes(keyword) ||
    poem.nameKanji.includes(keyword) ||
    poem.nameKana.includes(keyword)
  );

  if (results.length > 0) {
    results.forEach(poem => {
      console.log(`${String(poem.no).padStart(2, '0')}: ${addEmojis(poem)} (${poem.nameKanji})`);
    });
  } else {
    console.log(`キーワード「${keyword}」に一致する歌が見つかりませんでした。`);
  }
}

// ランダムに一つの歌を取得する関数
function getRandomPoem(): HyakuninIsshu {
  const randomIndex = Math.floor(Math.random() * hyakuninIsshuData.length);
  return hyakuninIsshuData[randomIndex];
}

// ヘルプを表示する関数
function showHelp(): void {
  console.log(`
使い方: npx hyakunin-isshu [オプション]

オプション:
  --no <number>       指定した番号の歌を表示します。
  --list              全ての歌をテキスト形式で表示します。
  --list --json       全ての歌をJSON形式で表示します。
  --search <keyword>  指定したキーワードで歌を検索します。
  --random            ランダムに一つの歌を表示します（デフォルト）。
  --help              このヘルプメッセージを表示します。
`);
}

// 実行部分
const args = process.argv.slice(2);

if (args.includes('--help')) {
  showHelp();
} else if (args.includes('--no')) {
  const noIndex = args.indexOf('--no');
  const no = parseInt(args[noIndex + 1], 10);
  const poem = getPoemByNumber(no);
  if (poem) {
    console.log(`No.${String(poem.no).padStart(2, '0')}: ${addEmojis(poem)}`);
  } else {
    console.log(`該当する番号の歌が見つかりません: ${no}`);
  }
} else if (args.includes('--list')) {
  if (args.includes('--json')) {
    listAllPoemsAsJson();
  } else {
    listAllPoems();
  }
} else if (args.includes('--search')) {
  const searchIndex = args.indexOf('--search');
  const keyword = args[searchIndex + 1];
  searchPoems(keyword);
} else {
  // デフォルト動作: ランダムな歌を表示
  const randomPoem = getRandomPoem();
  console.log(`No.${String(randomPoem.no).padStart(2, '0')}: ${addEmojis(randomPoem)}`);
  console.log(`漢字: ${randomPoem.bodyKanji}`);
  console.log(`仮名: ${randomPoem.bodyKana}`);
}
