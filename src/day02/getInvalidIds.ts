export const getInvalidIds = (idRange: string): number[] => {
  const [startStr, endStr] = idRange.split("-");
  const start = parseInt(startStr, 10);
  const end = parseInt(endStr, 10);
  const invalidIds: number[] = [];

  // for (let id = start; id <= end; id++) {
  //   const idStr = id.toString();

  //   for (
  //     let checkLength = 1;
  //     checkLength <= Math.floor(idStr.length / 2);
  //     checkLength++
  //   ) {
  //     for (
  //       let checkPosition = 0;
  //       checkPosition <= idStr.length - 2 * checkLength;
  //       checkPosition++
  //     ) {
  //       const firstSegment = idStr.substr(checkPosition, checkLength);
  //       const secondSegment = idStr.substr(
  //         checkPosition + checkLength,
  //         checkLength
  //       );

  //       console.log(
  //         `ID: ${idStr}, Checking segments: ${firstSegment} and ${secondSegment}`
  //       );
  //       if (firstSegment === secondSegment) {
  //         invalidIds.push(id);
  //         break;
  //       }
  //     }
  //     if (invalidIds.includes(id)) {
  //       break;
  //     }
  //   }
  // }

  for (let id = start; id <= end; id++) {
    if (id.toString().length % 2 === 1) continue;

    const halfLength = Math.floor(id.toString().length / 2);
    const idStr = id.toString();
    let isValid = true;

    const segment1 = idStr.substr(0, halfLength);
    const segment2 = idStr.substr(halfLength, halfLength);

    if (segment1 === segment2) {
      invalidIds.push(id);
    }

    if (!isValid) {
      invalidIds.push(id);
    }
  }

  return invalidIds;
};
