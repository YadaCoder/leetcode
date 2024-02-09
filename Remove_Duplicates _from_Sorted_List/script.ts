function deleteDuplicates(head: any) {
  let newArray: number[] = [];
  for (let i = 0; i < head.length; i++) {
    if (!newArray.includes(head[i])) {
      newArray.push(head[i]);
    }
  }
  return newArray;
}