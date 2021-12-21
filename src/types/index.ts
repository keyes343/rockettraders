
 import * as home from './T_Home';
 import * as box from './T_Box';

 export {home,box};

export const hasKey = <O>(obj: O, key: keyof any): key is keyof O => {
    return key in obj;
};

export type Axios<T> = {
    data: T | null | undefined;
    status: number;
} | null;
 
