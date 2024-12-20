export function randomIndex<T>(arr: T[]): number {
    return Math.floor((Math.random() * arr.length))
}

export function random<T>(arr: T[]): T {
    return arr[randomIndex(arr)]
}
