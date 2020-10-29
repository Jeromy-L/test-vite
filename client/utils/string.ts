import XLSX from 'xlsx';
import {isUndefined} from './object';

// import app from '../entry-client'

// 解析 url 获得 query obj
export const urlQuery = (url: String) => {
    if (!url) return '';
    const obj = {} as any;
    const index = url.indexOf('?');
    if (index > -1) {
        const right = url.substr(index + 1);
        const queryArr = right.split('&');
        queryArr.forEach(i => {
            const [key, value] = i.split('=');
            obj[key] = value;
        });
        return obj;
    } else {
        return '';
    }
};

// 字符串替换，支持{}和[]
/**
 * 字符占位替换
 * @method String.prototype.format
 * @example
 * "{name} {age}".format({name:"sy",age:18})="sy 18"
 */
export const format = (str, o) => str.replace(/\{(\w+)\}/g, ($1, $2) => (o[$2] !== undefined ? o[$2] : $1));

// 获取字符串长度，区分中文占2个字符
/**
 * 去字符串长度 区分中英文 中文算2个字长
 * @method String.prototype.len
 * @example
 * "中国".len()==4
 */
export const len = str => str.replace(/[^\x00-\xff]/g, '**').length;

export const truncate = (str, _length, _truncation) => {
    const length = _length || 30;
    const truncation = isUndefined(_truncation) ? '...' : _truncation;
    return str.length > length
        ? str.slice(0, length - truncation.length) + truncation
        : String(str);
};

/**
 * 字符串头尾去空行
 * @method String.prototype.trim
 * @param  {Boolean} isLeft true去左空行 false去右空行 默认去左右空行
 */
export const trim = (str, isLeft) => {
    if (isLeft === true) {
        return str.replace(/^\s+/, '');
    } else if (isLeft === false) {
        return str.replace(/\s+$/, '');
    }
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
};

// var htmlDiv = document.createElement("div");
/**
 * html转义  &amp; = &  &lt; = <  ...
 * @method String.prototype.html
 * @param  {boolean} escape true普通字符转转义符 false转义符转普通字符
 * @example
 * "&<>".html()==="&amp;&lt;&gt;"
 * "&amp;&lt;&gt;".html(false)==="&<>"
 */
export const html = (str, escape) => {
    // var ar=['&','&amp;','<','&lt;','>','&gt;',' ','&nbsp;','"','&quot;',"'",'&#39;','\\r','<br>','\\n','<br>'];
    const ar = [
        '&',
        '&amp;',
        '<',
        '&lt;',
        '>',
        '&gt;',
        ' ',
        '&nbsp;',
        '"',
        '&quot;',
        "'",
        '&#39;'
    ];
    if (escape === false) {
        ar.reverse();
    }
    let r = str;
    for (let i = 0; i < ar.length; i += 2) {
        r = r.replace(new RegExp(ar[i], 'g'), ar[1 + i]);
    }
    return r;
};

export const has = (str, pattern) => str.indexOf(pattern) > -1;

/**
 * 判断是否以pattern开头
 * @method String.prototype.startsWith
 * @param  {string} pattern
 */
export const startsWith = (str, pattern) => str.lastIndexOf(pattern, 0) === 0;

/**
 * 判断是否以pattern结尾
 * @method String.prototype.endsWith
 * @param  {string} pattern
 */
export const endsWith = (str, pattern) => {
    const d = str.length - pattern.length;
    return d >= 0 && str.indexOf(pattern, d) === d;
};

export const empty = str => str === '';

export const text = str => str.replace(/<\/?[^>]*\/?>/g, '');

export const blank = str => /^\s*$/.test(str);

/**
 * 占位替换
 * @method sprintf
 * @method String.prototype.sprintf
 * @example
 * "my name is %s  %s".sprintf("a","b")  =》"my name is a  b"
 */
export const sprintf = (...args) => {
    let i;
    let result = args[0] || '';
    let para;
    let reg;
    const length = args.length - 1;

    if (length < 1) {
        return result;
    }

    i = 1;
    while (i < length + 1) {
        result = result.replace(/%s/, '{#' + i + '#}');
        i++;
    }
    result.replace('%s', '');

    i = 1;
    while (true) {
        para = args[i];
        if (para === undefined) {
            // 0 也是可能的替换数字
            break;
        }
        reg = new RegExp('{#' + i + '#}', 'g');
        result = result.replace(reg, para);
        i++;
    }
    return result;
};

export const bytes = str => {
    let i = 0;
    let char;
    let l = 0;
    const TRUE = true;

    while (TRUE) {
        char = str.charAt(i++);
        if (!char) {
            break;
        }
        l += char.charCodeAt().toString(16).length / 2;
    }
    return l;
};
const getToken = () => {
    if (/token=([^&|$]+)/.test(location.href)) {
        return RegExp.$1;
    }
    return '';
};
export const addToken = (url, token: any = '') => {
    if (!token) {
        token = getToken();
    }
    if (url.indexOf('?') == -1) url += '?';

    const len = url.length;
    if (url[len - 1] !== '&' && url[len - 1] !== '?') url += '&';
    url = url.replace('/wxamp', '/livemp');
    return url + `token=${token}&lang=zh_CN`;
};

/**
 * 数据带千位分隔符
 * @param value 输入的数值
 * @param fixed 期望固定几位小数。-1 不处理
 */
export const formatNumberWithComma = (value, fixed) => {
    if (isNaN(value)) return value;

    const str = String(value);
    const idx = str.indexOf('.');
    if (idx == -1) {
    // 没有小数情况
        return str.replace(/(?=(\B\d{3})+$)/g, ',');
    } else {
    // 有小数情况
        let intStr = str.substr(0, idx);
        intStr = intStr.replace(/(?=(\B\d{3})+$)/g, ',');

        const pointStr = str.substr(idx + 1);
        if (fixed == -1) return intStr + '.' + pointStr;
        else if (fixed == 0) return intStr;
        else return intStr + '.' + pointStr.substr(0, fixed);
    }
};

/**
 * 获取一个区间范围 合适的数值单位： 千、万、千万、亿
 * @param max 范围最大值
 * @param min 范围最小值
 */
export const getRangeUnit = (max, min) => {
    max = Number(max);
    min = Number(min);
    // 最小值大于 1亿
    if (min >= 100000000) return '亿';
    // 最小值大于 1千万
    if (min >= 100000000) return '千万';
    // 最小值大于 1万
    if (min >= 10000) return '万';
    // 最小值大于 1千
    if (min >= 1000) return '千';

    if (max <= 2000) return '';
    if (max <= 20000) return '千';
    if (max <= 20000000) return '万';
    if (max <= 200000000) return '千万';
    return '亿';
};

/**
 * 格式化数字， 用于处理Y轴数值
 * @param value 需要格式化的数字  123
 * @param outputUnit 期待的单位 k  -> 0.123k
 * @param fixed 固定几位小数 2 -> 0.12k
 */
export const formatNumberWithUnit = (value, outputUnit, fixed) => {
    // 1. 判断是否是数字，不是原物返回
    if (isNaN(value)) return value;
    if (fixed == undefined) fixed = 0;
    value = Number(value);

    if (outputUnit == undefined || outputUnit == '') return Number(value.toFixed(fixed));

    if (outputUnit == '千') {
        value = (value / 1000).toFixed(fixed);
        return Number(value) + outputUnit;
    }
    if (outputUnit == '万') {
        value = (value / 10000).toFixed(fixed);
        return Number(value) + outputUnit;
    }

    if (outputUnit == '千万') {
        value = (value / 10000000).toFixed(fixed);
        return Number(value) + outputUnit;
    }
    if (outputUnit == '亿') {
        value = (value / 100000000).toFixed(fixed);
        return Number(value) + outputUnit;
    }
    return value;
};

/**
 * 处理 url += '&key=value'
 * @param postData: {key: value}
 */
export const postDataToString = postData => {
    const params = [];
    Object.keys(postData).forEach(key => {
        let value = postData[key];
        // 如果值为undefined我们将其置空
        if (typeof value === 'undefined') {
            value = '';
        }
        // 对于需要编码的文本（比如说中文）我们要进行编码
        params.push([key, encodeURIComponent(value)].join('='));
    });
    return params.join('&');
};

/**
 * 字符串转字符流
 * @param str
 */
export const stringToBuff = str => {
    const buf = new ArrayBuffer(str.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== str.length; ++i) {
        view[i] = str.charCodeAt(i) & 0xff;
    }
    return buf;
};

/**
 * @param dataList 表格数据内容  array
 * @param fileName 文件标题。必须以 .xlsx结尾
 */
export const downloadXlsx = (dataList, fileName) => {
    

    // 创建表格
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(dataList);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'sheet1');

    // 创建二进制对象写入转换好的字节流
    const xlsxBlob = new Blob(
        [
            stringToBuff(
                XLSX.write(workbook, {
                    bookType: 'xlsx',
                    bookSST: false,
                    type: 'binary'
                })
            )
        ],
        {type: ''}
    );

    const a = document.createElement('a');
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    a.href = URL.createObjectURL(xlsxBlob); // 创建对象超链接
    a.download = fileName;
    a.click();
};
