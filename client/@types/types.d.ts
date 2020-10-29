import Vue from 'vue';

declare module 'vue/types/vue' {
    // 可以使用 `IVueConstructor` 接口
    // 来声明全局属性
    interface IVueConstructor {
        asyncData: () => void;
    }
}

interface IAsyncDataParam {
    store: any;
    route: any;
    routeFrom: any;
}

interface IClientDataParam {
    store: any;
    route: any;
    routeFrom: any;
}

interface IKeyMap {
    name?: string;
    content?: string;
}

interface IHeadParam {
    title?: string;
    meta?: IKeyMap[];
}
interface ITipsOption {
    suc: (msg: string) => void;
    err: (msg: string) => void;
}

// ComponentOptions 声明于 types/options.d.ts 之中
declare module 'vue/types/options' {
    /* tslint:disable */
    interface ComponentOptions<V extends Vue> {
        asyncData?: (param: IAsyncDataParam) => Promise<any>;
        clientData?: (param: IClientDataParam) => Promise<any>;
        head?: () => IHeadParam;
        $tips?: ITipsOption;
    }
    /* tslint:enable */
}


declare global {
    /* tslint:disable */
    interface Window {
        nekot: string;
        __INITIAL_STATE__: any;
        app: any;
    }
    /* tslint:enable */
}
