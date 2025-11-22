const allQuestionsData = [
    { question: "Axborot nima?", options: ["Ma’lumotlar yig‘indisi bo‘lib, ular inson tomonidan qabul qilinadi va tahlil qilinadi.", "Kompyuter qurilmasi.", "Elektr signali turi.", "Faqat sonlar to‘plami."], correctText: "Ma’lumotlar yig‘indisi bo‘lib, ular inson tomonidan qabul qilinadi va tahlil qilinadi." },
    { question: "Axborotning asosiy xossalaridan biri qaysi?", options: ["To‘liqlik", "Rang", "Narx", "Vazn"], correctText: "To‘liqlik" },
    { question: "Axborotlarni qayta ishlash deganda nima tushuniladi?", options: ["Ma’lumotlarni yig‘ish, saqlash, tahlil qilish va o‘zgartirish jarayoni.", "Faqat ma’lumotlarni o‘chirish jarayoni.", "Kompyuterning tezligini o‘lchash.", "Ma’lumotlarni chop etish jarayoni."], correctText: "Ma’lumotlarni yig‘ish, saqlash, tahlil qilish va o‘zgartirish jarayoni." },
    { question: "Axborot tizimi deganda nima tushuniladi?", options: ["Axborotni yig‘ish, saqlash, qayta ishlash va uzatish uchun mo‘ljallangan tizim.", "Foydalanuvchi interfeysi.", "Elektron pochta xizmati.", "Kiritish qurilmasi."], correctText: "Axborotni yig‘ish, saqlash, qayta ishlash va uzatish uchun mo‘ljallangan tizim." },
    { question: "Axborotning foydaliligi nimaga bog‘liq?", options: ["To‘g‘riligi va aniqligiga", "Narxiga", "Fayl hajmiga", "Kompyuter turiga"], correctText: "To‘g‘riligi va aniqligiga" },
    { question: "Algoritmning asosiy turlari nechta?", options: ["3 ta", "2 ta", "4 ta", "5 ta"], correctText: "3 ta" },
    { question: "Determinallik algoritm xossasi nimani anglatadi?", options: ["Har bir qadamning aniq bajarilishini.", "Algoritmning teskari ishlashini.", "Tasodifiy natijani.", "Foydalanuvchi kiritmasini."], correctText: "Har bir qadamning aniq bajarilishini." },
    { question: "Axborot o‘lchov birliklari qaysi?", options: ["Bit, bayt, kilobayt", "Volt, amper", "Metr, kilogramm", "Sekund, soat"], correctText: "Bit, bayt, kilobayt" },
    { question: "Axborot jarayonlariga nimalar kiradi?", options: ["Yig‘ish, saqlash, qayta ishlash, uzatish", "Faqat chop etish", "Rang o‘zgartirish", "Grafik chizish"], correctText: "Yig‘ish, saqlash, qayta ishlash, uzatish" },
    { question: "Algoritmning diskretligi nimani bildiradi?", options: ["Algoritm bosqichma-bosqich bajarilishini.", "Algoritm uzluksiz bajarilishini.", "Natijasiz ishlashini.", "Cheksiz takrorlanishini."], correctText: "Algoritm bosqichma-bosqich bajarilishini." },
    { question: "Algoritmning natijaviylik xossasi nimani bildiradi?", options: ["Ma’lum vaqt ichida yakuniy natija berishini.", "Doimiy ravishda ishlashini.", "Xatoliklar yuzaga kelishini.", "Hech qachon tugamasligini."], correctText: "Ma’lum vaqt ichida yakuniy natija berishini." },
    { question: "Axborotning dolzarbligi deganda nima tushuniladi?", options: ["Vaqtida olingan va foydali ma’lumot.", "Eskirgan ma’lumot.", "Tasodifiy ma’lumot.", "Tuzilmagan ma’lumot."], correctText: "Vaqtida olingan va foydali ma’lumot." },
    { question: "Algoritmlar ifodalanish shakllari qaysilar?", options: ["So‘zli, grafik, dasturlash tillarida", "Faqat so‘zli", "Faqat grafik", "Faqat matematik"], correctText: "So‘zli, grafik, dasturlash tillarida" },
    { question: "Axborotning to‘g‘riligi deganda nima tushuniladi?", options: ["Ma’lumotning haqiqatga mosligi.", "Ma’lumotning hajmi.", "Ma’lumotning narxi.", "Ma’lumotning shakli."], correctText: "Ma’lumotning haqiqatga mosligi." },
    { question: "Blok-sxema nima uchun ishlatiladi?", options: ["Algoritmni grafik tarzda ifodalash uchun.", "Matematik formulalarni yozish uchun.", "Ma’lumotlarni saqlash uchun.", "Fayl nomini belgilash uchun."], correctText: "Algoritmni grafik tarzda ifodalash uchun." },
    { question: "Axborotning turlari qaysilar?", options: ["Matnli, grafik, ovozli, video", "Faqat matnli", "Faqat ovozli", "Faqat video"], correctText: "Matnli, grafik, ovozli, video" },
    { question: "Algoritmning tugallanish xossasi nimani bildiradi?", options: ["Algoritm ma’lum bosqichda yakunlanishini.", "Algoritm doimiy ishlashini.", "Algoritm natija bermasligini.", "Algoritm cheksiz aylanishini."], correctText: "Algoritm ma’lum bosqichda yakunlanishini." },
    { question: "Axborot texnologiyasi deganda nima tushuniladi?", options: ["Axborotni qayta ishlashning usullari va vositalari majmuasi.", "Faqat kompyuter dasturlari.", "Internet tarmog‘i nomi.", "Elektron qurilma nomi."], correctText: "Axborotni qayta ishlashning usullari va vositalari majmuasi." },
    { question: "Dasturlash tili nima?", options: ["Kompyuterga buyruq berish uchun mo‘ljallangan formal til.", "Kompyuter qurilmasining nomi.", "Elektr signallari tizimi.", "Axborotni saqlovchi qurilma."], correctText: "Kompyuterga buyruq berish uchun mo‘ljallangan formal til." },
    { question: "Axborotlarga ishlov berishda matematik tildan foydalanish nimani anglatadi?", options: ["Axborotlarni formula va tenglamalar orqali ifodalashni.", "Axborotni faqat matn shaklida saqlashni.", "Rasmlar yordamida ko‘rsatishni.", "Faqat dasturiy kod yozishni."], correctText: "Axborotlarni formula va tenglamalar orqali ifodalashni." },
    { question: "Algoritmni ifodalashda matematik formulalarning o‘rni qanday?", options: ["Aniq va mantiqiy bog‘lanishni ta’minlaydi.", "Grafik ko‘rinish yaratadi.", "Natijani tasodifiy beradi.", "Algoritmni chalkashtiradi."], correctText: "Aniq va mantiqiy bog‘lanishni ta’minlaydi." },
    { question: "Dasturlash tilining asosiy vazifasi nima?", options: ["Kompyuterga bajariladigan amallarni aniq ko‘rsatish.", "Ma’lumotlarni o‘chirib tashlash.", "Axborotni tarmoq orqali uzatish.", "Kompyuter tezligini o‘lchash."], correctText: "Kompyuterga bajariladigan amallarni aniq ko‘rsatish." },
    { question: "Matematik model deganda nima tushuniladi?", options: ["Jarayon yoki hodisani matematik ifodalar orqali tavsiflash.", "Rasm yoki chizma shaklidagi ma’lumot.", "Kompyuter qurilmasining sxemasi.", "Programma interfeysi dizayni."], correctText: "Jarayon yoki hodisani matematik ifodalar orqali tavsiflash." },
    { question: "Formulalar orqali axborotni ifodalashning afzalligi nimada?", options: ["Aniqlik va qisqalikda.", "Ko‘p so‘z ishlatishda.", "Murakkablikda.", "Tasodifiylikda."], correctText: "Aniqlik va qisqalikda." },
    { question: "Dasturlash tillarida ishlatiladigan asosiy mantiqiy operatorlar qaysilar?", options: ["AND, OR, NOT", "ADD, SUB, MUL", "IF, ELSE, END", "FOR, WHILE, GOTO"], correctText: "AND, OR, NOT" },
    { question: "Axborotlarga ishlov berishda tenglamalar qanday rol o‘ynaydi?", options: ["Ma’lumotlar orasidagi bog‘lanishni ifodalaydi.", "Kompyuter ekranini boshqaradi.", "Xotira hajmini oshiradi.", "Dastur kodini qisqartiradi."], correctText: "Ma’lumotlar orasidagi bog‘lanishni ifodalaydi." },
    { question: "Dasturlash tili sintaksisi nima?", options: ["Tilning yozilish va tuzilish qoidalari.", "Kompyuterning ichki qurilishi.", "Algoritm tezligi.", "Grafik interfeys shakli."], correctText: "Tilning yozilish va tuzilish qoidalari." },
    { question: "Matematik ifodalarda o‘zgaruvchi nima?", options: ["Qiymati o‘zgarib turadigan belgidir.", "Doimiy raqam.", "Faqat matnli ma’lumot.", "Kompyuterning nomi."], correctText: "Qiymati o‘zgarib turadigan belgidir." },
    { question: "Axborotlarni matematik tilda ifodalashning maqsadi nima?", options: ["Hisob-kitoblarni aniq va avtomatik bajarish.", "Faqat matnli tahlil qilish.", "Rasmlar orqali tushuntirish.", "Ma’lumotlarni yashirish."], correctText: "Hisob-kitoblarni aniq va avtomatik bajarish." },
    { question: "Dasturlash tilining asosiy elementlari nimalar?", options: ["Sintaksis, semantika va operatorlar.", "Ranglar, shriftlar, tovushlar.", "Grafiklar, rasmlar, jadval.", "Sxemalar va chizmalar."], correctText: "Sintaksis, semantika va operatorlar." },
    { question: "Axborotlarni matematik modellashtirishda qaysi bosqich birinchi bo‘ladi?", options: ["Muammoni aniqlash.", "Natijani tahlil qilish.", "Modelni sinash.", "Dastur yaratish."], correctText: "Muammoni aniqlash." },
    { question: "Matematik ifoda deganda nima tushuniladi?", options: ["Sonlar, belgilar va amallardan tashkil topgan yozuv.", "Faqat matnli axborot.", "Grafik tasvir.", "Tasodifiy raqamlar to‘plami."], correctText: "Sonlar, belgilar va amallardan tashkil topgan yozuv." },
    { question: "Tenglama nima?", options: ["Ikki ifodaning tengligini bildiruvchi matematik yozuv.", "Axborotlarni tahlil qilish usuli.", "Ma’lumotlar bazasi.", "Chizma turi."], correctText: "Ikki ifodaning tengligini bildiruvchi matematik yozuv." },
    { question: "Matritsa nima?", options: ["Tartibli satr va ustunlarda joylashgan sonlar jadvali.", "Bir o‘lchovli sonlar to‘plami.", "Fikrlar majmuasi.", "Grafik ko‘rinishdagi chizma."], correctText: "Tartibli satr va ustunlarda joylashgan sonlar jadvali." },
    { question: "Matritsaning o‘lchami qanday aniqlanadi?", options: ["Satrlar va ustunlar soni orqali.", "Faqat satrlar soni orqali.", "Faqat ustunlar soni orqali.", "Matritsaning rangi orqali."], correctText: "Satrlar va ustunlar soni orqali." },
    { question: "Formulalar yordamida axborotni ifodalashning afzalligi nimada?", options: ["Aniqlik va ixchamlikni ta’minlaydi.", "Matnni cho‘zadi.", "Ma’lumotni murakkablashtiradi.", "Natijani yashiradi."], correctText: "Aniqlik va ixchamlikni ta’minlaydi." },
    { question: "Jadval qanday maqsadda qo‘llaniladi?", options: ["Axborotni tartibli ravishda joylashtirish uchun.", "Fikrni ifodalash uchun.", "Ma’lumotni yashirish uchun.", "Grafik chizish uchun."], correctText: "Axborotni tartibli ravishda joylashtirish uchun." },
    { question: "Matritsa elementlari deganda nima tushuniladi?", options: ["Har bir satr va ustunda joylashgan qiymatlar.", "Faqat birinchi satr.", "Faqat oxirgi ustun.", "Faqat nol qiymatlar."], correctText: "Har bir satr va ustunda joylashgan qiymatlar." },
    { question: "Matematik vositalar axborotlarni tahlil qilishda nima beradi?", options: ["Aniqlik, aniqlashuvchanlik va natijadorlik.", "Xatolik va chalkashlik.", "Murakkablik.", "Tasodifiylik."], correctText: "Aniqlik, aniqlashuvchanlik va natijadorlik." },
    { question: "Belgili modellarda grafiklar qanday ahamiyatga ega?", options: ["Natijalarni ko‘rish va solishtirishni osonlashtiradi.", "Matnni uzaytiradi.", "Tahlilni to‘xtatadi.", "Faqat bezak sifatida ishlatiladi."], correctText: "Natijalarni ko‘rish va solishtirishni osonlashtiradi." },
    { question: "Jadvalda axborotni tahlil qilishning asosiy ustunligi nimada?", options: ["Ma’lumotlarni taqqoslash imkonini beradi.", "Matnni qisqartiradi.", "Rangni o‘zgartiradi.", "Ma’lumotni yashiradi."], correctText: "Ma’lumotlarni taqqoslash imkonini beradi." },
    { question: "Matritsalar qaysi sohalarda keng qo‘llaniladi?", options: ["Kompyuter grafikasi, iqtisod, fizika, dasturlashda.", "Faqat biologiyada.", "Faqat san’atda.", "Faqat geografiyada."], correctText: "Kompyuter grafikasi, iqtisod, fizika, dasturlashda." },
    { question: "Qidiruv algoritmining asosiy maqsadi nima?", options: ["Ma’lumotlar orasidan keraklisini topish", "Ma’lumotlarni tahlil qilish", "Ma’lumotlarni saralash", "Ma’lumotlarni siqish"], correctText: "Ma’lumotlar orasidan keraklisini topish" },
    { question: "Ketma-ket qidiruvda elementlar qanday tartibda tekshiriladi?", options: ["Birma-bir, navbat bilan", "Juft-juft qilib", "Har ikkinchi elementdan boshlab", "Faqat indeks bo‘yicha"], correctText: "Birma-bir, navbat bilan" },
    { question: "Binar qidiruv ishlashi uchun qanday shart bajarilishi kerak?", options: ["Ma’lumotlar tartiblangan bo‘lishi kerak", "Ma’lumotlar tasodifiy bo‘lishi kerak", "Ma’lumotlar matnli bo‘lishi kerak", "Ma’lumotlar sonli bo‘lishi kerak"], correctText: "Ma’lumotlar tartiblangan bo‘lishi kerak" },
    { question: "Indeksli ketma-ket qidiruv qanday afzallikka ega?", options: ["Qidiruv tezligini oshiradi", "Xotira sarfini kamaytiradi", "Ma’lumotlarni siqadi", "Algoritmni soddalashtiradi"], correctText: "Qidiruv tezligini oshiradi" },
    { question: "Mukammallashtirilgan ketma-ket qidiruvda nima qo‘llaniladi?", options: ["Qo‘shimcha indekslash mexanizmi", "Grafik interfeys", "Chiziqli modellar", "Qattiq diskdagi fayllar"], correctText: "Qo‘shimcha indekslash mexanizmi" },
    { question: "Qidiruv algoritmlari qaysi sohada ko‘p qo‘llaniladi?", options: ["Ma’lumotlar bazasi tizimlarida", "Grafik dizaynda", "Animatsiyada", "Audio tahrirda"], correctText: "Ma’lumotlar bazasi tizimlarida" },
    { question: "Ketma-ket qidiruvning asosiy kamchiligi nima?", options: ["Katta hajmdagi ma’lumotda sekin ishlaydi", "Xotira ko‘p ishlatadi", "Har doim xato natija beradi", "Ma’lumotni yo‘qotadi"], correctText: "Katta hajmdagi ma’lumotda sekin ishlaydi" },
    { question: "Indeksli ketma-ket qidiruvda indekslar nima uchun kerak?", options: ["Ma’lumotlar joylashuvini tez topish uchun", "Fayl nomlarini ajratish uchun", "Ma’lumotlarni kodlash uchun", "Ma’lumotlarni siqish uchun"], correctText: "Ma’lumotlar joylashuvini tez topish uchun" },
    { question: "Qidiruv algoritmlarida solishtirishlar sonini kamaytirishning asosiy maqsadi nima?", options: ["Tez ishlashni ta’minlash", "Ko‘proq xotira ishlatish", "Kodni uzunlashtirish", "Natijani murakkablashtirish"], correctText: "Tez ishlashni ta’minlash" },
    { question: "Qidiruv algoritmlari nechta asosiy turga bo‘linadi?", options: ["Ketma-ket va binar", "Indeksli va grafik", "To‘liq va soddalashtirilgan", "Stokastik va deterministik"], correctText: "Ketma-ket va binar" },
    { question: "Binar qidiruv algoritmi qanday usuldan foydalanadi?", options: ["Bo‘lish va tekshirish", "Qo‘shish va ayirish", "Juftliklar bilan solishtirish", "Massivni saralash"], correctText: "Bo‘lish va tekshirish" },
    { question: "Qidiruvda “topilgan” natijasi qanday aniqlanadi?", options: ["Izlanayotgan qiymat indeks bilan mos kelsa", "Tasodifiy tanlanadi", "Massiv uzunligi oshsa", "Ma’lumotlar o‘zgarsa"], correctText: "Izlanayotgan qiymat indeks bilan mos kelsa" },
    { question: "Qidiruv tizimlarida samaradorlik nimaga bog‘liq?", options: ["Algoritm murakkabligi va ma’lumot hajmiga", "Kompyuter rangiga", "Foydalanuvchi ismidan", "Tizim tarmog‘iga"], correctText: "Algoritm murakkabligi va ma’lumot hajmiga" },
    { question: "Indeksli qidiruvning asosiy g‘oyasi nima?", options: ["Ma’lumotlarni guruhlab qidirish", "Har bir elementni ketma-ket tekshirish", "Matnli faylga yozish", "Natijani chizish"], correctText: "Ma’lumotlarni guruhlab qidirish" },
    { question: "Binar qidiruv algoritmi qaysi strukturalar uchun samarali?", options: ["Saralangan massivlar uchun", "Tartiblanmagan fayllar uchun", "Jadval shaklidagi ma’lumotlar uchun", "Matnli fayllar uchun"], correctText: "Saralangan massivlar uchun" },
    { question: " Qidiruv natijasi topilgach, algoritm nima qiladi?", options: ["To‘xtaydi", "Davom etadi", "Ma’lumotni o‘chiradi", "Yangi ma’lumot kiritadi"], correctText: "To‘xtaydi" },
    { question: "Mukammallashtirilgan ketma-ket qidiruvning farqi nimada?", options: ["Oldindan indekslangan ma’lumotlardan foydalanadi", "Tasodifiy tanlov qiladi", "Qidiruvni teskari bajaradi", "Har bir elementni ikki marta tekshiradi"], correctText: "Oldindan indekslangan ma’lumotlardan foydalanadi" },
    { question: "Qidiruv algoritmlari natijasida topilgan element nima bilan belgilanadi?", options: ["Indeks raqami bilan", "Qidiruv kodi bilan", "Rang kodi bilan", "Belgilar ketma-ketligi bilan"], correctText: "Indeks raqami bilan" },
    { question: "Saralash algoritmlarining asosiy maqsadi nima?", options: ["Ma’lumotlarni tartiblangan holga keltirish", "Ma’lumotlarni yo‘qotish", "Ma’lumotlarni kodlash", "Ma’lumotlarni siqish"], correctText: "Ma’lumotlarni tartiblangan holga keltirish" },
    { question: "Saralash algoritmlari qaysi jarayonda keng qo‘llaniladi?", options: ["Ma’lumotlar bazasini optimallashtirishda", "Grafik fayllarni tahrirlashda", "Matn yozishda", "Audio fayllarni qayta ishlashda"], correctText: "Ma’lumotlar bazasini optimallashtirishda" },
    { question: "Tanlash orqali saralash (Selection sort) qanday ishlaydi?", options: ["Eng kichik elementni topib, o‘rnini almashtiradi", "Elementlarni aralashtirib chiqadi", "Elementlarni tasodifiy tartibda joylashtiradi", "Har bir elementni nusxalaydi"], correctText: "Eng kichik elementni topib, o‘rnini almashtiradi" },
    { question: "O‘ringa qo‘yish bilan saralash (Insertion sort) usulining mohiyati nima?", options: ["Har bir elementni o‘z joyiga qo‘yib chiqish", "Elementlarni o‘chirib tashlash", "Ma’lumotlarni ko‘paytirish", "Barcha elementlarni teskari yozish"], correctText: "Har bir elementni o‘z joyiga qo‘yib chiqish" },
    { question: "Aralashtirilgan saralash (Merge sort) usuli qanday ishlaydi?", options: ["Ma’lumotlarni ikkiga bo‘lib, qayta birlashtirish orqali", "Elementlarni o‘chirib chiqish orqali", "Tasodifiy joylashtirish orqali", "Faqat matnli ma’lumotlarda"], correctText: "Ma’lumotlarni ikkiga bo‘lib, qayta birlashtirish orqali" },
    { question: "Tezkor saralash (Quick sort) algoritmi kim tomonidan taklif etilgan?", options: ["Toni Xoar", "Alan Turing", "Donald Knut", "Jon fon Neyman"], correctText: "Toni Xoar" },
    { question: "Tezkor saralashning asosiy g‘oyasi nima?", options: ["Ma’lumotlarni bo‘lish va qayta saralash", "Ma’lumotlarni bir marta almashtirish", "Barcha elementlarni teskari yozish", "Eng katta elementni olib tashlash"], correctText: "Ma’lumotlarni bo‘lish va qayta saralash" },
    { question: "Saralash algoritmlarining asosiy maqsadi nima?", options: ["Ma’lumotlarni ma’lum mezon bo‘yicha tartiblash", "Ma’lumotlarni kodlash", "Ma’lumotlarni aralashtirish", "Ma’lumotlarni siqish"], correctText: "Ma’lumotlarni ma’lum mezon bo‘yicha tartiblash" },
    { question: "O‘ringa qo‘yish bilan saralashning afzalligi nima?", options: ["Soddaligi va kichik massivlar uchun samarali ishlashi", "Har doim eng tez ishlashi", "Xotira sarfini kamaytiradi", "Parallel ishlov beradi"], correctText: "Soddaligi va kichik massivlar uchun samarali ishlashi" },
    { question: "Saralash algoritmlarini taqqoslashda asosiy mezon nima?", options: ["Vaqt va xotira murakkabligi", "Rangli chiqish natijasi", "Grafik interfeys sifati", "Fayl turi"], correctText: "Vaqt va xotira murakkabligi" },
    { question: "Aralashtirilgan saralashning asosiy kamchiligi nima?", options: ["Qo‘shimcha xotira talab etadi", "Juda sekin ishlaydi", "Teskari tartibda saralay olmaydi", "Elementlarni o‘chiradi"], correctText: "Qo‘shimcha xotira talab etadi" },
    { question: " Tezkor saralashda \"pivot\" elementi nima vazifani bajaradi?", options: ["Massivni ikkiga bo‘lish mezoni sifatida ishlatiladi", "Eng kichik elementni ifodalaydi", "Natijani saqlaydi", "Teskari tartibni belgilaydi"], correctText: "Massivni ikkiga bo‘lish mezoni sifatida ishlatiladi" },
    { question: "Tanlash orqali saralashning afzalligi nimada?", options: ["Tushunarli va sodda algoritm", "Eng tezkor usul", "Juda kam xotira ishlatadi", "Paralel ishlov beradi"], correctText: "Tushunarli va sodda algoritm" },
    { question: "O‘ringa qo‘yish bilan saralash qachon samarali?", options: ["Kichik hajmdagi ma’lumotlar uchun", "Juda katta ma’lumotlar uchun", "Grafik fayllar uchun", "Video fayllar uchun"], correctText: "Kichik hajmdagi ma’lumotlar uchun" },
    { question: "Aralashtirilgan saralash (Merge sort) qanday tamoyil asosida ishlaydi?", options: ["Bo‘lish va birlashtirish (divide and conquer)", "Qo‘shish va ayirish", "Tasodifiy tanlash", "Juftlik bo‘yicha almashtirish"], correctText: "Bo‘lish va birlashtirish (divide and conquer)" },
    { question: "Tezkor saralashda ma’lumotlar qanday qayta ishlanadi?", options: ["Bo‘linib, rekursiv tarzda qayta tartiblanadi", "Faqat boshidan tekshiriladi", "To‘liq nusxalanadi", "Almashtirishsiz tartiblanadi"], correctText: "Bo‘linib, rekursiv tarzda qayta tartiblanadi" },
    { question: "Saralash algoritmlari dasturlashda nima uchun muhim?", options: ["Ma’lumotlarni samarali qayta ishlash uchun", "Ma’lumotlarni yashirish uchun", "Kodni qisqartirish uchun", "Faqat vizual maqsadlar uchun"], correctText: "Ma’lumotlarni samarali qayta ishlash uchun" },
    { question: "Graf nazariyasi nimani o‘rganadi?", options: ["Tugunlar va ularni bog‘lovchi qirralar o‘rtasidagi munosabatlarni", "Ma’lumotlarni faqat sonli shaklda", "Matnli ma’lumotlarni kodlashni", "Tarmoqli protokollarni"], correctText: "Tugunlar va ularni bog‘lovchi qirralar o‘rtasidagi munosabatlarni" },
    { question: "Graf nima?", options: ["Tugunlar (cho‘qqilar) va qirralar to‘plami", "Faqat sonli massiv", "Matnli fayl turi", "Geometrik shakl"], correctText: "Tugunlar (cho‘qqilar) va qirralar to‘plami" },
    { question: "Grafdagi tugunlar qanday nomlanadi?", options: ["Cho‘qqilar", "Qirralar", "Yo‘nalishlar", "Belgilar"], correctText: "Cho‘qqilar" },
    { question: "Grafdagi bog‘lovchi elementlar nima deb ataladi?", options: ["Qirralar", "Cho‘qqilar", "Qism to‘plamlar", "Bo‘g‘inlar"], correctText: "Qirralar" },
    { question: "Yo‘naltirilgan grafda qirralar qanday xususiyatga ega?", options: ["Ular yo‘nalishga ega bo‘ladi", "Hech qanday yo‘nalishga ega emas", "Faqat bitta tugunni bildiradi", "Har doim simmetrik"], correctText: "Ular yo‘nalishga ega bo‘ladi" },
    { question: "Grafni tasvirlashning asosiy usullaridan biri qaysi?", options: ["Qo‘shnilik matritsasi", "Tasodifiy massiv", "Rasm fayli", "Jadval tuzish"], correctText: "Qo‘shnilik matritsasi" },
    { question: "Qo‘shnilik matritsasi nima?", options: ["Tugunlar orasidagi bog‘lanishlarni matritsa ko‘rinishida ifodalash", "Ma’lumotlarni sonli ko‘rsatkichlarda tasvirlash", "Matnli fayl sifatida saqlash", "Tarmoq diagrammasini chizish"], correctText: "Tugunlar orasidagi bog‘lanishlarni matritsa ko‘rinishida ifodalash" },
    { question: "Yo‘naltirilmagan grafda qirralar qanday bo‘ladi?", options: ["Yo‘nalishsiz, faqat ikki tugunni bog‘laydi", "Faqat bitta tomonga yo‘nalgan", "Tugunsiz grafni bildiradi", "Faqat o‘z-o‘ziga ulanadi"], correctText: "Yo‘nalishsiz, faqat ikki tugunni bog‘laydi" },
    { question: "To‘liq graf deganda nimani tushunamiz?", options: ["Har bir tugun boshqa barcha tugunlar bilan bog‘langan graf", "Qirrasiz graf", "Yo‘nalishsiz graf", "Faqat bitta tugunli graf"], correctText: "Har bir tugun boshqa barcha tugunlar bilan bog‘langan graf" },
    { question: "Graflar nazariyasining amaliy qo‘llanilishi qaysi sohada keng tarqalgan?", options: ["Tarmoqlar va yo‘llarni optimallashtirishda", "Rasmlarni tahrirlashda", "Audio fayllarni o‘zgartirishda", "Video siqishda"], correctText: "Tarmoqlar va yo‘llarni optimallashtirishda" },
    { question: "Eng qisqa yo‘lni topish uchun qaysi algoritm qo‘llaniladi?", options: ["Deykstra algoritmi", "Xuffman algoritmi", "Newton usuli", "Bubblesort algoritmi"], correctText: "Deykstra algoritmi" },
    { question: "Graf nazariyasi informatika fanida nimani ifodalaydi?", options: ["Ma’lumotlar orasidagi aloqalarni modellashtirishni", "Grafik interfeysni chizishni", "Kodlarni tahlil qilishni", "Faqat matritsalarni hisoblashni"], correctText: "Ma’lumotlar orasidagi aloqalarni modellashtirishni" },
    { question: "Qo‘shnilik ro‘yxati usuli nimani anglatadi?", options: ["Har bir tugun uchun unga qo‘shni tugunlar ro‘yxatini saqlash", "Tugunlarni faqat raqamlar bilan belgilash", "Har bir qirra uchun indeks berish", "Matritsalarni aylantirish"], correctText: "Har bir tugun uchun unga qo‘shni tugunlar ro‘yxatini saqlash" },
    { question: "Graflar qaysi sohada ma’lumotlarni ifodalashda eng qulay?", options: ["Tarmoq va yo‘l topish masalalarida", "Matnli tahrirda", "Audio fayl tahlilida", "Rangli tasvir yaratishda"], correctText: "Tarmoq va yo‘l topish masalalarida" },
    { question: "Axborotlarga ishlov berishda graflar usullarining roli nimada?", options: ["Murakkab bog‘lanishlarni vizual va matematik shaklda ifodalashda", "Ma’lumotlarni yashirishda", "Kod uzunligini qisqartirishda", "Grafik fayllarni tahrirlashda"], correctText: "Murakkab bog‘lanishlarni vizual va matematik shaklda ifodalashda" },
    { question: "Grafda eng qisqa yo‘l tushunchasi nimani bildiradi?", options: ["Bir tugundan boshqa tugunga yetish uchun eng kam vazn yoki masofaga ega yo‘l", "Har bir tugunga tasodifiy yo‘l", "Eng ko‘p qirralarni o‘z ichiga olgan yo‘l", "Faqat sikl hosil qiluvchi yo‘l"], correctText: "Bir tugundan boshqa tugunga yetish uchun eng kam vazn yoki masofaga ega yo‘l" },
    { question: "Massiv yordamida eng qisqa yo‘lni topishda nimani saqlash kerak?", options: ["Har bir tugunga bo‘lgan masofa qiymati", "Tugun nomlarini", "Faqat qirralar sonini", "Tasodifiy qiymatlarni"], correctText: "Har bir tugunga bo‘lgan masofa qiymati" },
    { question: "Eng qisqa yo‘lni topishning asosiy maqsadi nima?", options: ["Resurslarni samarali ishlatish va vaqtni tejash", "Ma’lumotlarni yashirish", "Fayllarni siqish", "Tasodifiy qiymat yaratish"], correctText: "Resurslarni samarali ishlatish va vaqtni tejash" },
    { question: "Grafda qirralar vazni nima bildiradi?", options: ["Ikkita tugun orasidagi masofa yoki xarajat qiymati", "Tugun rangini", "Tugun nomini", "Tasodifiy raqam"], correctText: "Ikkita tugun orasidagi masofa yoki xarajat qiymati" },
    { question: "Grafda eng qisqa yo‘lni aniqlashning afzalligi nima?", options: ["Tarmoqlarni optimallashtirish va resurslarni tejash", "Ma’lumotlarni yashirish", "Tasodifiy natija olish", "Fayllarni aralashtirish"], correctText: "Tarmoqlarni optimallashtirish va resurslarni tejash" },
    { question: "Graflarning matritsali ko‘rinishi nimani ifodalaydi?", options: ["Tugunlar va qirralar orasidagi bog‘lanishlarni sonli matritsa orqali", "Grafik fayllarni vizual chizish", "Elementlarni tasodifiy tartiblash", "Faqat matnli ma’lumotlarni"], correctText: "Tugunlar va qirralar orasidagi bog‘lanishlarni sonli matritsa orqali" },
    { question: "Qo‘shnilik matritsasi nima?", options: ["Tugunlar orasidagi bog‘lanishlarni 0 va 1 bilan ifodalaydi", "Tugun nomlarini matn bilan saqlaydi", "Faqat qirralarni tasodifiy joylashtiradi", "Massivni bo‘lib beradi"], correctText: "Tugunlar orasidagi bog‘lanishlarni 0 va 1 bilan ifodalaydi" },
    { question: "Qo‘shnilik matritsasida qiymat 1 nima bildiradi?", options: ["Tugunlar orasida qirra mavjudligini", "Tugun o‘chirildi", "Tugun nomi yozildi", "Tasodifiy element joylashtirildi"], correctText: "Tugunlar orasida qirra mavjudligini" },
    { question: "Qo‘shnilik matritsasida qiymat 0 nima bildiradi?", options: ["Tugunlar orasida qirra yo‘qligini", "Tugun mavjudligini", "Qirra vaznini", "Massiv indeksini"], correctText: "Tugunlar orasida qirra yo‘qligini" },
    { question: "Yo‘naltirilgan grafning matritsasi qanday xususiyatga ega?", options: ["Har bir qiymat yo‘nalish bilan bog‘liq bo‘ladi", "Matritsa doimo simmetrik", "Faqat diagonal elementlar ishlatiladi", "Matritsa faqat bitta qatorli"], correctText: "Har bir qiymat yo‘nalish bilan bog‘liq bo‘ladi" },
    { question: "Yo‘naltirilmagan grafning qo‘shnilik matritsasi qanday bo‘ladi?", options: ["Simmetrik", "Diagonal bo‘sh", "Har doim 0 ga teng", "Faqat bitta satrli"], correctText: "Simmetrik" },
    { question: "Vaznli grafning matritsasi qanday ko‘rinishda bo‘ladi?", options: ["Qirralar vaznini o‘z ichiga oladi", "Faqat 0 va 1 bilan ifodalanadi", "Tugun nomlari bilan to‘ldiriladi", "Tasodifiy sonlar bilan to‘ldiriladi"], correctText: "Qirralar vaznini o‘z ichiga oladi" },
    { question: "Matritsali ko‘rinishdagi diagonal elementlar nimani bildiradi?", options: ["Tugunning o‘ziga bog‘lanishi (loop)", "Qirralarni", "Tugun nomlarini", "Yo‘nalish yo‘qligini"], correctText: "Tugunning o‘ziga bog‘lanishi (loop)" },
    { question: "Qo‘shnilik ro‘yxati bilan matritsa ko‘rinishi orasidagi farq nima?", options: ["Ro‘yxat faqat bog‘langan tugunlarni saqlaydi, matritsa barcha tugunlarni", "Matritsa faqat bog‘lanmagan tugunlarni saqlaydi", "Ro‘yxat simmetrik bo‘ladi", "Matritsa faqat diagonal elementlardan iborat"], correctText: "Ro‘yxat faqat bog‘langan tugunlarni saqlaydi, matritsa barcha tugunlarni" },
    { question: "Matritsali ko‘rinishning afzalligi nima?", options: ["Bog‘lanishlarni tez tekshirish imkoniyati", "Ma’lumotlarni aralashtirish", "Tasodifiy yo‘l topish", "Fayl hajmini kamaytirish"], correctText: "Bog‘lanishlarni tez tekshirish imkoniyati" },
    { question: "Axborotlarning yo‘nalishi nimani bildiradi?", options: ["Tugunlar orasidagi qirralar yo‘nalishi", "Tugun nomini", "Qirra vaznini", "Elementning indeksini"], correctText: "Tugunlar orasidagi qirralar yo‘nalishi" },
    { question: "Matritsali ko‘rinishda qirra yo‘qligi qanday ifodalanadi?", options: ["0 qiymat bilan", "1 qiymat bilan", "Tugun nomi bilan", "Tasodifiy son bilan"], correctText: "0 qiymat bilan" },
    { question: "Graflar matritsasining o‘lchami qanday aniqlanadi?", options: ["Tugunlar soniga qarab (n × n)", "Qirralar soniga qarab", "Diagonal elementlarga qarab", "Tasodifiy belgilar bilan"], correctText: "Tugunlar soniga qarab (n × n)" },
    { question: "Qo‘shnilik matritsasining kamchiligi nima?", options: ["Katta graf uchun ko‘p xotira talab qiladi", "Ma’lumotlarni yashirish", "Yo‘nalishni aniqlay olmaydi", "Qirralarni hisoblay olmaydi"], correctText: "Katta graf uchun ko‘p xotira talab qiladi" },
    { question: " Vaznli graf matritsasida diagonal element 0 bo‘lsa, nima anglatadi?", options: ["O‘ziga bog‘lanish yo‘q", "Tugun mavjud emas", "Qirra yo‘q", "Tasodifiy qiymat"], correctText: "O‘ziga bog‘lanish yo‘q" },
    { question: "Qo‘shnilik matritsasi qaysi amaliyotlarda foydali?", options: ["Eng qisqa yo‘lni topish, graf tahlili", "Matnni tahrirlash", "Audio faylni qayta ishlash", "Video montaj"], correctText: "Eng qisqa yo‘lni topish, graf tahlili" },
    { question: "Graflarni matritsali ko‘rinishda saqlashning asosiy sababi nima?", options: ["Tezkor algoritmik ishlov berish", "Fayl hajmini oshirish", "Tasodifiy yo‘l topish", "Tasvirni chizish"], correctText: "Tezkor algoritmik ishlov berish" },
    { question: "Yo‘naltirilgan graf matritsasi qachon simmetrik bo‘ladi?", options: ["Faqat graf yo‘naltirilmagan bo‘lsa", "Har doim", "Hech qachon", "Faqat vaznli graf bo‘lsa"], correctText: "Faqat graf yo‘naltirilmagan bo‘lsa" },
    { question: "Axborotlarga ishlov berishda graflarning matritsali ko‘rinishi qanday qo‘llaniladi?", options: ["Tarmoqdagi bog‘lanishlarni algoritmik tahlil qilishda", "Rangli tasvir yaratishda", "Matnli fayllarni chizishda", "Audio fayllarni tahrirlashda"], correctText: "Tarmoqdagi bog‘lanishlarni algoritmik tahlil qilishda" },
    { question: "Matritsali ko‘rinishda qirralar vazni qanday ifodalanadi?", options: ["Matritsa elementlari sifatida", "Tugun nomlari bilan", "Tasodifiy raqam bilan", "Diagonal bo‘sh element bilan"], correctText: "Matritsa elementlari sifatida" },
    { question: "Kritik yo‘lning ahamiyati nima?", options: ["Loyihaning yakuniy vaqtini belgilaydi", "Ma’lumotlarni aralashtiradi", "Fayl hajmini oshiradi", "Tasodifiy natija beradi"], correctText: "Loyihaning yakuniy vaqtini belgilaydi" },
    { question: "Yo‘naltirilgan grafda qirralar qanday xususiyatga ega?", options: ["Yo‘nalishga ega", "Har doim simmetrik", "Hech qachon yo‘nalgan emas", "Faqat diagonalda"], correctText: "Yo‘nalishga ega" },
    { question: "Topologik saralash algoritmi qachon muvaffaqiyatsiz bo‘ladi?", options: ["Grafda sikl mavjud bo‘lsa", "DAG bo‘lsa", "Qirralar yo‘q bo‘lsa", "Faqat bitta tugun bo‘lsa"], correctText: "Grafda sikl mavjud bo‘lsa" },
    { question: "Algoritm deb, …… ga aytiladi.", options: ["Masalani yechish uchun bajarilishi lozim bo‘lgan amallar ketma-ketligini aniq tavsiflaydigan qoidalar tizimi;", "berilganlarni natijaga olib kelish uchun bajariladigan amallar ketma-ketligi;", "kuyilgan masalani yechishga karatilgan amallar ketma-ketligini bajarish uchun tushunarli va anik kursatmalar berish;", "kuyilgan masalani yechishga karatilgan amallar ketma-ketligini bajarish uchun qandaydir kursatmalar berish;"], correctText: "Masalani yechish uchun bajarilishi lozim bo‘lgan amallar ketma-ketligini aniq tavsiflaydigan qoidalar tizimi;" },
    { question: "Algoritmning diskretlilik xossasi nima?", options: ["Masalaning aniq va oddiy ketma-ketlilik jarayonini ta’minlashi;", "algoritmning xar bir kadami anik yozilishi va fakat bita ma’noga ega bulishi;", "algoritmning chekli mikdordagi kadamlardan sung masalaning yechimiga olib kelishi;", "algoritm fakat boshlangich kiymatlarbilan fark kiluvchi ma’lum sinf masalalarini xammasiga kullash;"], correctText: "Masalaning aniq va oddiy ketma-ketlilik jarayonini ta’minlashi;" },
    { question: "Algogritmning aniqlik xossasi nima?", options: ["algoritmning har bir qadami aniq yozilishi va faqat bitta ma’noga ega bo‘lishi;", "Masalaning anik va oddiyketma-ketlilik jarayonini ta’minlashi;", "algoritmning chekli mikdordagi kadamlardan sung masalaning yechimiga olib kelishi;", "algoritm fakat boshlangich kiymatlar bilan fark kiluvchi ma’lum sinf masalalarini xammasiga kullash;"], correctText: "algoritmning har bir qadami aniq yozilishi va faqat bitta ma’noga ega bo‘lishi;" },
    { question: "Algoritmning natijaviylik xossasi nima?", options: ["algoritmning chekli miqdordagi qadamlardan sung masalaning yechimiga olib kelishi;", "Masalaning anik va oddiyketma-ketlilik jarayonini ta’minlashi;", "algoritmning xar bir kadami anik yozilishi va fakat bita ma’noga ega bulishi;", "algoritm fakat boshlangich kiymatlarbilan fark kiluvchi ma’lum sinf masalalarini xammasiga kullash;"], correctText: "algoritmning chekli miqdordagi qadamlardan sung masalaning yechimiga olib kelishi;" },
    { question: "Algoritmning ommaviylik xossasi nima?", options: ["algoritm faqat boshlang‘ich qiymatlarbilan farq qiluvchi ma’lum sinf masalalarini hammasiga qo‘llash;", "Masalaning anik va oddiyketma-ketlilik jarayonini ta’minlashi;", "algoritmning xar bir kadami anik yozilishi va fakat bita ma’noga ega bulishi;", "algoritmning chekli mikdordagi kadamlardan sung masalaning yechimiga olib kelishi;"], correctText: "algoritm faqat boshlang‘ich qiymatlarbilan farq qiluvchi ma’lum sinf masalalarini hammasiga qo‘llash;" },
    { question: "Blok sxemadagi to‘g‘ri to‘trburchak geometrik figurasi …. ni bildiradi.", options: ["hisoblash bloki;", "Algoritmning boshi va oxiri;", "shart tekshirish bloki;", "natijalarni chikarish bloki;"], correctText: "hisoblash bloki;" },
    { question: "Blok sxemadagi romb geometrik figurasi … ni bildiradi.", options: ["shart tekshirish bloki;", "Algoritmning boshi va oxiri;", "xisoblash bloki;", "natijalarni chikarish bloki;"], correctText: "shart tekshirish bloki;" },
    { question: "Blok sxemadagi parallelogramm geometrik figurasi …ni bildiradi", options: ["o‘zgaruvchilarni e’lon kilish.", "Algoritmning boshi va oxiri;", "xisoblash bloki;", "shart tekshirish bloki;"], correctText: "o‘zgaruvchilarni e’lon kilish." },
    { question: " Algoritmlar 3 xil strukturaning kombinatsiyasidan iborat bo‘ladi, bular:", options: ["chiziqli, takrorlanuvchi, tarmoqlanuvchi.", "chizikli, oddiy, takrorlanuvchi;", "tarmoklanuvchi, diskret, takrorlanuvchi;", "tarmoklanuvchi, takrorlanuvchi, anik;"], correctText: "chiziqli, takrorlanuvchi, tarmoqlanuvchi." },
    { question: "Chiziqli algoritm ta’rifini belgilang", options: ["Hisoblash jarayonidagi amallar kelish tartibi bo‘yicha faqat bir marta bajariladi;", "algoritm biror shartning bajarilish yoki bajarilmasligiga qarab, ma’lum bir yo‘nalish bo‘yicha bajariladi;", "uzgaruvchining turli kiymatlarida ma’lum buyruklar tizimining biror bir konuniyatga asosan kayta-kayta bajarilishi;", "kuyilgan masalani yechishga karatilgan amallar ketma-ketligi ;"], correctText: "Hisoblash jarayonidagi amallar kelish tartibi bo‘yicha faqat bir marta bajariladi;" },
    { question: "Tarmoqlanuvchi ta’rifini belgilang.", options: ["algoritm biror shartning bajarilish yoki bajarilmasligiga karab, ma’lum bir yunalish buyicha bajariladi;", "Hisoblash jarayonidagi amallar kelish tartibi bo‘yicha faqat bir marta bajariladi;", "uzgaruvchining turli kiymatlarida ma’lum buyruklar tizimining biror bir konuniyatga asosan kayta-kayta bajarilishi;", "kuyilgan masalani yechishga karatilgan amallar ketma-ketligi ;"], correctText: "algoritm biror shartning bajarilish yoki bajarilmasligiga karab, ma’lum bir yunalish buyicha bajariladi;" },
    { question: "Takrorlanuvchi algoritm ta’rifini belgilang.", options: ["uzgaruvchining turli kiymatlarida ma’lum buyruklar tizimining biror bir konuniyatga asosan kayta-kayta bajarilishi;", "Xisoblash jarayonidagi amallar kelish tartibi buyicha fakat bir marta bajariladi;", "algoritm biror shartning bajarilish yoki bajarilmasligiga karab, ma’lum bir yunalish buyicha bajariladi;", "uzgaruvchining bir kiymatlarida ma’lum buyruklar tizimining biror bir konuniyatga asosan kayta-kayta bajarilishi;"], correctText: "uzgaruvchining turli kiymatlarida ma’lum buyruklar tizimining biror bir konuniyatga asosan kayta-kayta bajarilishi;" }
];

// LOGIKA
let currentQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let isClickable = true;

// Elementlar
const welcomeScreen = document.getElementById('welcome-screen');
const quizApp = document.getElementById('quiz-app');
const resultScreen = document.getElementById('result-screen');
const questionEl = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const currentStatusEl = document.getElementById('current-status');
const scoreStatusEl = document.getElementById('score-status');
const progressBar = document.getElementById('progress-bar');
const modeNameEl = document.getElementById('mode-name');

function startMode(mode) {
    welcomeScreen.style.display = 'none';
    quizApp.style.display = 'block';
    
    if (mode === 'practice') {
        currentQuestions = [...allQuestionsData]; 
        modeNameEl.innerText = "Takrorlash";
    } else {
        // 30 talik Random Imtihon
        const shuffled = [...allQuestionsData].sort(() => 0.5 - Math.random());
        currentQuestions = shuffled.slice(0, 30);
        modeNameEl.innerText = "Imtihon (30)";
    }

    currentQuizIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    isClickable = true;
    optionsList.innerHTML = '';
    
    const currentData = currentQuestions[currentQuizIndex];
    
    // Savol matni
    questionEl.innerText = `${currentQuizIndex + 1}. ${currentData.question}`;
    
    // Progress
    const progressPercent = ((currentQuizIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    currentStatusEl.innerText = `${currentQuizIndex + 1} / ${currentQuestions.length}`;
    scoreStatusEl.innerText = `${score} to'g'ri`;

    // Variantlarni aralashtirish
    let shuffledOptions = [...currentData.options].sort(() => 0.5 - Math.random());
    const correctText = currentData.correctText;

    shuffledOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.classList.add('option-btn');
        btn.onclick = () => checkAnswer(opt, correctText, btn);
        optionsList.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btnElement) {
    if (!isClickable) return;
    isClickable = false; // Ketma-ket bosishni oldini olish

    const buttons = document.querySelectorAll('.option-btn');
    
    if (selected === correct) {
        btnElement.classList.add('correct');
        score++;
    } else {
        btnElement.classList.add('wrong');
        // To'g'risini ko'rsatamiz
        buttons.forEach(b => {
            if (b.innerText === correct) b.classList.add('correct');
        });
    }

    scoreStatusEl.innerText = `${score} to'g'ri`;

    // 1.2 sekunddan keyin keyingisiga o'tish
    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1200);
}

function showResults() {
    quizApp.style.display = 'none';
    resultScreen.style.display = 'flex';
    
    const total = currentQuestions.length;
    const percentage = (score / total) * 100;
    
    document.getElementById('total-count').innerText = `/ ${total}`;
    document.getElementById('final-score').innerText = score;
    
    const msgEl = document.getElementById('result-message');
    if (percentage >= 80) msgEl.innerText = "Ajoyib natija! 🎉";
    else if (percentage >= 60) msgEl.innerText = "Yaxshi, lekin yana o'qing. 📚";
    else msgEl.innerText = "Qayta urinib ko'ring. 💪";
}