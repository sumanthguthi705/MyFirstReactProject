export function isvalidEmail(email)
{
    var eregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return eregex.test(email)
}