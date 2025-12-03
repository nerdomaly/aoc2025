export const largestJoltage = (
  battery: string,
  numBatteries: number
): number => {
  let joltageString = "";
  let currentBatteryString = battery;

  for (let i = 1; i <= numBatteries; i++) {
    const workingBatteryString = currentBatteryString.substring(
      0,
      currentBatteryString.length - (numBatteries - i)
    );

    const sortedBatteries = workingBatteryString
      .split("")
      .map((line) => parseInt(line, 10))
      .sort((a, b) => b - a);

    joltageString += sortedBatteries[0].toString();

    currentBatteryString = currentBatteryString.substring(
      currentBatteryString.indexOf(sortedBatteries[0].toString()) + 1
    );
  }

  return parseInt(joltageString, 10);
};
