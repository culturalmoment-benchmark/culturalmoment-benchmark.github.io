// Cultural Moment Benchmark leaderboard.
// 3-stage x 3-mode zero-shot evaluation. S1 and S2 are 4-option multiple-choice
// accuracy (%); S3 is mean IoU (%) of the predicted free-form span over the 631
// Stage-3 pairs; Joint credits a concept only when all three abilities line up.
// R / C / F = Reset, Carry, Feedback (what the model sees from earlier stages).
// Seed rows transcribed verbatim from Table 2 of the camera-ready.
// To add a result: see the Submit section on the page.
cmb_leaderboard = [
  {"model": "Gemini 3.1 Pro",      "group": "Closed", "s1": 77.8, "s2_r": 62.7, "s2_c": 72.9, "s2_f": 85.9, "s3_r": 31.9, "s3_c": 33.4, "s3_f": 33.3, "j_r": 20.6, "j_c": 27.0, "j_f": 27.8, "date": "2026-08", "source": "static/pdf/CMB_camera_ready.pdf"},
  {"model": "GPT-5.4",             "group": "Closed", "s1": 70.9, "s2_r": 52.6, "s2_c": 68.3, "s2_f": 81.7, "s3_r": 29.5, "s3_c": 31.0, "s3_f": 30.3, "j_r": 14.5, "j_c": 21.7, "j_f": 21.5, "date": "2026-08", "source": "static/pdf/CMB_camera_ready.pdf"},
  {"model": "Qwen3.5-27B",         "group": "Open",   "s1": 53.6, "s2_r": 39.9, "s2_c": 40.5, "s2_f": 39.9, "s3_r": 23.2, "s3_c": 24.1, "s3_f": 30.2, "j_r": 6.7,  "j_c": 8.1,  "j_f": 7.7,  "date": "2026-08", "source": "static/pdf/CMB_camera_ready.pdf"},
  {"model": "Qwen3-VL-32B",        "group": "Open",   "s1": 51.0, "s2_r": 39.9, "s2_c": 31.4, "s2_f": 28.4, "s3_r": 22.0, "s3_c": 22.3, "s3_f": 30.0, "j_r": 6.4,  "j_c": 4.3,  "j_f": 4.6,  "date": "2026-08", "source": "static/pdf/CMB_camera_ready.pdf"},
  {"model": "InternVL3.5-14B (t)", "group": "Open",   "s1": 41.2, "s2_r": 26.5, "s2_c": 26.8, "s2_f": 16.7, "s3_r": 3.2,  "s3_c": 3.0,  "s3_f": 17.8, "j_r": 0.8,  "j_c": 0.6,  "j_f": 0.8,  "date": "2026-08", "source": "static/pdf/CMB_camera_ready.pdf"},
  {"model": "InternVL3.5-14B (n)", "group": "Open",   "s1": 46.7, "s2_r": 26.5, "s2_c": 24.5, "s2_f": 9.8,  "s3_r": 2.1,  "s3_c": 2.5,  "s3_f": 12.5, "j_r": 0.4,  "j_c": 0.4,  "j_f": 0.7,  "date": "2026-08", "source": "static/pdf/CMB_camera_ready.pdf"}
];
