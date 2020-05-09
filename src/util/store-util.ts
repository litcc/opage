export default class StoreUtil {

/*

    // 当前程序对象编码为字符串
    public static encode(obj: any): string | null {
        try {
            return this.otoa(obj);
            // return encodeURIComponent(JSON.stringify(obj));
            //return JSON.stringify(obj);
        } catch (e) {
            console.error('encode()编码出错');
            return null;
        }
    }

    // 当前程序将字符串还原为对象
    public static decode(str: string): any {
        try {
            return this.atoo(str);
            // return JSON.parse(decodeURIComponent(str));
            //return JSON.parse(str);
        } catch (e) {
            console.error('decode()解码出错');
            return null;
        }
    }


    public static getValue(key: string): any {
        try {
            const data = localStorage.getItem(key);
            if (data === undefined || data === null || data === '') {
                return null;
            } else {
                return this.decode(data);
            }
        } catch (e) {
            console.error('getValue()取值错误');
            return null;
        }
    }

    public static setValue(key: string, value: any): void {
        try {
            const data = this.encode(value);
            if (data == null) {
                throw new Error('编码错误');
            }
            localStorage.setItem(key, data);
        } catch (e) {
            console.error('setValue()设值错误');
        }
    }

    public static removeValue(key: string): void {
        localStorage.removeItem(key);
    }

    public static clearValues() {
        localStorage.clear();
    }


    public static getSessionValue(key: string): any {
        try {
            const data = sessionStorage.getItem(key);
            if (data === undefined || data === null || data === '') {
                return null;
            } else {
                return this.decode(data);
            }
        } catch (e) {
            console.error('getValue()取值错误');
            return null;
        }
    }

    public static setSessionValue(key: string, value: any): void {
        try {
            const data = this.encode(value);
            if (data == null) {
                throw new Error('编码错误');
            }
            sessionStorage.setItem(key, data);
        } catch (e) {
            console.error('setValue()设值错误');
        }
    }

    public static removeSessionValue(key: string): void {
        sessionStorage.removeItem(key);
    }

    public static clearSessionValues() {
        sessionStorage.clear();
    }


    // 字符串 => BASE64字符串
    public static utoa(str: string): string {
        return Base64.encode(unescape(encodeURIComponent(str)));
    }

    // BASE64字符串 => 字符串
    public static atou(str: string): string | null {
        try {
            return decodeURIComponent(escape(Base64.decode(str)));
        } catch (e) {
            console.error('StoreUtil.atoo => 解码失败');
            return null;
        }
    }

    // 对象 => BASE64字符串
    public static otoa(str: any): string {
        return Base64.encode(unescape(encodeURIComponent(JSON.stringify(str))));
    }

    // BASE64字符串 => 对象
    public static atoo(str: string): any {
        try {
            return JSON.parse(decodeURIComponent(escape(Base64.decode(str))));
        } catch (e) {
            console.error('StoreUtil.atoo => 解码失败');
            return null;
        }
    }
*/


}
