interface CruiseLine {
    logo: string
    name: string
  }
  
  interface Ship {
    name: string
    rating: number
    reviews: number
    image: string
    line: CruiseLine
  }
  
  interface Cruise {
    price: number
    name: string
    ship: Ship
    itinerary: string[]
    region: string
    departureDate: string
    returnDate: string
    duration: number
  }
  
  interface ApiResponse {
    results: Cruise[]
  }