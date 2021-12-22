import data from '../data/services.json';
import axios from "axios";
import Queries from "./Queries";

export const SPARQL_URL = "https://rudolph.xmas-hackaton-2021.s.redpencil.io/sparql"

const config = {
  headers: {
    "Accept": "application/sparql-results+json"
  }
}

let QueryManager = {
  getServices: async () => {
      let response = await axios.post(
          SPARQL_URL, `query=${encodeURIComponent(Queries.allServices())}`, config
      )/**/
      let services = response.data.results.bindings.map((s) => {
          return {id: s.service.value, title: s.title.value, description: s.description.value, authority: s.authorityName.value}
      })
      return services
  },
  postService: async (parentService, serviceId, costId, costValue) => {
      let response = await axios.post(
          SPARQL_URL, `query=${encodeURIComponent(Queries.postService(parentService, serviceId, costId, costValue))}`, config
      )/**/
      return response.data
  }
}

export { QueryManager }