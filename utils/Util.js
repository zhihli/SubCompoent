export function isArray(arg) {
    return Array.isArray(arg)
}
export function isString(arg) {
    return Object.prototype.toString.call(arg) === '[object String]'
}

export function isNumber(arg) {
    return Object.prototype.toString.call(arg) === '[object Number]'
}