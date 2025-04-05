const EMOJIS = ["😂", "❤️", "🤔", "🥲", "🔥", "🤯", "🕺", "🎉"];
const TOTAL = 2 * EMOJIS.length;

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export function generateMap() {
  let list: string[] = [];

  for (let i = 0; i < TOTAL; ++i) {
    const emoji = EMOJIS[i % EMOJIS.length];
    let index;

    do {
      index = randInt(0, TOTAL - 1);
    } while (list[index]);

    list[index] = emoji;
  }

  return list;
}
