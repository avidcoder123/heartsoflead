export function getMapBorders(cid: string) {
  return mapBorders[<keyof typeof mapBorders>cid]
}

export const mapBorders = {
  "AD": ["FR", "ES"],
  "AE": ["OM", "QA", "SA", "IR"],
  "AF": ["PK", "IR", "TM", "UZ", "TJ", "CN"],
  "AL": ["GR", "MK", "RS", "ME", "IT"],
  "AM": ["IR", "AZ", "TR", "GE"],
  "AO": ["NA", "ZM", "CD", "CG"],
  "AR": ["CL", "UY", "BR", "PY", "BO"],
  "AT": ["DE", "CZ", "SK", "HU", "SI", "IT", "CH"],
  "AU": ["NZ", "PG", "ID"],
  "AZ": ["IR", "AM", "GE", "RU"],
  "BA": ["RS", "HR", "ME"],
  "BD": ["IN", "MM"],
  "BE": ["BG", "FR", "NL", "DE", "LU"],
  "BF": ["ML", "NE", "CI", "GH", "TG", "BJ"],
  "BG": ["TR", "MK", "RS", "RO", "GR"],
  "BH": ["QA", "SA", "IR"],
  "BI": ["TZ", "CD", "RW"],
  "BJ": ["NG", "TG", "BF", "NE"],
  "BN": ["MY"],
  "BO": ["PE", "CL", "BR", "PY", "AR"],
  "BR": ["GF", "SR", "GY", "VE", "CO", "PE", "BO", "PY", "AR", "UY"],
  "BS": ["US", "CU", "HT", "DO"],
  "BT": ["CN", "IN"],
  "BW": ["ZA", "NA", "ZW"],
  "BY": ["RU", "UA", "PL", "LT", "LV"],
  "BZ": ["MX", "GT", "HN"],
  "CA": ["US", "GL"],
  "CD": ["CG", "CF", "SS", "UG", "RW", "BI", "TZ", "ZM", "AO"],
  "CF": ["TD", "SD", "SS", "CD", "CG", "CM"],
  "CG": ["CM", "CF", "CD", "AO", "GA"],
  "CH": ["AT", "IT", "FR", "DE"],
  "CI": ["GH", "BF", "ML", "GN", "LR"],
  "CL": ["AR", "BO", "PE"],
  "CM": ["GQ", "NG", "TD", "CF", "CG", "GA"],
  "CN": ["KP", "RU", "MN", "KZ", "KG", "TJ", "AF", "PK", "IN", "NP", "BT", "MM", "VN", "LA"],
  "CO": ["PA", "VE", "BR", "EC", "PE"],
  "CR": ["PA", "NI"],
  "CU": ["US", "BS", "JM", "HT"],
  "CY": ["TR", "SY", "LB"],
  "CZ": ["DE", "PL", "SK", "AT"],
  "DE": ["DK", "SE", "PL", "CZ", "AT", "CH", "FR", "BE", "LU", "NL"],
  "DJ": ["YE", "ER", "ET", "SO"],
  "DK": ["NO", "SE", "DE"],
  "DO": ["HT", "PR"],
  "DZ": ["TN", "LY", "NE", "ML", "MR", "EH", "MA"],
  "EC": ["CO", "PE"],
  "EE": ["FI", "RU", "LV"],
  "EG": ["IL", "SA", "LY", "SD", "SA", "JO"],
  "EH": ["MA", "DZ", "MR"],
  "ER": ["YE", "DJ", "ET", "SD"],
  "ES": ["MA", "PT", "FR"],
  "ET": ["SO", "DJ", "ER", "KE", "SS", "SD"],
  "FI": ["RU", "EE", "SE", "NO"],
  "FK": ["AR", "CL"],
  "FR": ["BE", "LU", "DE", "CH", "IT", "ES", "GB"],
  "GA": ["CG", "GQ", "CM"],
  "GB": ["IE", "FR", "BE", "NL", "IS"],
  "GE": ["RU", "AZ", "AM", "TR"],
  "GF": ["BR", "SR"],
  "GH": ["TG", "BF", "CI"],
  "GL": ["CA","IS"],
  "GM": ["SN"],
  "GN": ["SN", "GW", "ML", "CI", "LR", "SL"],
  "GQ": ["GA", "CM"],
  "GR": ["TR", "BG", "MK", "AL"],
  "GT": ["MX", "BZ", "HN", "SV"],
  "GW": ["GN", "SN"],
  "GY": ["SR", "BR", "VE"],
  "HN": ["NI", "SV", "GT"],
  "HR": ["BA", "RS", "HU", "SI", "IT"],
  "HT": ["DO", "CU", "JM"],
  "HU": ["SK", "UA", "RO", "RS", "HR", "SI", "AT"],
  "ID": ["PG", "AU", "MY", "PH"],
  "IE": ["GB", "IS"],
  "IL": ["EG", "PS", "LB", "SY", "JO"],
  "IN": ["LK", "MM", "BD", "BT", "CN", "NP", "PK"],
  "IQ": ["IR", "TR", "SY", "JO", "SA", "KW"],
  "IR": ["TM", "AF", "PK", "AE", "QA", "BH"],
  "IS": ["GL", "GB", "IE"],
  "IT": ["FR", "CH", "AT", "SI", "HR", "AL"],
  "JM": ["HT", "CU"],
  "JO": ["IL", "PS", "SY", "IQ", "SA"],
  "JP": ["RU", "KP", "KR"],
  "KE": ["SO", "ET", "SS", "UG", "TZ"],
  "KG": ["KZ", "CN", "TJ", "UZ"],
  "KH": ["VN", "LA", "TH"],
  "KP": ["RU", "CN", "KR", "KP"],
  "KR": ["JP", "KP"],
  "KW": ["IR", "IQ", "SA"],
  "KZ": ["RU", "CN", "KG", "UZ", "TM"],
  "LA": ["CN", "VN", "KH", "TH", "MM"],
  "LB": ["SY", "JO", "IL", "CY"],
  "LI": ["AT", "CH"],
  "LK": ["IN"],
  "LR": ["CI", "GN", "SL"],
  "LS": ["ZA"],
  "LT": ["LV", "BY", "PL"],
  "LU": ["DE", "FR", "BE"],
  "LV": ["EE", "RU", "BY", "LT"],
  "LY": ["EG", "SD", "TD", "NE", "DZ", "TN"],
  "MA": ["ES", "DZ", "EH"],
  "MC": ["FR"],
  "MD": ["UA", "RO"],
  "ME": ["AL", "RS", "BA"],
  "MG": ["MZ"],
  "MK": ["RS", "BG", "GR", "AL"],
  "ML": ["DZ", "NE", "BF", "CI", "GN", "SN", "MR"],
  "MM": ["TH", "LA", "CN", "IN", "BD"],
  "MN": ["RU", "CN"],
  "MO": ["CN"],
  "MR": ["EH", "DZ", "ML", "SN"],
  "MW": ["MZ", "ZM", "TZ"],
  "MX": ["US", "GT", "CU"],
  "MY": ["BN", "ID", "TH", "PH"],
  "MZ": ["MD", "TZ", "MW", "ZW", "ZA", "SZ"],
  "NA": ["ZA", "BW", "ZM", "AO"],
  "NE": ["DZ", "LY", "TD", "NG", "BJ", "BF", "ML"],
  "NG": ["CM", "TD", "NE", "BJ"],
  "NI": ["CR", "HN", "SV"],
  "NL": ["DE", "BE", "GB"],
  "NO": ["SE", "FI", "RU"],
  "NP": ["CN", "IN"],
  "NZ": ["AU"],
  "OM": ["YE", "SA", "AE", "IR"],
  "PA": ["CO", "CR"],
  "PE": ["CL", "BO", "BR", "CO", "EC"],
  "PG": ["AU", "ID"],
  "PH": ["MY"],
  "PK": ["IN", "CN", "AF", "IR"],
  "PL": ["LT", "BY", "UA", "SK", "CZ", "DE"],
  "PR": ["DO"],
  "PS": ["IL", "JO", "EG"],
  "PT": ["ES"],
  "PY": ["BR", "BO", "AR"],
  "QA": ["SA", "IR"],
  "RO": ["UA", "MD", "BG", "RS", "HU"],
  "RS": ["HU", "RO", "BG", "MK", "AL", "ME", "BA", "HR"],
  "RU": ["US", "NO", "FI", "EE", "LV", "BY", "UA", "GE", "AZ", "KZ", "MN", "KP", "JP"],
  "RW": ["UG", "TZ", "BI", "CD"],
  "SA": ["JO", "IQ", "KW", "BH", "QA", "AE", "OM", "YE", "EG"],
  "SD": ["EG", "LY", "TD", "CF", "SS", "ET", "ER"],
  "SE": ["NO", "FI", "DK"],
  "SG": ["MY"],
  "SI": ["AT", "HU", "HR", "IT"],
  "SK": ["CZ", "PL", "UA", "HU", "AT"],
  "SL": ["LR", "GN"],
  "SN": ["GM", "MR", "ML", "GN", "GW"],
  "SO": ["KE", "ET", "DJ"],
  "SR": ["BR", "GF", "GY"],
  "SS": ["SD", "ET", "KE", "UG", "CD", "CF"],
  "SV": ["GT", "HN", "NI"],
  "SY": ["TR", "IQ", "JO", "IL", "LB"],
  "SZ": ["MZ", "ZA"],
  "TD": ["SD", "CF", "CM", "NG", "NE", "LY"],
  "TG": ["BJ", "GH", "BF"],
  "TH": ["MM", "LA", "KH", "MY"],
  "TJ": ["UZ", "KG", "CN", "AF"],
  "TL": ["ID", "AU"],
  "TM": ["UZ", "AF", "IR"],
  "TN": ["LY", "DZ"],
  "TR": ["BG", "GR", "GE", "AM", "IR", "IQ", "SY", "CY"],
  "TZ": ["KE", "UG", "RW", "BI", "CD", "ZM", "MW"],
  "UA": ["RU", "BY", "PL", "SK", "HU", "RO", "MD"],
  "UG": ["SS", "KE", "TZ", "RW", "CD", ""],
  "US": ["MX", "CU", "CA", "RU"],
  "UY": ["BR", "AR"],
  "UZ": ["KZ", "KG", "TJ", "TM"],
  "VA": ["IT"],
  "VE": ["GY", "BR", "CO"],
  "VN": ["CN", "LA", "KH"],
  "YE": ["SA", "OM", "ER", "DJ"],
  "ZA": ["NA", "BW", "ZW", "MZ", "SZ", "LS"],
  "ZM": ["CD", "TZ", "MW", "MZ", "ZW", "NA", "AO"],
  "ZW": ["MZ", "ZA", "BW", "ZM"],
}