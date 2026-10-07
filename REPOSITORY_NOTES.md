# Repository Cleanup Notes

This file documents cleanup performed for the GitHub-ready copy.

## Excluded from Git

- `node_modules/` directories — dependencies should be installed with npm.
- `.next/` directories — generated Next.js output/cache.
- Nested `.git/` directory — the repository should have one root Git history.
- `tempCodeRunnerFile.js` files — editor-generated temporary files.
- `eventlog.txt` — generated runtime log output.
- `html/rolex.mp4` — oversized media file; keep it outside the repository or use Git LFS if required.

The source code and learning examples were otherwise preserved as closely as possible.
