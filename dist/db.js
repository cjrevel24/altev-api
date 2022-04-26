"use strict";

// USERS TABLE
var users = []; //OLX LISTS

var olxLists = [{
  id: 1,
  item_title: "Nike slide mismatch",
  item_price: 1000,
  item_size: "EU 44 / UK 19 / US 11",
  item_image: "https://media.karousell.com/media/photos/products/2022/4/10/nike_slide_mismatch_1649578419_93d8a95b_progressive_thumbnail.jpg",
  item_category: "footwear",
  item_ratings: 0
}, {
  id: 2,
  item_title: "Nike slides",
  item_price: 850,
  item_size: "EU 40 / UK 6 / US 7",
  item_image: "https://media.karousell.com/media/photos/products/2022/4/10/nike_slides_1649605197_3e4ab074_progressive_thumbnail.jpg",
  item_category: "footwear",
  item_ratings: 0
}, {
  id: 3,
  item_title: "Nike Victori One Shower Slides",
  item_price: 900,
  item_size: "EU 40 / UK 6 / US 7",
  item_image: "https://media.karousell.com/media/photos/products/2022/4/9/nike_victori_one_shower_slides_1649547513_2a2ad878_progressive_thumbnail.jpg",
  item_category: "footwear",
  item_ratings: 1
}, {
  id: 4,
  item_title: "Zara",
  item_price: 400,
  item_image: "https://media.karousell.com/media/photos/products/2022/4/10/nike_slides_1649605197_3e4ab074_progressive_thumbnail.jpg",
  item_category: "clothing",
  item_ratings: 5
}, {
  id: 5,
  item_title: "Brandnew Zara limited edition",
  item_price: 1000,
  item_image: "https://media.karousell.com/media/photos/products/2022/4/10/brandnew_zara_limited_edition__1649585915_962ec3d4_progressive_thumbnail.jpg",
  item_category: "clothing",
  item_ratings: 1
}, {
  id: 6,
  item_title: "Zara green sleeveless",
  item_price: 340,
  item_image: "https://media.karousell.com/media/photos/products/2022/4/10/zara_green_sleeveless_cut_out__1649595907_07ccab4c_progressive_thumbnail.jpg",
  item_category: "clothing",
  item_ratings: 5
}, {
  id: 7,
  item_title: "Iphone XR 128gb HK Variant",
  item_price: 15000,
  item_image: "https://media.karousell.com/media/photos/products/2022/4/12/iphone_xr_128gb_hk_variant_1649765803_f55c069b_progressive_thumbnail.jpg",
  item_category: "gadgets",
  item_ratings: 0
}, {
  id: 8,
  item_title: "Iphone 13 Pro 128gb",
  item_price: 60000,
  item_image: "https://media.karousell.com/media/photos/products/2022/4/12/iphone_13_pro_128gb_1649765796_a259fac1_progressive_thumbnail.jpg",
  item_category: "gadgets",
  item_ratings: 0
}, {
  id: 9,
  item_title: "Go Pro Hero 5 Black edition",
  item_price: 8500,
  item_image: "https://media.karousell.com/media/photos/products/2020/11/28/go_pro_hero_5_black_edition_1606525144_0d42134e_progressive_thumbnail.jpg",
  item_category: "gadgets",
  item_ratings: 115
}, {
  id: 10,
  item_title: "Toyota Vios 1.5 G A/T Auto",
  item_model: 2007,
  item_price: 229000,
  item_image: "https://media.karousell.com/media/photos/products/2022/3/22/toyota_vios_15g_at_auto_1647951116_553abe88_progressive",
  item_category: "cars",
  item_ratings: 12
}, {
  id: 11,
  item_title: "Toyota Vios 1.3 XE Auto",
  item_model: 2018,
  item_price: 598000,
  item_image: "https://media.karousell.com/media/photos/products/2022/3/11/2021_toyota_vios_13_xe_auto_1646970647_a88f62cd_progressive.jpg",
  item_category: "cars",
  item_ratings: 7
}, {
  id: 12,
  item_title: "Toyota Vios 1.3 E Manual",
  item_model: 2019,
  item_price: 447000,
  item_image: "https://media.karousell.com/media/photos/products/2021/12/13/2019_toyota_vios_13_e_blackish_1639354832_9ba08f70_progressive.jpg",
  item_category: "cars",
  item_ratings: 6
}]; //CEBU TICKET LISTS

var cebuTickets = [{
  id: 1,
  origin: "Manila",
  destination: "Cebu",
  dateFrom: "18/04/2022",
  dateTo: "19/04/2022",
  depart_time: "8:00 AM",
  arrive_time: "9:00 AM",
  travel_duration: "1hr 30m",
  ticketPrice: 5000
}, {
  id: 2,
  origin: "Manila",
  destination: "Cebu",
  dateFrom: "18/04/2022",
  dateTo: "19/04/2022",
  depart_time: "9:00 AM",
  arrive_time: "10:00 AM",
  travel_duration: "1hr 30m",
  ticketPrice: 8000
}, {
  id: 3,
  origin: "Manila",
  destination: "Cebu",
  dateFrom: "18/04/2022",
  dateTo: "19/04/2022",
  depart_time: "11:00 AM",
  arrive_time: "12:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 10000
}, {
  id: 4,
  origin: "Cebu",
  destination: "Manila",
  dateFrom: "20/04/2022",
  dateTo: "21/04/2022",
  depart_time: "9:00 AM",
  arrive_time: "10:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 4000
}, {
  id: 5,
  origin: "Cebu",
  destination: "Manila",
  dateFrom: "20/04/2022",
  dateTo: "21/04/2022",
  depart_time: "10:00 AM",
  arrive_time: "11:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 6000
}, {
  id: 6,
  origin: "Cebu",
  destination: "Manila",
  dateFrom: "20/04/2022",
  dateTo: "21/04/2022",
  depart_time: "11:00 AM",
  arrive_time: "12:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 8000
}, {
  id: 7,
  origin: "Manila",
  destination: "Boracay",
  dateFrom: "21/04/2022",
  dateTo: "22/04/2022",
  depart_time: "9:00 AM",
  arrive_time: "10:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 4000
}, {
  id: 8,
  origin: "Manila",
  destination: "Boracay",
  dateFrom: "21/04/2022",
  dateTo: "22/04/2022",
  depart_time: "10:00 AM",
  arrive_time: "11:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 6000
}, {
  id: 9,
  origin: "Manila",
  destination: "Boracay",
  dateFrom: "21/04/2022",
  dateTo: "22/04/2022",
  depart_time: "11:00 AM",
  arrive_time: "12:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 8000
}, {
  id: 10,
  origin: "Boracay",
  destination: "Manila",
  dateFrom: "22/04/2022",
  dateTo: "23/04/2022",
  depart_time: "9:00 AM",
  arrive_time: "10:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 4000
}, {
  id: 11,
  origin: "Boracay",
  destination: "Manila",
  dateFrom: "22/04/2022",
  dateTo: "23/04/2022",
  depart_time: "10:00 AM",
  arrive_time: "11:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 6000
}, {
  id: 12,
  origin: "Boracay",
  destination: "Manila",
  dateFrom: "22/04/2022",
  dateTo: "23/04/2022",
  depart_time: "11:00 AM",
  arrive_time: "12:00 PM",
  travel_duration: "1hr 30m",
  ticketPrice: 8000
}]; //VOTING PRESIDENT LISTS

var presidents = [{
  id: 1,
  president_name: "Leni Robredo",
  president_birth_date: "April 23, 1965",
  president_age: 57,
  president_image: "https://i2.wp.com/peoplaid.com/wp-content/uploads/2020/04/Leni-Robredo.jpg?fit=441%2C445"
}, {
  id: 2,
  president_name: "Ferdinand Romualdez Marcos Jr",
  president_birth_date: "September 13, 1957",
  president_age: 65,
  president_image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Bongbong_Marcos.jpg"
}, {
  id: 3,
  president_name: "Emmanuel Dapidran Pacquiao Sr",
  president_birth_date: "December 17, 1978",
  president_age: 43,
  president_image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pacquiao_and_Didal_%28cropped%29.jpg"
}, {
  id: 4,
  president_name: "Francisco Moreno Domagoso",
  president_birth_date: "October 24, 1974",
  president_age: 47,
  president_image: "http://manila.gov.ph/wp-content/uploads/2019/10/Mayor-Isko-Moreno-Domagoso.jpg"
}, {
  id: 5,
  president_name: "Panfilo Morena Lacson Sr.",
  president_birth_date: "June 1, 1948",
  president_age: 73,
  president_image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Sen._Panfilo_M._Lacson_cropped.jpg"
}, {
  id: 6,
  president_name: "Leodegario Quitain de Guzman",
  president_birth_date: "July 25, 1959",
  president_age: 63,
  president_image: "https://businessmirror.com.ph/wp-content/uploads/2022/01/Leody-De-Guzman-2_CNNPH.jpg"
}]; //VOTING VICE PRESIDENT LISTS

var vicePresidents = [{
  id: 1,
  president_name: "Jose Livioko Atienza Jr",
  president_birth_date: "August 10, 1941",
  president_age: 80,
  president_image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Rep._Lito_Atienza%2C_Jr_%2818th_Congress_PH%29.jpg"
}, {
  id: 2,
  president_name: "Walden Flores Bello",
  president_birth_date: "November 11, 1945",
  president_age: 76,
  president_image: "https://www.tni.org/files/photos/Nick%20Buxton/walden%20bello.jpg"
}, {
  id: 3,
  president_name: "Sara Zimmerman Duterte-Carpio",
  president_birth_date: "May 31, 1978",
  president_age: 43,
  president_image: "https://www.davaocity.gov.ph/wp-content/uploads/2020/04/9A382208-EFAD-4A25-81C8-3CC32897710F.jpeg"
}, {
  id: 4,
  president_name: "Willie Tan Ong",
  president_birth_date: "October 24, 1963",
  president_age: 58,
  president_image: "https://newsinfo.inquirer.net/files/2021/09/willie-ong-e1632328228511-620x501.jpg"
}, {
  id: 5,
  president_name: "Francis Pancratius Nepomuceno Pangilinan",
  president_birth_date: "June 1, 1948",
  president_age: 73,
  president_image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Senkikopangilinan.jpg"
}, {
  id: 6,
  president_name: "Vicente Castelo Sotto III",
  president_birth_date: "August 24, 1948",
  president_age: 73,
  president_image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Sen._Pres_Vicente_Sotto_%28cropped%29.jpg"
}]; //VOTING SENATORS PRESIDENT LISTS

var senators = [{
  id: 1,
  senator_name: "AFUANG, ABNER"
}, {
  id: 2,
  senator_name: "ALBANI, IBRAHIM"
}, {
  id: 3,
  senator_name: "APOLINARIO, PASTOR"
}, {
  id: 4,
  senator_name: "ARCILLA, OSCAR JR."
}, {
  id: 5,
  senator_name: "ARRANZA, MANG JESS"
}, {
  id: 6,
  senator_name: "BAGUILAT, TEDDY"
}, {
  id: 7,
  senator_name: "BAILEN, AGNES"
}, {
  id: 8,
  senator_name: "BALITA, CARL"
}, {
  id: 9,
  senator_name: "BARBO, LUTZ"
}, {
  id: 10,
  senator_name: "BAUTISTA, HERBERT BISTEK"
}, {
  id: 11,
  senator_name: "BELGICA, GRECO"
}, {
  id: 12,
  senator_name: "BELLO, SILVESTRE JR."
}, {
  id: 13,
  senator_name: "BIAZON, DEVIENDO SR."
}, {
  id: 14,
  senator_name: "BINAY, JOJO"
}, {
  id: 15,
  senator_name: "CABONEGRO, ROY"
}, {
  id: 16,
  senator_name: "CASTRICIONES, BRO JOHN"
}, {
  id: 17,
  senator_name: "CAYETANO, ALAN PETER"
}, {
  id: 19,
  senator_name: "CHAVEZ, MELCHOR"
}, {
  id: 20,
  senator_name: "COLMENARES, NERI"
}, {
  id: 21,
  senator_name: "D'ANGELO, DAVID"
}, {
  id: 22,
  senator_name: "DE LIMA, LEILA"
}, {
  id: 23,
  senator_name: "DEL ROSARIO, MONSOUR"
}, {
  id: 25,
  senator_name: "DIAZ, DING"
}, {
  id: 26,
  senator_name: "DIOKNO, CHEL"
}, {
  id: 27,
  senator_name: "EJERCITO, JV ESTRADA"
}, {
  id: 28,
  senator_name: "ELEAZAR, GEN. GUILLERMO"
}, {
  id: 29,
  senator_name: "EREÑO, BRO. ERNIE"
}, {
  id: 30,
  senator_name: "ESCUDERO, CHIZ"
}]; //VOTING STORAGE SEND USER VOTES

var mySelectedVotes = []; //LIBRARY BOOK LISTS

var libraryBookLists = [{
  id: 1,
  book_name: "Mariner Books Life of Pi",
  book_status: "Available",
  book_category: "Action and Adventure",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292455-51rxEvLljUL.jpg?crop=1xw:0.972xh;center,top&resize=980:*"
}, {
  id: 2,
  book_name: "Createspace Independent Publishing Platform The Three Musketeers",
  book_status: "Borrowed",
  book_category: "Action and Adventure",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292481-41TxXqToCCL.jpg?crop=0.952xw:1xh;center,top&resize=980:*"
}, {
  id: 3,
  book_name: "CreateSpace Independent Publishing Platform The Call of the Wild",
  book_status: "Available",
  book_category: "Action and Adventure",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292506-41A0yff934L.jpg?crop=1xw:0.999xh;center,top&resize=980:*"
}, {
  id: 4,
  book_name: "To Kill a Mockingbird",
  book_status: "Available",
  book_category: "Classics",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292658-51IXWZzlgSL.jpg?crop=1xw:0.996xh;center,top&resize=980:*"
}, {
  id: 5,
  book_name: "Little Women",
  book_status: "Borrowed",
  book_category: "Classics",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292680-51xJASXQJwL.jpg?crop=1.00xw:0.978xh;0,0.0120xh&resize=980:*"
}, {
  id: 6,
  book_name: "Vintage Beloved",
  book_status: "Available",
  book_category: "Classics",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292709-41Rdzbiqh7L.jpg?crop=1.00xw:0.974xh;0,0.0160xh&resize=980:*"
}, {
  id: 7,
  book_name: "DC Comics Watchmen",
  book_status: "Available",
  book_category: "Graphic Novel",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292885-41ZJD5Dw5KL.jpg?crop=1.00xw:0.962xh;0,0.0200xh&resize=980:*"
}, {
  id: 8,
  book_name: "Image Comics The Walking Dead: Compendium One",
  book_status: "Borrowed",
  book_category: "Graphic Novel",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292913-51S12ntkIbL.jpg?crop=1xw:0.975xh;center,top&resize=980:*"
}, {
  id: 9,
  book_name: "HarperOne The Boy, the Mole, the Fox and the Horse",
  book_status: "Available",
  book_category: "Graphic Novel",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572292943-418D9yYGB3L.jpg?crop=0.900xw:1.00xh;0.0916xw,0&resize=980:*"
}, {
  id: 10,
  book_name: "Little, Brown and Company The Night Fire",
  book_status: "Available",
  book_category: "Detective and Mystery",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293115-41zqZwXZ-WL.jpg?crop=1.00xw:0.984xh;0,0.00600xh&resize=980:*"
}, {
  id: 11,
  book_name: "The Adventures of Sherlock Holmes",
  book_status: "Borrowed",
  book_category: "Detective and Mystery",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293468-516dZVA7rQL.jpg?crop=0.958xw:1xh;center,top&resize=980:*"
}, {
  id: 12,
  book_name: "And Then There Were None",
  book_status: "Available",
  book_category: "Detective and Mystery",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293489-51MlxNgCsyL.jpg?crop=1.00xw:0.932xh;0,0.0440xh&resize=980:*"
}, {
  id: 13,
  book_name: "One World The Water Dancer",
  book_status: "Available",
  book_category: "Fantasy",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293716-51ItgiZw5dL.jpg?crop=1xw:0.987xh;center,top&resize=980:*"
}, {
  id: 14,
  book_name: "Circe",
  book_status: "Borrowed",
  book_category: "Fantasy",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293746-51dzuwLmm-L.jpg?crop=1.00xw:0.932xh;0,0.0540xh&resize=980:*"
}, {
  id: 15,
  book_name: "Flatiron Books Ninth House",
  book_status: "Available",
  book_category: "Fantasy",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293766-41cUxNtr5-L.jpg?crop=1.00xw:0.986xh;0,0.00800xh&resize=980:*"
}, {
  id: 16,
  book_name: "G.P. Putnam's Sons The Help",
  book_status: "Available",
  book_category: "Historical Fiction",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572293965-51D9LgMgL.jpg?crop=1xw:0.999xh;center,top&resize=980:*"
}, {
  id: 17,
  book_name: "One Hundred Years of Solitude",
  book_status: "Borrowed",
  book_category: "Historical Fiction",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572294012-51Zr6Pd32ML.jpg?crop=1xw:0.996xh;center,top&resize=980:*"
}, {
  id: 18,
  book_name: "Vintage Memoirs of a Geisha",
  book_status: "Available",
  book_category: "Historical Fiction",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572294103-51O9HqW8ZAL.jpg?crop=1.00xw:0.974xh;0,0.0200xh&resize=980:*"
}, {
  id: 19,
  book_name: "Anchor Carrie",
  book_status: "Available",
  book_category: "Horror",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572295234-51dRjo8NJeL.jpg?crop=1.00xw:0.896xh;0.00336xw,0.102xh&resize=980:*"
}, {
  id: 20,
  book_name: "Penguin Classics The Haunting of Hill House",
  book_status: "Borrowed",
  book_category: "Horror",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572295266-51gyXcg1P2L.jpg?crop=1.00xw:0.974xh;0,0.0240xh&resize=980:*"
}, {
  id: 21,
  book_name: "Bird Box",
  book_status: "Available",
  book_category: "Horror",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572295284-41sRIihnXzL.jpg?crop=1xw:0.996xh;center,top&resize=980:*"
}, {
  id: 22,
  book_name: "G.P. Putnam's Sons Where the Crawdads Sing",
  book_status: "Available",
  book_category: "Literary Fiction",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572295477-51j5p18mJNL.jpg?crop=1xw:0.996xh;center,top&resize=980:*"
}, {
  id: 23,
  book_name: "Olive, Again",
  book_status: "Borrowed",
  book_category: "Literary Fiction",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572295502-512WyIl2uSL.jpg?crop=1xw:0.990xh;center,top&resize=980:*"
}, {
  id: 24,
  book_name: "Harper The Dutch House: A Novel",
  book_status: "Available",
  book_category: "Literary Fiction",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572295539-51FiW7t0GuL.jpg?crop=1xw:0.993xh;center,top&resize=980:*"
}, {
  id: 25,
  book_name: "Brazen and the Beast",
  book_status: "Available",
  book_category: "Romance",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296390-51fiEAOae4L.jpg?crop=1.00xw:0.950xh;0,0.0240xh&resize=980:*"
}, {
  id: 26,
  book_name: "Berkley Royal Holiday",
  book_status: "Borrowed",
  book_category: "Romance",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296414-51QdlkQL.jpg?crop=1xw:1xh;center,top&resize=980:*"
}, {
  id: 27,
  book_name: "The Savior",
  book_status: "Available",
  book_category: "Romance",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296440-41RxnbDaefL.jpg?crop=1.00xw:0.920xh;0,0.0800xh&resize=980:*"
}, {
  id: 28,
  book_name: "Nan A. Talese The Testaments",
  book_status: "Available",
  book_category: "Romance",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296624-419TWZk7luL.jpg?crop=1xw:0.987xh;center,top&resize=980:*"
}, {
  id: 29,
  book_name: "The Hunger Games Trilogy",
  book_status: "Borrowed",
  book_category: "Romance",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296661-41nphb8vbPL.jpg?crop=0.978xw:1xh;center,top&resize=980:*"
}, {
  id: 30,
  book_name: "Houghton Mifflin Harcourt 1984",
  book_status: "Available",
  book_category: "Romance",
  book_image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572296688-410ZirPKXKL.jpg?crop=1xw:0.999xh;center,top&resize=980:*"
}]; //BORROWED BOOKS

var borrowedBooks = []; // LIST OF POSTS

var newsFeeds = [{
  id: 1,
  post_title: "A new AI draws delightful and not-so-delightful images",
  post_description: "OpenAI DALL-E 2 is incredible at turning text into images. It also highlights the problem of AI bias — and the need to change incentives in the industry.",
  post_date: "Apr 14, 2022, 8:00am EDT",
  post_user: "Sigal Samuel"
}, {
  id: 2,
  post_title: "The death of the gas station",
  post_description: "As EVs hit the road, gas stations will have to adapt or risk going out of business.",
  post_date: "Apr 13, 2022, 1:00pm EDT",
  post_user: "Rebecca Heilweil"
}, {
  id: 3,
  post_title: "Elon Musk is no free speech messiah",
  post_description: "According to Musk, free speech costs about $3 billion.",
  post_date: "Apr 12, 2022, 4:20pm EDT",
  post_user: "Whizy Kim"
}, {
  id: 4,
  post_title: "The growing, lightly controversial industry teaching kids crypto",
  post_description: "Today parents must ask the age-old question: When is the right time to teach my 5-year-old about NFTs?",
  post_date: "Apr 12, 2022, 9:00am EDT",
  post_user: "Rebecca Jennings"
}, {
  id: 5,
  post_title: "Congrats! You formed a union. Now comes the hard part.",
  post_description: "The boring, crucial work that happens now that Starbucks and Amazon have unionized.",
  post_date: "Apr 12, 2022, 7:30am EDT",
  post_user: "Rani Molla"
}]; // LIST OF VIDEOS

var streamingVideos = [{
  id: 1,
  video_name: "Diana and Roma",
  video_description: "Learn the alphabet and how to count",
  video_link: "https://www.youtube.com/watch?v=4XGLPTtn4xQ",
  video_image: "https://i.scdn.co/image/ab67616d0000b273b07588889e66e1201fa3afb5",
  video_genre: "Educational"
}, {
  id: 2,
  video_name: "Learn Colors, ABCs and 123 Songs + More Educational Nursery Rhymes & Kids Songs - CoComelon",
  video_description: "Learn the alphabet, numbers, and colors with CoComelon! In this educational nursery rhyme compilation",
  video_link: "https://www.youtube.com/watch?v=7i68cD70dEE",
  video_image: "https://pbs.twimg.com/media/EkpzJQHXEAMpvtI.jpg",
  video_genre: "Educational"
}, {
  id: 3,
  video_name: "English Conversation Practice",
  video_description: "English Conversation Practice - Improve Speaking Skills",
  video_link: "https://www.youtube.com/watch?v=NNamZZsggM4",
  video_image: "https://www.xploretefl.com/articles/wp-content/uploads/2018/12/teacher-greenboard.jpg",
  video_genre: "Educational"
}, {
  id: 4,
  video_name: "San Adreas",
  video_description: "Tsunami Scene - Pure Action [4K]",
  video_link: "https://www.youtube.com/watch?v=jvIGFhqbe0c",
  video_image: "https://merahputih.com/media/43/7f/eb/437feb9d9517aacb7bedb7fa8bf06702.PNG",
  video_genre: "Action"
}, {
  id: 5,
  video_name: "Hobbs Vs Shaw",
  video_description: "Elevator Fight Scene - FAST AND FURIOUS",
  video_link: "https://www.youtube.com/watch?v=8luaY8tEElc",
  video_image: "https://upload.wikimedia.org/wikipedia/en/0/00/Fast_%26_Furious_Presents_Hobbs_%26_Shaw_-_theatrical_poster.jpg",
  video_genre: "Action"
}, {
  id: 6,
  video_name: "American Assassin",
  video_description: "Final Nuclear Scene",
  video_link: "https://www.youtube.com/watch?v=H-qd3ySLgz4",
  video_image: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-5438799415.jpg",
  video_genre: "Action"
}, {
  id: 7,
  video_name: "The Heir",
  video_description: "Horrific, violent visions plague the heir of a family house as past demons arise after she arrives with her three friends to inspect the property.",
  video_link: "https://www.youtube.com/watch?v=1EzCm1KEegU",
  video_image: "https://i.ytimg.com/vi/1EzCm1KEegU/maxresdefault.jpg",
  video_genre: "Horror"
}, {
  id: 8,
  video_name: "THE CURSE OF HUMPTY DUMPTY",
  video_description: "Humpty Dumpty had a great fall, and he's back in the form of a doll that belongs to a woman with dementia who starts to recall his dark past.",
  video_link: "https://www.youtube.com/watch?v=VW4eGOO0jcQ",
  video_image: "https://i0.wp.com/www.horrorsociety.com/wp-content/uploads/2022/01/818W7lZ3pSL._RI_.jpg?resize=750%2C1000&ssl=1",
  video_genre: "Horror"
}, {
  id: 9,
  video_name: "Flight 666",
  video_description: "Passengers and crew on an international flight are attacked by unseen forces that threaten all aboard and on the ground below them.",
  video_link: "https://www.youtube.com/watch?v=E1-AY2Zh6ok",
  video_image: "https://m.media-amazon.com/images/M/MV5BZjdjYWEwNmQtYTQwNS00MDljLWEwYWMtZTI3Mjc5ODEyYWMxXkEyXkFqcGdeQXVyNTkzMzg3NDM@._V1_FMjpg_UX1000_.jpg",
  video_genre: "Horror"
}, {
  id: 10,
  video_name: "THE DEVICE",
  video_description: "Two sisters discover a strange object of alien origin.",
  video_link: "https://www.youtube.com/watch?v=HEhjfpypVgQ",
  video_image: "https://bloody-disgusting.com/wp-content/uploads/2015/01/DEVICE_DVD_HIC-e1420136377672.jpg",
  video_genre: "Sci-Fi"
}, {
  id: 11,
  video_name: "Monster Island",
  video_description: "Monster Island - Gigantic monsters threaten to destroy everything in their path as mankind remains defenseless.",
  video_link: "https://www.youtube.com/watch?v=s9CgGuXoij0",
  video_image: "http://www.nerdly.co.uk/wp-content/uploads/2019/06/monster-island-dvd-cover.jpg",
  video_genre: "Sci-Fi"
}, {
  id: 12,
  video_name: "Lockdown",
  video_description: "|n the shadows of a highly contagious virus, a family seeks shelter in the safety of their own home during a nationwide LOCKDOWN, in which MARTIAL LAW is declared. With nowhere to go and danger approaching, the family is forced to confront the evil from within before it consumes them all.",
  video_link: "https://www.youtube.com/watch?v=XWfWalDTs8c",
  video_image: "https://m.media-amazon.com/images/M/MV5BN2EwMjA1YzEtZDUzYy00ZWUxLWI2YjQtMjhmMDQ4OTVmMmI1XkEyXkFqcGdeQXVyNDg2NjAzNDY@._V1_FMjpg_UX1000_.jpg",
  video_genre: "Sci-Fi"
}, {
  id: 13,
  video_name: "IZLA 2021",
  video_description: "TAGALOG COMEDY MOVIE HD",
  video_link: "https://www.youtube.com/watch?v=8GgsRYUgyqQ",
  video_image: "https://m.media-amazon.com/images/M/MV5BMWY4MTdlYWMtNjA2MC00YWZmLTgyZDUtMDRkNzcwNjE2YWUzXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_FMjpg_UX1000_.jpg",
  video_genre: "Comedy"
}, {
  id: 14,
  video_name: "Diamond Dog Caper",
  video_description: "A boy battles a gang of thieves to rescue a dog carrying a fortune in stolen diamonds.",
  video_link: "https://www.youtube.com/watch?v=MkjMrzT6TvA",
  video_image: "https://flxt.tmsimg.com/assets/p189926_p_v8_aa.jpg",
  video_genre: "Comedy"
}, {
  id: 15,
  video_name: "Lenny The Wonderdog",
  video_description: "A superpowered dog engages a young boy in conversation and adventure.",
  video_link: "https://www.youtube.com/watch?v=WCr_ImpC1VQ",
  video_image: "https://i.ytimg.com/vi/WCr_ImpC1VQ/maxresdefault.jpg",
  video_genre: "Comedy"
}];
module.exports = {
  users: users,
  olxLists: olxLists,
  cebuTickets: cebuTickets,
  presidents: presidents,
  vicePresidents: vicePresidents,
  senators: senators,
  mySelectedVotes: mySelectedVotes,
  libraryBookLists: libraryBookLists,
  borrowedBooks: borrowedBooks,
  newsFeeds: newsFeeds,
  streamingVideos: streamingVideos
};
//# sourceMappingURL=db.js.map