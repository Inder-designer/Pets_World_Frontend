import { Countries } from "./countries";

const countryToZipCodes = {
  AF: {
    label: "Postal Code",
    placeholder: "1001",
    regex: "^\\d{4}$",
    required: false
  },
  AX: {
    label: "Postal Code",
    placeholder: "22100",
    regex: "^22\\d{3}$",
    required: true
  },
  AL: {
    label: "Postal Code",
    placeholder: "1001",
    regex: "^\\d{4}$",
    required: false
  },
  DZ: {
    label: "Postal Code",
    placeholder: "16000",
    regex: "^\\d{5}$",
    required: true
  },
  AS: {
    label: "ZIP Code",
    placeholder: "96799",
    regex: "^96799$",
    required: true
  },
  AD: {
    label: "Postal Code",
    placeholder: "AD100",
    regex: "^AD\\d{3}$",
    required: true
  },
  AO: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  AI: {
    label: "Postal Code",
    placeholder: "AI-2640",
    regex: "^AI-2640$",
    required: false
  },
  AQ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  AG: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  AR: {
    label: "Postal Code",
    placeholder: "C1000ABC",
    regex: "^[A-Z]\\d{4}[A-Z]{3}$",
    required: true
  },
  AM: {
    label: "Postal Code",
    placeholder: "0010",
    regex: "^\\d{4}$",
    required: true
  },
  AW: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  AU: {
    label: "Postcode",
    placeholder: "2000",
    regex: "^\\d{4}$",
    required: true
  },
  AT: {
    label: "Postleitzahl",
    placeholder: "1010",
    regex: "^\\d{4}$",
    required: true
  },
  AZ: {
    label: "Postal Code",
    placeholder: "AZ1000",
    regex: "^AZ\\d{4}$",
    required: true
  },
  BS: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BH: {
    label: "Postal Code",
    placeholder: "123",
    regex: "^\\d{3,4}$",
    required: true
  },
  BD: {
    label: "Postal Code",
    placeholder: "1212",
    regex: "^\\d{4}$",
    required: true
  },
  BB: {
    label: "Postal Code",
    placeholder: "BB12345",
    regex: "^BB\\d{5}$",
    required: false
  },
  BY: {
    label: "Postal Code",
    placeholder: "220030",
    regex: "^\\d{6}$",
    required: true
  },
  BE: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: true
  },
  BZ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BJ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BM: {
    label: "Postal Code",
    placeholder: "HM 12",
    regex: "^[A-Z]{2} ?\\d{2}$",
    required: true
  },
  BT: {
    label: "Postal Code",
    placeholder: "11001",
    regex: "^\\d{5}$",
    required: true
  },
  BO: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BQ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BA: {
    label: "Postal Code",
    placeholder: "71000",
    regex: "^\\d{5}$",
    required: true
  },
  BW: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BV: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BR: {
    label: "CEP",
    placeholder: "01000-000",
    regex: "^\\d{5}-\\d{3}$",
    required: true
  },
  IO: {
    label: "Postal Code",
    placeholder: "BBND 1ZZ",
    regex: "^[A-Z]{4} ?1ZZ$",
    required: false
  },
  BN: {
    label: "Postal Code",
    placeholder: "BB3713",
    regex: "^[A-Z]{2}\\d{4}$",
    required: true
  },
  BG: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: true
  },
  BF: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BI: {
    label: "Postal Code",
    placeholder: "1234",
    regex: "^\\d{4}$",
    required: false
  },
  KH: {
    label: "Postal Code",
    placeholder: "12000",
    regex: "^\\d{5}$",
    required: false
  },
  CM: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  CA: {
    label: "Postal Code",
    placeholder: "K1A 0B1",
    regex: "^[A-Z]\\d[A-Z] ?\\d[A-Z]\\d$",
    required: true
  },
  CV: {
    label: "Postal Code",
    placeholder: "7600",
    regex: "^\\d{4}$",
    required: true
  },
  KY: {
    label: "Postal Code",
    placeholder: "KY1-1100",
    regex: "^KY\\d-\\d{4}$",
    required: true
  },
  CF: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TD: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  CL: {
    label: "Postal Code",
    placeholder: "8320000",
    regex: "^\\d{7}$",
    required: true
  },
  CN: {
    label: "Postal Code",
    placeholder: "100000",
    regex: "^\\d{6}$",
    required: true
  },
  CX: {
    label: "Postal Code",
    placeholder: "6798",
    regex: "^6798$",
    required: true
  },
  CC: {
    label: "Postal Code",
    placeholder: "6799",
    regex: "^6799$",
    required: true
  },
  CO: {
    label: "Postal Code",
    placeholder: "110111",
    regex: "^\\d{6}$",
    required: true
  },
  KM: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  CG: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  CD: {
    label: "Postal Code",
    placeholder: "12345",
    regex: "^\\d{5}$",
    required: false
  },
  CK: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  CR: {
    label: "Postal Code",
    placeholder: "10101",
    regex: "^\\d{5}$",
    required: true
  },
  CI: {
    label: "Postal Code",
    placeholder: "01 BP 1234 ABJ",
    regex: ".*",
    required: false
  },
  HR: {
    label: "Postal Code",
    placeholder: "10000",
    regex: "^\\d{5}$",
    required: true
  },
  CU: {
    label: "Postal Code",
    placeholder: "10700",
    regex: "^\\d{5}$",
    required: true
  },
  CW: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  CY: {
    label: "Postal Code",
    placeholder: "1010",
    regex: "^\\d{4}$",
    required: true
  },
  CZ: {
    label: "Postal Code",
    placeholder: "110 00",
    regex: "^\\d{3} ?\\d{2}$",
    required: true
  },
  DK: {
    label: "Postal Code",
    placeholder: "2100",
    regex: "^\\d{4}$",
    required: true
  },
  DJ: {
    label: "Postal Code",
    placeholder: "99999",
    regex: "^99999$",
    required: false
  },
  DM: {
    label: "Postal Code",
    placeholder: "DM00101",
    regex: "^(DM)?\\d{5}$",
    required: false
  },
  DO: {
    label: "Postal Code",
    placeholder: "10101",
    regex: "^\\d{5}$",
    required: true
  },
  EC: {
    label: "Postal Code",
    placeholder: "170150",
    regex: "^\\d{6}$",
    required: true
  },
  EG: {
    label: "Postal Code",
    placeholder: "11311",
    regex: "^\\d{5}$",
    required: true
  },
  SV: {
    label: "Postal Code",
    placeholder: "01101",
    regex: "^\\d{4,5}$",
    required: true
  },
  GQ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  ER: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  EE: {
    label: "Postal Code",
    placeholder: "10115",
    regex: "^\\d{5}$",
    required: true
  },
  ET: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: false
  },
  FK: {
    label: "Postal Code",
    placeholder: "FIQQ 1ZZ",
    regex: "^(FIQQ 1ZZ)?$",
    required: true
  },
  FO: {
    label: "Postal Code",
    placeholder: "FO-110",
    regex: "^FO-\\d{3}$",
    required: true
  },
  FJ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  FI: {
    label: "Postal Code",
    placeholder: "00100",
    regex: "^\\d{5}$",
    required: true
  },
  FR: {
    label: "Postal Code",
    placeholder: "75008",
    regex: "^\\d{5}$",
    required: true
  },
  GF: {
    label: "Postal Code",
    placeholder: "97300",
    regex: "^973\\d{2}$",
    required: true
  },
  PF: {
    label: "Postal Code",
    placeholder: "98709",
    regex: "^987\\d{2}$",
    required: true
  },
  TF: {
    label: "Postal Code",
    placeholder: "98400",
    regex: "^984\\d{2}$",
    required: true
  },
  GA: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  GM: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  GE: {
    label: "Postal Code",
    placeholder: "0105",
    regex: "^\\d{4}$",
    required: true
  },
  DE: {
    label: "Postal Code",
    placeholder: "10115",
    regex: "^\\d{5}$",
    required: true
  },
  GH: {
    label: "Postal Code",
    placeholder: "GA184",
    regex: "^[A-Z]{2}\\d{3}$",
    required: false
  },
  GI: {
    label: "Postal Code",
    placeholder: "GX11 1AA",
    regex: "^(GX11 1AA)?$",
    required: false
  },
  GR: {
    label: "Postal Code",
    placeholder: "10558",
    regex: "^\\d{5}$",
    required: true
  },
  GL: {
    label: "Postal Code",
    placeholder: "3900",
    regex: "^\\d{4}$",
    required: true
  },
  GD: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  GP: {
    label: "Postal Code",
    placeholder: "97100",
    regex: "^971\\d{2}$",
    required: true
  },
  GU: {
    label: "ZIP Code",
    placeholder: "96910",
    regex: "^969\\d{2}$",
    required: true
  },
  GT: {
    label: "Postal Code",
    placeholder: "01001",
    regex: "^\\d{5}$",
    required: true
  },
  GG: {
    label: "Postal Code",
    placeholder: "GY1 1AA",
    regex: "^(GY\\d{1,2}\\s?\\d[ABD-HJLNP-UW-Z]{2})$",
    required: true
  },
  GN: {
    label: "Postal Code",
    placeholder: "224",
    regex: "^\\d{3}$",
    required: false
  },
  GW: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  GY: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  HT: {
    label: "Postal Code",
    placeholder: "HT6110",
    regex: "^HT\\d{4}$",
    required: true
  },
  HM: {
    label: "Postal Code",
    placeholder: "7050",
    regex: "^\\d{4}$",
    required: true
  },
  VA: {
    label: "Postal Code",
    placeholder: "00120",
    regex: "^00120$",
    required: true
  },
  HN: {
    label: "Postal Code",
    placeholder: "11101",
    regex: "^\\d{5}$",
    required: true
  },
  HK: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  HU: {
    label: "Postal Code",
    placeholder: "1051",
    regex: "^\\d{4}$",
    required: true
  },
  IS: {
    label: "Postal Code",
    placeholder: "101",
    regex: "^\\d{3}$",
    required: true
  },
  IN: {
    label: "PIN Code",
    placeholder: "110001",
    regex: "^\\d{6}$",
    required: true
  },
  ID: {
    label: "Postal Code",
    placeholder: "40115",
    regex: "^\\d{5}$",
    required: true
  },
  IR: {
    label: "Postal Code",
    placeholder: "11369-14348",
    regex: "^\\d{5}-?\\d{5}$",
    required: true
  },
  IQ: {
    label: "Postal Code",
    placeholder: "10011",
    regex: "^\\d{5}$",
    required: false
  },
  IE: {
    label: "Eircode",
    placeholder: "D02 X285",
    regex: "^[A-Z0-9]{3}\\s?[A-Z0-9]{4}$",
    required: true
  },
  IM: {
    label: "Postal Code",
    placeholder: "IM1 1AA",
    regex: "^(IM\\d{1,2}\\s?\\d[ABD-HJLNP-UW-Z]{2})$",
    required: true
  },
  IL: {
    label: "Postal Code",
    placeholder: "9614303",
    regex: "^\\d{7}$",
    required: true
  },
  IT: {
    label: "CAP",
    placeholder: "00144",
    regex: "^\\d{5}$",
    required: true
  },
  JM: {
    label: "Postal Code",
    placeholder: "JMACE13",
    regex: "^JM[A-Z]{3}\\d{2}$",
    required: false
  },
  JP: {
    label: "Postal Code",
    placeholder: "100-0001",
    regex: "^\\d{3}-\\d{4}$",
    required: true
  },
  JE: {
    label: "Postal Code",
    placeholder: "JE1 1AA",
    regex: "^(JE\\d{1,2}\\s?\\d[ABD-HJLNP-UW-Z]{2})$",
    required: true
  },
  JO: {
    label: "Postal Code",
    placeholder: "11118",
    regex: "^\\d{5}$",
    required: true
  },
  KZ: {
    label: "Postal Code",
    placeholder: "050000",
    regex: "^\\d{6}$",
    required: true
  },
  KE: {
    label: "Postal Code",
    placeholder: "00100",
    regex: "^\\d{5}$",
    required: true
  },
  KI: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  KP: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  KR: {
    label: "Postal Code",
    placeholder: "04524",
    regex: "^\\d{5}$",
    required: true
  },
  XK: {
    label: "Postal Code",
    placeholder: "10000",
    regex: "^\\d{5}$",
    required: true
  },
  KW: {
    label: "Postal Code",
    placeholder: "32001",
    regex: "^\\d{5}$",
    required: true
  },
  KG: {
    label: "Postal Code",
    placeholder: "720001",
    regex: "^\\d{6}$",
    required: true
  },
  LA: {
    label: "Postal Code",
    placeholder: "01000",
    regex: "^\\d{5}$",
    required: false
  },
  LV: {
    label: "Postal Code",
    placeholder: "LV-1001",
    regex: "^LV-\\d{4}$",
    required: true
  },
  LB: {
    label: "Postal Code",
    placeholder: "2038 3054",
    regex: "^\\d{4}(\\s\\d{4})?$",
    required: false
  },
  LS: {
    label: "Postal Code",
    placeholder: "100",
    regex: "^\\d{3}$",
    required: true
  },
  LR: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: false
  },
  LY: {
    label: "Postal Code",
    placeholder: "21845",
    regex: "^\\d{5}$",
    required: false
  },
  LI: {
    label: "Postal Code",
    placeholder: "9490",
    regex: "^\\d{4}$",
    required: true
  },
  LT: {
    label: "Postal Code",
    placeholder: "LT-01100",
    regex: "^LT-\\d{5}$",
    required: true
  },
  LU: {
    label: "Postal Code",
    placeholder: "L-1111",
    regex: "^(L-)?\\d{4}$",
    required: true
  },
  MO: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  MK: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: true
  },
  MG: {
    label: "Postal Code",
    placeholder: "101",
    regex: "^\\d{3}$",
    required: true
  },
  MW: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  MY: {
    label: "Postal Code",
    placeholder: "50450",
    regex: "^\\d{5}$",
    required: true
  },
  MV: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  ML: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  MT: {
    label: "Postal Code",
    placeholder: "BKR 4012",
    regex: "^[A-Z]{3}\\s?\\d{4}$",
    required: true
  },
  MH: {
    label: "Postal Code",
    placeholder: "96960",
    regex: "^969[67]\\d$",
    required: true
  },
  MQ: {
    label: "Postal Code",
    placeholder: "97200",
    regex: "^972\\d{2}$",
    required: true
  },
  MR: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  MU: {
    label: "Postal Code",
    placeholder: "742CU001",
    regex: "^[0-9A-Z]{3,10}$",
    required: false
  },
  YT: {
    label: "Postal Code",
    placeholder: "97600",
    regex: "^976\\d{2}$",
    required: true
  },
  MX: {
    label: "Postal Code",
    placeholder: "01000",
    regex: "^\\d{5}$",
    required: true
  },
  FM: {
    label: "Postal Code",
    placeholder: "96941",
    regex: "^9694[1-4]$",
    required: true
  },
  MD: {
    label: "Postal Code",
    placeholder: "MD-2012",
    regex: "^MD-\\d{4}$",
    required: true
  },
  MC: {
    label: "Postal Code",
    placeholder: "98000",
    regex: "^980\\d{2}$",
    required: true
  },
  MN: {
    label: "Postal Code",
    placeholder: "15160",
    regex: "^\\d{5}$",
    required: true
  },
  ME: {
    label: "Postal Code",
    placeholder: "81000",
    regex: "^8\\d{4}$",
    required: true
  },
  MS: {
    label: "Postal Code",
    placeholder: "MSR 1110",
    regex: "^MSR\\s\\d{4}$",
    required: false
  },
  MA: {
    label: "Postal Code",
    placeholder: "40000",
    regex: "^\\d{5}$",
    required: true
  },
  MZ: {
    label: "Postal Code",
    placeholder: "1100",
    regex: "^\\d{4}$",
    required: true
  },
  MM: {
    label: "Postal Code",
    placeholder: "11181",
    regex: "^\\d{5}$",
    required: true
  },
  NA: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  NR: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  NP: {
    label: "Postal Code",
    placeholder: "44600",
    regex: "^\\d{5}$",
    required: true
  },
  NL: {
    label: "Postal Code",
    placeholder: "1234 AB",
    regex: "^\\d{4}\\s?[A-Z]{2}$",
    required: true
  },
  NC: {
    label: "Postal Code",
    placeholder: "98800",
    regex: "^988\\d{2}$",
    required: true
  },
  NZ: {
    label: "Postal Code",
    placeholder: "6011",
    regex: "^\\d{4}$",
    required: true
  },
  NI: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  NE: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  NG: {
    label: "Postal Code",
    placeholder: "100001",
    regex: "^\\d{6}$",
    required: false
  },
  NU: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  NF: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  MP: {
    label: "Postal Code",
    placeholder: "96950",
    regex: "^9695[0-9]$",
    required: true
  },
  NO: {
    label: "Postal Code",
    placeholder: "0123",
    regex: "^\\d{4}$",
    required: true
  },
  OM: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  PK: {
    label: "Postal Code",
    placeholder: "44000",
    regex: "^\\d{5}$",
    required: true
  },
  PW: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  PS: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  PA: {
    label: "Postal Code",
    placeholder: "0801",
    regex: "^\\d{4}$",
    required: true
  },
  PG: {
    label: "Postal Code",
    placeholder: "111",
    regex: "^\\d{3}$",
    required: true
  },
  PY: {
    label: "Postal Code",
    placeholder: "1234",
    regex: "^\\d{4}$",
    required: true
  },
  PE: {
    label: "Postal Code",
    placeholder: "15001",
    regex: "^\\d{5}$",
    required: true
  },
  PH: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: true
  },
  PN: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  PL: {
    label: "Postal Code",
    placeholder: "00-001",
    regex: "^\\d{2}-\\d{3}$",
    required: true
  },
  PT: {
    label: "Postal Code",
    placeholder: "1234-567",
    regex: "^\\d{4}-\\d{3}$",
    required: true
  },
  PR: {
    label: "Postal Code",
    placeholder: "00901",
    regex: "^00[679]\\d{2}$",
    required: true
  },
  QA: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  RE: {
    label: "Postal Code",
    placeholder: "97400",
    regex: "^974\\d{2}$",
    required: true
  },
  RO: {
    label: "Postal Code",
    placeholder: "012345",
    regex: "^\\d{6}$",
    required: true
  },
  RU: {
    label: "Postal Code",
    placeholder: "123456",
    regex: "^\\d{6}$",
    required: true
  },
  RW: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  BL: {
    label: "Postal Code",
    placeholder: "97133",
    regex: "^971\\d{2}$",
    required: true
  },
  SH: {
    label: "Postal Code",
    placeholder: "STHL 1ZZ",
    regex: "^(STHL1ZZ)$",
    required: true
  },
  KN: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  LC: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  MF: {
    label: "Postal Code",
    placeholder: "97150",
    regex: "^971\\d{2}$",
    required: true
  },
  PM: {
    label: "Postal Code",
    placeholder: "97500",
    regex: "^97500$",
    required: true
  },
  VC: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  WS: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SM: {
    label: "Postal Code",
    placeholder: "47890",
    regex: "^47890$",
    required: true
  },
  ST: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SA: {
    label: "Postal Code",
    placeholder: "12345",
    regex: "^\\d{5}$",
    required: true
  },
  SN: {
    label: "Postal Code",
    placeholder: "12345",
    regex: "^\\d{5}$",
    required: true
  },
  RS: {
    label: "Postal Code",
    placeholder: "11000",
    regex: "^\\d{5}$",
    required: true
  },
  SC: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SL: {
    label: "Postal Code",
    placeholder: "100",
    regex: "^\\d{3}$",
    required: true
  },
  SG: {
    label: "Postal Code",
    placeholder: "123456",
    regex: "^\\d{6}$",
    required: true
  },
  SX: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SK: {
    label: "Postal Code",
    placeholder: "123 45",
    regex: "^\\d{3} ?\\d{2}$",
    required: true
  },
  SI: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: true
  },
  SB: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SO: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  ZA: {
    label: "Postal Code",
    placeholder: "1234",
    regex: "^\\d{4}$",
    required: true
  },
  GS: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SS: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  ES: {
    label: "Postal Code",
    placeholder: "28013",
    regex: "^\\d{5}$",
    required: true
  },
  LK: {
    label: "Postal Code",
    placeholder: "11000",
    regex: "^\\d{5}$",
    required: true
  },
  SD: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SR: {
    label: "Postal Code",
    placeholder: "1234",
    regex: "^\\d{4}$",
    required: true
  },
  SZ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  SE: {
    label: "Postal Code",
    placeholder: "123 45",
    regex: "^\\d{3} ?\\d{2}$",
    required: true
  },
  CH: {
    label: "Postal Code",
    placeholder: "8000",
    regex: "^\\d{4}$",
    required: true
  },
  SY: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TW: {
    label: "Postal Code",
    placeholder: "100",
    regex: "^\\d{3}(\\d{2})?$",
    required: true
  },
  TJ: {
    label: "Postal Code",
    placeholder: "734025",
    regex: "^\\d{6}$",
    required: true
  },
  TZ: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TH: {
    label: "Postal Code",
    placeholder: "10110",
    regex: "^\\d{5}$",
    required: true
  },
  TL: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TG: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TK: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TO: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TT: {
    label: "Postal Code",
    placeholder: "12345",
    regex: "^\\d{5}$",
    required: true
  },
  TN: {
    label: "Postal Code",
    placeholder: "1000",
    regex: "^\\d{4}$",
    required: true
  },
  TR: {
    label: "Postal Code",
    placeholder: "34000",
    regex: "^\\d{5}$",
    required: true
  },
  TM: {
    label: "Postal Code",
    placeholder: "744000",
    regex: "^\\d{6}$",
    required: true
  },
  TC: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  TV: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  UG: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  UA: {
    label: "Postal Code",
    placeholder: "01001",
    regex: "^\\d{5}$",
    required: true
  },
  AE: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  GB: {
    label: "Postal Code",
    placeholder: "SW1A 1AA",
    regex: "^(GIR 0AA|[A-Z]{1,2}\\d{1,2}[A-Z]? \\d[A-Z]{2})$",
    required: true
  },
  US: {
    label: "ZIP Code",
    placeholder: "12345 or 12345-6789",
    regex: "^\\d{5}(-\\d{4})?$",
    required: true
  },
  UM: {
    label: "ZIP Code",
    placeholder: "Same as US",
    regex: "^\\d{5}(-\\d{4})?$",
    required: true
  },
  UY: {
    label: "Postal Code",
    placeholder: "11000",
    regex: "^\\d{5}$",
    required: true
  },
  UZ: {
    label: "Postal Code",
    placeholder: "100000",
    regex: "^\\d{6}$",
    required: true
  },
  VU: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  VE: {
    label: "Postal Code",
    placeholder: "1010",
    regex: "^\\d{4}$",
    required: true
  },
  VN: {
    label: "Postal Code",
    placeholder: "700000",
    regex: "^\\d{6}$",
    required: true
  },
  VG: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  VI: {
    label: "ZIP Code",
    placeholder: "Same as US",
    regex: "^\\d{5}(-\\d{4})?$",
    required: true
  },
  WF: {
    label: "Postal Code",
    placeholder: "98600",
    regex: "^986\\d{2}$",
    required: true
  },
  EH: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  YE: {
    label: "Postal Code",
    placeholder: "N/A",
    regex: ".*",
    required: false
  },
  ZM: {
    label: "Postal Code",
    placeholder: "10101",
    regex: "^\\d{5}$",
    required: true
  },
  ZW: {
    label: "Postal Code",
    placeholder: "00263",
    regex: "^\\d{5}$",
    required: true
  },
  SJ: {
    label: "Postal Code",
    placeholder: "9170",
    regex: "^\\d{4}$",
    required: true
  }
}

export type ZipcodeConfig = typeof countryToZipCodes[Countries];

export function getZipCodeConfig(countryCode: string): ZipcodeConfig {
  return countryToZipCodes[countryCode as Countries] ?? {
    label: "Zip Code",
    placeholder: "Enter Zip Code",
    regex: ".*",
    required: false,
  };
}
