var Queries = {
  allServices: function() {
    return `
    SELECT DISTINCT ?service ?title ?description ?authorityName WHERE {
      ?service a <http://purl.org/vocab/cpsv#PublicService>;
        <http://purl.org/dc/terms/title> ?title;
        <http://purl.org/dc/terms/description> ?description;
        <http://data.europa.eu/m8g/hasCompetentAuthority> ?authority.
      ?authority <http://www.w3.org/2004/02/skos/core#prefLabel> ?authorityName.
    
    }
    ORDER BY ?service`
  }
};

export default Queries