var respecConfig = {
    specStatus: "ED",
    shortName: "qb4st",
    //publishDate:  "2015-05-18",
    //previousPublishDate: "2014-03-27",
    //previousMaturity: "FPWD",
    //previousURI: "",
    edDraftURI: "http://w3c.github.io/sdw/qb4st/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Rob Atkinson",
      company: "Metalinkage, Open Geospatial Consortium",
      companyURL: "http://www.opengeospatial.org/"
    }],
    otherLinks: [
    {
      key: "OGC Document Number",
      data: [
      {
        value: "OGC 16-142"
      }]
      }],
    wg: "Spatial Data on the Web Working Group",
    wgURI: "https://www.w3.org/2015/spatial/",
    wgPublicList: "public-sdw-comments",
    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/75471/status",
    inlineCSS: true,
    noIDLIn: true,
    noLegacyStyle: false,
      logos: [
      {
        src: "https://www.w3.org/StyleSheets/TR/2016/logos/W3C",
        alt: "W3C",
        height: "48",
        width: "72",
        url: "https://www.w3.org/"
      },
      {
        src: "https://www.w3.org/2017/01/ogc_logo.png",
        alt: "OGC",
        height: "68",
        width: "147",
        url: "http://www.opengeospatial.org/"
      }
      ],
    noRecTrack: true,
    overrideCopyright: "<p class='copyright'><a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2020 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='https://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='https://www.keio.ac.jp/'>Keio</a>, <a href='https://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a>, <a href='https://www.w3.org/Consortium/Legal/copyright-documents'>W3C</a> and <a href='https://www.ogc.org/ogc/document'>OGC</a> document use rules apply.</p>",

    localBiblio: {

	    "W3C-BASIC-GEO": {
         href:"https://www.w3.org/2003/01/geo/",
         title:"Basic Geo (WGS84 lat/long) Vocabulary",
         authors:["Dan Brickley"],
         publisher:"W3C Semantic Web Interest Group",
         date:"1 February 2006"
        },
        "NeoGeo": {
          href:"http://geovocab.org/doc/neogeo/",
          title:"NeoGeo Vocabulary Specification",
          date: "5 February 2012 (Madrid Edition)",
          authors:["Barry Norton", "Luis M. Vilches", "Alexander De León", "John Goodwin", "Claus Stadler", "Suchith Anand", "Dominic Harries", "Boris Villazón-Terrazas", "Ghislain A. Atemezing"]
        },
      "GeoSPARQL":{
        href:"http://www.opengeospatial.org/standards/geosparql",
        title:"GeoSPARQL - A Geographic Query Language for RDF Data",
        authors: ["Matthew Perry", "John Herring"],
        date: "10 September 2012"
      },
      "SDMX":{
         title:"Statistical Data and Metadata eXchange",
         href:"https://sdmx.org/",
         date: "2013"
      },
        "ISO-19123": {
         href:"http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=40121",
         title:"ISO 19123:2005 Geographic information -- Schema for coverage geometry and functions",
         authors:["ISO/TC 211"],
         publisher:"ISO",
         date:"15 August 2005"
        },
        "SCOVO": {
          href: "http://sw.joanneum.at/scovo/schema.html",
          title:"The Statistical Core Vocabulary",
        },
		"XKOS": {
          href: "http://www.ddialliance.org/Specification/XKOS/1.0/OWL/xkos.html",
          title:"XKOS - An SKOS extension for representing statistical classifications",
		  publisher:"DDAlliance",
          status:"Working Draft",
		  date:"1 January 2017"
        },
	    "QB4OLAP": {
          href: "https://lorenae.github.io/qb4olap/",
          title:"QB4OLAP  - Business Intelligence over Linked Data",
          authors:["Lorena Etcheverry"],
          status:"Paper",
		  date:"2 April 2016"
        },
		
        "vocab-qb4st": {
          href:"https://www.w3.org/TR/vocab-qb4st/",
          title:"QB4ST: RDF Data Cube extensions for spatio-temporal components",
          date: "5 January 2017",
          authors:["Rob Atkinson"],
          publisher:"W3C/OGC",
          status:"W3C/OGC Working Draft"
        },
        "FOAF": {
          authors:["Dan Brickley", "Libby Miller"],
          url:"http://xmlns.com/foaf/spec/",
          title:"FOAF Vocabulary Specification, 0.99 Paddington Edition",
          date:"14 January 2014."
        },
         "HAUS09": {
         authors: ["Michael Hausenblas", "Wolfgang Halb", "Yves Raimond", "Lee Feigenbaum", "Danny Ayers"],
         url: "http://mhausenblas.info/pubs/eswc09-inuse-scovo.pdf",
         title: "SCOVO: Using Statistics on the Web of Data",
         date: "2009"
        },
    },
    issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
