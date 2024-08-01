sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'travel.ust.ab.travelapp',
            componentId: 'TravelList',
            contextPath: '/Travel'
        },
        CustomPageDefinitions
    );
});