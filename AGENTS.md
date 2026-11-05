# Agent & Developer Workflow Guidelines

This file defines mandatory repository rules and workflow standards for AI coding agents and contributors working in this repository.

## Git & Branching Rules

1. **Protected Default Branch (`main` / `master`)**:
   - Direct pushes and force-pushes to the default branch are blocked by repository rulesets.
   - **Never** run `git push` directly to `main` or `master`.
   - Always create a descriptive feature, fix, or docs branch (`git checkout -b <type>/<short-description>`) and submit changes via a Pull Request (`gh pr create`).
2. **Mandatory Commit Sign-Off (`-s` / DCO)**:
   - Every commit **must** include a `Signed-off-by:` trailer (`git commit -s -m "..."`).
   - Commits missing `Signed-off-by: Name <email>` are rejected by the repository's commit message pattern ruleset.
3. **Quality & Verification**:
   - Preserve existing documentation, comments, and code formatting conventions (`.editorconfig` / project linter rules).
   - Verify that builds and tests pass locally before committing and opening a Pull Request.
