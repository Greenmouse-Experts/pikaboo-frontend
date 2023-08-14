import { store } from "@/shared/redux/store";


export const extractCallBackRoute = (path: string, data:any) => { 
  console.log(path);
  console.log(data);
  if (path === "/auth/login" || path === "/auth/login?sort=1" || path === "/auth/login?sort=2" || path === "/auth/login?sort=3"){
    if(data.account_type === "Fleet Manager"){
      return '/fleet'
    }else if(data.account_type === "Waste Manager"){
      return '/waste'
    }else if(data.account_type === "Field Operator"){
      return '/field'
    }else{
      return "/user";
    }
  } 
  if (path === "/auth/signup") return "/user";
  const indexOfQ = path.indexOf("?");
  if (indexOfQ) return path.slice(0, indexOfQ);
  return "/";
};

export const extractFieldCallBackRoute = (path: string) => {
  if (path === "/auth/login") return "/field";
  const indexOfQ = path.indexOf("?");
  if (indexOfQ) return path.slice(0, indexOfQ);
  return "/";
};

export const extractAdminCallBackRoute = (path: string) => {
    if (path === "/auth/admin") return "/admin";
    const indexOfQ = path.indexOf("?");
    if (indexOfQ) return path.slice(0, indexOfQ);
    return "/auth";
  };

export const requestAuthorization = () => {
    const appState = store.getState();
    return appState && appState.user && appState.user.user
      ? `Bearer ${appState.user.user.token}`
      : "";
  };

export const storeLocalToken = (key: string, data: any) => {
    if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(data));
      }
}

export const getLocalToken = (key: string) => {
    if (typeof window !== "undefined") {
        const storageItem = window.localStorage.getItem(key);
        if (storageItem) return JSON.parse(storageItem);
        return null;
      }
      return null;
}

export const deleteFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(key);
  }
};