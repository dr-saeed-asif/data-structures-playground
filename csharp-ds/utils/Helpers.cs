using System;
using System.Collections.Generic;
using System.Linq;

public static class Helpers
{
    public static void AssertEqual<T>(T actual, T expected, string message)
    {
        if (!EqualityComparer<T>.Default.Equals(actual, expected))
        {
            throw new Exception($"{message} | expected: {expected}, got: {actual}");
        }
    }

    public static void AssertTrue(bool condition, string message)
    {
        if (!condition) throw new Exception(message);
    }
}
