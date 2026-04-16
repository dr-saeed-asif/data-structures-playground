# Utils (C#)

## `Helpers.cs`
- `AssertEqual<T>(actual, expected, message)`: throws exception when actual and expected differ.
- `AssertTrue(condition, message)`: throws exception when condition is false.

## `TestRunner.cs`
- `Run(name, test)`: executes a test action and prints PASS/FAIL.
- `Summary(suite)`: prints total passed and failed tests.
