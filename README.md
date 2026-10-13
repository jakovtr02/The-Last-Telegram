# The Last Telegram

A complete, offline-playable, single-player cryptogram noir murder mystery. Made with plain HTML, CSS, and classic JavaScript scripts. No modules, dependencies, package manager, framework or web server needed.

## Run

1. Unzip the archive without moving individual files out of the directory tree.
2. Double-click **`index.html`**; it opens in a browser via `file://`.
3. Read the suspects, open the case file and select one of four evidence items. Click any cipher tile, type A–Z, or use the mobile letter input. Right/left arrows and Tab / Shift+Tab select substitutions; Backspace clears. Your mapping propagates to all copies of that cipher letter.
4. Submit a correctly filled quote to learn its author and hidden testimony. Pin all four to your evidence board, compare testimonies with the suspects and accuse the murderer. Three wrong accusations end the game.
5. **New Game** discards saved progress and generates new cipher keys.

A Google Fonts stylesheet is linked in the head. If offline, standard typewriter and serif fallbacks render automatically. Both images and synthesized rain/typewriter sound are local or generated, so the game itself needs no network. Audio starts muted until enabled and may be unavailable in browsers without Web Audio.

## Mechanics

- A shuffled set of four difficulties is assigned across the case: nonzero Caesar shift, keyword alphabet derangement, random substitution and a random substitution with spaces/punctuation stripped. Every key is a valid permutation with no self-mapping. Each exhibit has an independent alphabet, stored with the save.
- Clicking a ciphertext symbol sets the active substitution. Conflicts (multiple symbols mapped to the same plain letter) are highlighted. Letter frequency shows ciphertext counts.
- Revealing a letter costs 25 points, checking wrong guesses costs 15, getting an opening-word crib costs 20. In the final exhibit, buying word boundaries costs 25 instead. Revealed letters lock. Points begin at 100, and successful solutions earn 20–90 more according to elapsed time and hint use.
- Saves use `localStorage` (`the-last-telegram-v2`) and resume on reopening the page, if your browser permits local-file storage. In privacy modes that disable storage, the game still works without persistence.
- Enter `TLT.tests.run()` in your browser developer console to run ~1,500 deterministic-invariant checks (sampling randomized keys) for permutations, no self-map, round trips, stripped round trips, solved-state and conflicts.

## Structure

- `index.html`: shell and classic script tags in dependency order
- `css/base.css`: reset, theme and layout
- `css/components.css`: interactive components
- `css/effects.css`: environmental styling and motion
- `js/data/case01.js` through `case04.js`, plus `registry.js`: independent case content and case selection
- `js/engine.js`: keys, encoding, validation, grid helpers
- `js/state.js`: progress, points, strikes, save/load
- `js/audio.js`: optional synthetic audio
- `js/ui.js`: rendering, input and screen navigation
- `js/tests.js`: console self-tests
- `js/main.js`: bootstrapping
- `assets/images/`: original SVG textures and portraits
- `assets/audio/`: reserved for optional third-party local audio (currently none needed)
- `CREDITS.md`: asset licenses, sources and candidate links

## Notes

The literary quotations are short, public-domain lines from Oscar Wilde, Jane Austen, Edgar Allan Poe, and William Shakespeare. Narrative, characters and dialogue are original fiction. No trackers, remote APIs or downloaded sound files are required.

## Visual design

The redesigned interface uses an archival, pixel-influenced 1920s detective bureau aesthetic: identification portraits, filed evidence cards, official stamps, pale document stock, and lavender-grey ink. No third-party reference image is bundled.

## Case archive update

Four investigations are available from the opening **Case Archive**: Blackthorn Manor (`case01`), Ashdown Station (`case02`), Wren House (`case03`), and Mercury Radio Hall (`case04`). Each contains four original evidence trails, four suspect profiles, cross-referenced alibis and a separate resolution. Choose a case before opening the file, or use **New Game** to randomly start another case.

**Difficulty is randomized, not automatically increased.** Each new game assigns one of the four cipher types—Caesar, keyword, full substitution, and stripped/blackout—to each of its four exhibits in a shuffled order. All four types appear exactly once; the assignment and independent deranged cipher alphabets are saved with progress. Starting a new game rerolls them.

### Adding another case

1. Copy `js/data/case04.js` to `js/data/case05.js`; name its data property `TLT.case05`, assign `id: 'case05'`, and provide four suspects and four clues using the same schema. The case's `culprit` must match one suspect ID, and all clue IDs must be unique within that case. Use uppercase literary quotations and a first-word `crib` matching each quote.
2. Add `<script src="js/data/case05.js"></script>` immediately before `js/data/registry.js` in `index.html`.
3. Add `TLT.case05` to the `T.cases` array in `js/data/registry.js`. The engine now assigns cipher modes dynamically, so new clues need only their content, not a hardcoded `mode`.
4. Verify that no individual revelation singlehandedly settles the culprit, but the four statements logically exclude every other suspect. Then run `TLT.tests.run()`.

Progress uses `localStorage` key `the-last-telegram-v2`. Earlier single-case saves remain untouched but are not loaded, as the new archive stores its case ID and randomized puzzle modes.

## Twelve-case campaign (approximately 3 hours)

The archive includes 12 investigations, each with four cryptograms and a detailed timeline, suspects, and an evidence-based accusation. At an estimated 15 minutes per case, the target is **180 minutes**. Player completion time varies; there is no forced waiting. Solve a case to mark it complete in the campaign archive and unlock the convenient **Open the next case** button. Progress is stored in `localStorage` separately from your current case save. All cases remain selectable and replayable. The four cipher modes are shuffled independently for every new investigation.
