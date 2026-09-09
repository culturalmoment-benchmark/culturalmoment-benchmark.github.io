# culturalmoment-benchmark.github.io
Cultural Moment Benchmark: Evaluating Video Cultural Reasoning and Grounding in Southeast Asia

Project page for the paper, live at https://culturalmoment-benchmark.github.io/. Adapted from the Seeing Culture Benchmark page, itself built on the Nerfies and MathVista templates; the site is licensed under CC BY-SA 4.0 (see LICENSE).

## Updating the leaderboard

Rows live in `data/leaderboard.js`, one object per model: `s1`, `s2_r` / `s2_c` / `s2_f`, `s3_r` / `s3_c` / `s3_f`, `j_r` / `j_c` / `j_f` in percent (R, C, F = Reset, Carry, Feedback), a `date` (YYYY-MM) and a `source` URL. To add an external result, append a row and open a pull request, or paste in the result JSON that arrived by email. The table renders and sorts client side; there is no build step.
