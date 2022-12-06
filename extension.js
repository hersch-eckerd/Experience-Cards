module.exports = {
    "name": "Jitbit",
    "publisher": "Colton Herschberger - Eckerd College",
    "cards": [{
        "type": "JitbitCard",
        "source": "./src/cards/JitbitCard",
        "title": "Jitbit Card",
        "displayCardType": "Jitbit Card",
        "description": "This is an introductory card to the Ellucian Experience SDK",
        "pageRoute": {
            "route": "/",
            "excludeClickSelectors": ['*']
        }
    }],
    "page": {
        "source": "./src/page/router.jsx"
    }
}