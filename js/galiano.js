/**
 * Created by Galiano on 15/04/2017.
 */


    twttr.widgets.createTimeline(
        {
            sourceType: 'profile',
            screenName: 'UniversidadUNAD'
        },
        document.getElementById('twitter'),
        {
            width: '300',
            height: '400',
            related: 'twitterdev,twitterapi'
        }).then(function (el) {
        console.log('Embedded a timeline.')
    });