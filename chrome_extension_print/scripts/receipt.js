$(document).ready(() => {
    chrome.storage.local.get(['purchaseStorageKey'], (result) => {

        var purchaseData = JSON.parse(result['purchaseStorageKey'])[0]

        if (purchaseData) {

            $('#pname').text($('#pname').text() + purchaseData.name)
            $('#pprice').text($('#pprice').text() + purchaseData.price)

            console.log("purchase data get")
            // console.log(purchaseData.name)
        }

    })

    chrome.storage.local.get(['subscriptionStorageKey'], (result) => {

        var subscriptionData = JSON.parse(result['subscriptionStorageKey'])

        var items = []

        subscriptionData.forEach((item) => {
            items.push(`<tr><td>${item.name}</td><td>${(item.id)[0]}</td></tr>`)
        })

        $('table#subscriptionlist').append(items.join(''))

        console.log("subscription data get")

    })

    chrome.storage.local.get(['settingStorageKey'], (result) => {

        var settingData = JSON.parse(result['settingStorageKey'])

        var items = []

        Object.keys(settingData).forEach((key) => {
            items.push(`<tr><td>${key}</td><td>${settingData[key]}</td></tr>`)
        })

        $('table#settinglist').append(items.join(''))

        console.log("setting data get")
        console.log(JSON.parse(result['settingStorageKey']))

    })

    chrome.storage.local.get(['adsStorageKey'], (result) => {

        var adsData = JSON.parse(result['adsStorageKey'])

        var items = []

        Object.keys(adsData).forEach((key) => {
            items.push(`<tr><td>${adsData[key]}</td></tr>`)
        })

        $('table#adslist').append(items.join(''))

        console.log("ads data get")

    })
})