export function maxSumSubarray(nums: number[], k: number): number {
  if (k <= 0 || k > nums.length) return 0;

  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += nums[i];

  let best = windowSum;
  for (let right = k; right < nums.length; right++) {
    windowSum += nums[right] - nums[right - k];
    if (windowSum > best) best = windowSum;
  }

  return best;
}
