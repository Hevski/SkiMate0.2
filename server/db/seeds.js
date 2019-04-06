use ski_info_db;
db.dropDatabase();

db.skiInfo.insertMany([
  {
    Country: "Switzerland",
    Resort: "Verbier",
    picture: "https://www.telegraph.co.uk/content/dam/Travel/ski/Resorts/verbier-lead-xlarge.jpg",
    pisteMap: "https://s3.onthesnow.com/images/trailmaps/4-valleys/verbier/20121107055040/xlarge.jpg"
  },
  {
    Country: "Austria",
    Resort: "Mayerhofen",
    picture: "https://d2ysej9jnfdoyq.cloudfront.net/ImageGen.ashx?image=/media/13052093/austria_mayrhofen.jpg&width=833&Height=450&allowupsizing=true&format=jpg",
    pisteMap: "https://vcdn.bergfex.at/images/downsized/0b/c768150a5bbac20b_83feaed759835f5a@2x.jpg"
  },
  {
    Country: "Scotland",
    Resort: "Cairngorms",
    picture: "https://discoverglencoe.scot/wp-content/uploads/2014/11/2015-January-Winter-Conor-Small-Glenoe-Mountain-Skiing.jpg",
    pisteMap: "https://cdn.j2ski.com/piste_maps/pm926/GB_S/Glencoe_Piste_Map.jpg"
  },
  {
    Country: "Switzerland",
    Resort: "Zermatt",
    picture: "https://discoverglencoe.scot/wp-content/uploads/2014/11/2015-January-Winter-Conor-Small-Glenoe-Mountain-Skiing.jpg",
    pisteMap: "https://cdn.j2ski.com/piste_maps/pm926/GB_S/Glencoe_Piste_Map.jpg"
  },
  {
    Country: "France",
    Resort: "Valmorel",
    picture: "https://discoverglencoe.scot/wp-content/uploads/2014/11/2015-January-Winter-Conor-Small-Glenoe-Mountain-Skiing.jpg",
    pisteMap: "https://cdn.j2ski.com/piste_maps/pm926/GB_S/Glencoe_Piste_Map.jpg"
  },
  {
    Country: "Scotland",
    Resort: "Glen Shee",
    picture: "https://discoverglencoe.scot/wp-content/uploads/2014/11/2015-January-Winter-Conor-Small-Glenoe-Mountain-Skiing.jpg",
    pisteMap: "https://cdn.j2ski.com/piste_maps/pm926/GB_S/Glencoe_Piste_Map.jpg"
  }
])
