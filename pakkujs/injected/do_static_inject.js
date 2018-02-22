(function () {
    console.log('inject do_static_inject.js')

    if (document.head) {
        let $script = document.createElement('script')
        $script.src = chrome.runtime.getURL('injected/hook_array.js')
        document.head.appendChild($script)
    }

}())

