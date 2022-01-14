interface Country {
    id: number
    name: string
    flag: string
    capital: string
  }

  interface Error{msg:string}
  
  type CountryState = {
    countries: Country[],
    error:Error[]
  }

  
  type CountryAction = {
    type: string
    countries: Country,
    error:Error
  }
  
  type DispatchType = (args: CountryAction) => CountryAction