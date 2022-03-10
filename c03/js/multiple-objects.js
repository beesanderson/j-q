// Creating Multiple Objects with Constructor Function

function Hotel(name, rooms, booked) { //note capital letter for Object
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    };
} // no semi colon as it is the end of a code block