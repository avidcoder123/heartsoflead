export const options = {
    // Base path 
    libPath: '../worldmap/', // Point to library folder, e.g. (http[s]:)//myserver.com/map/src/
    // Basic options
    bigMap: false, // Set to 'false' to load small map without provinces
    showOcean: true, // Show or hide ocean layer
    showAntarctica: false, // Show or hide antarctic layer
    showLabels: false, // Show country labels
    showMicroLabels: true, // Show microstate labels
    showMicroStates: true, // Show microstates on map
    showInfoBox: true, // Show info box
    backgroundImage: '', // Background image path
    // Color options
    oceanColor: '#D8EBFF', 
    worldColor: '#FFFFFF', 
    labelFill: { out: '#666666',  over: '#333333',  click: '#000000' }, 
    countryStroke: { out: '#FFFFFF',  over: '#FFFFFF',  click: '#333333' }, 
    countryStrokeWidth: { out: '0.5',  over: '1',  click: '1' }, 
    provinceFill: { out: '#B9B9B9',  over: '#FFFFFF',  click: '#666666' }, 
    provinceStroke: { out: '#FFFFFF',  over: '#FFFFFF',  click: '#666666' }, 
    provinceStrokeWidth: { out: '0.1',  over: '0.5',  click: '0.5' }, 
    // Group options
    groupCountries: false, // Enable or disable country grouping
    groupBy: [ "region" ], // Sort countryData by this value(s) and return to countryGroups
    // Coordinates
    trackCoords: false, // Track map coords, default 'false' due to performance
    // Callback functions from the map to the outside, can have custom names
    mapOut: "mapOut", 
    mapOver: "mapOver", 
    mapClick: "mapClick", 
    mapCoords: "mapCoords", 
    mapTable: "mapTable", // (Custom) callback function for HTML data parsing
    mapDate: "mapDate", // (Custom) callback function for time control date return
    // Time controls
    timeControls: false, // Set to 'true' for time controls
    timePause: true, // Set to 'false' for time animation autostart
    timeLoop: false //  Set to 'true' for time animation loop
};