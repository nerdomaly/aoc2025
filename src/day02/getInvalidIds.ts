export const getInvalidIdsPart1 = (idRange: string): number[] => {
  const [startStr, endStr] = idRange.split("-");
  const start = parseInt(startStr, 10);
  const end = parseInt(endStr, 10);
  const invalidIds: number[] = [];

  for (let id = start; id <= end; id++) {
    if (id.toString().length % 2 === 1) continue;

    const halfLength = Math.floor(id.toString().length / 2);
    const idStr = id.toString();
    let isValid = true;

    const segment1 = idStr.substring(0, halfLength);
    const segment2 = idStr.substring(halfLength);

    if (segment1 === segment2) {
      invalidIds.push(id);
    }

    if (!isValid) {
      invalidIds.push(id);
    }
  }

  return invalidIds;
};

export const getInvalidIdsPart2 = (idRange: string): number[] => {
  const [startStr, endStr] = idRange.split("-");
  const start = parseInt(startStr, 10);
  const end = parseInt(endStr, 10);
  const invalidIds: number[] = [];

  for (let id = start; id <= end; id++) {
    const currentId = id.toString();
    const maxLengthCheck = Math.floor(currentId.length / 2);

    for (let lengthCheck = 1; lengthCheck <= maxLengthCheck; lengthCheck++) {
      if (currentId.length % lengthCheck !== 0) continue;

      const segments: string[] = [];
      for (let pos = 0; pos < currentId.length; pos += lengthCheck) {
        segments.push(currentId.substring(pos, pos + lengthCheck));
      }

      const allEqual = segments.every((seg) => seg === segments[0]);
      if (allEqual) {
        invalidIds.push(id);
        break;
      }
    }
  }

  return invalidIds;
};
