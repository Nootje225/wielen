function spinWheel(selector) {
  const node = document.querySelector(selector);
  if (!node) return;

  const spin = node.querySelector('button');
  const wheel = node.querySelector('ul');
  const items = node.querySelectorAll('ul li');  // Select all items in the wheel
  const resultDisplay = document.getElementById('result');  // Where the result will be displayed

  let animation;
  let previousEndDegree = 0;

  spin.addEventListener('click', () => {
    if (animation) {
      animation.cancel(); // Reset the animation if it already exists
    }

    const randomAdditionalDegrees = Math.random() * 360 + 1800;
    const newEndDegree = previousEndDegree + randomAdditionalDegrees;

    animation = wheel.animate([
      { transform: `rotate(${previousEndDegree}deg)` },
      { transform: `rotate(${newEndDegree}deg)` }
    ], {
      duration: 4000,
      direction: 'normal',
      easing: 'cubic-bezier(0.440, -0.205, 0.000, 1.130)',
      fill: 'forwards',
      iterations: 1
    });

    previousEndDegree = newEndDegree;

    // Calculate which item is selected after the spin completes
    setTimeout(() => {
      const finalRotation = newEndDegree % 360;
      const itemIndex = Math.floor((360 - finalRotation) / (360 / items.length));

      // Display the result (the selected question/item)
      const selectedItem = items[itemIndex];
      resultDisplay.textContent =` ${selectedItem.textContent}`;
    }, 4000);  // Delay result display until the animation ends
  });
}
