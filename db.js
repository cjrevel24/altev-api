// USERS TABLE
const users = [];

//OLX LISTS
const olxLists = [
  {
    id: 1,
    item_title: "Nike slide mismatch",
    item_price: 1000,
    item_size: "EU 44 / UK 19 / US 11",
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/10/nike_slide_mismatch_1649578419_93d8a95b_progressive_thumbnail.jpg",
    item_category: "footwear",
    item_ratings: 0,
  },
  {
    id: 2,
    item_title: "Nike slides",
    item_price: 850,
    item_size: "EU 40 / UK 6 / US 7",
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/10/nike_slides_1649605197_3e4ab074_progressive_thumbnail.jpg",
    item_category: "footwear",
    item_ratings: 0,
  },
  {
    id: 3,
    item_title: "Nike Victori One Shower Slides",
    item_price: 900,
    item_size: "EU 40 / UK 6 / US 7",
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/9/nike_victori_one_shower_slides_1649547513_2a2ad878_progressive_thumbnail.jpg",
    item_category: "footwear",
    item_ratings: 1,
  },
  {
    id: 4,
    item_title: "Zara",
    item_price: 400,
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/10/nike_slides_1649605197_3e4ab074_progressive_thumbnail.jpg",
    item_category: "clothing",
    item_ratings: 5,
  },
  {
    id: 5,
    item_title: "Brandnew Zara limited edition",
    item_price: 1000,
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/10/brandnew_zara_limited_edition__1649585915_962ec3d4_progressive_thumbnail.jpg",
    item_category: "clothing",
    item_ratings: 1,
  },
  {
    id: 6,
    item_title: "Zara green sleeveless",
    item_price: 340,
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/10/zara_green_sleeveless_cut_out__1649595907_07ccab4c_progressive_thumbnail.jpg",
    item_category: "clothing",
    item_ratings: 5,
  },
  {
    id: 7,
    item_title: "Iphone XR 128gb HK Variant",
    item_price: 15000,
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/12/iphone_xr_128gb_hk_variant_1649765803_f55c069b_progressive_thumbnail.jpg",
    item_category: "gadgets",
    item_ratings: 0,
  },
  {
    id: 8,
    item_title: "Iphone 13 Pro 128gb",
    item_price: 60000,
    item_image:
      "https://media.karousell.com/media/photos/products/2022/4/12/iphone_13_pro_128gb_1649765796_a259fac1_progressive_thumbnail.jpg",
    item_category: "gadgets",
    item_ratings: 0,
  },
  {
    id: 9,
    item_title: "Go Pro Hero 5 Black edition",
    item_price: 8500,
    item_image:
      "https://media.karousell.com/media/photos/products/2020/11/28/go_pro_hero_5_black_edition_1606525144_0d42134e_progressive_thumbnail.jpg",
    item_category: "gadgets",
    item_ratings: 115,
  },
  {
    id: 10,
    item_title: "Toyota Vios 1.5 G A/T Auto",
    item_model: 2007,
    item_price: 229000,
    item_image:
      "https://media.karousell.com/media/photos/products/2022/3/22/toyota_vios_15g_at_auto_1647951116_553abe88_progressive",
    item_category: "cars",
    item_ratings: 12,
  },
  {
    id: 11,
    item_title: "Toyota Vios 1.3 XE Auto",
    item_model: 2018,
    item_price: 598000,
    item_image:
      "https://media.karousell.com/media/photos/products/2022/3/11/2021_toyota_vios_13_xe_auto_1646970647_a88f62cd_progressive.jpg",
    item_category: "cars",
    item_ratings: 7,
  },
  {
    id: 12,
    item_title: "Toyota Vios 1.3 E Manual",
    item_model: 2019,
    item_price: 447000,
    item_image:
      "https://media.karousell.com/media/photos/products/2021/12/13/2019_toyota_vios_13_e_blackish_1639354832_9ba08f70_progressive.jpg",
    item_category: "cars",
    item_ratings: 6,
  },
];

//CEBU TICKET LISTS
const cebuTickets = [
  {
    id: 1,
    origin: "Manila",
    destination: "Cebu",
    dateFrom: "18/04/2022",
    dateTo: "19/04/2022",
    depart_time: "8:00 AM",
    arrive_time: "9:00 AM",
    travel_duration: "1hr 30m",
    ticketPrice: 5000,
  },
  {
    id: 2,
    origin: "Manila",
    destination: "Cebu",
    dateFrom: "18/04/2022",
    dateTo: "19/04/2022",
    depart_time: "9:00 AM",
    arrive_time: "10:00 AM",
    travel_duration: "1hr 30m",
    ticketPrice: 8000,
  },
  {
    id: 3,
    origin: "Manila",
    destination: "Cebu",
    dateFrom: "18/04/2022",
    dateTo: "19/04/2022",
    depart_time: "11:00 AM",
    arrive_time: "12:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 10000,
  },
  {
    id: 4,
    origin: "Cebu",
    destination: "Manila",
    dateFrom: "20/04/2022",
    dateTo: "21/04/2022",
    depart_time: "9:00 AM",
    arrive_time: "10:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 4000,
  },
  {
    id: 5,
    origin: "Cebu",
    destination: "Manila",
    dateFrom: "20/04/2022",
    dateTo: "21/04/2022",
    depart_time: "10:00 AM",
    arrive_time: "11:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 6000,
  },
  {
    id: 6,
    origin: "Cebu",
    destination: "Manila",
    dateFrom: "20/04/2022",
    dateTo: "21/04/2022",
    depart_time: "11:00 AM",
    arrive_time: "12:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 8000,
  },
  {
    id: 7,
    origin: "Manila",
    destination: "Boracay",
    dateFrom: "21/04/2022",
    dateTo: "22/04/2022",
    depart_time: "9:00 AM",
    arrive_time: "10:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 4000,
  },
  {
    id: 8,
    origin: "Manila",
    destination: "Boracay",
    dateFrom: "21/04/2022",
    dateTo: "22/04/2022",
    depart_time: "10:00 AM",
    arrive_time: "11:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 6000,
  },
  {
    id: 9,
    origin: "Manila",
    destination: "Boracay",
    dateFrom: "21/04/2022",
    dateTo: "22/04/2022",
    depart_time: "11:00 AM",
    arrive_time: "12:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 8000,
  },
  {
    id: 10,
    origin: "Boracay",
    destination: "Manila",
    dateFrom: "22/04/2022",
    dateTo: "23/04/2022",
    depart_time: "9:00 AM",
    arrive_time: "10:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 4000,
  },
  {
    id: 11,
    origin: "Boracay",
    destination: "Manila",
    dateFrom: "22/04/2022",
    dateTo: "23/04/2022",
    depart_time: "10:00 AM",
    arrive_time: "11:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 6000,
  },
  {
    id: 12,
    origin: "Boracay",
    destination: "Manila",
    dateFrom: "22/04/2022",
    dateTo: "23/04/2022",
    depart_time: "11:00 AM",
    arrive_time: "12:00 PM",
    travel_duration: "1hr 30m",
    ticketPrice: 8000,
  },
];

const presidents = [
  {
    id: 1,
    president_name: "Leni Robredo",
    president_birth_date: "April 23, 1965",
    president_age: 57,
    president_image:
      "https://i2.wp.com/peoplaid.com/wp-content/uploads/2020/04/Leni-Robredo.jpg?fit=441%2C445",
  },
  {
    id: 2,
    president_name: "Ferdinand Romualdez Marcos Jr",
    president_birth_date: "September 13, 1957",
    president_age: 65,
    president_image:
      "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bongbong_Marcos.jpg",
  },
  {
    id: 3,
    president_name: "Emmanuel Dapidran Pacquiao Sr",
    president_birth_date: "December 17, 1978",
    president_age: 43,
    president_image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pacquiao_and_Didal_%28cropped%29.jpg",
  },
  {
    id: 4,
    president_name: "Francisco Moreno Domagoso",
    president_birth_date: "October 24, 1974",
    president_age: 47,
    president_image:
      "http://manila.gov.ph/wp-content/uploads/2019/10/Mayor-Isko-Moreno-Domagoso.jpg",
  },
  {
    id: 5,
    president_name: "Panfilo Morena Lacson Sr.",
    president_birth_date: "June 1, 1948",
    president_age: 73,
    president_image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/Sen._Panfilo_M._Lacson_cropped.jpg",
  },
  {
    id: 6,
    president_name: "Leodegario Quitain de Guzman",
    president_birth_date: "July 25, 1959",
    president_age: 63,
    president_image:
      "https://businessmirror.com.ph/wp-content/uploads/2022/01/Leody-De-Guzman-2_CNNPH.jpg",
  },
];

const vicePresidents = [
  {
    id: 1,
    president_name: "Jose Livioko Atienza Jr",
    president_birth_date: "August 10, 1941",
    president_age: 80,
    president_image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Rep._Lito_Atienza%2C_Jr_%2818th_Congress_PH%29.jpg",
  },
  {
    id: 2,
    president_name: "Walden Flores Bello",
    president_birth_date: "November 11, 1945",
    president_age: 76,
    president_image:
      "https://www.tni.org/files/photos/Nick%20Buxton/walden%20bello.jpg",
  },
  {
    id: 3,
    president_name: "Sara Zimmerman Duterte-Carpio",
    president_birth_date: "May 31, 1978",
    president_age: 43,
    president_image:
      "https://www.davaocity.gov.ph/wp-content/uploads/2020/04/9A382208-EFAD-4A25-81C8-3CC32897710F.jpeg",
  },
  {
    id: 4,
    president_name: "Willie Tan Ong",
    president_birth_date: "October 24, 1963",
    president_age: 58,
    president_image:
      "https://newsinfo.inquirer.net/files/2021/09/willie-ong-e1632328228511-620x501.jpg",
  },
  {
    id: 5,
    president_name: "Francis Pancratius Nepomuceno Pangilinan",
    president_birth_date: "June 1, 1948",
    president_age: 73,
    president_image:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Senkikopangilinan.jpg",
  },
  {
    id: 6,
    president_name: "Vicente Castelo Sotto III",
    president_birth_date: "August 24, 1948",
    president_age: 73,
    president_image:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Sen._Pres_Vicente_Sotto_%28cropped%29.jpg",
  },
];

const senators = [
  {
    id: 1,
    senator_name: "AFUANG, ABNER",
  },
  {
    id: 2,
    senator_name: "ALBANI, IBRAHIM",
  },
  {
    id: 3,
    senator_name: "APOLINARIO, PASTOR",
  },
  {
    id: 4,
    senator_name: "ARCILLA, OSCAR JR.",
  },
  {
    id: 5,
    senator_name: "ARRANZA, MANG JESS",
  },
  {
    id: 6,
    senator_name: "BAGUILAT, TEDDY",
  },
  {
    id: 7,
    senator_name: "BAILEN, AGNES",
  },
  {
    id: 8,
    senator_name: "BALITA, CARL",
  },
  {
    id: 9,
    senator_name: "BARBO, LUTZ",
  },
  {
    id: 10,
    senator_name: "BAUTISTA, HERBERT BISTEK",
  },
  {
    id: 11,
    senator_name: "BELGICA, GRECO",
  },
  {
    id: 12,
    senator_name: "BELLO, SILVESTRE JR.",
  },
  {
    id: 13,
    senator_name: "BIAZON, DEVIENDO SR.",
  },
  {
    id: 14,
    senator_name: "BINAY, JOJO",
  },
  {
    id: 15,
    senator_name: "CABONEGRO, ROY",
  },
  {
    id: 16,
    senator_name: "CASTRICIONES, BRO JOHN",
  },
  {
    id: 17,
    senator_name: "CAYETANO, ALAN PETER",
  },
  {
    id: 19,
    senator_name: "CHAVEZ, MELCHOR",
  },
  {
    id: 20,
    senator_name: "COLMENARES, NERI",
  },
  {
    id: 21,
    senator_name: "D'ANGELO, DAVID",
  },
  {
    id: 22,
    senator_name: "DE LIMA, LEILA",
  },
  {
    id: 23,
    senator_name: "DEL ROSARIO, MONSOUR",
  },
  {
    id: 25,
    senator_name: "DIAZ, DING",
  },
  {
    id: 26,
    senator_name: "DIOKNO, CHEL",
  },
  {
    id: 27,
    senator_name: "EJERCITO, JV ESTRADA",
  },
  {
    id: 28,
    senator_name: "ELEAZAR, GEN. GUILLERMO",
  },
  {
    id: 29,
    senator_name: "EREÑO, BRO. ERNIE",
  },
  {
    id: 30,
    senator_name: "ESCUDERO, CHIZ",
  },
];

module.exports = {
  users,
  olxLists,
  cebuTickets,
  presidents,
  vicePresidents,
  senators,
};
