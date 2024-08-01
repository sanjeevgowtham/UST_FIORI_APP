sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'travel.ust.ab.travelapp',
            componentId: 'TravelObjectPage',
            contextPath: '/Travel'
        },
        CustomPageDefinitions
    );
});