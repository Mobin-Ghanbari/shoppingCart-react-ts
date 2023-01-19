const CURRENCY_FORMATED = new Intl.NumberFormat(undefined, {
    currency:"USD", style: "currency"
})

export function formatCurrency(number:number) {
    return CURRENCY_FORMATED.format(number)
}