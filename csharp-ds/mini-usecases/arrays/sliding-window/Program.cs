using System.Collections.Generic;

public static class SlidingWindowUseCase
{
    public static int MaxSumSubarray(List<int> nums, int k)
    {
        if (k <= 0 || k > nums.Count) return 0;

        var windowSum = 0;
        for (var i = 0; i < k; i++) windowSum += nums[i];

        var best = windowSum;
        for (var right = k; right < nums.Count; right++)
        {
            windowSum += nums[right] - nums[right - k];
            if (windowSum > best) best = windowSum;
        }

        return best;
    }
}
