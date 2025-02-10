export interface CruiseLine {
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
  
  export interface Cruise {
    price: number
    name: string
    ship: Ship
    itinerary: string[]
    region: string
    departureDate: string
    returnDate: string
    duration: number
  }
  
  export interface ApiResponse {
    results: Cruise[]
  }