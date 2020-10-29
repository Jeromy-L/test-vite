const FUNCTION_CLASS = '[object Function]';
// const BOOLEAN_CLASS = '[object Boolean]';
const NUMBER_CLASS = '[object Number]';
const STRING_CLASS = '[object String]';
const ARRAY_CLASS = '[object Array]';
const OBJECT_CLASS = '[object Object]';
const DATE_CLASS = '[object Date]';

export function extend(destination, source) {
    for (const property in source) {
        if (Object.prototype.hasOwnProperty.call(source, property)) {
            destination[property] = source[property];
        }
    }
    return destination;
}

export function isElement(object) {
    return !!(this && object.nodeType === 1);
}

export function isObject(object) {
    return Object.prototype.toString.call(object) === OBJECT_CLASS;
}

export function isArray(object) {
    return Object.prototype.toString.call(object) === ARRAY_CLASS;
}

export function isFunction(object) {
    return Object.prototype.toString.call(object) === FUNCTION_CLASS;
}

export function isString(object) {
    return Object.prototype.toString.call(object) === STRING_CLASS;
}

export function isNumber(object) {
    return Object.prototype.toString.call(object) === NUMBER_CLASS;
}

export function isDate(object) {
    return Object.prototype.toString.call(object) === DATE_CLASS;
}

export function isUndefined(object) {
    return typeof object === 'undefined';
}

export function clone(o, deep) {
    let target;
    if (deep === true) {
        if (isArray(o)) {
            target = [];
            for (const property in o) {
                if (Object.prototype.hasOwnProperty.call(o, property)) {
                    if (isObject(o[property])) {
                        target.push(clone(o[property], true));
                    } else {
                        target.push(o[property]);
                    }
                }
            }
        } else {
            target = {};
            for (const property in o) {
                if (Object.prototype.hasOwnProperty.call(o, property)) {
                    if (isObject(o[property])) {
                        target[property] = clone(o[property], true);
                    } else {
                        target[property] = o[property];
                    }
                }
            }
        }
        return target;
    }
    return extend({}, o);
}

// 深复制
export function deepClone(obj) {
    if (typeof obj !== 'object') return obj;
    const newObj = obj instanceof Array ? [] : {};
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = deepClone(obj[key]);
        } else {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}

export function param(object, encode) {
    const arr = [];
    for (const prop in object) {
        if (Object.prototype.hasOwnProperty.call(object, prop)) {
            if (encode === true) {
                arr.push([encodeURIComponent(prop), '=', encodeURIComponent(object[prop]), '&'].join(''));
            } else {
                arr.push([prop, '=', object[prop], '&'].join(''));
            }
        }
    }
    return arr.join('').slice(0, -1);
}

export function each(object, fn) {
    if (typeof fn === 'undefined') {
        return;
    }
    for (const prop in object) {
        if (Object.prototype.hasOwnProperty.call(object, prop)) {
            if (fn(object[prop], prop) === false) {
                break;
            }
        }
    }
}

