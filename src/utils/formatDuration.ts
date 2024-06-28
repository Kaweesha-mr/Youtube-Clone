
const LEADING_ZERO_FORMATER = new Intl.NumberFormat(undefined,{minimumIntegerDigits:2})

export default function formatDuration(duration:number) {

    const hours = Math.floor(duration / 60/60)
    const minutues  = Math.floor((duration-hours *60*60)/60)

    const seconds = duration % 60

    if(hours > 0){
        return `${hours}:${LEADING_ZERO_FORMATER.format(minutues)}:${LEADING_ZERO_FORMATER.format(seconds)}`

    }
    return  `${minutues}:${LEADING_ZERO_FORMATER.format(seconds)}`
}
