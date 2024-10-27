import { useEffect, useState } from "react";

const useSetLocalStorage = (key, value) => {
  const [data, setData] = useState(() => {
    const dataFromLocalStorage = localStorage.getItem(key);
    return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : value;
  });
  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(key));
    if (dataFromLocalStorage === null) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      const dataFromLocalStorage = JSON.parse(localStorage.getItem(key));
      var index = -1;
      for (let i = 0; i < dataFromLocalStorage.length; i++) {
        const element = dataFromLocalStorage[i];
        if (element.id === data.id) {
          element.adultCount = data.adultCount;
          index = i;
          break;
        }
      }
      if (index === -1 && data.length !== 0) {
        dataFromLocalStorage.push(data);
      }
      localStorage.setItem(key, JSON.stringify(dataFromLocalStorage));
    }
  }, [data]);
  return [data, setData];
};
export default useSetLocalStorage;
