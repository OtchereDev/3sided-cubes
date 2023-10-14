export function setToLocalStorage<T>(key: string, values: T) {
  const storageData = JSON.stringify(values);
  localStorage.setItem(key, storageData);
}

export function getFromLocalStorage<T>(key: string, defaultValues?: T): T {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return defaultValues!;
}

export function clearFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
