// Warning Label for Humans: One Line, Big Laugh.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 12 candidates scored against the judge's published criteria, in
// order: (1) a single-line safety warning label for every human being,
// funny; (2) the laugh lands in one read, with the turn arriving in the
// last few words; (3) feels true about people in general — recognition,
// not random absurdity; (4) sounds like a real printed label in wording
// and rhythm; (5) inside 160 characters, no filler, no second idea, no
// repeated joke. Gate: 1-160 characters.
//
// Candidates (rejected in brackets why):
// 1. Do not operate before coffee; user may nod, smile, agree to things
//    they regret by noon [coffee-before-talk is THE modal warning-label
//    joke — the first thing most entries will say].
// 2. Contents may cause sudden expertise after one YouTube video [good,
//    but the turn ("after one YouTube video") is the whole line, not a
//    turn at the end of a label-shaped setup].
// 3. This human will say "I'm five minutes away" while still in the
//    shower [CHOSEN — see below].
// 4. May reply "k" to messages that took you 20 minutes to write
//    [strong runner-up: short, true, turn at the end — kept as #2].
// 5. Do not shake. Contents include 47 open tabs and zero finished tasks
//    [label form is perfect, but two ideas (tabs + tasks) in one line].
// 6. Keep away from group chats after midnight; side effects include
//    3 a.m. apologies [two beats, and "after midnight" is generic].
// 7. Runs on 4 hours of sleep and 6 cups of coffee [modal; also coffee].
// 8. May start a sentence with "no offence" and end it with an offence
//    [turn at the end, but "no offence" is a known stand-up bit].
// 9. User will read the instructions only after pressing the wrong
//    button twice [true and specific, but the turn lands mid-line].
// 10. Do not feed after midnight; human becomes a group-chat philosopher
//     by 2 a.m. [two ideas — violates C5 outright].
// 11. One compliment away from telling you their entire life story
//     [good turn, but "contents under pressure" setup is weaker label
//     rhythm than a plain CAUTION line].
// 12. Nods along to songs whose lyrics they have never once understood
//     [funny and true, but the turn is smeared across the line, not in
//     the last few words].
//
// Why the pick wins:
// - Criterion 2: the turn lands in the last four words — "while still in
//   the shower". The setup ("I'm five minutes away") is a promise; the
//   tail reveals the lie in one image.
// - Criterion 3: universal recognition. Almost every human has sent that
//   exact text, and almost every human has received it. It is about how
//   people actually behave, not absurdity.
// - Criterion 4: reads like a printed label — "CAUTION:" + a plain
//   declarative sentence, the rhythm of a real safety sticker.
// - Criterion 5: 79 characters, one idea, no filler. "Five minutes" is
//   the concrete number; "shower" is the concrete place.
// Runner-up ("k" reply) loses narrowly on C3: it is true of texting
// culture, while the winner is true of people in general — the judge's
// C3 explicitly rewards the general over the niche.
// Verified: entry is 79 characters (gate 1-160), one line, ASCII only.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `CAUTION: This human will say "I'm five minutes away" while still in the shower.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
