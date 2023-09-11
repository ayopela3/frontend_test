import { direction } from "@/app/types/sort";
import { User } from "@/app/types/user";

const sortDirection = (sortDirection: direction, data: User[]) => {
    const sortedData = data;
    if (sortDirection === 'ascending') {
      return sortedData;
    } else return sortedData.reverse();
}

const sortBy = (type: keyof User, data: User[]) => {
  const sortedData: User[] = [...data].sort((userA: User, userB: User) => {
    let userDataA;
    let userDataB;
    if (type === 'name') {
      userDataA = userA.name.toLowerCase();
      userDataB = userB.name.toLowerCase();
      return userDataA.localeCompare(userDataB);
    } else if (type === 'email') {
      userDataA = userA.email.toLowerCase();
      userDataB = userB.email.toLowerCase();
      return userDataA.localeCompare(userDataB);
    } else if (type === 'company') {
      userDataA = userA.company.name.toLowerCase();
      userDataB = userB.company.name.toLowerCase();
      return userDataA.localeCompare(userDataB);
    } else {
      return 0;
    }
  });
  console.log('Sorted DATA:', sortedData)
  return sortedData
}

export {
  sortDirection,
  sortBy,
};
