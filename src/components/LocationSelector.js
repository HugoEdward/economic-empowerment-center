'use client';
import { useState, useMemo } from 'react';

// 195+ Countries & Territories — includes Taiwan, Palestine, Tibet, Hong Kong, Kosovo, Puerto Rico, etc.
const LOCATIONS = {
  "Afghanistan":["Kabul","Herat","Kandahar","Mazar-i-Sharif"],
  "Albania":["Tirana","Durrës","Vlorë"],
  "Algeria":["Algiers","Oran","Constantine"],
  "Argentina":["Buenos Aires","Córdoba","Rosario","Mendoza","La Plata"],
  "Armenia":["Yerevan","Gyumri"],
  "Australia":["Sydney, NSW","Melbourne, VIC","Brisbane, QLD","Perth, WA","Adelaide, SA"],
  "Austria":["Vienna","Graz","Linz","Salzburg"],
  "Azerbaijan":["Baku","Ganja"],
  "Bahamas":["Nassau"],
  "Bahrain":["Manama"],
  "Bangladesh":["Dhaka","Chittagong","Sylhet","Rajshahi"],
  "Barbados":["Bridgetown"],
  "Belarus":["Minsk","Gomel"],
  "Belgium":["Brussels","Antwerp","Ghent","Bruges"],
  "Belize":["Belize City","Belmopan"],
  "Benin":["Cotonou","Porto-Novo"],
  "Bolivia":["La Paz","Santa Cruz","Cochabamba"],
  "Bosnia & Herzegovina":["Sarajevo","Banja Luka"],
  "Botswana":["Gaborone"],
  "Brazil":["São Paulo","Rio de Janeiro","Brasília","Salvador","Belo Horizonte","Recife","Curitiba","Manaus"],
  "Brunei":["Bandar Seri Begawan"],
  "Bulgaria":["Sofia","Plovdiv","Varna"],
  "Burkina Faso":["Ouagadougou"],
  "Burundi":["Bujumbura","Gitega"],
  "Cambodia":["Phnom Penh","Siem Reap"],
  "Cameroon":["Yaoundé","Douala"],
  "Canada":["Toronto, ON","Montreal, QC","Vancouver, BC","Calgary, AB","Ottawa, ON","Edmonton, AB","Winnipeg, MB"],
  "Cape Verde":["Praia"],
  "Central African Republic":["Bangui"],
  "Chad":["N'Djamena"],
  "Chile":["Santiago","Valparaíso","Concepción"],
  "China":["Beijing","Shanghai","Guangzhou","Shenzhen","Chengdu","Wuhan","Hangzhou"],
  "Colombia":["Bogotá","Medellín","Cali","Barranquilla","Cartagena"],
  "Comoros":["Moroni"],
  "Congo (Republic)":["Brazzaville"],
  "Costa Rica":["San José"],
  "Côte d'Ivoire":["Abidjan","Yamoussoukro"],
  "Croatia":["Zagreb","Split"],
  "Cuba":["Havana","Santiago de Cuba"],
  "Cyprus":["Nicosia","Limassol"],
  "Czech Republic":["Prague","Brno"],
  "DR Congo":["Kinshasa","Lubumbashi","Mbuji-Mayi"],
  "Denmark":["Copenhagen","Aarhus"],
  "Djibouti":["Djibouti"],
  "Dominican Republic":["Santo Domingo","Santiago"],
  "Ecuador":["Quito","Guayaquil","Cuenca"],
  "Egypt":["Cairo","Alexandria","Giza"],
  "El Salvador":["San Salvador"],
  "Equatorial Guinea":["Malabo"],
  "Eritrea":["Asmara"],
  "Estonia":["Tallinn"],
  "Eswatini":["Mbabane"],
  "Ethiopia":["Addis Ababa","Dire Dawa"],
  "Faroe Islands":["Tórshavn"],
  "Fiji":["Suva"],
  "Finland":["Helsinki","Tampere","Turku"],
  "France":["Paris","Marseille","Lyon","Toulouse","Nice","Bordeaux","Strasbourg"],
  "Gabon":["Libreville"],
  "Gambia":["Banjul"],
  "Georgia":["Tbilisi","Batumi"],
  "Germany":["Berlin","Hamburg","Munich","Cologne","Frankfurt","Stuttgart","Düsseldorf"],
  "Ghana":["Accra","Kumasi","Tamale"],
  "Greece":["Athens","Thessaloniki","Patras"],
  "Greenland":["Nuuk"],
  "Grenada":["St. George's"],
  "Guatemala":["Guatemala City"],
  "Guinea":["Conakry"],
  "Guinea-Bissau":["Bissau"],
  "Guyana":["Georgetown"],
  "Haiti":["Port-au-Prince","Cap-Haïtien"],
  "Honduras":["Tegucigalpa","San Pedro Sula"],
  "Hong Kong":["Hong Kong"],
  "Hungary":["Budapest","Debrecen"],
  "Iceland":["Reykjavik"],
  "India":["Mumbai","Delhi","Bangalore","Hyderabad","Chennai","Kolkata","Ahmedabad","Pune","Jaipur"],
  "Indonesia":["Jakarta","Surabaya","Bandung","Medan","Bali"],
  "Iran":["Tehran","Isfahan","Mashhad"],
  "Iraq":["Baghdad","Erbil","Basra"],
  "Ireland":["Dublin","Cork","Galway"],
  "Israel":["Tel Aviv","Jerusalem","Haifa"],
  "Italy":["Rome","Milan","Naples","Turin","Florence","Bologna"],
  "Jamaica":["Kingston","Montego Bay"],
  "Japan":["Tokyo","Osaka","Yokohama","Nagoya","Sapporo","Kyoto","Fukuoka"],
  "Jordan":["Amman"],
  "Kazakhstan":["Almaty","Astana"],
  "Kenya":["Nairobi","Mombasa","Kisumu"],
  "Kosovo":["Pristina","Prizren"],
  "Kuwait":["Kuwait City"],
  "Kyrgyzstan":["Bishkek"],
  "Laos":["Vientiane"],
  "Latvia":["Riga"],
  "Lebanon":["Beirut","Tripoli"],
  "Lesotho":["Maseru"],
  "Liberia":["Monrovia"],
  "Libya":["Tripoli","Benghazi"],
  "Lithuania":["Vilnius","Kaunas"],
  "Luxembourg":["Luxembourg City"],
  "Macau":["Macau"],
  "Madagascar":["Antananarivo"],
  "Malawi":["Lilongwe","Blantyre"],
  "Malaysia":["Kuala Lumpur","George Town","Johor Bahru"],
  "Maldives":["Malé"],
  "Mali":["Bamako"],
  "Malta":["Valletta"],
  "Mauritania":["Nouakchott"],
  "Mauritius":["Port Louis"],
  "Mexico":["Mexico City","Guadalajara","Monterrey","Cancún","Puebla","Tijuana"],
  "Moldova":["Chișinău"],
  "Mongolia":["Ulaanbaatar"],
  "Montenegro":["Podgorica"],
  "Morocco":["Casablanca","Rabat","Marrakech","Fez"],
  "Mozambique":["Maputo"],
  "Myanmar":["Yangon","Mandalay"],
  "Namibia":["Windhoek"],
  "Nepal":["Kathmandu","Pokhara"],
  "Netherlands":["Amsterdam","Rotterdam","The Hague","Utrecht"],
  "New Zealand":["Auckland","Wellington","Christchurch"],
  "Nicaragua":["Managua"],
  "Niger":["Niamey"],
  "Nigeria":["Lagos","Abuja","Kano","Port Harcourt","Ibadan"],
  "North Macedonia":["Skopje"],
  "Norway":["Oslo","Bergen","Trondheim"],
  "Oman":["Muscat"],
  "Pakistan":["Karachi","Lahore","Islamabad","Rawalpindi","Faisalabad"],
  "Palestine":["Ramallah","Gaza City","Bethlehem","Nablus","Hebron"],
  "Panama":["Panama City"],
  "Papua New Guinea":["Port Moresby"],
  "Paraguay":["Asunción"],
  "Peru":["Lima","Arequipa","Cusco","Trujillo"],
  "Philippines":["Manila","Cebu","Davao","Quezon City"],
  "Poland":["Warsaw","Kraków","Wrocław","Gdańsk","Poznań"],
  "Portugal":["Lisbon","Porto","Braga"],
  "Puerto Rico":["San Juan","Ponce","Bayamón"],
  "Qatar":["Doha"],
  "Romania":["Bucharest","Cluj-Napoca","Timișoara"],
  "Russia":["Moscow","St. Petersburg","Novosibirsk","Yekaterinburg"],
  "Rwanda":["Kigali"],
  "Saudi Arabia":["Riyadh","Jeddah","Mecca","Medina"],
  "Senegal":["Dakar"],
  "Serbia":["Belgrade","Novi Sad"],
  "Sierra Leone":["Freetown"],
  "Singapore":["Singapore"],
  "Slovakia":["Bratislava"],
  "Slovenia":["Ljubljana"],
  "Somalia":["Mogadishu"],
  "South Africa":["Johannesburg","Cape Town","Durban","Pretoria"],
  "South Korea":["Seoul","Busan","Incheon","Daegu"],
  "South Sudan":["Juba"],
  "Spain":["Madrid","Barcelona","Valencia","Seville","Bilbao"],
  "Sri Lanka":["Colombo","Kandy"],
  "Sudan":["Khartoum"],
  "Suriname":["Paramaribo"],
  "Sweden":["Stockholm","Gothenburg","Malmö"],
  "Switzerland":["Zurich","Geneva","Basel","Bern"],
  "Syria":["Damascus","Aleppo"],
  "Taiwan":["Taipei","Kaohsiung","Taichung","Tainan"],
  "Tajikistan":["Dushanbe"],
  "Tanzania":["Dar es Salaam","Dodoma","Zanzibar"],
  "Thailand":["Bangkok","Chiang Mai","Phuket","Pattaya"],
  "Tibet":["Lhasa","Shigatse"],
  "Timor-Leste":["Dili"],
  "Togo":["Lomé"],
  "Trinidad & Tobago":["Port of Spain","San Fernando"],
  "Tunisia":["Tunis"],
  "Türkiye":["Istanbul","Ankara","Izmir","Antalya"],
  "Turkmenistan":["Ashgabat"],
  "Uganda":["Kampala"],
  "Ukraine":["Kyiv","Lviv","Odesa","Kharkiv"],
  "United Arab Emirates":["Dubai","Abu Dhabi","Sharjah"],
  "United Kingdom":["London","Manchester","Birmingham","Edinburgh","Glasgow","Liverpool","Bristol"],
  "United States":["New York, NY","Los Angeles, CA","Chicago, IL","Houston, TX","Miami, FL","Philadelphia, PA","San Francisco, CA","Washington, DC","Boston, MA","Atlanta, GA","Dallas, TX","Seattle, WA"],
  "Uruguay":["Montevideo"],
  "Uzbekistan":["Tashkent"],
  "Venezuela":["Caracas","Maracaibo","Valencia"],
  "Vietnam":["Ho Chi Minh City","Hanoi","Da Nang"],
  "Yemen":["Sana'a","Aden"],
  "Zambia":["Lusaka"],
  "Zimbabwe":["Harare","Bulawayo"],
};

const COUNTRIES = Object.keys(LOCATIONS).sort();

export default function LocationSelector({ prefix = '' }) {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() =>
    search ? COUNTRIES.filter(c => c.toLowerCase().includes(search.toLowerCase())) : COUNTRIES
  , [search]);

  const cities = country ? (LOCATIONS[country] || []) : [];

  const cls = 'w-full bg-navy-950 border border-surface-border rounded-lg px-3 py-2 text-sm text-surface-primary placeholder:text-surface-muted outline-none transition-all focus:border-gold focus:ring-1 focus:ring-gold-dim';

  return (
    <div className="space-y-2.5">
      {/* Country / Territory */}
      <div>
        <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
          Country / Territory<span className="text-gold ml-0.5">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={country || search}
            onChange={e => { setSearch(e.target.value); setCountry(''); setCity(''); setOpen(true); }}
            onFocus={() => setOpen(true)}
            placeholder="Search countries & territories..."
            className={cls}
            name={`${prefix}country`}
            required
          />
          {open && filtered.length > 0 && !country && (
            <div className="absolute z-30 top-full left-0 right-0 mt-1 bg-navy-800 border border-surface-border rounded-lg max-h-48 overflow-y-auto shadow-xl">
              {filtered.slice(0, 30).map(c => (
                <button key={c} type="button"
                  onClick={() => { setCountry(c); setSearch(''); setOpen(false); setCity(''); }}
                  className="w-full text-left px-3 py-1.5 text-xs text-surface-secondary hover:bg-navy-700 hover:text-gold transition-colors">
                  {c}
                </button>
              ))}
              {filtered.length > 30 && (
                <p className="px-3 py-1.5 text-[10px] text-surface-muted">Type to narrow results...</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* City */}
      <div>
        <label className="block text-[10px] font-medium text-surface-secondary mb-0.5">
          City<span className="text-gold ml-0.5">*</span>
        </label>
        {cities.length > 0 ? (
          <div>
            <select value={city} onChange={e => setCity(e.target.value)} className={cls + ' appearance-none'} name={`${prefix}city`} required>
              <option value="">Select city...</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
              <option value="_other">Other (specify below)</option>
            </select>
            {city === '_other' && (
              <input type="text" placeholder="Enter city name..." className={cls + ' mt-2'} name={`${prefix}city_other`} required />
            )}
          </div>
        ) : (
          <input type="text" placeholder={country ? 'Enter city name...' : 'Select country first'} className={cls} name={`${prefix}city`} disabled={!country} required />
        )}
      </div>

      <input type="hidden" name={`${prefix}country_value`} value={country} />
    </div>
  );
}

export { COUNTRIES, LOCATIONS };
