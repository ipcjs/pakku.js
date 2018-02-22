(function () {
    console.log('inject hook_array.js')
    const oriPush = Array.prototype.push
    Array.prototype.push = function (item) {
        if (item && item.hasOwnProperty('text') && item.hasOwnProperty('stime') && item.hasOwnProperty('dmid')) {
            console.log('push', item)
            let hasSame = false
            for (let it of this) {
                if (it.text === item.text) {
                    hasSame = true
                    break
                }
            }
            console.log('hasSame', hasSame)
            if (hasSame) {
                return
            }
        }
        oriPush.apply(this, arguments)
    }
}())
