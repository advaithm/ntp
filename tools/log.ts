const drivers: any = {
    CACHE_DRIVER: "Cache"
}

export const log = (driver: any, ...data: any[]) => {
    if(!drivers[driver]) console.log(`Driver not found: ${driver}`)

    console.log(`[${drivers[driver]}]`, ...data)
}