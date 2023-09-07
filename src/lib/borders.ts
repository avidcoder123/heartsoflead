export function getMapBorders(cid: string) {
  return mapBorders[<keyof typeof mapBorders>cid]
}

export const mapBorders = {
  "AF": ["IR", "PK", "TM", "UZ", "TJ", "CN"],
  "AL": ["ME", "MK", "GR", "XK"],
  "DZ": ["NE", "LY", "MR", "ML", "TN", "EH", "MA"],
  "AD": ["FR", "ES"],
  "AO": ["CD", "NA", "ZM", "CG"],
  "AG": ["GD"],
  "AR": ["CL", "BO", "PY", "BR", "UY"],
  "AM": ["GE", "AZ", "IR", "TR"],
  "AU": ["NZ", "PG"],
  "AT": ["DE", "CZ", "SK", "HU", "SI", "IT", "LI", "CH"],
  "AZ": ["GE", "IR", "AM", "TR"],
  "BS": ["US", "CU"],
  "BH": ["SA", "QA"],
  "BD": ["IN", "MM"],
  "BB": ["LC", "VC", "VE", "TT", "GD", "GY"],
  "BY": ["LV", "LT", "PL", "RU", "UA"],
  "BE": ["FR", "DE", "LU", "NL"],
  "BZ": ["GT", "MX"],
  "BJ": ["NE", "TG", "NG", "BF"],
  "BT": ["CN", "IN"],
  "BO": ["PE", "CL", "PY", "BR"],
  "BA": ["ME", "HR", "RS"],
  "BW": ["NA", "ZA", "ZM", "ZW"],
  "BR": ["SR", "PY", "UY", "GY", "VE", "CO", "PE", "BO", "AR"],
  "BN": ["MY"],
  "BG": ["RO", "RS", "MK", "GR", "TR"],
  "BF": ["NE", "TG", "BJ", "GH", "CI", "ML", "SN"],
  "BI": ["TZ", "CD", "RW"],
  "CA": ["US", "GL"],
  "CV": ["GM", "GW", "MR", "SN"],
  "CF": ["TD", "SD", "SS", "CD", "CG", "CM"],
  "CL": ["PE", "AR", "BO"],
  "CN": ["AF", "BT", "IN", "KZ", "KG", "LA", "MN", "MM", "NP", "KP", "PK", "RU", "TJ", "TM", "UZ", "VN"],
  "CO": ["BR", "PE", "EC", "PA", "VE"],
  "KM": ['YT', 'RE', 'MG', 'MZ'],
  "CD": ["TZ", "RW", "BI", "UG", "CG", "CF", "ZM", "AO"],
  "CG": ["GA", "CM", "CF", "CD", "AO"],
  "CR": ["NI", "PA"],
  "CI": ["BF", "GH", "LR", "ML"],
  "HR": ["SI", "HU", "BA", "RS", "ME"],
  "CU": ["US"],
  "CY": ['LB', 'SY', 'EG', 'TR', 'GR'],
  "CZ": ["DE", "PL", "SK", "AT"],
  "DJ": ["ER", "ET", "SO"],
  "DM": ['MQ', 'GD', 'VE', 'PR', 'VI', 'AG', 'KN', 'TO', 'MF', 'SX', 'GP', 'MS', 'TT', 'BB', 'LC'],
  "DO": ["HT"],
  "TL": ["ID"],
  "EC": ["CO", "PE"],
  "EG": ["IL", "LY", "PS", "SD"],
  "SV": ["GT", "HN"],
  "GQ": ["GA", "CM"],
  "ER": ["ET", "SD", "DJ"],
  "EE": ["LV", "RU"],
  "ET": ["ER", "KE", "SO", "SD", "SS"],
  "FI": ["NO", "SE", "RU"],
  "FR": ["AD", "BE", "DE", "IT", "LU", "MC", "ES", "CH", "GB"],
  "UK": ["FR", "IS"],
  "GA": ["CM", "GQ", "CG"],
  "GM": ["SN"],
  "GE": ["AM", "AZ", "RU", "TR"],
  "DE": ["AT", "BE", "CZ", "DK", "FR", "LU", "NL", "PL", "CH"],
  "GH": ["BF", "CI", "TG"],
  "GR": ["AL", "BG", "TR", "MK"],
  "GD":['VC', 'BB', 'TT', 'DM', 'KN', 'AI', 'MF', 'SX'],
  "GT": ["BZ", "SV", "HN", "MX"],
  "GN": ["GW", "LR", "ML", "SN", "CI"],
  "GW": ["GN", "SN"],
  "GY": ["BR", "SR", "VE"],
  "HT": ["DO"],
  "HN": ["GT", "SV", "NI"],
  "HU": ["AT", "HR", "RO", "RS", "SK", "SI", "UA"],
  "IS": ['GL', 'FO', 'NO', 'GB', 'IE', 'CA', 'RU'],
  "IN": ["AF", "BD", "BT", "CN", "MM", "NP", "PK"],
  "ID": ["MY", "PG", "TL"],
  "IR": ["AF", "AM", "AZ", "IQ", "PK", "TR", "TM"],
  "IQ": ["IR", "JO", "KW", "SA", "SY", "TR"],
  "IE": ["GB"],
  "GL": ["IS", "CA"],
  "IL": ["EG", "JO", "LB", "PS", "SY"],
  "IT": ["AT", "CH", "FR", "SI", "SM", "VA"],
  "JM": ['CU', 'HT', 'CO', 'PA', 'CR', 'HN', 'NI', 'BS', 'VE', 'DO'],
  "JP": ["KP", "KR"],
  "JO": ["IQ", "IL", "SA", "SY"],
  "KZ": ["CN", "KG", "RU", "TM", "UZ"],
  "KE": ["ET", "SO", "SS", "TZ", "UG"],
  "KI":['MH', 'NR', 'TV', 'TO', 'FJ', 'WS'],
  "KP": ["CN", "KR", "RU", "JP"],
  "KR": ["KP", "JP"],
  "KW": ["IQ", "SA"],
  "KG": ["CN", "KZ", "TJ", "UZ"],
  "LA": ["CN", "KH", "MM", "TH", "VN"],
  "LV": ["BY", "EE", "LT", "RU"],
  "LB": ["IL", "SY"],
  "LS": ["ZA"],
  "LR": ["CI", "GN", "SL"],
  "LY": ["DZ", "NE", "SD", "TD", "TN"],
  "LI": ["AT", "CH"],
  "LT": ["BY", "LV", "PL", "RU"],
  "LU": ["BE", "DE", "FR"],
    "MG":['YT', 'RE', 'KM', 'MZ'],
  "MW": ["MZ", "TZ", "ZM"],
  "MY": ["BN", "ID", "TH"],
  "MV": ['IN', 'LK'],
  "ML": ["DZ", "BF", "CI", "GN", "MR", "NE", "SN"],
  "MT": ['IT', 'TN', 'LY', 'GR', 'DZ'],
  "MH": ['FM', 'PW', 'KI', 'NR'],
  "MR": ["DZ", "ML", "SN", "EH"],
  "MU": ['RE', 'MG'],
  "MX": ["BZ", "GT", "US"],
  "FM": ['MH', 'PW', 'KI'],
  "MD": ["RO", "UA"],
  "MC": ["FR"],
  "MM": ["TH", "BD", "CN", "IN", "LA"],
  "MN": ["CN", "RU"],
  "ME": ["AL", "BA", "HR", "XK"],
  "MA": ["DZ", "EH"],
  "MZ": ["MW", "SZ", "ZA", "TZ", "ZM", "ZW"],
  "NA": ["BW", "ZA", "ZM"],
  "NR":['MH', 'PW', 'KI'],
  "NP": ["CN", "IN"],
  "NL": ["BE", "DE"],
  "NZ": ["AU"],
  "NI": ["CR", "HN"],
  "NE": ["DZ", "BF", "NG", "ML", "LY", "TD"],
  "NG": ["BJ", "CM", "TD", "NE"],
  "MK": ["AL", "BG", "GR", "XK"],
  "NO": ["FI", "RU", "SE"],
  "OM": ["SA", "AE", "YE"],
  "PK": ["AF", "CN", "IN", "IR"],
  "PW": ['MH', 'FM', 'KI'],
  "PS": ["EG", "IL"],
  "PA": ["CO", "CR"],
  "PG": ["ID"],
  "PY": ["AR", "BO", "BR"],
  "PE": ["BR", "CL", "CO", "EC"],
  "PH": ['MY', 'TW', 'CN', 'VN'],
  "PL": ["BY", "CZ", "DE", "LT", "RU", "SK", "UA"],
  "PT": ["ES"],
  "QA": ["SA"],
  "RO": ["BG", "HU", "MD", "RS", "UA"],
  "RU": ["AZ", "BY", "CN", "EE", "FI", "GE", "KZ", "KP", "LV", "LT", "MN", "NO", "PL", "UA", "US"],
  "RW": ["BI", "CD", "TZ", "UG"],
  "SA": ["IQ", "JO", "KW", "OM", "QA", "AE", "YE"],
  "SN": ["GM", "GN", "GW", "ML", "MR"],
  "RS": ["BA", "BG", "HR", "HU", "XK", "ME", "MK", "RO"],
  "SC": ['MZ', 'MG'],
  "SL": ["GN", "LR"],
  "SG": ['MY', 'ID'],
  "SK": ["AT", "CZ", "HU", "PL", "UA"],
  "SI": ["AT", "HR", "HU", "IT"],
  "SB": [],
  "SO": ["DJ", "ET", "KE"],
  "SS": ["CD", "CF", "ET", "KE", "SD", "UG"],
  "ES": ["AD", "FR", "GI", "PT"],
  "LK": ["IN"],
  "SD": ["CF", "TD", "EG", "ER", "ET", "LY", "SS"],
  "SR": ["BR", "GF"],
  "SE": ["FI", "NO"],
  "CH": ["AT", "DE", "FR", "IT", "LI"],
  "SY": ["IQ", "IL", "JO", "LB", "TR"],
  "TJ": ["AF", "CN", "KG", "UZ"],
  "TZ": ["BI", "CD", "KE", "MW", "MZ", "RW", "UG", "ZM"],
  "TH": ["KH", "LA", "MM", "MY"],
  "TG": ["BJ", "BF", "GH"],
  "TO": ['FJ', 'WS', 'KI', 'NU', 'WF'],
  "TT": ['VE', 'GD', 'BB', 'DM'],
  "TN": ["DZ", "LY"],
  "TR": ["AM", "AZ", "BG", "GE", "IR", "IQ", "SY"],
  "TM": ["AF", "IR", "KZ", "UZ"],
  "UG": ["CD", "KE", "RW", "SS", "TZ"],
  "UA": ["BY", "HU", "MD", "PL", "RO", "RU", "SK"],
  "AE": ["OM", "SA"],
  "GB": ["IE", "FR", "IS"],
  "US": ["CA", "MX", "RU", "CU"],
  "UY": ["AR", "BR"],
  "UZ": ["AF", "KZ", "KG", "TJ", "TM"],
  "VA": ["IT"],
  "VE": ["BR", "CO", "GY"],
  "VN": ["CN", "KH", "LA"],
  "VU": [],
  "EH": ["DZ", "MR", "MA"],
  "YE": ["OM", "SA"],
  "ZA": ["BW", "LS", "MZ", "NA", "SZ", "ZW"],
  "ZM": ["AO", "BW", "CD", "MW", "MZ", "NA", "TZ", "ZW"],
  "ZW": ["BW", "MZ", "ZA", "ZM"]
}
