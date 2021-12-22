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
  },

  postService: function(parentService, serviceId, costId, costValue) {
    return `
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>

    INSERT DATA {
      GRAPH <http://mu.semte.ch/graphs/public> {
    
       <http://mortsel.be/id/${serviceId}> a <http://purl.org/vocab/cpsv#PublicService>;
        <http://purl.org/dc/terms/description>"""${parentService.description} """;
        <http://purl.org/dc/terms/title>"""${parentService.title}""";
        <http://data.europa.eu/m8g/hasCompetentAuthority> <http://data.lblod.info/id/bestuurseenheden/644341a5338a39472f7d096f3c1619ca0e8325a560f681f58896fa843cb17d2c>;
        <http://purl.org/dc/terms/requires> <http://data.lblod.info/id/${parentService.id}>;
        <http://data.europa.eu/m8g/hasCost> <http://data.lblod.info/id/${costId}>.
    
        
    
        <http://mortsel.be/id/${costId}> a <https://belgif.github.io/thematic/models/public%20services/index_en.html#Cost>;
          <https://data.europa.eu/m8g/description>"""Cost for the service""";
          <https://data.europa.eu/m8g/value>"${costValue}"^^<http://www.w3.org/2001/XMLSchema#double>.
      }
    }
    `
  }
};

export default Queries