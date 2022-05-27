const add = (a: number, b: number): number => {
  return a + b;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}

const throwError = (message: string): never => {
  throw new Error(message); 
  // when you throw an error, technically the function will never return anything
  // massive edge case
  // only annotate the function with 'never' if we never expect it to return anything, if theres a chance of returning anything else, then annotate it as returning that thing
}


// destructuring:
const forecast = {
  date: new Date(),
  weather: 'sunny'
}; 

// before:
const logWeather = (forecast: { date: Date, weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//after:
const logWeather2 = ({ date, weather }: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
}; 

logWeather(forecast);

