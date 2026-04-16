type TestCase = {
  name: string;
  run: () => void;
};

let passed = 0;
let failed = 0;

export function runTest(testCase: TestCase): void {
  try {
    testCase.run();
    passed++;
    console.log(`PASS: ${testCase.name}`);
  } catch (error) {
    failed++;
    const message = error instanceof Error ? error.message : String(error);
    console.error(`FAIL: ${testCase.name} -> ${message}`);
  }
}

export function printSummary(suiteName: string): void {
  console.log(`\nSuite: ${suiteName}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);

  if (failed > 0) {
    process.exitCode = 1;
  }
}

export function resetSummary(): void {
  passed = 0;
  failed = 0;
}
