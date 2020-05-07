

export class Utils {

    static copyObj(obj:any){
        return JSON.parse(JSON.stringify(obj));
    }


    static mergeObj(...obj: any[]): any {
        let retunObj = {};
        obj.forEach((value: any, index: number) => {
            for (let item in value) {
                // @ts-ignore
                retunObj[item] = this.copyObj(value[item]);
            }
        });
        return retunObj;
    }

}
