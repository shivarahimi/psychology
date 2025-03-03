import { storageTypeEnum } from "../../enums/storage-type.enum";

const getStorage = (type: storageTypeEnum): Storage | null => {
  return type === storageTypeEnum.sessionStorage
    ? sessionStorage
    : localStorage;
};
// getItem
// for register
const getItem = (type: storageTypeEnum, key: string): any => {
  const storage = getStorage(type);
  if (storage && storage.getItem(key)) {
    return storage.getItem(key);
  } else {
    return false;
  }
};
// setItem
// for login
const setItem = (type: storageTypeEnum, key: string, value: any): void => {
  const storage = getStorage(type);
  if (storage) {
    storage.setItem(key, value);
  }
};

//setItemGeneric
const setItemGeneric = (
  type: storageTypeEnum,
  key: string,
  value: any
): void => {
  const storage = getStorage(type);
  if (storage) {
    storage.setItem(key, JSON.stringify(value));
  }
};

const getItemGeneric = (type: storageTypeEnum, key: string): any => {
  const storage = getStorage(type);

  if (storage) {
    const storageValue = getItem(type, key);
    return storageValue ? JSON.parse(storageValue) : false;
  } else {
    return null;
  }
};
export { getItem, setItem, setItemGeneric, getItemGeneric };
