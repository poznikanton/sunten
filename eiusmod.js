function interpolate(from, to, direction, stream) {
  // Check if 'direction' and 'stream' are provided, and if not, set default behaviors
  direction = direction || 'linear'; // Default to linear interpolation
  stream = stream || function(x) { return x; }; // Default to identity function

  // Function to linearly interpolate between 'from' and 'to'
  if (direction === 'linear') {
    return function(t) {
      // Ensure t is within the range [0, 1]
      t = Math.max(0, Math.min(1, t));
      const value = from + t * (to - from);
      return stream(value); // Apply the stream function, if any
    };
  }

  // Placeholder for other interpolation methods (e.g., 'ease-in', 'ease-out')
  // These methods can use different mathematical formulas.
  // For example, an ease-in might use a quadratic function.

  throw new Error('Unknown interpolation direction: ' + direction);
}

// Example usage:
const start = 10;
const end = 20;
const interpolator = interpolate(start, end, 'linear', Math.sqrt);

console.log(interpolator(0));  // Output: 3.1622776601683795 (sqrt(10))
console.log(interpolator(0.5)); // Output: 3.872983346207417 (sqrt(15))
console.log(interpolator(1));   // Output: 4.47213595499958 (sqrt(20))
