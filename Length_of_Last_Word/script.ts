function lengthOfLastWord(s: string): number {
  let stringToArray = s.split(" ");
  const arrayLength = stringToArray.length;
  let count = 0;

  for (let i = 0; i < arrayLength; i++) {
    const last = stringToArray.pop();
    if (last && last?.length > 0) {
      count += last?.length;
      break;
    }
  }
  return count;
}
