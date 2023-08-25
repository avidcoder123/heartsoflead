export function getMapData(cid: string) {
	return mapData[<keyof typeof mapData>cid]
}

export function getMapKeys(): Array<keyof typeof mapData> {
	let keys: Array<keyof typeof mapData> = []
	for(let key in mapData) {
		keys.push(<keyof typeof mapData>key)
	}
	return keys
}

export const mapData = {
	"World": {
		"name": "Earth",
		"longname": "",
		
		"population": 7658209137
	},
	"AD": {
		"name": "Andorra",
		"longname": "The Principality of Andorra",
		
		
		"population": 77543
	},
	"AE": {
		"name": "United Arab Emirates",
		"longname": "The United Arab Emirates",
		
		
		"population": 9890400
	},
	"AF": {
		"name": "Afghanistan",
		"longname": "The Islamic Republic of Afghanistan",
		
		
		"population": 32225560
	},
	"AG": {
		"name": "Antigua and Barbuda",
		"longname": "Antigua and Barbuda",
		
		
		"population": 96453
	},
	"AI": {
		"name": "Anguilla",
		"longname": "Anguilla",
		
		
		"population": 14869
	},
	"AL": {
		"name": "Albania",
		"longname": "The Republic of Albania",
		
		
		"population": 2862427
	},
	"AM": {
		"name": "Armenia",
		"longname": "The Republic of Armenia",
		
		
		"population": 2957500
	},
	"AO": {
		"name": "Angola",
		"longname": "The Republic of Angola",
		
		
		"population": 31127674
	},
	"AQ": {
		"name": "Antarctica",
		"longname": "All land and ice shelves south of the 60th parallel south",		
		"population": 0
	},
	"AR": {
		"name": "Argentina",
		"longname": "The Argentine Republic",
		
		
		"population": 44938712
	},
	"AS": {
		"name": "American Samoa",
		"longname": "The Territory of American Samoa",
		
		"region": "OC",
		"population": 55191
	},
	"AT": {
		"name": "Austria",
		"longname": "The Republic of Austria",
		
		
		"population": 8902600
	},
	"AU": {
		"name": "Australia",
		"longname": "The Commonwealth of Australia",
		
		"region": "OC",
		"population": 25646823
	},
	"AW": {
		"name": "Aruba",
		"longname": "Aruba",
		
		"population": 112309
	},
	"AX": {
		"name": "Åland Islands",
		"longname": "Åland",
		
		"population": 29789
	},
	"AZ": {
		"name": "Azerbaijan",
		"longname": "The Republic of Azerbaijan",
		
		
		"population": 10067108
	},
	"BA": {
		"name": "Bosnia and Herzegovina",
		"longname": "Bosnia and Herzegovina",
		
		
		"population": 3301000
	},
	"BB": {
		"name": "Barbados",
		"longname": "Barbados",
		
		
		"population": 287025
	},
	"BD": {
		"name": "Bangladesh",
		"longname": "The People's Republic of Bangladesh",
		
		
		"population": 168270652
	},
	"BE": {
		"name": "Belgium",
		"longname": "The Kingdom of Belgium",
		
		
		"population": 11524454
	},
	"BF": {
		"name": "Burkina Faso",
		"longname": "Burkina Faso",
		
		
		"population": 20870060
	},
	"BG": {
		"name": "Bulgaria",
		"longname": "The Republic of Bulgaria",
		
		
		"population": 7000039
	},
	"BH": {
		"name": "Bahrain",
		"longname": "The Kingdom of Bahrain",
		
		
		"population": 1569446
	},
	"BI": {
		"name": "Burundi",
		"longname": "The Republic of Burundi",
		
		
		"population": 10953317
	},
	"BJ": {
		"name": "Benin",
		"longname": "The Republic of Benin",
		
		
		"population": 11733059
	},
	"BL": {
		"name": "Saint Barthelemy",
		"longname": "The Collectivity of Saint-Barthélemy",
		
		
		"population": 9793
	},
	"BM": {
		"name": "Bermuda",
		"longname": "Bermuda",
		
		
		"population": 64027
	},
	"BN": {
		"name": "Brunei",
		"longname": "The Nation of Brunei",
		
		
		"population": 442400
	},
	"BO": {
		"name": "Bolivia",
		"longname": "The Plurinational State of Bolivia",
		
		
		"population": 11469896
	},
	"BQ": {
		"name": "Bonaire, Sint Eustatius and Saba",
		"longname": "Bonaire, Sint Eustatius and Saba",
		
		"population": 25157
	},
	"BR": {
		"name": "Brazil",
		"longname": "The Federative Republic of Brazil",
		
		
		"population": 211257279
	},
	"BS": {
		"name": "Bahamas",
		"longname": "The Commonwealth of The Bahamas",
		
		
		"population": 385340
	},
	"BT": {
		"name": "Bhutan",
		"longname": "The Kingdom of Bhutan",
		
		
		"population": 741672
	},
	"BV": {
		"name": "Bouvet Island",
		"longname": "Bouvet Island",		
		"population": 0
	},
	"BW": {
		"name": "Botswana",
		"longname": "The Republic of Botswana",
		
		
		"population": 2338851
	},
	"BY": {
		"name": "Belarus",
		"longname": "The Republic of Belarus",
		
		
		"population": 9413446
	},
	"BZ": {
		"name": "Belize",
		"longname": "Belize",
		
		
		"population": 408487
	},
	"CA": {
		"name": "Canada",
		"longname": "Canada",
		
		
		"population": 37958039
	},
	"CC": {
		"name": "Cocos (Keeling) Islands",
		"longname": "The Territory of Cocos (Keeling) Islands",
		
		
		"population": 544
	},
	"CD": {
		"name": "Congo (Dem. Rep.)",
		"longname": "The Democratic Republic of the Congo",
		"altnames": "Democratic Republic of the Congo",
		
		
		"population": 89561404
	},
	"CF": {
		"name": "Central African Republic",
		"longname": "The Central African Republic",
		
		
		"population": 5496011
	},
	"CG": {
		"name": "Congo",
		"longname": "The Republic of the Congo",
		"altnames": "Republic of the Congo",
		
		
		"population": 5518092
	},
	"CH": {
		"name": "Switzerland",
		"longname": "The Swiss Confederation",
		
		
		"population": 8586550
	},
	"CI": {
		"name": "Côte d'Ivoire",
		"longname": "The Republic of Côte d'Ivoire",
		"altnames": "Ivory Coast",
		
		
		"population": 25823071
	},
	"CK": {
		"name": "Cook Islands",
		"longname": "The Cook Islands",
		"region": "OC",
		"population": 17518
	},
	"CL": {
		"name": "Chile",
		"longname": "The Republic of Chile",
		
		
		"population": 19107216
	},
	"CM": {
		"name": "Cameroon",
		"longname": "The Republic of Cameroon",
		
		
		"population": 26545864
	},
	"CN": {
		"name": "China",
		"longname": "The People's Republic of China",
		
		
		"population": 1401768800
	},
	"CO": {
		"name": "Colombia",
		"longname": "The Republic of Colombia",
		
		
		"population": 49395678
	},
	"CR": {
		"name": "Costa Rica",
		"longname": "The Republic of Costa Rica",
		
		
		"population": 5058007
	},
	"CU": {
		"name": "Cuba",
		"longname": "The Republic of Cuba",
		
		
		"population": 11209628
	},
	"CV": {
		"name": "Cabo Verde",
		"longname": "The Republic of Cabo Verde",
		"altnames": "Cape Verde",
		
		
		"population": 550483
	},
	"CW": {
		"name": "Curacao",
		"longname": "The Country of Curaçao",
		
		"population": 158665
	},
	"CX": {
		"name": "Christmas Island",
		"longname": "The Territory of Christmas Island",
		
		
		"population": 1843
	},
	"CY": {
		"name": "Cyprus",
		"longname": "The Republic of Cyprus",
		
		
		"population": 875900
	},
	"CZ": {
		"name": "Czechia",
		"longname": "The Czech Republic",
		"altnames": "Czech Republic",
		
		
		"population": 10681161
	},
	"DE": {
		"name": "Germany",
		"longname": "The Federal Republic of Germany",
		
		
		"population": 83149300
	},
	"DJ": {
		"name": "Djibouti",
		"longname": "The Republic of Djibouti",
		
		
		"population": 1078373
	},
	"DK": {
		"name": "Denmark",
		"longname": "The Kingdom of Denmark",
		
		
		"population": 5822763
	},
	"DM": {
		"name": "Dominica",
		"longname": "The Commonwealth of Dominica",
		
		
		"population": 71808
	},
	"DO": {
		"name": "Dominican Republic",
		"longname": "The Dominican Republic",
		
		
		"population": 10358320
	},
	"DZ": {
		"name": "Algeria",
		"longname": "The People's Democratic Republic of Algeria",
		
		
		"population": 43000000
	},
	"EC": {
		"name": "Ecuador",
		"longname": "The Republic of Ecuador",
		
		
		"population": 17444556
	},
	"EE": {
		"name": "Estonia",
		"longname": "The Republic of Estonia",
		
		
		"population": 1328360
	},
	"EG": {
		"name": "Egypt",
		"longname": "The Arab Republic of Egypt",
		
		
		"population": 100131097
	},
	"EH": {
		"name": "Western Sahara",
		"longname": "The Sahrawi Arab Democratic Republic",
		"altnames": "Sahrawi Arab Democratic Republic",
		
		"population": 582463
	},
	"ER": {
		"name": "Eritrea",
		"longname": "The State of Eritrea",
		
		
		"population": 582463
	},
	"ES": {
		"name": "Spain",
		"longname": "The Kingdom of Spain",
		
		
		"population": 47100396
	},
	"ET": {
		"name": "Ethiopia",
		"longname": "The Federal Democratic Republic of Ethiopia",
		
		
		"population": 98665000
	},
	"FI": {
		"name": "Finland",
		"longname": "The Republic of Finland",
		
		
		"population": 5527573
	},
	"FJ": {
		"name": "Fiji",
		"longname": "The Republic of Fiji",
		
		"region": "OC",
		"population": 884887
	},
	"FK": {
		"name": "Falkland Islands",
		"longname": "The Falkland Islands",
		
		
		"population": 3198
	},
	"FM": {
		"name": "Micronesia",
		"longname": "The Federated States of Micronesia",
		
		"region": "OC",
		"population": 112640
	},
	"FO": {
		"name": "Faroe Islands",
		"longname": "The Faroe Islands",
		
		
		"population": 52124
	},
	"FR": {
		"name": "France",
		"longname": "The French Republic",
		
		
		"population": 67064000
	},
	"GA": {
		"name": "Gabon",
		"longname": "The Gabonese Republic",
		
		
		"population": 2172579
	},
	"GB": {
		"name": "United Kingdom",
		"longname": "The United Kingdom of Great Britain and Northern Ireland",
		
		
		"population": 66435600
	},
	"GD": {
		"name": "Grenada",
		"longname": "Grenada",
		
		
		"population": 112003
	},
	"GE": {
		"name": "Georgia",
		"longname": "Georgia",
		
		
		"population": 3723464
	},
	"GF": {
		"name": "French Guiana",
		"longname": "Guyane",
		
		
		"population": 290691
	},
	"GG": {
		"name": "Guernsey",
		"longname": "The Bailiwick of Guernsey",
		
		
		"population": 63026
	},
	"GH": {
		"name": "Ghana",
		"longname": "The Republic of Ghana",
		
		
		"population": 30280811
	},
	"GI": {
		"name": "Gibraltar",
		"longname": "Gibraltar",
		
		
		"population": 32194
	},
	"GL": {
		"name": "Greenland",
		"longname": "Kalaallit Nunaat",
		
		
		"population": 56081
	},
	"GM": {
		"name": "Gambia",
		"longname": "The Republic of The Gambia",
		
		
		"population": 2347706
	},
	"GN": {
		"name": "Guinea",
		"longname": "The Republic of Guinea",
		
		
		"population": 12218357
	},
	"GP": {
		"name": "Guadeloupe",
		"longname": "Guadeloupe",
		
		
		"population": 395700
	},
	"GQ": {
		"name": "Equatorial Guinea",
		"longname": "The Republic of Equatorial Guinea",
		
		
		"population": 1358276
	},
	"GR": {
		"name": "Greece",
		"longname": "The Hellenic Republic",
		
		
		"population": 10724599
	},
	"GS": {
		"name": "South Georgia and the South Sandwich Islands",
		"longname": "South Georgia and the South Sandwich Islands",
		
		
		"population": 30
	},
	"GT": {
		"name": "Guatemala",
		"longname": "The Republic of Guatemala",
		
		
		"population": 16604026
	},
	"GU": {
		"name": "Guam",
		"longname": "The Territory of Guam",
		
		"region": "OC",
		"population": 165768
	},
	"GW": {
		"name": "Guinea-Bissau",
		"longname": "The Republic of Guinea-Bissau",
		
		
		"population": 12218357
	},
	"GY": {
		"name": "Guyana",
		"longname": "The Co-operative Republic of Guyana",
		
		
		"population": 782766
	},
	"HK": {
		"name": "Hong Kong",
		"longname": "The Hong Kong Special Administrative Region of China",
		
		
		"population": 7500700
	},
	"HM": {
		"name": "Heard Island and McDonald Islands",
		"longname": "The Territory of Heard Island and McDonald Islands",
		
		
		"population": 0
	},
	"HN": {
		"name": "Honduras",
		"longname": "The Republic of Honduras",
		
		
		"population": 9158345
	},
	"HR": {
		"name": "Croatia",
		"longname": "The Republic of Croatia",
		
		
		"population": 4076246
	},
	"HT": {
		"name": "Haiti",
		"longname": "The Republic of Haiti",
		
		
		"population": 11577779
	},
	"HU": {
		"name": "Hungary",
		"longname": "Hungary",
		
		
		"population": 9772756
	},
	"ID": {
		"name": "Indonesia",
		"longname": "The Republic of Indonesia",
		
		
		"population": 266911900
	},
	"IE": {
		"name": "Ireland",
		"longname": "Ireland",
		
		
		"population": 4921500
	},
	"IL": {
		"name": "Israel",
		"longname": "The State of Israel",
		
		
		"population": 9171900
	},
	"IM": {
		"name": "Isle of Man",
		"longname": "The Isle of Man",
		
		
		"population": 83314
	},
	"IN": {
		"name": "India",
		"longname": "The Republic of India",
		
		
		"population": 1359812346
	},
	"IO": {
		"name": "British Indian Ocean Territory",
		"longname": "The British Indian Ocean Territory",
		
		
		"population": 0
	},
	"IQ": {
		"name": "Iraq",
		"longname": "The Republic of Iraq",
		
		
		"population": 39127900
	},
	"IR": {
		"name": "Iran",
		"longname": "The Islamic Republic of Iran",
		
		
		"population": 83281956
	},
	"IS": {
		"name": "Iceland",
		"longname": "Iceland",
		
		
		"population": 364260
	},
	"IT": {
		"name": "Italy",
		"longname": "The Italian Republic",
		
		
		"population": 60243406
	},
	"JE": {
		"name": "Jersey",
		"longname": "The Bailiwick of Jersey",
		
		
		"population": 106800
	},
	"JM": {
		"name": "Jamaica",
		"longname": "Jamaica",
		
		
		"population": 2726667
	},
	"JO": {
		"name": "Jordan",
		"longname": "The Hashemite Kingdom of Jordan",
		
		
		"population": 10636364
	},
	"JP": {
		"name": "Japan",
		"longname": "Japan",
		
		
		"population": 126010000
	},
	"KE": {
		"name": "Kenya",
		"longname": "The Republic of Kenya",
		
		
		"population": 47564296
	},
	"KG": {
		"name": "Kyrgyzstan",
		"longname": "The Kyrgyz Republic",
		
		
		"population": 6523500
	},
	"KH": {
		"name": "Cambodia",
		"longname": "The Kingdom of Cambodia",
		
		
		"population": 15288489
	},
	"KI": {
		"name": "Kiribati",
		"longname": "The Republic of Kiribati",
		
		"region": "OC",
		"population": 115847
	},
	"KM": {
		"name": "Comoros",
		"longname": "The Union of the Comoros",
		
		
		"population": 873724
	},
	"KN": {
		"name": "Saint Kitts and Nevis",
		"longname": "Saint Kitts and Nevis",
		
		
		"population": 52823
	},
	"KP": {
		"name": "North Korea",
		"longname": "The Democratic People's Republic of Korea",
		
		
		"population": 25450000
	},
	"KR": {
		"name": "South Korea",
		"longname": "The Republic of Korea",
		
		
		"population": 51780579
	},
	"KW": {
		"name": "Kuwait",
		"longname": "The State of Kuwait",
		
		
		"population": 4420110
	},
	"KY": {
		"name": "Cayman Islands",
		"longname": "The Cayman Islands",
		
		
		"population": 65813
	},
	"KZ": {
		"name": "Kazakhstan",
		"longname": "The Republic of Kazakhstan",
		
		
		"population": 18663384
	},
	"LA": {
		"name": "Laos",
		"longname": "The Lao People's Democratic Republic",
		
		
		"population": 7123205
	},
	"LB": {
		"name": "Lebanon",
		"longname": "The Lebanese Republic",
		
		
		"population": 6825442
	},
	"LC": {
		"name": "Saint Lucia",
		"longname": "Saint Lucia",
		
		
		"population": 178696
	},
	"LI": {
		"name": "Liechtenstein",
		"longname": "The Principality of Liechtenstein",
		
		
		"population": 38557
	},
	"LK": {
		"name": "Sri Lanka",
		"longname": "The Democratic Socialist Republic of Sri Lanka",
		
		
		"population": 21803000
	},
	"LR": {
		"name": "Liberia",
		"longname": "The Republic of Liberia",
		
		
		"population": 4475353
	},
	"LS": {
		"name": "Lesotho",
		"longname": "The Kingdom of Lesotho",
		
		
		"population": 2007201
	},
	"LT": {
		"name": "Lithuania",
		"longname": "The Republic of Lithuania",
		
		
		"population": 2793350
	},
	"LU": {
		"name": "Luxembourg",
		"longname": "The Grand Duchy of Luxembourg",
		
		
		"population": 613894
	},
	"LV": {
		"name": "Latvia",
		"longname": "The Republic of Latvia",
		
		
		"population": 1906800
	},
	"LY": {
		"name": "Libya",
		"longname": "The State of Libya",
		
		
		"population": 6871287
	},
	"MA": {
		"name": "Morocco",
		"longname": "The Kingdom of Morocco",
		
		
		"population": 35839345
	},
	"MC": {
		"name": "Monaco",
		"longname": "The Principality of Monaco",
		
		
		"population": 38300
	},
	"MD": {
		"name": "Moldova",
		"longname": "The Republic of Moldova",
		
		
		"population": 2681735
	},
	"ME": {
		"name": "Montenegro",
		"longname": "Montenegro",
		
		
		"population": 622359
	},
	"MF": {
		"name": "St Martin",
		"longname": "The Collectivity of Saint-Martin",
		
		
		"population": 35107
	},
	"MG": {
		"name": "Madagascar",
		"longname": "The Republic of Madagascar",
		
		
		"population": 25680342
	},
	"MH": {
		"name": "Marshall Islands",
		"longname": "The Republic of the Marshall Islands",
		
		"region": "OC",
		"population": 58413
	},
	"MK": {
		"name": "North Macedonia",
		"longname": "Republic of North Macedonia",
		
		
		"population": 2077132
	},
	"ML": {
		"name": "Mali",
		"longname": "The Republic of Mali",
		
		
		"population": 19973000
	},
	"MM": {
		"name": "Myanmar",
		"longname": "The Republic of the Union of Myanmar",
		
		
		"population": 54339766
	},
	"MN": {
		"name": "Mongolia",
		"longname": "The State of Mongolia",
		
		
		"population": 3307640
	},
	"MO": {
		"name": "Macao",
		"longname": "Macao Special Administrative Region of China",
		
		
		"population": 667400
	},
	"MP": {
		"name": "Northern Mariana Islands",
		"longname": "The Commonwealth of the Northern Mariana Islands",
		
		
		"population": 53883
	},
	"MQ": {
		"name": "Martinique",
		"longname": "Martinique",
		
		
		"population": 376480
	},
	"MR": {
		"name": "Mauritania",
		"longname": "The Islamic Republic of Mauritania",
		
		
		"population": 4077347
	},
	"MS": {
		"name": "Montserrat",
		"longname": "Montserrat",
		
		
		"population": 4989
	},
	"MT": {
		"name": "Malta",
		"longname": "The Republic of Malta",
		
		
		"population": 493559
	},
	"MU": {
		"name": "Mauritius",
		"longname": "The Republic of Mauritius",
		
		
		"population": 1265985
	},
	"MV": {
		"name": "Maldives",
		"longname": "The Republic of Maldives",
		
		
		"population": 374775
	},
	"MW": {
		"name": "Malawi",
		"longname": "The Republic of Malawi",
		
		
		"population": 17563749
	},
	"MX": {
		"name": "Mexico",
		"longname": "The United Mexican States",
		
		
		"population": 126577691
	},
	"MY": {
		"name": "Malaysia",
		"longname": "Malaysia",
		
		
		"population": 32719760
	},
	"MZ": {
		"name": "Mozambique",
		"longname": "The Republic of Mozambique",
		
		
		"population": 30066648
	},
	"NA": {
		"name": "Namibia",
		"longname": "The Republic of Namibia",
		
		
		"population": 2458936
	},
	"NC": {
		"name": "New Caledonia",
		"longname": "New Caledonia",
		
		"region": "OC",
		"population": 282200
	},
	"NE": {
		"name": "Niger",
		"longname": "The Republic of the Niger",
		
		
		"population": 22314743
	},
	"NF": {
		"name": "Norfolk Island",
		"longname": "The Territory of Norfolk Island",
		
		"region": "OC",
		"population": 1748
	},
	"NG": {
		"name": "Nigeria",
		"longname": "The Federal Republic of Nigeria",
		
		
		"population": 206139587
	},
	"NI": {
		"name": "Nicaragua",
		"longname": "The Republic of Nicaragua",
		
		
		"population": 6460411
	},
	"NL": {
		"name": "Netherlands",
		"longname": "The Kingdom of the Netherlands",
		
		
		"population": 17444731
	},
	"NO": {
		"name": "Norway",
		"longname": "The Kingdom of Norway",
		
		
		"population": 5367580
	},
	"NP": {
		"name": "Nepal",
		"longname": "The Federal Democratic Republic of Nepal",
		
		
		"population": 29609623
	},
	"NR": {
		"name": "Nauru",
		"longname": "The Republic of Nauru",
		
		"region": "OC",
		"population": 11000
	},
	"NU": {
		"name": "Niue",
		"longname": "Niue",
		"region": "OC",
		"population": 1620
	},
	"NZ": {
		"name": "New Zealand",
		"longname": "New Zealand",
		
		"region": "OC",
		"population": 4970447
	},
	"OM": {
		"name": "Oman",
		"longname": "The Sultanate of Oman",
		
		
		"population": 4664790
	},
	"PA": {
		"name": "Panama",
		"longname": "The Republic of Panamá",
		
		
		"population": 4218808
	},
	"PE": {
		"name": "Peru",
		"longname": "The Republic of Perú",
		
		
		"population": 32131400
	},
	"PF": {
		"name": "French Polynesia",
		"longname": "French Polynesia",
		
		"region": "OC",
		"population": 275918
	},
	"PG": {
		"name": "Papua New Guinea",
		"longname": "The Independent State of Papua New Guinea",
		
		"region": "OC",
		"population": 8935000
	},
	"PH": {
		"name": "Philippines",
		"longname": "The Republic of the Philippines",
		
		
		"population": 108407287
	},
	"PK": {
		"name": "Pakistan",
		"longname": "The Islamic Republic of Pakistan",
		
		
		"population": 218950520
	},
	"PL": {
		"name": "Poland",
		"longname": "The Republic of Poland",
		
		
		"population": 38386000
	},
	"PM": {
		"name": "Saint Pierre and Miquelon",
		"longname": "The Overseas Collectivity of Saint-Pierre and Miquelon",
		
		
		"population": 6008
	},
	"PN": {
		"name": "Pitcairn Islands",
		"longname": "The Pitcairn, Henderson, Ducie and Oeno Islands",
		
		"region": "OC",
		"population": 50
	},
	"PR": {
		"name": "Puerto Rico",
		"longname": "The Commonwealth of Puerto Rico",
		
		
		"population": 3193694
	},
	"PS": {
		"name": "Palestine",
		"longname": "The State of Palestine",
		"altnames": "State of Palestine",
		
		
		"population": 4976684
	},
	"PT": {
		"name": "Portugal",
		"longname": "The Portuguese Republic",
		
		
		"population": 10276617
	},
	"PW": {
		"name": "Palau",
		"longname": "The Republic of Palau",
		
		"region": "OC",
		"population": 17907
	},
	"PY": {
		"name": "Paraguay",
		"longname": "The Republic of Paraguay",
		
		
		"population": 7152703
	},
	"QA": {
		"name": "Qatar",
		"longname": "The State of Qatar",
		
		
		"population": 2747282
	},
	"RE": {
		"name": "Reunion",
		"longname": "Réunion",
		
		
		"population": 859959
	},
	"RO": {
		"name": "Romania",
		"longname": "Romania",
		
		
		"population": 19405156
	},
	"RS": {
		"name": "Serbia",
		"longname": "The Republic of Serbia",
		
		
		"population": 6963764
	},
	"RU": {
		"name": "Russia",
		"longname": "The Russian Federation",
		
		
		"population": 146745098
	},
	"RW": {
		"name": "Rwanda",
		"longname": "The Republic of Rwanda",
		
		
		"population": 12374397
	},
	"SA": {
		"name": "Saudi Arabia",
		"longname": "The Kingdom of Saudi Arabia",
		
		
		"population": 34218169
	},
	"SB": {
		"name": "Solomon Islands",
		"longname": "The Solomon Islands",
		
		"region": "OC",
		"population": 680806
	},
	"SC": {
		"name": "Seychelles",
		"longname": "The Republic of Seychelles",
		
		
		"population": 97625
	},
	"SD": {
		"name": "Sudan",
		"longname": "The Republic of the Sudan",
		
		
		"population": 42345710
	},
	"SE": {
		"name": "Sweden",
		"longname": "The Kingdom of Sweden",
		
		
		"population": 10333456
	},
	"SG": {
		"name": "Singapore",
		"longname": "The Republic of Singapore",
		
		
		"population": 5703600
	},
	"SH": {
		"name": "Saint Helena, Ascension and Tristan da Cunha",
		"longname": "Saint Helena, Ascension and Tristan da Cunha",
		
		
		"population": 5633
	},
	"SI": {
		"name": "Slovenia",
		"longname": "The Republic of Slovenia",
		
		
		"population": 2094060
	},
	"SJ": {
		"name": "Svalbard and Jan Mayen",
		"longname": "Svalbard and Jan Mayen",		
		"population": 0
	},
	"SK": {
		"name": "Slovakia",
		"longname": "The Slovak Republic",
		
		
		"population": 5456362
	},
	"SL": {
		"name": "Sierra Leone",
		"longname": "The Republic of Sierra Leone",
		
		
		"population": 7901454
	},
	"SM": {
		"name": "San Marino",
		"longname": "The Republic of San Marino",
		
		
		"population": 33344
	},
	"SN": {
		"name": "Senegal",
		"longname": "The Republic of Senegal",
		
		
		"population": 16209125
	},
	"SO": {
		"name": "Somalia",
		"longname": "The Federal Republic of Somalia",
		
		
		"population": 15893219
	},
	"SR": {
		"name": "Suriname",
		"longname": "The Republic of Suriname",
		
		
		"population": 581372
	},
	"SS": {
		"name": "South Sudan",
		"longname": "The Republic of South Sudan",
		
		
		"population": 12778250
	},
	"ST": {
		"name": "Sao Tome and Principe",
		"longname": "The Democratic Republic of São Tomé and Príncipe",
		"altnames": "São Tomé and Príncipe",
		
		
		"population": 201784
	},
	"SV": {
		"name": "El Salvador",
		"longname": "The Republic of El Salvador",
		
		
		"population": 6486201
	},
	"SX": {
		"name": "Sint Maarten",
		"longname": "Sint Maarten",		
		"population": 41486
	},
	"SY": {
		"name": "Syria",
		"longname": "The Syrian Arab Republic",
		"altnames": "Syrian Arab Republic",
		
		
		"population": 17500657
	},
	"SZ": {
		"name": "Eswatini",
		"longname": "The Kingdom of Eswatini",
		"altnames": "Swaziland",
		
		
		"population": 1093238
	},
	"TC": {
		"name": "Turks and Caicos Islands",
		"longname": "The Turks and Caicos Islands",
		
		
		"population": 41369
	},
	"TD": {
		"name": "Chad",
		"longname": "The Republic of Chad",
		
		
		"population": 15692969
	},
	"TF": {
		"name": "French Southern Territories",
		"longname": "The French Southern and Antarctic Lands",
		
		
		"population": 0
	},
	"TG": {
		"name": "Togo",
		"longname": "The Togolese Republic",
		
		
		"population": 7538000
	},
	"TH": {
		"name": "Thailand",
		"longname": "The Kingdom of Thailand",
		
		
		"population": 66481630
	},
	"TJ": {
		"name": "Tajikistan",
		"longname": "The Republic of Tajikistan",
		
		
		"population": 9127000
	},
	"TK": {
		"name": "Tokelau",
		"longname": "Tokelau",
		"region": "OC",
		"population": 1499
	},
	"TL": {
		"name": "Timor-Leste (East Timor)",
		"longname": "The Democratic Republic of Timor-Leste",
		
		
		"population": 1387149
	},
	"TM": {
		"name": "Turkmenistan",
		"longname": "Turkmenistan",
		
		
		"population": 6031187
	},
	"TN": {
		"name": "Tunisia",
		"longname": "The Republic of Tunisia",
		
		
		"population": 11722038
	},
	"TO": {
		"name": "Tonga",
		"longname": "The Kingdom of Tonga",
		
		
		"population": 100651
	},
	"TR": {
		"name": "Turkiye",
		"longname": "The Republic of Turkiye",
		
		
		"population": 83154997
	},
	"TT": {
		"name": "Trinidad and Tobago",
		"longname": "The Republic of Trinidad and Tobago",
		
		
		"population": 1363985
	},
	"TV": {
		"name": "Tuvalu",
		"longname": "Tuvalu",
		
		"region": "OC",
		"population": 11192
	},
	"TW": {
		"name": "Taiwan",
		"longname": "The Republic of China",
		
		"population": 23604265
	},
	"TZ": {
		"name": "Tanzania",
		"longname": "The United Republic of Tanzania",
		
		
		"population": 55890747
	},
	"UA": {
		"name": "Ukraine",
		"longname": "Ukraine",
		
		
		"population": 41902416
	},
	"UG": {
		"name": "Uganda",
		"longname": "The Republic of Uganda",
		
		
		"population": 40299300
	},
	"UM": {
		"name": "United States Minor Outlying Islands",
		"longname": "Baker Island, Howland Island, Jarvis Island, Johnston Atoll, Kingman Reef, Midway Atoll, Navassa Island, Palmyra Atoll, and Wake Island",
		
		"region": "OC",
		"population": 0
	},
	"US": {
		"name": "United States",
		"longname": "The United States of America",
		
		
		"population": 329453849
	},
	"UY": {
		"name": "Uruguay",
		"longname": "The Oriental Republic of Uruguay",
		
		
		"population": 3518552
	},
	"UZ": {
		"name": "Uzbekistan",
		"longname": "The Republic of Uzbekistan",
		
		
		"population": 34070275
	},
	"VA": {
		"name": "Holy See",
		"longname": "The Holy See",
		
		
		"population": 1000
	},
	"VC": {
		"name": "Saint Vincent and the Grenadines",
		"longname": "Saint Vincent and the Grenadines",
		
		
		"population": 110211
	},
	"VE": {
		"name": "Venezuela",
		"longname": "The Bolivarian Republic of Venezuela",
		
		
		"population": 32219521
	},
	"VG": {
		"name": "British Virgin Islands",
		"longname": "The Virgin Islands",
		
		
		"population": 30030
	},
	"VI": {
		"name": "Virgin Islands (U.S.)",
		"longname": "The Virgin Islands of the United States",
		
		
		"population": 104578
	},
	"VN": {
		"name": "Viet Nam",
		"longname": "The Socialist Republic of Viet Nam",
		
		
		"population": 96208984
	},
	"VU": {
		"name": "Vanuatu",
		"longname": "The Republic of Vanuatu",
		
		"region": "OC",
		"population": 304500
	},
	"WF": {
		"name": "Wallis and Futuna",
		"longname": "The Territory of the Wallis and Futuna Islands",
		
		"region": "OC",
		"population": 11558
	},
	"WS": {
		"name": "Samoa",
		"longname": "The Independent State of Samoa",
		
		"region": "OC",
		"population": 195843
	},
	"XK": {
		"name": "Kosovo",
		"longname": "The Republic of Kosovo",
		
		"population": 1810463
	},
	"YE": {
		"name": "Yemen",
		"longname": "The Republic of Yemen",
		
		
		"population": 29825968
	},
	"YT": {
		"name": "Mayotte",
		"longname": "The Department of Mayotte",
		
		
		"population": 279471
	},
	"ZA": {
		"name": "South Africa",
		"longname": "The Republic of South Africa",
		
		
		"population": 58775022
	},
	"ZM": {
		"name": "Zambia",
		"longname": "The Republic of Zambia",
		
		
		"population": 17381168
	},
	"ZW": {
		"name": "Zimbabwe",
		"longname": "The Republic of Zimbabwe",
		
		
		"population": 15159624
	}
}
