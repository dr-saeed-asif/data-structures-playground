# Utils (TypeScript)

## `helpers.ts`
- `deepEqual(a, b)`: compares two values by JSON string representation.
- `assertEqual(actual, expected, message)`: throws an error when strict equality fails.
- `assertDeepEqual(actual, expected, message)`: throws an error when deep equality fails.
- `assertTrue(condition, message)`: throws an error when condition is false.

## `test-runner.ts`
- `runTest({ name, run })`: executes one test case and prints PASS/FAIL.
- `printSummary(suiteName)`: prints total passed and failed tests; sets process exit code on failures.
- `resetSummary()`: resets passed/failed counters.
