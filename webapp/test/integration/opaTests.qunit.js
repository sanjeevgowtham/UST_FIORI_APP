sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travel/ust/ab/travelapp/test/integration/FirstJourney',
		'travel/ust/ab/travelapp/test/integration/pages/TravelList',
		'travel/ust/ab/travelapp/test/integration/pages/TravelObjectPage',
		'travel/ust/ab/travelapp/test/integration/pages/BookingObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage, BookingObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travel/ust/ab/travelapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage,
					onTheBookingObjectPage: BookingObjectPage
                }
            },
            opaJourney.run
        );
    }
);