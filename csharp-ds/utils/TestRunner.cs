using System;

public static class TestRunner
{
    private static int _passed;
    private static int _failed;

    public static void Run(string name, Action test)
    {
        try
        {
            test();
            _passed++;
            Console.WriteLine($"PASS: {name}");
        }
        catch (Exception ex)
        {
            _failed++;
            Console.WriteLine($"FAIL: {name} -> {ex.Message}");
        }
    }

    public static void Summary(string suite)
    {
        Console.WriteLine($"Suite: {suite}");
        Console.WriteLine($"Passed: {_passed}");
        Console.WriteLine($"Failed: {_failed}");
    }
}
