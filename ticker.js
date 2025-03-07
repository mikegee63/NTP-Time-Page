/* Each time zone object contains:
     - abbr: abbreviation text to show
     - name: full time zone name
     - location: region or category (e.g. Military)
     - offset: a string like "UTC +5:30" (if a slash is present, the first value is used)
     - iana: IANA time zone identifier for DST support
*/
const timeZones = [
  { abbr: "A",    name: "Alfa Time Zone",                            location: "Military",                offset: "UTC +1", iana: "Etc/GMT-1" },
  { abbr: "ACDT", name: "Australian Central Daylight Time",          location: "Australia",               offset: "UTC +10:30", iana: "Australia/Adelaide" },
  { abbr: "ACST", name: "Australian Central Standard Time",          location: "Australia",               offset: "UTC +9:30", iana: "Australia/Darwin" },
  { abbr: "ACT",  name: "Acre Time",                                 location: "South America",           offset: "UTC -5", iana: "America/Recife" },
  { abbr: "ACT",  name: "Australian Central Time",                   location: "Australia",               offset: "UTC +9:30", iana: "Australia/Darwin" },
  { abbr: "ACWST",name: "Australian Central Western Standard Time",  location: "Australia",               offset: "UTC +8:45", iana: "Australia/Eucla" },
  { abbr: "ADT",  name: "Arabia Daylight Time",                      location: "Asia",                    offset: "UTC +4", iana: "Asia/Dubai" },
  { abbr: "ADT",  name: "Atlantic Daylight Time",                    location: "North America Atlantic",  offset: "UTC -3", iana: "America/Halifax" },
  { abbr: "AEDT", name: "Australian Eastern Daylight Time",          location: "Australia",               offset: "UTC +11", iana: "Australia/Sydney" },
  { abbr: "AEST", name: "Australian Eastern Standard Time",          location: "Australia",               offset: "UTC +10", iana: "Australia/Brisbane" },
  { abbr: "AET",  name: "Australian Eastern Time",                   location: "Australia",               offset: "UTC +10:00 / +11:00", iana: "Australia/Sydney" },
  { abbr: "AFT",  name: "Afghanistan Time",                          location: "Asia",                    offset: "UTC +4:30", iana: "Asia/Kabul" },
  { abbr: "AKDT", name: "Alaska Daylight Time",                      location: "North America",           offset: "UTC -8", iana: "America/Anchorage" },
  { abbr: "AKST", name: "Alaska Standard Time",                      location: "North America",           offset: "UTC -9", iana: "America/Anchorage" },
  { abbr: "ALMT", name: "Alma-Ata Time",                             location: "Asia",                    offset: "UTC +6", iana: "Asia/Almaty" },
  { abbr: "AMST", name: "Amazon Summer Time",                        location: "South America",           offset: "UTC -3", iana: "America/Sao_Paulo" },
  { abbr: "AMST", name: "Armenia Summer Time",                       location: "Asia",                    offset: "UTC +5", iana: "Asia/Yerevan" },
  { abbr: "AMT",  name: "Amazon Time",                               location: "South America",           offset: "UTC -4", iana: "America/Sao_Paulo" },
  { abbr: "AMT",  name: "Armenia Time",                              location: "Asia",                    offset: "UTC +4", iana: "Asia/Yerevan" },
  { abbr: "ANAST",name: "Anadyr Summer Time",                        location: "Asia",                    offset: "UTC +12", iana: "Asia/Anadyr" },
  { abbr: "ANAT", name: "Anadyr Time",                               location: "Asia",                    offset: "UTC +12", iana: "Asia/Anadyr" },
  { abbr: "AQTT", name: "Aqtobe Time",                               location: "Asia",                    offset: "UTC +5", iana: "Asia/Aqtobe" },
  { abbr: "ART",  name: "Argentina Time",                            location: "South America",           offset: "UTC -3", iana: "America/Argentina/Buenos_Aires" },
  { abbr: "AST",  name: "Arabia Standard Time",                      location: "Asia",                    offset: "UTC +3", iana: "Asia/Riyadh" },
  { abbr: "AST",  name: "Atlantic Standard Time",                    location: "North America Atlantic Caribbean", offset: "UTC -4", iana: "America/Halifax" },
  { abbr: "AT",   name: "Atlantic Time",                             location: "North America Atlantic Caribbean", offset: "UTC -4:00 / -3:00", iana: "America/Halifax" },
  { abbr: "AWDT", name: "Australian Western Daylight Time",          location: "Australia",               offset: "UTC +9", iana: "Australia/Perth" },
  { abbr: "AWST", name: "Australian Western Standard Time",          location: "Australia",               offset: "UTC +8", iana: "Australia/Perth" },
  { abbr: "AZOST",name: "Azores Summer Time",                        location: "Atlantic",                offset: "UTC +0", iana: "Atlantic/Azores" },
  { abbr: "AZOT", name: "Azores Time",                               location: "Atlantic",                offset: "UTC -1", iana: "Atlantic/Azores" },
  { abbr: "AZST", name: "Azerbaijan Summer Time",                    location: "Asia",                    offset: "UTC +5", iana: "Asia/Baku" },
  { abbr: "AZT",  name: "Azerbaijan Time",                           location: "Asia",                    offset: "UTC +4", iana: "Asia/Baku" },
  { abbr: "AoE",  name: "Anywhere on Earth",                         location: "Pacific",                 offset: "UTC -12", iana: "Etc/GMT+12" },
  { abbr: "B",    name: "Bravo Time Zone",                           location: "Military",                offset: "UTC +2", iana: "Etc/GMT-2" },
  { abbr: "BNT",  name: "Brunei Darussalam Time",                    location: "Asia",                    offset: "UTC +8", iana: "Asia/Brunei" },
  { abbr: "BOT",  name: "Bolivia Time",                              location: "South America",           offset: "UTC -4", iana: "America/La_Paz" },
  { abbr: "BRST", name: "Brasília Summer Time",                      location: "South America",           offset: "UTC -2", iana: "America/Sao_Paulo" },
  { abbr: "BRT",  name: "Brasília Time",                             location: "South America",           offset: "UTC -3", iana: "America/Sao_Paulo" },
  { abbr: "BST",  name: "Bangladesh Standard Time",                  location: "Asia",                    offset: "UTC +6", iana: "Asia/Dhaka" },
  { abbr: "BST",  name: "Bougainville Standard Time",                location: "Pacific",                 offset: "UTC +11", iana: "Pacific/Bougainville" },
  { abbr: "BST",  name: "British Summer Time",                       location: "Europe",                  offset: "UTC +1", iana: "Europe/London" },
  { abbr: "BTT",  name: "Bhutan Time",                               location: "Asia",                    offset: "UTC +6", iana: "Asia/Thimphu" },
  { abbr: "C",    name: "Charlie Time Zone",                         location: "Military",                offset: "UTC +3", iana: "Etc/GMT-3" },
  { abbr: "CAST", name: "Casey Time",                                location: "Antarctica",              offset: "UTC +8", iana: "Antarctica/Macquarie" },
  { abbr: "CAT",  name: "Central Africa Time",                       location: "Africa",                  offset: "UTC +2", iana: "Africa/Harare" },
  { abbr: "CCT",  name: "Cocos Islands Time",                        location: "Indian Ocean",            offset: "UTC +6:30", iana: "Indian/Cocos" },
  { abbr: "CDT",  name: "Central Daylight Time",                     location: "North America",           offset: "UTC -5", iana: "America/Chicago" },
  { abbr: "CDT",  name: "Cuba Daylight Time",                        location: "Caribbean",               offset: "UTC -4", iana: "America/Havana" },
  { abbr: "CEST", name: "Central European Summer Time",              location: "Europe",                  offset: "UTC +2", iana: "Europe/Paris" },
  { abbr: "CET",  name: "Central European Time",                      location: "Europe/Africa",           offset: "UTC +1", iana: "Europe/Paris" },
  { abbr: "CHADT",name: "Chatham Island Daylight Time",              location: "Pacific",                 offset: "UTC +13:45", iana: "Pacific/Chatham" },
  { abbr: "CHAST",name: "Chatham Island Standard Time",              location: "Pacific",                 offset: "UTC +12:45", iana: "Pacific/Chatham" },
  { abbr: "CHOST",name: "Choibalsan Summer Time",                     location: "Asia",                    offset: "UTC +9", iana: "Asia/Choibalsan" },
  { abbr: "CHOT", name: "Choibalsan Time",                           location: "Asia",                    offset: "UTC +8", iana: "Asia/Choibalsan" },
  { abbr: "CHUT", name: "Chuuk Time",                                location: "Pacific",                 offset: "UTC +10", iana: "Pacific/Chuuk" },
  { abbr: "CIDST",name: "Cayman Islands Daylight Saving Time",      location: "Caribbean",               offset: "UTC -4", iana: "America/Cayman" },
  { abbr: "CIST", name: "Cayman Islands Standard Time",              location: "Caribbean",               offset: "UTC -5", iana: "America/Cayman" },
  { abbr: "CKT",  name: "Cook Island Time",                          location: "Pacific",                 offset: "UTC -10", iana: "Pacific/Rarotonga" },
  { abbr: "CLST", name: "Chile Summer Time",                         location: "South America/Antarctica",offset: "UTC -3", iana: "America/Santiago" },
  { abbr: "CLT",  name: "Chile Standard Time",                       location: "South America/Antarctica",offset: "UTC -4", iana: "America/Santiago" },
  { abbr: "COT",  name: "Colombia Time",                             location: "South America",           offset: "UTC -5", iana: "America/Bogota" },
  { abbr: "CST",  name: "Central Standard Time",                     location: "North America/Central America", offset: "UTC -6", iana: "America/Chicago" },
  { abbr: "CST",  name: "China Standard Time",                       location: "Asia",                    offset: "UTC +8", iana: "Asia/Shanghai" },
  { abbr: "CST",  name: "Cuba Standard Time",                        location: "Caribbean",               offset: "UTC -5", iana: "America/Havana" },
  { abbr: "CT",   name: "Central Time",                              location: "North America/Central America", offset: "UTC -6:00 / -5:00", iana: "America/Chicago" },
  { abbr: "CVT",  name: "Cape Verde Time",                           location: "Africa",                  offset: "UTC -1", iana: "Atlantic/Cape_Verde" },
  { abbr: "CXT",  name: "Christmas Island Time",                     location: "Australia",               offset: "UTC +7", iana: "Indian/Christmas" },
  { abbr: "ChST", name: "Chamorro Standard Time",                    location: "Pacific",                 offset: "UTC +10", iana: "Pacific/Guam" },
  { abbr: "D",    name: "Delta Time Zone",                           location: "Military",                offset: "UTC +4", iana: "Etc/GMT-4" },
  { abbr: "DAVT", name: "Davis Time",                                location: "Antarctica",              offset: "UTC +7", iana: "Antarctica/Davis" },
  { abbr: "DDUT", name: "Dumont-d'Urville Time",                     location: "Antarctica",              offset: "UTC +10", iana: "Antarctica/DumontDUrville" },
  { abbr: "E",    name: "Echo Time Zone",                            location: "Military",                offset: "UTC +5", iana: "Etc/GMT-5" },
  { abbr: "EASST",name: "Easter Island Summer Time",               location: "Pacific",                 offset: "UTC -5", iana: "Pacific/Easter" },
  { abbr: "EAST", name: "Easter Island Standard Time",             location: "Pacific",                 offset: "UTC -6", iana: "Pacific/Easter" },
  { abbr: "EAT",  name: "Eastern Africa Time",                       location: "Africa/Indian Ocean",     offset: "UTC +3", iana: "Africa/Nairobi" },
  { abbr: "ECT",  name: "Ecuador Time",                              location: "South America",           offset: "UTC -5", iana: "America/Guayaquil" },
  { abbr: "EDT",  name: "Eastern Daylight Time",                     location: "North America/Caribbean", offset: "UTC -4", iana: "America/New_York" },
  { abbr: "EEST", name: "Eastern European Summer Time",              location: "Europe/Asia/Africa",      offset: "UTC +3", iana: "Europe/Athens" },
  { abbr: "EET",  name: "Eastern European Time",                     location: "Europe/Asia/Africa",      offset: "UTC +2", iana: "Europe/Athens" },
  { abbr: "EGST", name: "Eastern Greenland Summer Time",             location: "North America",           offset: "UTC +0", iana: "America/Godthab" },
  { abbr: "EGT",  name: "East Greenland Time",                       location: "North America",           offset: "UTC -1", iana: "America/Godthab" },
  { abbr: "EST",  name: "Eastern Standard Time",                     location: "North America/Caribbean/Central America", offset: "UTC -5", iana: "America/New_York" },
  { abbr: "ET",   name: "Eastern Time",                              location: "North America/Caribbean/Central America", offset: "UTC -5:00 / -4:00", iana: "America/New_York" },
  { abbr: "F",    name: "Foxtrot Time Zone",                         location: "Military",                offset: "UTC +6", iana: "Etc/GMT-6" },
  { abbr: "FET",  name: "Further-Eastern European Time",             location: "Europe",                  offset: "UTC +3", iana: "Europe/Moscow" },
  { abbr: "FJST", name: "Fiji Summer Time",                          location: "Pacific",                 offset: "UTC +13", iana: "Pacific/Fiji" },
  { abbr: "FJT",  name: "Fiji Time",                                 location: "Pacific",                 offset: "UTC +12", iana: "Pacific/Fiji" },
  { abbr: "FKST", name: "Falkland Islands Summer Time",              location: "South America",           offset: "UTC -3", iana: "Atlantic/Stanley" },
  { abbr: "FKT",  name: "Falkland Islands Time",                     location: "South America",           offset: "UTC -4", iana: "Atlantic/Stanley" },
  { abbr: "FNT",  name: "Fernando de Noronha Time",                  location: "South America",           offset: "UTC -2", iana: "America/Noronha" },
  { abbr: "G",    name: "Golf Time Zone",                            location: "Military",                offset: "UTC +7", iana: "Etc/GMT-7" },
  { abbr: "GALT", name: "Galapagos Time",                            location: "Pacific",                 offset: "UTC -6", iana: "Pacific/Galapagos" },
  { abbr: "GAMT", name: "Gambier Time",                              location: "Pacific",                 offset: "UTC -9", iana: "Pacific/Gambier" },
  { abbr: "GET",  name: "Georgia Standard Time",                     location: "Asia/Europe",             offset: "UTC +4", iana: "Asia/Tbilisi" },
  { abbr: "GFT",  name: "French Guiana Time",                        location: "South America",           offset: "UTC -3", iana: "America/Cayenne" },
  { abbr: "GILT", name: "Gilbert Island Time",                       location: "Pacific",                 offset: "UTC +12", iana: "Pacific/Tarawa" },
  { abbr: "GMT",  name: "Greenwich Mean Time",                       location: "Worldwide",               offset: "UTC +0", iana: "Etc/UTC" },
  { abbr: "GST",  name: "Gulf Standard Time",                        location: "Asia",                    offset: "UTC +4", iana: "Asia/Dubai" },
  { abbr: "GST",  name: "South Georgia Time",                        location: "South America",           offset: "UTC -2", iana: "Atlantic/South_Georgia" },
  { abbr: "GYT",  name: "Guyana Time",                               location: "South America",           offset: "UTC -4", iana: "America/Guyana" },
  { abbr: "H",    name: "Hotel Time Zone",                           location: "Military",                offset: "UTC +8", iana: "Etc/GMT-8" },
  { abbr: "HDT",  name: "Hawaii-Aleutian Daylight Time",             location: "North America",           offset: "UTC -9", iana: "America/Adak" },
  { abbr: "HKT",  name: "Hong Kong Time",                            location: "Asia",                    offset: "UTC +8", iana: "Asia/Hong_Kong" },
  { abbr: "HOVST",name: "Hovd Summer Time",                          location: "Asia",                    offset: "UTC +8", iana: "Asia/Hovd" },
  { abbr: "HOVT", name: "Hovd Time",                                 location: "Asia",                    offset: "UTC +7", iana: "Asia/Hovd" },
  { abbr: "HST",  name: "Hawaii Standard Time",                      location: "North America",           offset: "UTC -10", iana: "Pacific/Honolulu" },
  { abbr: "I",    name: "India Time Zone",                           location: "Military",                offset: "UTC +9", iana: "Etc/GMT-9" },
  { abbr: "ICT",  name: "Indochina Time",                            location: "Asia",                    offset: "UTC +7", iana: "Asia/Bangkok" },
  { abbr: "IDT",  name: "Israel Daylight Time",                      location: "Asia",                    offset: "UTC +3", iana: "Asia/Jerusalem" },
  { abbr: "IOT",  name: "Indian Chagos Time",                        location: "Indian Ocean",            offset: "UTC +6", iana: "Indian/Chagos" },
  { abbr: "IRDT", name: "Iran Daylight Time",                        location: "Asia",                    offset: "UTC +4:30", iana: "Asia/Tehran" },
  { abbr: "IRKST",name: "Irkutsk Summer Time",                       location: "Asia",                    offset: "UTC +9", iana: "Asia/Irkutsk" },
  { abbr: "IRKT", name: "Irkutsk Time",                              location: "Asia",                    offset: "UTC +8", iana: "Asia/Irkutsk" },
  { abbr: "IRST", name: "Iran Standard Time",                        location: "Asia",                    offset: "UTC +3:30", iana: "Asia/Tehran" },
  { abbr: "IST",  name: "India Standard Time",                       location: "Asia",                    offset: "UTC +5:30", iana: "Asia/Kolkata" },
  { abbr: "IST",  name: "Irish Standard Time",                       location: "Europe",                  offset: "UTC +1", iana: "Europe/Dublin" },
  { abbr: "IST",  name: "Israel Standard Time",                      location: "Asia",                    offset: "UTC +2", iana: "Asia/Jerusalem" },
  { abbr: "JST",  name: "Japan Standard Time",                       location: "Asia",                    offset: "UTC +9", iana: "Asia/Tokyo" },
  { abbr: "K",    name: "Kilo Time Zone",                            location: "Military",                offset: "UTC +10", iana: "Etc/GMT-10" },
  { abbr: "KGT",  name: "Kyrgyzstan Time",                           location: "Asia",                    offset: "UTC +6", iana: "Asia/Bishkek" },
  { abbr: "KOST", name: "Kosrae Time",                               location: "Pacific",                 offset: "UTC +11", iana: "Pacific/Kosrae" },
  { abbr: "KRAST",name: "Krasnoyarsk Summer Time",                   location: "Asia",                    offset: "UTC +8", iana: "Asia/Krasnoyarsk" },
  { abbr: "KRAT", name: "Krasnoyarsk Time",                          location: "Asia",                    offset: "UTC +7", iana: "Asia/Krasnoyarsk" },
  { abbr: "KST",  name: "Korea Standard Time",                       location: "Asia",                    offset: "UTC +9", iana: "Asia/Seoul" },
  { abbr: "KUYT", name: "Kuybyshev Time",                            location: "Europe",                  offset: "UTC +4", iana: "Europe/Samara" },
  { abbr: "L",    name: "Lima Time Zone",                            location: "Military",                offset: "UTC +11", iana: "Etc/GMT-11" },
  { abbr: "LHDT", name: "Lord Howe Daylight Time",                   location: "Australia",               offset: "UTC +11", iana: "Australia/Lord_Howe" },
  { abbr: "LHST", name: "Lord Howe Standard Time",                   location: "Australia",               offset: "UTC +10:30", iana: "Australia/Lord_Howe" },
  { abbr: "LINT", name: "Line Islands Time",                         location: "Pacific",                 offset: "UTC +14", iana: "Pacific/Kiritimati" },
  { abbr: "M",    name: "Mike Time Zone",                            location: "Military",                offset: "UTC +12", iana: "Etc/GMT-12" },
  { abbr: "MAGST",name: "Magadan Summer Time",                       location: "Asia",                    offset: "UTC +12", iana: "Asia/Magadan" },
  { abbr: "MAGT", name: "Magadan Time",                              location: "Asia",                    offset: "UTC +11", iana: "Asia/Magadan" },
  { abbr: "MART", name: "Marquesas Time",                            location: "Pacific",                 offset: "UTC -9:30", iana: "Pacific/Marquesas" },
  { abbr: "MAWT", name: "Mawson Time",                               location: "Antarctica",              offset: "UTC +5", iana: "Antarctica/Mawson" },
  { abbr: "MDT",  name: "Mountain Daylight Time",                    location: "North America",           offset: "UTC -6", iana: "America/Denver" },
  { abbr: "MHT",  name: "Marshall Islands Time",                     location: "Pacific",                 offset: "UTC +12", iana: "Pacific/Majuro" },
  { abbr: "MMT",  name: "Myanmar Time",                              location: "Asia",                    offset: "UTC +6:30", iana: "Asia/Yangon" },
  { abbr: "MSD",  name: "Moscow Daylight Time",                      location: "Europe",                  offset: "UTC +4", iana: "Europe/Moscow" },
  { abbr: "MSK",  name: "Moscow Standard Time",                      location: "Europe/Asia",             offset: "UTC +3", iana: "Europe/Moscow" },
  { abbr: "MST",  name: "Mountain Standard Time",                    location: "North America",           offset: "UTC -7", iana: "America/Denver" },
  { abbr: "MT",   name: "Mountain Time",                             location: "North America",           offset: "UTC -7:00 / -6:00", iana: "America/Denver" },
  { abbr: "MUT",  name: "Mauritius Time",                            location: "Africa",                  offset: "UTC +4", iana: "Indian/Mauritius" },
  { abbr: "MVT",  name: "Maldives Time",                             location: "Asia",                    offset: "UTC +5", iana: "Indian/Maldives" },
  { abbr: "MYT",  name: "Malaysia Time",                             location: "Asia",                    offset: "UTC +8", iana: "Asia/Kuala_Lumpur" },
  { abbr: "N",    name: "November Time Zone",                        location: "Military",                offset: "UTC -1", iana: "Etc/GMT+1" },
  { abbr: "NCT",  name: "New Caledonia Time",                        location: "Pacific",                 offset: "UTC +11", iana: "Pacific/Noumea" },
  { abbr: "NDT",  name: "Newfoundland Daylight Time",                location: "North America",           offset: "UTC -2:30", iana: "America/St_Johns" },
  { abbr: "NFDT", name: "Norfolk Daylight Time",                     location: "Australia",               offset: "UTC +12", iana: "Australia/Norfolk" },
  { abbr: "NFT",  name: "Norfolk Time",                              location: "Australia",               offset: "UTC +11", iana: "Australia/Norfolk" },
  { abbr: "NOVST",name: "Novosibirsk Summer Time",                   location: "Asia",                    offset: "UTC +7", iana: "Asia/Novosibirsk" },
  { abbr: "NOVT", name: "Novosibirsk Time",                          location: "Asia",                    offset: "UTC +7", iana: "Asia/Novosibirsk" },
  { abbr: "NPT",  name: "Nepal Time",                                location: "Asia",                    offset: "UTC +5:45", iana: "Asia/Kathmandu" },
  { abbr: "NRT",  name: "Nauru Time",                                location: "Pacific",                 offset: "UTC +12", iana: "Pacific/Nauru" },
  { abbr: "NST",  name: "Newfoundland Standard Time",                location: "North America",           offset: "UTC -3:30", iana: "America/St_Johns" },
  { abbr: "NUT",  name: "Niue Time",                                 location: "Pacific",                 offset: "UTC -11", iana: "Pacific/Niue" },
  { abbr: "NZDT", name: "New Zealand Daylight Time",                 location: "Antarctica",              offset: "UTC +13", iana: "Pacific/Auckland" },
  { abbr: "NZST", name: "New Zealand Standard Time",                 location: "Antarctica",              offset: "UTC +12", iana: "Pacific/Auckland" },
  { abbr: "O",    name: "Oscar Time Zone",                           location: "Military",                offset: "UTC -2", iana: "Etc/GMT+2" },
  { abbr: "OMSST",name: "Omsk Summer Time",                          location: "Asia",                    offset: "UTC +7", iana: "Asia/Omsk" },
  { abbr: "OMST", name: "Omsk Standard Time",                        location: "Asia",                    offset: "UTC +6", iana: "Asia/Omsk" },
  { abbr: "ORAT", name: "Oral Time",                                 location: "Asia",                    offset: "UTC +5", iana: "Asia/Oral" },
  { abbr: "P",    name: "Papa Time Zone",                            location: "Military",                offset: "UTC -3", iana: "Etc/GMT+3" },
  { abbr: "PDT",  name: "Pacific Daylight Time",                     location: "North America",           offset: "UTC -7", iana: "America/Los_Angeles" },
  { abbr: "PET",  name: "Peru Time",                                 location: "South America",           offset: "UTC -5", iana: "America/Lima" },
  { abbr: "PETST",name: "Kamchatka Summer Time",                     location: "Asia",                    offset: "UTC +12", iana: "Asia/Kamchatka" },
  { abbr: "PETT", name: "Kamchatka Time",                            location: "Asia",                    offset: "UTC +12", iana: "Asia/Kamchatka" },
  { abbr: "PGT",  name: "Papua New Guinea Time",                     location: "Pacific",                 offset: "UTC +10", iana: "Pacific/Port_Moresby" },
  { abbr: "PHOT", name: "Phoenix Island Time",                       location: "Pacific",                 offset: "UTC +13", iana: "Pacific/Enderbury" },
  { abbr: "PHT",  name: "Philippine Time",                           location: "Asia",                    offset: "UTC +8", iana: "Asia/Manila" },
  { abbr: "PKT",  name: "Pakistan Standard Time",                    location: "Asia",                    offset: "UTC +5", iana: "Asia/Karachi" },
  { abbr: "PMDT", name: "Pierre & Miquelon Daylight Time",           location: "North America",           offset: "UTC -2", iana: "America/Miquelon" },
  { abbr: "PMST", name: "Pierre & Miquelon Standard Time",           location: "North America",           offset: "UTC -3", iana: "America/Miquelon" },
  { abbr: "PONT", name: "Pohnpei Standard Time",                     location: "Pacific",                 offset: "UTC +11", iana: "Pacific/Pohnpei" },
  { abbr: "PST",  name: "Pacific Standard Time",                     location: "North America",           offset: "UTC -8", iana: "America/Los_Angeles" },
  { abbr: "PST",  name: "Pitcairn Standard Time",                    location: "Pacific",                 offset: "UTC -8", iana: "Pacific/Pitcairn" },
  { abbr: "PT",   name: "Pacific Time",                              location: "North America",           offset: "UTC -8:00 / -7:00", iana: "America/Los_Angeles" },
  { abbr: "PWT",  name: "Palau Time",                                location: "Pacific",                 offset: "UTC +9", iana: "Pacific/Palau" },
  { abbr: "PYST", name: "Paraguay Summer Time",                      location: "South America",           offset: "UTC -3", iana: "America/Asuncion" },
  { abbr: "PYT",  name: "Paraguay Time",                             location: "South America",           offset: "UTC -3", iana: "America/Asuncion" },
  { abbr: "PYT",  name: "Pyongyang Time",                            location: "Asia",                    offset: "UTC +8:30", iana: "Asia/Pyongyang" },
  { abbr: "Q",    name: "Quebec Time Zone",                          location: "Military",                offset: "UTC -4", iana: "Etc/GMT+4" },
  { abbr: "QYZT", name: "Qyzylorda Time",                            location: "Asia",                    offset: "UTC +6", iana: "Asia/Qyzylorda" },
  { abbr: "R",    name: "Romeo Time Zone",                           location: "Military",                offset: "UTC -5", iana: "Etc/GMT+5" },
  { abbr: "RET",  name: "Reunion Time",                              location: "Africa",                  offset: "UTC +4", iana: "Indian/Reunion" },
  { abbr: "ROTT", name: "Rothera Time",                              location: "Antarctica",              offset: "UTC -3", iana: "Antarctica/Rothera" },
  { abbr: "S",    name: "Sierra Time Zone",                          location: "Military",                offset: "UTC -6", iana: "Etc/GMT+6" },
  { abbr: "SAKT", name: "Sakhalin Time",                             location: "Asia",                    offset: "UTC +11", iana: "Asia/Sakhalin" },
  { abbr: "SAMT", name: "Samara Time",                              location: "Europe",                  offset: "UTC +4", iana: "Europe/Samara" },
  { abbr: "SAST", name: "South Africa Standard Time",              location: "Africa",                  offset: "UTC +2", iana: "Africa/Johannesburg" },
  { abbr: "SBT",  name: "Solomon Islands Time",                      location: "Pacific",                 offset: "UTC +11", iana: "Pacific/Guadalcanal" },
  { abbr: "SCT",  name: "Seychelles Time",                           location: "Africa",                  offset: "UTC +4", iana: "Indian/Mahe" },
  { abbr: "SGT",  name: "Singapore Time",                            location: "Asia",                    offset: "UTC +8", iana: "Asia/Singapore" },
  { abbr: "SRET", name: "Srednekolymsk Time",                        location: "Asia",                    offset: "UTC +11", iana: "Asia/Srednekolymsk" },
  { abbr: "SRT",  name: "Suriname Time",                             location: "South America",           offset: "UTC -3", iana: "America/Paramaribo" },
  { abbr: "SST",  name: "Samoa Standard Time",                       location: "Pacific",                 offset: "UTC -11", iana: "Pacific/Apia" },
  { abbr: "SYOT", name: "Syowa Time",                                location: "Antarctica",              offset: "UTC +3", iana: "Antarctica/Syowa" },
  { abbr: "T",    name: "Tango Time Zone",                           location: "Military",                offset: "UTC -7", iana: "Etc/GMT+7" },
  { abbr: "TAHT", name: "Tahiti Time",                               location: "Pacific",                 offset: "UTC -10", iana: "Pacific/Tahiti" },
  { abbr: "TFT",  name: "French Southern and Antarctic Time",      location: "Indian Ocean",            offset: "UTC +5", iana: "Indian/Kerguelen" },
  { abbr: "TJT",  name: "Tajikistan Time",                           location: "Asia",                    offset: "UTC +5", iana: "Asia/Dushanbe" },
  { abbr: "TKT",  name: "Tokelau Time",                              location: "Pacific",                 offset: "UTC +13", iana: "Pacific/Fakaofo" },
  { abbr: "TLT",  name: "East Timor Time",                           location: "Asia",                    offset: "UTC +9", iana: "Asia/Dili" },
  { abbr: "TMT",  name: "Turkmenistan Time",                         location: "Asia",                    offset: "UTC +5", iana: "Asia/Ashgabat" },
  { abbr: "TOST", name: "Tonga Summer Time",                         location: "Pacific",                 offset: "UTC +14", iana: "Pacific/Tongatapu" },
  { abbr: "TOT",  name: "Tonga Time",                                location: "Pacific",                 offset: "UTC +13", iana: "Pacific/Tongatapu" },
  { abbr: "TRT",  name: "Turkey Time",                               location: "Asia/Europe",             offset: "UTC +3", iana: "Europe/Istanbul" },
  { abbr: "TVT",  name: "Tuvalu Time",                               location: "Pacific",                 offset: "UTC +12", iana: "Pacific/Funafuti" },
  { abbr: "U",    name: "Uniform Time Zone",                         location: "Military",                offset: "UTC -8", iana: "Etc/GMT+8" },
  { abbr: "ULAST",name: "Ulaanbaatar Summer Time",                   location: "Asia",                    offset: "UTC +9", iana: "Asia/Ulaanbaatar" },
  { abbr: "ULAT", name: "Ulaanbaatar Time",                          location: "Asia",                    offset: "UTC +8", iana: "Asia/Ulaanbaatar" },
  { abbr: "UTC",  name: "Coordinated Universal Time",                location: "Worldwide",               offset: "UTC", iana: "Etc/UTC" },
  { abbr: "UYST", name: "Uruguay Summer Time",                       location: "South America",           offset: "UTC -2", iana: "America/Montevideo" },
  { abbr: "UYT",  name: "Uruguay Time",                              location: "South America",           offset: "UTC -3", iana: "America/Montevideo" },
  { abbr: "UZT",  name: "Uzbekistan Time",                           location: "Asia",                    offset: "UTC +5", iana: "Asia/Tashkent" },
  { abbr: "V",    name: "Victor Time Zone",                          location: "Military",                offset: "UTC -9", iana: "Etc/GMT+9" },
  { abbr: "VET",  name: "Venezuelan Standard Time",                  location: "South America",           offset: "UTC -4", iana: "America/Caracas" },
  { abbr: "VLAST",name: "Vladivostok Summer Time",                   location: "Asia",                    offset: "UTC +11", iana: "Asia/Vladivostok" },
  { abbr: "VLAT", name: "Vladivostok Time",                          location: "Asia",                    offset: "UTC +10", iana: "Asia/Vladivostok" },
  { abbr: "VOST", name: "Vostok Time",                               location: "Antarctica",              offset: "UTC +6", iana: "Antarctica/Vostok" },
  { abbr: "VUT",  name: "Vanuatu Time",                              location: "Pacific",                 offset: "UTC +11", iana: "Pacific/Efate" },
  { abbr: "W",    name: "Whiskey Time Zone",                         location: "Military",                offset: "UTC -10", iana: "Etc/GMT+10" },
  { abbr: "WAKT", name: "Wake Time",                                 location: "Pacific",                 offset: "UTC +12", iana: "Pacific/Wake" },
  { abbr: "WARST",name: "Western Argentine Summer Time",           location: "South America",           offset: "UTC -3", iana: "America/Argentina/Catamarca" },
  { abbr: "WAST", name: "West Africa Summer Time",                   location: "Africa",                  offset: "UTC +2", iana: "Africa/Lagos" },
  { abbr: "WAT",  name: "West Africa Time",                          location: "Africa",                  offset: "UTC +1", iana: "Africa/Lagos" },
  { abbr: "WEST", name: "Western European Summer Time",              location: "Europe/Africa",           offset: "UTC +1", iana: "Europe/Lisbon" },
  { abbr: "WET",  name: "Western European Time",                     location: "Europe/Africa",           offset: "UTC +0", iana: "Europe/Lisbon" },
  { abbr: "WFT",  name: "Wallis and Futuna Time",                    location: "Pacific",                 offset: "UTC +12", iana: "Pacific/Wallis" },
  { abbr: "WGST", name: "Western Greenland Summer Time",             location: "North America",           offset: "UTC -1", iana: "America/Godthab" },
  { abbr: "WGT",  name: "Western Greenland Time",                    location: "North America",           offset: "UTC -2", iana: "America/Godthab" },
  { abbr: "WIB",  name: "Western Indonesian Time",                   location: "Asia",                    offset: "UTC +7", iana: "Asia/Jakarta" },
  { abbr: "WIT",  name: "Eastern Indonesian Time",                   location: "Asia",                    offset: "UTC +9", iana: "Asia/Jayapura" },
  { abbr: "WITA", name: "Central Indonesian Time",                   location: "Asia",                    offset: "UTC +8", iana: "Asia/Makassar" },
  { abbr: "WST",  name: "West Samoa Time",                           location: "Pacific",                 offset: "UTC +13", iana: "Pacific/Apia" },
  { abbr: "WST",  name: "Western Sahara Summer Time",                location: "Africa",                  offset: "UTC +1", iana: "Africa/El_Aaiun" },
  { abbr: "WT",   name: "Western Sahara Standard Time",              location: "Africa",                  offset: "UTC +0", iana: "Africa/El_Aaiun" },
  { abbr: "X",    name: "X-ray Time Zone",                           location: "Military",                offset: "UTC -11", iana: "Etc/GMT+11" },
  { abbr: "Y",    name: "Yankee Time Zone",                          location: "Military",                offset: "UTC -12", iana: "Etc/GMT+12" },
  { abbr: "YAKST",name: "Yakutsk Summer Time",                       location: "Asia",                    offset: "UTC +10", iana: "Asia/Yakutsk" },
  { abbr: "YAKT", name: "Yakutsk Time",                              location: "Asia",                    offset: "UTC +9", iana: "Asia/Yakutsk" },
  { abbr: "YAPT", name: "Yap Time",                                  location: "Pacific",                 offset: "UTC +10", iana: "Pacific/Yap" },
  { abbr: "YEKST",name: "Yekaterinburg Summer Time",                 location: "Asia",                    offset: "UTC +6", iana: "Asia/Yekaterinburg" },
  { abbr: "YEKT", name: "Yekaterinburg Time",                        location: "Asia",                    offset: "UTC +5", iana: "Asia/Yekaterinburg" },
  { abbr: "Z",    name: "Zulu Time Zone",                            location: "Military",                offset: "UTC +0", iana: "Etc/UTC" }
];

/* Legacy: Compute offsetMinutes for each time zone object (for fallback purposes).
   DST calculations will use the iana property.
*/
function parseOffset(offsetStr) {
  let s = offsetStr.replace("UTC", "").trim();
  if (s === "") return 0;
  if (s.indexOf("/") !== -1) {
    s = s.split("/")[0].trim();
  }
  const sign = s[0] === "-" ? -1 : 1;
  s = s.substring(1);
  const parts = s.split(":");
  const hours = parseInt(parts[0], 10);
  const minutes = parts.length > 1 ? parseInt(parts[1], 10) : 0;
  return sign * (hours * 60 + minutes);
}
timeZones.forEach(tz => {
  tz.offsetMinutes = parseOffset(tz.offset);
});

document.addEventListener('DOMContentLoaded', function() {
  const tickerContainer = document.querySelector('.ticker-container');
  const ticker = document.querySelector('.ticker');
  
  // Create a ticker item for each time zone.
  timeZones.forEach(tz => {
    const item = document.createElement('div');
    item.className = 'ticker-item';
    item.innerText = tz.abbr;
    // Store tooltip, offset, full name, and iana in data attributes.
    item.setAttribute('data-tooltip', `${tz.name} – ${tz.location} (${tz.offset})`);
    item.setAttribute('data-offset', tz.offsetMinutes);
    item.setAttribute('data-fullname', tz.name);
    item.setAttribute('data-iana', tz.iana);
    ticker.appendChild(item);
  });
  
  // Duplicate the ticker content for seamless scrolling.
  ticker.innerHTML += ticker.innerHTML;

  let isDragging = false;
  let startX;
  let startTransform;
  const autoScrollSpeed = 0.5; // pixels per frame
  let paused = false;

  function getTranslateX(element) {
    const style = window.getComputedStyle(element);
    if (style.transform === 'none') return 0;
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  function animateTicker() {
    if (!paused && !isDragging) {
      const currentX = getTranslateX(ticker);
      const newX = currentX - autoScrollSpeed;
      ticker.style.transform = `translateX(${newX}px)`;
      if (Math.abs(newX) >= ticker.offsetWidth / 2) {
        ticker.style.transform = 'translateX(0px)';
      }
    }
    requestAnimationFrame(animateTicker);
  }

  tickerContainer.addEventListener('mouseenter', () => {
    paused = true;
  });
  tickerContainer.addEventListener('mouseleave', () => {
    paused = false;
  });

  tickerContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    ticker.style.transition = 'none';
    startX = e.pageX;
    startTransform = getTranslateX(ticker);
    paused = true;
  });
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX;
    ticker.style.transform = `translateX(${startTransform + deltaX}px)`;
  });
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      ticker.style.transition = '';
      paused = false;
    }
  });

  tickerContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    ticker.style.transition = 'none';
    startX = e.touches[0].pageX;
    startTransform = getTranslateX(ticker);
    paused = true;
  });
  tickerContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].pageX - startX;
    ticker.style.transform = `translateX(${startTransform + deltaX}px)`;
  });
  tickerContainer.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      ticker.style.transition = '';
      paused = false;
    }
  });

  // Global tooltip handling
  const globalTooltip = document.getElementById('global-tooltip');
  const tickerItems = document.querySelectorAll('.ticker-item');
  tickerItems.forEach(item => {
    item.addEventListener('mouseenter', function(e) {
      const tooltipText = item.getAttribute('data-tooltip');
      globalTooltip.innerText = tooltipText;
      globalTooltip.style.display = 'block';
      globalTooltip.style.left = (e.pageX + 10) + 'px';
      globalTooltip.style.top = (e.pageY - 40) + 'px';
    });
    item.addEventListener('mousemove', function(e) {
      globalTooltip.style.left = (e.pageX + 10) + 'px';
      globalTooltip.style.top = (e.pageY - 40) + 'px';
    });
    item.addEventListener('mouseleave', function() {
      globalTooltip.style.display = 'none';
    });
    // On click, update the main clock's time zone using the full object.
    item.addEventListener('click', function() {
      const iana = item.getAttribute('data-iana');
      selectedTZ = {
        abbr: item.innerText.trim(),
        name: item.getAttribute('data-fullname'),
        iana: iana
      };
      tickerItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  animateTicker();
});
