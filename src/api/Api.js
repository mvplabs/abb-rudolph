import data from '../data/services.json';
let SERVICES = []

function getServices() {
  if(SERVICES.length === 0) {
    SERVICES = data.slice(0, 20)
  }

  return SERVICES
}

export { getServices }