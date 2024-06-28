const VIEW_FORMATER = Intl.NumberFormat(undefined,{
    notation:"compact"
})

export default function ViewsFormater(view:number) {

    return VIEW_FORMATER.format(view)

}