export const spinDial = (
  startingPosition: number,
  spinCode: string
): { result: number; clicksOnZero: number } => {
  let direction = spinCode.substring(0, 1);
  let distance = parseInt(spinCode.substring(1), 10);
  let result = startingPosition;

  let calculatedPosition = 0;
  let clicksOnZero = 0;
  if (direction === "L") {
    calculatedPosition = startingPosition - distance;
    result = ((calculatedPosition % 100) + 100) % 100;
    clicksOnZero =
      Math.floor((startingPosition - 1) / 100) -
      Math.ceil(calculatedPosition / 100) +
      1;
  } else if (direction === "R") {
    calculatedPosition = startingPosition + distance;
    result = calculatedPosition % 100;
    clicksOnZero =
      Math.floor(calculatedPosition / 100) -
      Math.ceil((startingPosition + 1) / 100) +
      1;
  }

  return {
    result,
    clicksOnZero,
  };
};
