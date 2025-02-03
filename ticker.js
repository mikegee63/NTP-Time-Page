<!-- Ticker Functionality and Population -->
    /* Each time zone object contains:
         - abbr: abbreviation text to show
         - name: full time zone name
         - location: region or category (e.g. Military)
         - offset: a string like "UTC +5:30" (if a slash is present, the first value is used)
    */
    const timeZones = [
      { abbr: "A",    name: "Alfa Time Zone",                            location: "Military",                offset: "UTC +1" },
      { abbr: "ACDT", name: "Australian Central Daylight Time",          location: "Australia",               offset: "UTC +10:30" },
      { abbr: "ACST", name: "Australian Central Standard Time",          location: "Australia",               offset: "UTC +9:30" },
      { abbr: "ACT",  name: "Acre Time",                                 location: "South America",           offset: "UTC -5" },
      { abbr: "ACT",  name: "Australian Central Time",                   location: "Australia",               offset: "UTC +9:30 / +10:30" },
      { abbr: "ACWST",name: "Australian Central Western Standard Time",  location: "Australia",               offset: "UTC +8:45" },
      { abbr: "ADT",  name: "Arabia Daylight Time",                      location: "Asia",                    offset: "UTC +4" },
      { abbr: "ADT",  name: "Atlantic Daylight Time",                    location: "North America Atlantic",  offset: "UTC -3" },
      { abbr: "AEDT", name: "Australian Eastern Daylight Time",          location: "Australia",               offset: "UTC +11" },
      { abbr: "AEST", name: "Australian Eastern Standard Time",          location: "Australia",               offset: "UTC +10" },
      { abbr: "AET",  name: "Australian Eastern Time",                   location: "Australia",               offset: "UTC +10:00 / +11:00" },
      { abbr: "AFT",  name: "Afghanistan Time",                          location: "Asia",                    offset: "UTC +4:30" },
      { abbr: "AKDT", name: "Alaska Daylight Time",                      location: "North America",           offset: "UTC -8" },
      { abbr: "AKST", name: "Alaska Standard Time",                      location: "North America",           offset: "UTC -9" },
      { abbr: "ALMT", name: "Alma-Ata Time",                             location: "Asia",                    offset: "UTC +6" },
      { abbr: "AMST", name: "Amazon Summer Time",                        location: "South America",           offset: "UTC -3" },
      { abbr: "AMST", name: "Armenia Summer Time",                       location: "Asia",                    offset: "UTC +5" },
      { abbr: "AMT",  name: "Amazon Time",                               location: "South America",           offset: "UTC -4" },
      { abbr: "AMT",  name: "Armenia Time",                              location: "Asia",                    offset: "UTC +4" },
      { abbr: "ANAST",name: "Anadyr Summer Time",                        location: "Asia",                    offset: "UTC +12" },
      { abbr: "ANAT", name: "Anadyr Time",                               location: "Asia",                    offset: "UTC +12" },
      { abbr: "AQTT", name: "Aqtobe Time",                               location: "Asia",                    offset: "UTC +5" },
      { abbr: "ART",  name: "Argentina Time",                            location: "South America",           offset: "UTC -3" },
      { abbr: "AST",  name: "Arabia Standard Time",                      location: "Asia",                    offset: "UTC +3" },
      { abbr: "AST",  name: "Atlantic Standard Time",                    location: "North America Atlantic Caribbean", offset: "UTC -4" },
      { abbr: "AT",   name: "Atlantic Time",                             location: "North America Atlantic Caribbean", offset: "UTC -4:00 / -3:00" },
      { abbr: "AWDT", name: "Australian Western Daylight Time",          location: "Australia",               offset: "UTC +9" },
      { abbr: "AWST", name: "Australian Western Standard Time",          location: "Australia",               offset: "UTC +8" },
      { abbr: "AZOST",name: "Azores Summer Time",                        location: "Atlantic",                offset: "UTC +0" },
      { abbr: "AZOT", name: "Azores Time",                               location: "Atlantic",                offset: "UTC -1" },
      { abbr: "AZST", name: "Azerbaijan Summer Time",                    location: "Asia",                    offset: "UTC +5" },
      { abbr: "AZT",  name: "Azerbaijan Time",                           location: "Asia",                    offset: "UTC +4" },
      { abbr: "AoE",  name: "Anywhere on Earth",                         location: "Pacific",                 offset: "UTC -12" },
      { abbr: "B",    name: "Bravo Time Zone",                           location: "Military",                offset: "UTC +2" },
      { abbr: "BNT",  name: "Brunei Darussalam Time",                    location: "Asia",                    offset: "UTC +8" },
      { abbr: "BOT",  name: "Bolivia Time",                              location: "South America",           offset: "UTC -4" },
      { abbr: "BRST", name: "Brasília Summer Time",                      location: "South America",           offset: "UTC -2" },
      { abbr: "BRT",  name: "Brasília Time",                             location: "South America",           offset: "UTC -3" },
      { abbr: "BST",  name: "Bangladesh Standard Time",                  location: "Asia",                    offset: "UTC +6" },
      { abbr: "BST",  name: "Bougainville Standard Time",                location: "Pacific",                 offset: "UTC +11" },
      { abbr: "BST",  name: "British Summer Time",                       location: "Europe",                  offset: "UTC +1" },
      { abbr: "BTT",  name: "Bhutan Time",                               location: "Asia",                    offset: "UTC +6" },
      { abbr: "C",    name: "Charlie Time Zone",                         location: "Military",                offset: "UTC +3" },
      { abbr: "CAST", name: "Casey Time",                                location: "Antarctica",              offset: "UTC +8" },
      { abbr: "CAT",  name: "Central Africa Time",                       location: "Africa",                  offset: "UTC +2" },
      { abbr: "CCT",  name: "Cocos Islands Time",                        location: "Indian Ocean",            offset: "UTC +6:30" },
      { abbr: "CDT",  name: "Central Daylight Time",                     location: "North America",           offset: "UTC -5" },
      { abbr: "CDT",  name: "Cuba Daylight Time",                        location: "Caribbean",               offset: "UTC -4" },
      { abbr: "CEST", name: "Central European Summer Time",              location: "Europe",                  offset: "UTC +2" },
      { abbr: "CET",  name: "Central European Time",                      location: "Europe/Africa",           offset: "UTC +1" },
      { abbr: "CHADT",name: "Chatham Island Daylight Time",              location: "Pacific",                 offset: "UTC +13:45" },
      { abbr: "CHAST",name: "Chatham Island Standard Time",              location: "Pacific",                 offset: "UTC +12:45" },
      { abbr: "CHOST",name: "Choibalsan Summer Time",                     location: "Asia",                    offset: "UTC +9" },
      { abbr: "CHOT", name: "Choibalsan Time",                           location: "Asia",                    offset: "UTC +8" },
      { abbr: "CHUT", name: "Chuuk Time",                                location: "Pacific",                 offset: "UTC +10" },
      { abbr: "CIDST",name: "Cayman Islands Daylight Saving Time",      location: "Caribbean",               offset: "UTC -4" },
      { abbr: "CIST", name: "Cayman Islands Standard Time",              location: "Caribbean",               offset: "UTC -5" },
      { abbr: "CKT",  name: "Cook Island Time",                          location: "Pacific",                 offset: "UTC -10" },
      { abbr: "CLST", name: "Chile Summer Time",                         location: "South America/Antarctica",offset: "UTC -3" },
      { abbr: "CLT",  name: "Chile Standard Time",                       location: "South America/Antarctica",offset: "UTC -4" },
      { abbr: "COT",  name: "Colombia Time",                             location: "South America",           offset: "UTC -5" },
      { abbr: "CST",  name: "Central Standard Time",                     location: "North America/Central America", offset: "UTC -6" },
      { abbr: "CST",  name: "China Standard Time",                       location: "Asia",                    offset: "UTC +8" },
      { abbr: "CST",  name: "Cuba Standard Time",                        location: "Caribbean",               offset: "UTC -5" },
      { abbr: "CT",   name: "Central Time",                              location: "North America/Central America", offset: "UTC -6:00 / -5:00" },
      { abbr: "CVT",  name: "Cape Verde Time",                           location: "Africa",                  offset: "UTC -1" },
      { abbr: "CXT",  name: "Christmas Island Time",                     location: "Australia",               offset: "UTC +7" },
      { abbr: "ChST", name: "Chamorro Standard Time",                    location: "Pacific",                 offset: "UTC +10" },
      { abbr: "D",    name: "Delta Time Zone",                           location: "Military",                offset: "UTC +4" },
      { abbr: "DAVT", name: "Davis Time",                                location: "Antarctica",              offset: "UTC +7" },
      { abbr: "DDUT", name: "Dumont-d'Urville Time",                     location: "Antarctica",              offset: "UTC +10" },
      { abbr: "E",    name: "Echo Time Zone",                            location: "Military",                offset: "UTC +5" },
      { abbr: "EASST",name: "Easter Island Summer Time",               location: "Pacific",                 offset: "UTC -5" },
      { abbr: "EAST", name: "Easter Island Standard Time",             location: "Pacific",                 offset: "UTC -6" },
      { abbr: "EAT",  name: "Eastern Africa Time",                       location: "Africa/Indian Ocean",     offset: "UTC +3" },
      { abbr: "ECT",  name: "Ecuador Time",                              location: "South America",           offset: "UTC -5" },
      { abbr: "EDT",  name: "Eastern Daylight Time",                     location: "North America/Caribbean", offset: "UTC -4" },
      { abbr: "EEST", name: "Eastern European Summer Time",              location: "Europe/Asia/Africa",      offset: "UTC +3" },
      { abbr: "EET",  name: "Eastern European Time",                     location: "Europe/Asia/Africa",      offset: "UTC +2" },
      { abbr: "EGST", name: "Eastern Greenland Summer Time",             location: "North America",           offset: "UTC +0" },
      { abbr: "EGT",  name: "East Greenland Time",                       location: "North America",           offset: "UTC -1" },
      { abbr: "EST",  name: "Eastern Standard Time",                     location: "North America/Caribbean/Central America", offset: "UTC -5" },
      { abbr: "ET",   name: "Eastern Time",                              location: "North America/Caribbean/Central America", offset: "UTC -5:00 / -4:00" },
      { abbr: "F",    name: "Foxtrot Time Zone",                         location: "Military",                offset: "UTC +6" },
      { abbr: "FET",  name: "Further-Eastern European Time",             location: "Europe",                  offset: "UTC +3" },
      { abbr: "FJST", name: "Fiji Summer Time",                          location: "Pacific",                 offset: "UTC +13" },
      { abbr: "FJT",  name: "Fiji Time",                                 location: "Pacific",                 offset: "UTC +12" },
      { abbr: "FKST", name: "Falkland Islands Summer Time",              location: "South America",           offset: "UTC -3" },
      { abbr: "FKT",  name: "Falkland Islands Time",                     location: "South America",           offset: "UTC -4" },
      { abbr: "FNT",  name: "Fernando de Noronha Time",                  location: "South America",           offset: "UTC -2" },
      { abbr: "G",    name: "Golf Time Zone",                            location: "Military",                offset: "UTC +7" },
      { abbr: "GALT", name: "Galapagos Time",                            location: "Pacific",                 offset: "UTC -6" },
      { abbr: "GAMT", name: "Gambier Time",                              location: "Pacific",                 offset: "UTC -9" },
      { abbr: "GET",  name: "Georgia Standard Time",                     location: "Asia/Europe",             offset: "UTC +4" },
      { abbr: "GFT",  name: "French Guiana Time",                        location: "South America",           offset: "UTC -3" },
      { abbr: "GILT", name: "Gilbert Island Time",                       location: "Pacific",                 offset: "UTC +12" },
      { abbr: "GMT",  name: "Greenwich Mean Time",                       location: "Worldwide",               offset: "UTC +0" },
      { abbr: "GST",  name: "Gulf Standard Time",                        location: "Asia",                    offset: "UTC +4" },
      { abbr: "GST",  name: "South Georgia Time",                        location: "South America",           offset: "UTC -2" },
      { abbr: "GYT",  name: "Guyana Time",                               location: "South America",           offset: "UTC -4" },
      { abbr: "H",    name: "Hotel Time Zone",                           location: "Military",                offset: "UTC +8" },
      { abbr: "HDT",  name: "Hawaii-Aleutian Daylight Time",             location: "North America",           offset: "UTC -9" },
      { abbr: "HKT",  name: "Hong Kong Time",                            location: "Asia",                    offset: "UTC +8" },
      { abbr: "HOVST",name: "Hovd Summer Time",                          location: "Asia",                    offset: "UTC +8" },
      { abbr: "HOVT", name: "Hovd Time",                                 location: "Asia",                    offset: "UTC +7" },
      { abbr: "HST",  name: "Hawaii Standard Time",                      location: "North America",           offset: "UTC -10" },
      { abbr: "I",    name: "India Time Zone",                           location: "Military",                offset: "UTC +9" },
      { abbr: "ICT",  name: "Indochina Time",                            location: "Asia",                    offset: "UTC +7" },
      { abbr: "IDT",  name: "Israel Daylight Time",                      location: "Asia",                    offset: "UTC +3" },
      { abbr: "IOT",  name: "Indian Chagos Time",                        location: "Indian Ocean",            offset: "UTC +6" },
      { abbr: "IRDT", name: "Iran Daylight Time",                        location: "Asia",                    offset: "UTC +4:30" },
      { abbr: "IRKST",name: "Irkutsk Summer Time",                       location: "Asia",                    offset: "UTC +9" },
      { abbr: "IRKT", name: "Irkutsk Time",                              location: "Asia",                    offset: "UTC +8" },
      { abbr: "IRST", name: "Iran Standard Time",                        location: "Asia",                    offset: "UTC +3:30" },
      { abbr: "IST",  name: "India Standard Time",                       location: "Asia",                    offset: "UTC +5:30" },
      { abbr: "IST",  name: "Irish Standard Time",                       location: "Europe",                  offset: "UTC +1" },
      { abbr: "IST",  name: "Israel Standard Time",                      location: "Asia",                    offset: "UTC +2" },
      { abbr: "JST",  name: "Japan Standard Time",                       location: "Asia",                    offset: "UTC +9" },
      { abbr: "K",    name: "Kilo Time Zone",                            location: "Military",                offset: "UTC +10" },
      { abbr: "KGT",  name: "Kyrgyzstan Time",                           location: "Asia",                    offset: "UTC +6" },
      { abbr: "KOST", name: "Kosrae Time",                               location: "Pacific",                 offset: "UTC +11" },
      { abbr: "KRAST",name: "Krasnoyarsk Summer Time",                   location: "Asia",                    offset: "UTC +8" },
      { abbr: "KRAT", name: "Krasnoyarsk Time",                          location: "Asia",                    offset: "UTC +7" },
      { abbr: "KST",  name: "Korea Standard Time",                       location: "Asia",                    offset: "UTC +9" },
      { abbr: "KUYT", name: "Kuybyshev Time",                            location: "Europe",                  offset: "UTC +4" },
      { abbr: "L",    name: "Lima Time Zone",                            location: "Military",                offset: "UTC +11" },
      { abbr: "LHDT", name: "Lord Howe Daylight Time",                   location: "Australia",               offset: "UTC +11" },
      { abbr: "LHST", name: "Lord Howe Standard Time",                   location: "Australia",               offset: "UTC +10:30" },
      { abbr: "LINT", name: "Line Islands Time",                         location: "Pacific",                 offset: "UTC +14" },
      { abbr: "M",    name: "Mike Time Zone",                            location: "Military",                offset: "UTC +12" },
      { abbr: "MAGST",name: "Magadan Summer Time",                       location: "Asia",                    offset: "UTC +12" },
      { abbr: "MAGT", name: "Magadan Time",                              location: "Asia",                    offset: "UTC +11" },
      { abbr: "MART", name: "Marquesas Time",                            location: "Pacific",                 offset: "UTC -9:30" },
      { abbr: "MAWT", name: "Mawson Time",                               location: "Antarctica",              offset: "UTC +5" },
      { abbr: "MDT",  name: "Mountain Daylight Time",                    location: "North America",           offset: "UTC -6" },
      { abbr: "MHT",  name: "Marshall Islands Time",                     location: "Pacific",                 offset: "UTC +12" },
      { abbr: "MMT",  name: "Myanmar Time",                              location: "Asia",                    offset: "UTC +6:30" },
      { abbr: "MSD",  name: "Moscow Daylight Time",                      location: "Europe",                  offset: "UTC +4" },
      { abbr: "MSK",  name: "Moscow Standard Time",                      location: "Europe/Asia",             offset: "UTC +3" },
      { abbr: "MST",  name: "Mountain Standard Time",                    location: "North America",           offset: "UTC -7" },
      { abbr: "MT",   name: "Mountain Time",                             location: "North America",           offset: "UTC -7:00 / -6:00" },
      { abbr: "MUT",  name: "Mauritius Time",                            location: "Africa",                  offset: "UTC +4" },
      { abbr: "MVT",  name: "Maldives Time",                             location: "Asia",                    offset: "UTC +5" },
      { abbr: "MYT",  name: "Malaysia Time",                             location: "Asia",                    offset: "UTC +8" },
      { abbr: "N",    name: "November Time Zone",                        location: "Military",                offset: "UTC -1" },
      { abbr: "NCT",  name: "New Caledonia Time",                        location: "Pacific",                 offset: "UTC +11" },
      { abbr: "NDT",  name: "Newfoundland Daylight Time",                location: "North America",           offset: "UTC -2:30" },
      { abbr: "NFDT", name: "Norfolk Daylight Time",                     location: "Australia",               offset: "UTC +12" },
      { abbr: "NFT",  name: "Norfolk Time",                              location: "Australia",               offset: "UTC +11" },
      { abbr: "NOVST",name: "Novosibirsk Summer Time",                   location: "Asia",                    offset: "UTC +7" },
      { abbr: "NOVT", name: "Novosibirsk Time",                          location: "Asia",                    offset: "UTC +7" },
      { abbr: "NPT",  name: "Nepal Time",                                location: "Asia",                    offset: "UTC +5:45" },
      { abbr: "NRT",  name: "Nauru Time",                                location: "Pacific",                 offset: "UTC +12" },
      { abbr: "NST",  name: "Newfoundland Standard Time",                location: "North America",           offset: "UTC -3:30" },
      { abbr: "NUT",  name: "Niue Time",                                 location: "Pacific",                 offset: "UTC -11" },
      { abbr: "NZDT", name: "New Zealand Daylight Time",                 location: "Antarctica",              offset: "UTC +13" },
      { abbr: "NZST", name: "New Zealand Standard Time",                 location: "Antarctica",              offset: "UTC +12" },
      { abbr: "O",    name: "Oscar Time Zone",                           location: "Military",                offset: "UTC -2" },
      { abbr: "OMSST",name: "Omsk Summer Time",                          location: "Asia",                    offset: "UTC +7" },
      { abbr: "OMST", name: "Omsk Standard Time",                        location: "Asia",                    offset: "UTC +6" },
      { abbr: "ORAT", name: "Oral Time",                                 location: "Asia",                    offset: "UTC +5" },
      { abbr: "P",    name: "Papa Time Zone",                            location: "Military",                offset: "UTC -3" },
      { abbr: "PDT",  name: "Pacific Daylight Time",                     location: "North America",           offset: "UTC -7" },
      { abbr: "PET",  name: "Peru Time",                                 location: "South America",           offset: "UTC -5" },
      { abbr: "PETST",name: "Kamchatka Summer Time",                     location: "Asia",                    offset: "UTC +12" },
      { abbr: "PETT", name: "Kamchatka Time",                            location: "Asia",                    offset: "UTC +12" },
      { abbr: "PGT",  name: "Papua New Guinea Time",                     location: "Pacific",                 offset: "UTC +10" },
      { abbr: "PHOT", name: "Phoenix Island Time",                       location: "Pacific",                 offset: "UTC +13" },
      { abbr: "PHT",  name: "Philippine Time",                           location: "Asia",                    offset: "UTC +8" },
      { abbr: "PKT",  name: "Pakistan Standard Time",                    location: "Asia",                    offset: "UTC +5" },
      { abbr: "PMDT", name: "Pierre & Miquelon Daylight Time",           location: "North America",           offset: "UTC -2" },
      { abbr: "PMST", name: "Pierre & Miquelon Standard Time",           location: "North America",           offset: "UTC -3" },
      { abbr: "PONT", name: "Pohnpei Standard Time",                     location: "Pacific",                 offset: "UTC +11" },
      { abbr: "PST",  name: "Pacific Standard Time",                     location: "North America",           offset: "UTC -8" },
      { abbr: "PST",  name: "Pitcairn Standard Time",                    location: "Pacific",                 offset: "UTC -8" },
      { abbr: "PT",   name: "Pacific Time",                              location: "North America",           offset: "UTC -8:00 / -7:00" },
      { abbr: "PWT",  name: "Palau Time",                                location: "Pacific",                 offset: "UTC +9" },
      { abbr: "PYST", name: "Paraguay Summer Time",                      location: "South America",           offset: "UTC -3" },
      { abbr: "PYT",  name: "Paraguay Time",                             location: "South America",           offset: "UTC -3" },
      { abbr: "PYT",  name: "Pyongyang Time",                            location: "Asia",                    offset: "UTC +8:30" },
      { abbr: "Q",    name: "Quebec Time Zone",                          location: "Military",                offset: "UTC -4" },
      { abbr: "QYZT", name: "Qyzylorda Time",                            location: "Asia",                    offset: "UTC +6" },
      { abbr: "R",    name: "Romeo Time Zone",                           location: "Military",                offset: "UTC -5" },
      { abbr: "RET",  name: "Reunion Time",                              location: "Africa",                  offset: "UTC +4" },
      { abbr: "ROTT", name: "Rothera Time",                              location: "Antarctica",              offset: "UTC -3" },
      { abbr: "S",    name: "Sierra Time Zone",                          location: "Military",                offset: "UTC -6" },
      { abbr: "SAKT", name: "Sakhalin Time",                             location: "Asia",                    offset: "UTC +11" },
      { abbr: "SAMT", name: "Samara Time",                              location: "Europe",                  offset: "UTC +4" },
      { abbr: "SAST", name: "South Africa Standard Time",              location: "Africa",                  offset: "UTC +2" },
      { abbr: "SBT",  name: "Solomon Islands Time",                      location: "Pacific",                 offset: "UTC +11" },
      { abbr: "SCT",  name: "Seychelles Time",                           location: "Africa",                  offset: "UTC +4" },
      { abbr: "SGT",  name: "Singapore Time",                            location: "Asia",                    offset: "UTC +8" },
      { abbr: "SRET", name: "Srednekolymsk Time",                        location: "Asia",                    offset: "UTC +11" },
      { abbr: "SRT",  name: "Suriname Time",                             location: "South America",           offset: "UTC -3" },
      { abbr: "SST",  name: "Samoa Standard Time",                       location: "Pacific",                 offset: "UTC -11" },
      { abbr: "SYOT", name: "Syowa Time",                                location: "Antarctica",              offset: "UTC +3" },
      { abbr: "T",    name: "Tango Time Zone",                           location: "Military",                offset: "UTC -7" },
      { abbr: "TAHT", name: "Tahiti Time",                               location: "Pacific",                 offset: "UTC -10" },
      { abbr: "TFT",  name: "French Southern and Antarctic Time",      location: "Indian Ocean",            offset: "UTC +5" },
      { abbr: "TJT",  name: "Tajikistan Time",                           location: "Asia",                    offset: "UTC +5" },
      { abbr: "TKT",  name: "Tokelau Time",                              location: "Pacific",                 offset: "UTC +13" },
      { abbr: "TLT",  name: "East Timor Time",                           location: "Asia",                    offset: "UTC +9" },
      { abbr: "TMT",  name: "Turkmenistan Time",                         location: "Asia",                    offset: "UTC +5" },
      { abbr: "TOST", name: "Tonga Summer Time",                         location: "Pacific",                 offset: "UTC +14" },
      { abbr: "TOT",  name: "Tonga Time",                                location: "Pacific",                 offset: "UTC +13" },
      { abbr: "TRT",  name: "Turkey Time",                               location: "Asia/Europe",             offset: "UTC +3" },
      { abbr: "TVT",  name: "Tuvalu Time",                               location: "Pacific",                 offset: "UTC +12" },
      { abbr: "U",    name: "Uniform Time Zone",                         location: "Military",                offset: "UTC -8" },
      { abbr: "ULAST",name: "Ulaanbaatar Summer Time",                   location: "Asia",                    offset: "UTC +9" },
      { abbr: "ULAT", name: "Ulaanbaatar Time",                          location: "Asia",                    offset: "UTC +8" },
      { abbr: "UTC",  name: "Coordinated Universal Time",                location: "Worldwide",               offset: "UTC" },
      { abbr: "UYST", name: "Uruguay Summer Time",                       location: "South America",           offset: "UTC -2" },
      { abbr: "UYT",  name: "Uruguay Time",                              location: "South America",           offset: "UTC -3" },
      { abbr: "UZT",  name: "Uzbekistan Time",                           location: "Asia",                    offset: "UTC +5" },
      { abbr: "V",    name: "Victor Time Zone",                          location: "Military",                offset: "UTC -9" },
      { abbr: "VET",  name: "Venezuelan Standard Time",                  location: "South America",           offset: "UTC -4" },
      { abbr: "VLAST",name: "Vladivostok Summer Time",                   location: "Asia",                    offset: "UTC +11" },
      { abbr: "VLAT", name: "Vladivostok Time",                          location: "Asia",                    offset: "UTC +10" },
      { abbr: "VOST", name: "Vostok Time",                               location: "Antarctica",              offset: "UTC +6" },
      { abbr: "VUT",  name: "Vanuatu Time",                              location: "Pacific",                 offset: "UTC +11" },
      { abbr: "W",    name: "Whiskey Time Zone",                         location: "Military",                offset: "UTC -10" },
      { abbr: "WAKT", name: "Wake Time",                                 location: "Pacific",                 offset: "UTC +12" },
      { abbr: "WARST",name: "Western Argentine Summer Time",           location: "South America",           offset: "UTC -3" },
      { abbr: "WAST", name: "West Africa Summer Time",                   location: "Africa",                  offset: "UTC +2" },
      { abbr: "WAT",  name: "West Africa Time",                          location: "Africa",                  offset: "UTC +1" },
      { abbr: "WEST", name: "Western European Summer Time",              location: "Europe/Africa",           offset: "UTC +1" },
      { abbr: "WET",  name: "Western European Time",                     location: "Europe/Africa",           offset: "UTC +0" },
      { abbr: "WFT",  name: "Wallis and Futuna Time",                    location: "Pacific",                 offset: "UTC +12" },
      { abbr: "WGST", name: "Western Greenland Summer Time",             location: "North America",           offset: "UTC -1" },
      { abbr: "WGT",  name: "Western Greenland Time",                    location: "North America",           offset: "UTC -2" },
      { abbr: "WIB",  name: "Western Indonesian Time",                   location: "Asia",                    offset: "UTC +7" },
      { abbr: "WIT",  name: "Eastern Indonesian Time",                   location: "Asia",                    offset: "UTC +9" },
      { abbr: "WITA", name: "Central Indonesian Time",                   location: "Asia",                    offset: "UTC +8" },
      { abbr: "WST",  name: "West Samoa Time",                           location: "Pacific",                 offset: "UTC +13" },
      { abbr: "WST",  name: "Western Sahara Summer Time",                location: "Africa",                  offset: "UTC +1" },
      { abbr: "WT",   name: "Western Sahara Standard Time",              location: "Africa",                  offset: "UTC +0" },
      { abbr: "X",    name: "X-ray Time Zone",                           location: "Military",                offset: "UTC -11" },
      { abbr: "Y",    name: "Yankee Time Zone",                          location: "Military",                offset: "UTC -12" },
      { abbr: "YAKST",name: "Yakutsk Summer Time",                       location: "Asia",                    offset: "UTC +10" },
      { abbr: "YAKT", name: "Yakutsk Time",                              location: "Asia",                    offset: "UTC +9" },
      { abbr: "YAPT", name: "Yap Time",                                  location: "Pacific",                 offset: "UTC +10" },
      { abbr: "YEKST",name: "Yekaterinburg Summer Time",                 location: "Asia",                    offset: "UTC +6" },
      { abbr: "YEKT", name: "Yekaterinburg Time",                        location: "Asia",                    offset: "UTC +5" },
      { abbr: "Z",    name: "Zulu Time Zone",                            location: "Military",                offset: "UTC +0" }
    ];

    // Function to parse an offset string (e.g. "UTC +10:30" or "UTC -5").
    // If a slash is present (e.g. "UTC +9:30 / +10:30"), the first value is used.
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

    // Compute offsetMinutes for each time zone object.
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
        // Store full tooltip text and computed offset in data attributes.
        item.setAttribute('data-tooltip', `${tz.name} – ${tz.location} (${tz.offset})`);
        item.setAttribute('data-offset', tz.offsetMinutes);
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

      // Use a global tooltip element to avoid clipping by the ticker container.
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
        // On click, update the main clock's time zone.
        item.addEventListener('click', function() {
          const offsetMinutes = parseInt(item.getAttribute('data-offset'), 10);
          selectedTZ = {
            abbr: item.innerText.trim(),
            offsetMinutes: offsetMinutes
          };
          tickerItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
        });
      });
      animateTicker();
    });
  
