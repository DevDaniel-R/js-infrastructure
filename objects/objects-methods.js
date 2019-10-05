let resturant = {
  name: 'ASA',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    if (partySize <= seatsLeft){
    return `Your party of ${partySize} is available for seating`
    } else {
      return `Your party of ${partySize} is on the waitlist until we have availability`
    }
    // used this in method if else return partySize <= seatsLeft
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function (partySize) {
  this.guestCount = this.guestCount - partySize
  },
  //need to find out how to call in console.  only showing function: managerCheck  displaying function
  //figured it out had to jsut simple subtract from object resturant and use this binding  scoping is cool
  managerCheck: function (seatsRemaining) {
    seatsRemaining = this.guestCapacity - this.guestCount 
    console.log(`The resturant has a capacity of ${this.guestCapacity}, and there are currently ${this.guestCount} in your resturant! We have an availability of ${seatsRemaining} seats`)
  }
}


resturant.seatParty(5)
console.log(resturant.checkAvailability(4))
resturant.removeParty(1)
console.log(resturant.checkAvailability(4))
resturant.managerCheck()
