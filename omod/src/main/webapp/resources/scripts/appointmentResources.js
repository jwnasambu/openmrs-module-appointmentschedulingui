
// registers angular resources that can be used to retrieve appointment scheduling domain objects via REST

var appointmentResource = angular.module('appointmentscheduling.appointmentResources', ['ngResource']);

appointmentResource.factory('AppointmentType', function($resource) {
    return $resource("/" + OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/appointmentscheduling/appointmenttype/:uuid", {
        'uuid' : '@uuid'
    },{
            query: { method:'GET' }     // override query method to specify that it isn't an array that is returned
    });
});

appointmentResource.factory('TimeSlot', function($resource) {
    return $resource("/" + OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/appointmentscheduling/timeslot/:uuid", {
        'uuid' : '@uuid'
    },{
        query: { method:'GET' }     // override query method to specify that it isn't an array that is returned
    });
});

appointmentResource.factory('Appointment', function($resource) {
    return $resource("/" + OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/appointmentscheduling/appointment/:uuid", {
        'uuid' : '@uuid'
    },{
        query: { method:'GET' }     // override query method to specify that it isn't an array that is returned
    });
});

appointmentResource.factory('AppointmentBlock', function($resource) {
    // note that we are using the appointmentblockwithtimeslot resource to keep the timeslot in sync with the appointment block
    return $resource("/" + OPENMRS_CONTEXT_PATH  + "/ws/rest/v1/appointmentscheduling/appointmentblockwithtimeslot/:uuid", {
        'uuid' : '@uuid'
    },{
        query: { method:'GET' }     // override query method to specify that it isn't an array that is returned
    });
});