export const saveString = (key: string, value: string) =>
  new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem(key, value);
      resolve(true);
    } catch {
      reject(false);
    }
  });

export const save = (key: string, value: Record<string, any>) =>
  new Promise((resolve, reject) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      resolve(true);
    } catch {
      reject(false);
    }
  });

export const loadString = (key: string): Promise<string | null> =>
  new Promise((resolve, reject) => {
    try {
      const data = window.localStorage.getItem(key);
      resolve(data);
    } catch {
      reject(false);
    }
  });

export const load = <T>(key: string): Promise<T | null> =>
  new Promise((resolve, reject) => {
    try {
      const data = window.localStorage.getItem(key);
      resolve(data ? JSON.parse(data) : null);
    } catch {
      reject(false);
    }
  });

export const remove = (key: string) =>
  new Promise((resolve, reject) => {
    try {
      window.localStorage.removeItem(key);
      resolve(true);
    } catch {
      reject(false);
    }
  });

export const clear = () =>
  new Promise((resolve, reject) => {
    try {
      window.localStorage.clear();
      resolve(true);
    } catch {
      reject(false);
    }
  });
