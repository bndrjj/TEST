const { useState } = React;
const {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} = Recharts;

const Dashboard = () => {
  const [activeGrade, setActiveGrade] = useState('grade3');

  const data = {
    "grade3": {
        "gender": {
            "بنات": 1714,
            "طفولة مبكرة": 792,
            "بنين": 394
        },
        "total_students": 2900,
        "sectors": {
            "الدمام": 436,
            "حفر الباطن": 1261,
            "القطيف": 412,
            "الجبيل": 202,
            "القرية العليا": 44,
            "الخبر": 240,
            "الخفجي": 126,
            "بقيق": 28,
            "النعيرية": 129,
            "رأس تنورة": 18,
            "العديد": 4
        },
        "sector_by_gender": {
            "بنات": {
                "الدمام": 191,
                "حفر الباطن": 944,
                "الجبيل": 101,
                "القطيف": 206,
                "الخبر": 145,
                "القرية العليا": 22,
                "الخفجي": 35,
                "النعيرية": 43,
                "بقيق": 21,
                "العديد": 3,
                "رأس تنورة": 3
            },
            "طفولة مبكرة": {
                "الدمام": 157,
                "حفر الباطن": 142,
                "القطيف": 171,
                "القرية العليا": 21,
                "الخبر": 73,
                "الخفجي": 79,
                "الجبيل": 88,
                "النعيرية": 54,
                "بقيق": 5,
                "رأس تنورة": 2
            },
            "بنين": {
                "الدمام": 88,
                "حفر الباطن": 175,
                "الخبر": 22,
                "الجبيل": 13,
                "بقيق": 2,
                "القطيف": 35,
                "النعيرية": 32,
                "الخفجي": 12,
                "رأس تنورة": 13,
                "العديد": 1,
                "القرية العليا": 1
            }
        },
        "questions": [
            {
                "question": "7-أيُّ عددٍ يجعل الجملة العددية التالية صحيحة ٤ × ٦ = ٢٤ ⬜ × ٤ = ٢٤",
                "correct": 2808,
                "total": 2900,
                "percentage": 96.83
            },
            {
                "question": "6-معنى عبارة (أَطْبَقَ يَدَيْهِ):",
                "correct": 2703,
                "total": 2900,
                "percentage": 93.21
            },
            {
                "question": "9-يمثّل الجدول درجات ثلاثة أجزاء من اختبار، كيف نجد الدرجة الكلّية للاختبار؟",
                "correct": 2703,
                "total": 2900,
                "percentage": 93.21
            },
            {
                "question": "2- الجملة التي توضّح خاصية العنصر المحايد في الجمع:",
                "correct": 2666,
                "total": 2900,
                "percentage": 91.93
            },
            {
                "question": "9-مرادف كلمة (تظاهر)",
                "correct": 2662,
                "total": 2900,
                "percentage": 91.79
            },
            {
                "question": "2-أيّ الكلمات التالية وردت في النص بصيغة الجمع:",
                "correct": 2656,
                "total": 2900,
                "percentage": 91.59
            },
            {
                "question": "4-مع أحمد ٧٥٠ ريالًا، اشترى حقيبة بـ ٤٨٥ ريالًا، فكم ريالًا بقي معه؟",
                "correct": 2583,
                "total": 2900,
                "percentage": 89.07
            },
            {
                "question": "8- الحدث الذي يدلّ على ذكاء الأرنب الصغير:",
                "correct": 2556,
                "total": 2900,
                "percentage": 88.14
            },
            {
                "question": "10-في المكتبة ٣٢٠ كتابًا للقصص و٤٥٠ كتابًا للعلوم، أُعير منها ١٨٠ كتابًا، فكم كتابًا بقي في المكتبة؟",
                "correct": 2542,
                "total": 2900,
                "percentage": 87.66
            },
            {
                "question": "3-العبارة التي تُمثّل خاصية التجميع في عملية الجمع :",
                "correct": 2515,
                "total": 2900,
                "percentage": 86.72
            },
            {
                "question": "5-الدرس الذي تعلمته من القصة:",
                "correct": 2467,
                "total": 2900,
                "percentage": 85.07
            },
            {
                "question": "1-تقدير ناتج الجمع بالتقريب لأقرب ألف ٤٨٩٢ + ٣١٠٧ =",
                "correct": 2446,
                "total": 2900,
                "percentage": 84.34
            },
            {
                "question": "6-تقدير ناتج الطرح بالتقريب لأقرب مئة ٨١٢ − ٤٦٨ =",
                "correct": 2400,
                "total": 2900,
                "percentage": 82.76
            },
            {
                "question": "10-ما رأيك في تصرّف الثعلب؟",
                "correct": 2370,
                "total": 2900,
                "percentage": 81.72
            },
            {
                "question": "5-كان في الحديقة ١٦ شجرة تفاح، و١٤ شجرة برتقال، و١٠ أشجار ليمون، فإذا قُطِعَت ٣ أشجار من كل نوع، فكم شجرة بقيت في الحديقة؟",
                "correct": 2361,
                "total": 2900,
                "percentage": 81.41
            },
            {
                "question": "مُسْتَعْمِلًا التَّمْثِيلَ الْمُجَاوِرَ، أُجِيبُ عَمَّا يَلِي: كم تزيد درجة هيا عن درجة سمر؟",
                "correct": 2270,
                "total": 2900,
                "percentage": 78.28
            },
            {
                "question": "9-أيُ شخصية في القصة تصرّفت بذكاء وساعدت في تغيير نهاية الحدث؟",
                "correct": 2265,
                "total": 2900,
                "percentage": 78.1
            },
            {
                "question": "4-العلاقة بين حَذَرِ الأرنب ونجاته:",
                "correct": 2219,
                "total": 2900,
                "percentage": 76.52
            },
            {
                "question": "7- الترتيب الصحيح لأحداث القصة:",
                "correct": 2106,
                "total": 2900,
                "percentage": 72.62
            },
            {
                "question": "3-يدلُّ قول الأب: «إنَّ الثعلبَ يموتُ وفمُهُ مفتوحٌ»",
                "correct": 2067,
                "total": 2900,
                "percentage": 71.28
            }
        ]
    },
    "grade6": {
        "gender": {
            "بنين": 703,
            "بنات": 1697
        },
        "total_students": 2400,
        "sectors": {
            "النعيرية": 60,
            "الدمام": 491,
            "القطيف": 354,
            "حفر الباطن": 840,
            "الجبيل": 204,
            "الخبر": 256,
            "رأس تنورة": 50,
            "القرية العليا": 29,
            "الخفجي": 87,
            "بقيق": 24,
            "العديد": 5
        },
        "sector_by_gender": {
            "بنين": {
                "النعيرية": 43,
                "الدمام": 223,
                "القطيف": 58,
                "الخبر": 111,
                "حفر الباطن": 215,
                "الجبيل": 17,
                "الخفجي": 11,
                "رأس تنورة": 11,
                "بقيق": 5,
                "العديد": 3,
                "القرية العليا": 6
            },
            "بنات": {
                "الدمام": 268,
                "حفر الباطن": 625,
                "الجبيل": 187,
                "رأس تنورة": 39,
                "القطيف": 296,
                "الخبر": 145,
                "القرية العليا": 23,
                "النعيرية": 17,
                "الخفجي": 76,
                "بقيق": 19,
                "العديد": 2
            }
        },
        "questions": [
            {
                "question": "الكلمة التي تُصنف \"اسم آلة\" من بين الكلمات التالية هي:",
                "correct": 2282,
                "total": 2400,
                "percentage": 95.08
            },
            {
                "question": "التصرف السليم عند رؤية شخص يقطع الأشجار لبيعها\"حطباً\" هو:",
                "correct": 2233,
                "total": 2400,
                "percentage": 93.04
            },
            {
                "question": "ضد كلمة \"الجافة\" الواردة في النص:",
                "correct": 2163,
                "total": 2400,
                "percentage": 90.12
            },
            {
                "question": "تتميز النباتات في المناطق الجافة بخصائص تمكنها من:",
                "correct": 2155,
                "total": 2400,
                "percentage": 89.79
            },
            {
                "question": "الكلمة التي احتوت على \"همزة متوسطة\" هي",
                "correct": 2152,
                "total": 2400,
                "percentage": 89.67
            },
            {
                "question": "خطر \"إضافي\" قد يهدد النباتات (غير الذي ورد في النص):",
                "correct": 2058,
                "total": 2400,
                "percentage": 85.75
            },
            {
                "question": "ما مرادف كلمة \"النامي\" الواردة في النص ؟",
                "correct": 2047,
                "total": 2400,
                "percentage": 85.29
            },
            {
                "question": "خلط طالب الخلّ مع بيكربونات الصوديوم، فلاحظ تصاعد فقاعات غازية. ما الاستنتاج الصحيح؟",
                "correct": 2036,
                "total": 2400,
                "percentage": 84.83
            },
            {
                "question": "من الأخطار التي تواجه الغطاء النباتي في المملكة العربية السعودية:",
                "correct": 2012,
                "total": 2400,
                "percentage": 83.83
            },
            {
                "question": "في نشاط استكشافي، طلب المعلم من الطلاب، تحديد المادة الأنسب التي تسمح بتحريك المروحة عند توصيلها بالنقطتين (1) و(2)",
                "correct": 1969,
                "total": 2400,
                "percentage": 82.04
            },
            {
                "question": "خلية جنسية في الإنسان تحتوي على 23 كروموسومًا، فكم يكون عدد الكروموسومات في البويضة المخصبة (اللاقحة)؟",
                "correct": 1856,
                "total": 2400,
                "percentage": 77.33
            },
            {
                "question": "دفع طالبٌ صندوقًا كما هو موضّح في الشكل التالي. ما مقدار الشغل المبذول (بالجول)؟",
                "correct": 1833,
                "total": 2400,
                "percentage": 76.38
            },
            {
                "question": "وجد طالب صخرًا يحتوي على طبقات واضحة وبداخله بقايا كائنات. ما نوع الصخر غالبًا؟",
                "correct": 1813,
                "total": 2400,
                "percentage": 75.54
            },
            {
                "question": "إحدى السمات التالية لا تنطبق على الإنسان.",
                "correct": 1802,
                "total": 2400,
                "percentage": 75.08
            },
            {
                "question": "تعيش بعض أنواع البكتيريا داخل أمعاء الأبقار وتساعدها على هضم الغذاء، وفي المقابل تحصل البكتيريا على الغذاء والمأوى. ما نوع العلاقة بين البكتيريا والأبقار؟",
                "correct": 1790,
                "total": 2400,
                "percentage": 74.58
            },
            {
                "question": "تُظهر الصورة طريقةً للمحافظة على التربة ومنع انجرافها بسبب الرياح. ما اسم هذه الطريقة؟",
                "correct": 1677,
                "total": 2400,
                "percentage": 69.88
            },
            {
                "question": "Column6",
                "correct": 1674,
                "total": 2400,
                "percentage": 69.75
            },
            {
                "question": "في السلسلة الغذائية الموضحة في الشكل، ما الكائن الذي يُعدّ المستهلك الأول؟",
                "correct": 1651,
                "total": 2400,
                "percentage": 68.79
            },
            {
                "question": "Column8",
                "correct": 1516,
                "total": 2400,
                "percentage": 63.17
            },
            {
                "question": "ثلاث شجرات أطوالها أعداد صحيحة من الأمتار ، طول الشجرة الثانية يساوي نصف طول الشجرة الأولى، والشجرة الثالثة أطول من الثانية وأقصر من الأولى، إذا كان مجموع ارتفاعات الأشجار ٢٤ مترًا، فما طول الشجرة الث",
                "correct": 1515,
                "total": 2400,
                "percentage": 63.12
            },
            {
                "question": "الفكرة الرئيسة التي يدور حولها النص هي:",
                "correct": 1450,
                "total": 2400,
                "percentage": 60.42
            },
            {
                "question": "أيُّ العبارات التالية تساعدك على تحديد الخلية النباتية في الشكل؟",
                "correct": 1374,
                "total": 2400,
                "percentage": 57.25
            },
            {
                "question": "Column2",
                "correct": 1348,
                "total": 2400,
                "percentage": 56.17
            },
            {
                "question": "يُصنف النص السابق من حيث النوع بأنه نص:",
                "correct": 1322,
                "total": 2400,
                "percentage": 55.08
            },
            {
                "question": "Column1",
                "correct": 1286,
                "total": 2400,
                "percentage": 53.58
            },
            {
                "question": "Column3",
                "correct": 1094,
                "total": 2400,
                "percentage": 45.58
            },
            {
                "question": "Column",
                "correct": 899,
                "total": 2400,
                "percentage": 37.46
            },
            {
                "question": "Column7",
                "correct": 887,
                "total": 2400,
                "percentage": 36.96
            },
            {
                "question": "Column4",
                "correct": 877,
                "total": 2400,
                "percentage": 36.54
            },
            {
                "question": "Column5",
                "correct": 577,
                "total": 2400,
                "percentage": 24.04
            }
        ]
    },
    "grade9": {
        "gender": {
            "بنات": 13519,
            "بنين": 5781
        },
        "total_students": 19300,
        "sectors": {
            "الجبيل": 1348,
            "النعيرية": 306,
            "حفر الباطن": 4289,
            "الدمام": 5135,
            "القطيف": 4058,
            "العديد": 54,
            "الخبر": 2836,
            "القرية العليا": 142,
            "الخفجي": 633,
            "رأس تنورة": 153,
            "بقيق": 346
        },
        "sector_by_gender": {
            "بنات": {
                "الجبيل": 929,
                "النعيرية": 249,
                "حفر الباطن": 2965,
                "الدمام": 3546,
                "القطيف": 2721,
                "العديد": 51,
                "الخبر": 2022,
                "القرية العليا": 119,
                "الخفجي": 503,
                "رأس تنورة": 105,
                "بقيق": 309
            },
            "بنين": {
                "النعيرية": 57,
                "حفر الباطن": 1324,
                "الجبيل": 419,
                "الدمام": 1589,
                "القطيف": 1337,
                "القرية العليا": 23,
                "الخبر": 814,
                "الخفجي": 130,
                "رأس تنورة": 48,
                "بقيق": 37,
                "العديد": 3
            }
        },
        "questions": [
            {
                "question": "في جملة (وقد سهل هذا التحوّل على رواد المكتبات) معنى كلمة (التحوّل):",
                "correct": 17450,
                "total": 19300,
                "percentage": 90.41
            },
            {
                "question": "تستخدم عادة اسم المؤلف، كلمة (المؤلف) في العبارة السابقة:",
                "correct": 17205,
                "total": 19300,
                "percentage": 89.15
            },
            {
                "question": "الشكل المجاور عندما تصطف الكروموسومات المتضاعفة في منتصف الخلية فهذا يمثل الطور:",
                "correct": 15776,
                "total": 19300,
                "percentage": 81.74
            },
            {
                "question": "معنى كلمة (النكوص) الواردة في النص:",
                "correct": 15758,
                "total": 19300,
                "percentage": 81.65
            },
            {
                "question": "في عبارة: \"كانت البطاقات بداخل الفهارس\"، كلمة (كانت) تُعدّ من (كان وأخواتها).",
                "correct": 15616,
                "total": 19300,
                "percentage": 80.91
            },
            {
                "question": "سبعينات القرن العشرين الميلادي تعني الفترة بين:",
                "correct": 15548,
                "total": 19300,
                "percentage": 80.56
            },
            {
                "question": "فكرة ضخ الماء باستخدام المضخة (الدينمو) من خزان أرضي إلى خزان علوي تشبه فكرة لأحد الأنشطة الموجودة في الجسم وهي:",
                "correct": 15314,
                "total": 19300,
                "percentage": 79.35
            },
            {
                "question": "تشكلت الأحفورة التالية في الصخر لأنه صخر:",
                "correct": 15299,
                "total": 19300,
                "percentage": 79.27
            },
            {
                "question": "عند حدود الصفائح الجانبية تتكون:",
                "correct": 15064,
                "total": 19300,
                "percentage": 78.05
            },
            {
                "question": "صرف خالد ٥٧٠ ريال اثناء تسوقه وهي تعادل ٣٠% من مدخراته .فكم كان اجمالي مدخراته ؟",
                "correct": 14825,
                "total": 19300,
                "percentage": 76.81
            },
            {
                "question": "يتميز الحيوان الموجود في الصورة (العقرب) بأنه:",
                "correct": 14271,
                "total": 19300,
                "percentage": 73.94
            },
            {
                "question": "حسب الشكل التالي، ما الذي يحدث للحبل؟",
                "correct": 13952,
                "total": 19300,
                "percentage": 72.29
            },
            {
                "question": "الخلية التالية موجودة في جميع أنسجة الجسم ما عدا:",
                "correct": 13926,
                "total": 19300,
                "percentage": 72.16
            },
            {
                "question": "Column1",
                "correct": 13706,
                "total": 19300,
                "percentage": 71.02
            },
            {
                "question": "كانت ........ قديماً تعتمد على الفهارس التقليدية في البحث. الكلمة الصحيحة التي تكمل الفراغ في السابق هي:",
                "correct": 13584,
                "total": 19300,
                "percentage": 70.38
            },
            {
                "question": "ما المقصود بـ (مصادر المعلومات) الواردة في النص؟",
                "correct": 13288,
                "total": 19300,
                "percentage": 68.85
            },
            {
                "question": "جميع مجموعات الجدول الدوري تندرج تحت مسمى (العناصر الممثلة) ما عدا المجموعات:",
                "correct": 13256,
                "total": 19300,
                "percentage": 68.68
            },
            {
                "question": "في عبارة (بل وجب عليها مسايرة الحاضر) الضمير في كلمة (عليها) يعود على:",
                "correct": 12916,
                "total": 19300,
                "percentage": 66.92
            },
            {
                "question": "Column6",
                "correct": 12771,
                "total": 19300,
                "percentage": 66.17
            },
            {
                "question": "Column4",
                "correct": 12277,
                "total": 19300,
                "percentage": 63.61
            },
            {
                "question": "Column7",
                "correct": 12042,
                "total": 19300,
                "percentage": 62.39
            },
            {
                "question": "Column5",
                "correct": 11201,
                "total": 19300,
                "percentage": 58.04
            },
            {
                "question": "أي الأدراج له طاقة وضع أقل:",
                "correct": 10243,
                "total": 19300,
                "percentage": 53.07
            },
            {
                "question": "Column8",
                "correct": 9885,
                "total": 19300,
                "percentage": 51.22
            },
            {
                "question": "Column3",
                "correct": 9807,
                "total": 19300,
                "percentage": 50.81
            },
            {
                "question": "في الموجة الصوتية الموضحة في الشكل أي مما يلي يمثل النقطتين (1) و (2) على الترتيب:",
                "correct": 9118,
                "total": 19300,
                "percentage": 47.24
            },
            {
                "question": "العلاقة بين مصطلحي (البحث المباشر، والبحث الآلي) علاقة:",
                "correct": 8135,
                "total": 19300,
                "percentage": 42.15
            },
            {
                "question": "Column2",
                "correct": 7931,
                "total": 19300,
                "percentage": 41.09
            },
            {
                "question": "كتبت كلمة (المكتبات) بالتاء المفتوحة لأنها:",
                "correct": 7611,
                "total": 19300,
                "percentage": 39.44
            },
            {
                "question": "Column",
                "correct": 3136,
                "total": 19300,
                "percentage": 16.25
            }
        ]
    }
};

  const currentData = data[activeGrade];
  const COLORS = ['#498AA8', '#2F6581', '#ABBDC6', '#545355', '#19171D'];
  const UI = {
    page: '#F3F8FA',
    primary: '#498AA8',
    primaryDeep: '#2F6581',
    muted: '#ABBDC6',
    ink: '#19171D',
    inkSoft: '#545355',
    card: '#FFFFFF',
    border: 'rgba(43,71,83,0.12)'
  };

  const genderData = Object.entries(currentData.gender).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / currentData.total_students) * 100).toFixed(1)
  }));

  const sectorData = Object.entries(currentData.sectors)
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({
      name,
      value,
      percentage: ((value / currentData.total_students) * 100).toFixed(1)
    }));

  const sectorGenderData = Object.entries(currentData.sectors)
    .sort((a, b) => b[1] - a[1])
    .map(([sector]) => {
      const result = { sector };
      Object.keys(currentData.sector_by_gender).forEach(gender => {
        result[gender] = currentData.sector_by_gender[gender][sector] || 0;
      });
      return result;
    });

  const topQuestions = currentData.questions.slice(0, 10);
  const bottomQuestions = currentData.questions.slice(-10).reverse();

  return (
    <div style={{
      minHeight: '100vh',
      background: UI.page,
      fontFamily: "'Cairo', 'Tajawal', sans-serif",
      direction: 'rtl',
      padding: '2.5rem',
      color: UI.ink
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: UI.card,
        borderRadius: '28px',
        padding: '2.8rem',
        marginBottom: '2rem',
        border: `1px solid ${UI.border}`,
        boxShadow: '0 20px 50px rgba(25,23,29,0.08)'
      }}>
        <h1 style={{
          fontSize: '3.2rem',
          fontWeight: '900',
          margin: 0,
          color: UI.primaryDeep,
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}>
          لوحة إحصائيات الاختبارات التشخيصي (التحصيلي)
        </h1>
        <p style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          margin: '1rem 0 0 0',
          color: UI.inkSoft,
          fontWeight: '500'
        }}>
          تحليل مبسّط ودقيق لأداء الطلاب والطالبات
        </p>
      </div>

      {/* Grade Selector */}
      <div style={{
        display: 'flex',
        gap: '1.5rem',
        marginBottom: '2rem',
        justifyContent: 'center'
      }}>
        <button
          onClick={() => setActiveGrade('grade3')}
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.4rem',
            fontWeight: '700',
            border: `1px solid ${UI.border}`,
            borderRadius: '18px',
            cursor: 'pointer',
            background: activeGrade === 'grade3'
              ? UI.primary
              : UI.card,
            color: activeGrade === 'grade3' ? '#fff' : UI.primaryDeep,
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxShadow: activeGrade === 'grade3' ? '0 12px 24px rgba(73,138,168,0.25)' : 'none',
            transform: activeGrade === 'grade3' ? 'scale(1.05)' : 'scale(1)'
          }}>
          الصف الثالث الابتدائي
        </button>
        <button
          onClick={() => setActiveGrade('grade6')}
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.4rem',
            fontWeight: '700',
            border: `1px solid ${UI.border}`,
            borderRadius: '18px',
            cursor: 'pointer',
            background: activeGrade === 'grade6'
              ? UI.primary
              : UI.card,
            color: activeGrade === 'grade6' ? '#fff' : UI.primaryDeep,
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxShadow: activeGrade === 'grade6' ? '0 12px 24px rgba(73,138,168,0.25)' : 'none',
            transform: activeGrade === 'grade6' ? 'scale(1.05)' : 'scale(1)'
          }}>
          الصف السادس الابتدائي
        </button>

        <button
          onClick={() => setActiveGrade('grade9')}
          style={{
            padding: '1.2rem 3rem',
            fontSize: '1.4rem',
            fontWeight: '700',
            border: `1px solid ${UI.border}`,
            borderRadius: '18px',
            cursor: 'pointer',
            background: activeGrade === 'grade9'
              ? UI.primary
              : UI.card,
            color: activeGrade === 'grade9' ? '#fff' : UI.primaryDeep,
            transition: 'all 0.3s ease',
            fontFamily: 'inherit',
            boxShadow: activeGrade === 'grade9' ? '0 12px 24px rgba(73,138,168,0.25)' : 'none',
            transform: activeGrade === 'grade9' ? 'scale(1.05)' : 'scale(1)'
          }}>
          الصف الثالث متوسط
        </button>
      </div>

      {/* Summary Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: UI.card,
          borderRadius: '22px',
          padding: '2rem',
          boxShadow: '0 12px 30px rgba(25,23,29,0.08)',
          border: `1px solid ${UI.border}`
        }}>
          <div style={{ fontSize: '1.05rem', color: UI.inkSoft, marginBottom: '0.5rem', fontWeight: '600' }}>إجمالي المشاركين</div>
          <div style={{ fontSize: '3.4rem', fontWeight: '900', color: UI.primaryDeep }}>{currentData.total_students}</div>
          <div style={{ fontSize: '0.95rem', color: UI.inkSoft, marginTop: '0.5rem' }}>طالب وطالبة</div>
        </div>

        {Object.entries(currentData.gender).map(([gender, count], index) => (
          <div key={gender} style={{
            background: UI.card,
            borderRadius: '22px',
            padding: '2rem',
            boxShadow: '0 12px 30px rgba(25,23,29,0.08)',
            border: `1px solid ${UI.border}`
          }}>
            <div style={{ fontSize: '1.05rem', color: UI.inkSoft, marginBottom: '0.5rem', fontWeight: '600' }}>
              {gender}
            </div>
            <div style={{ fontSize: '3rem', fontWeight: '900', color: COLORS[index % COLORS.length] }}>{count}</div>
            <div style={{ fontSize: '0.95rem', color: UI.inkSoft, marginTop: '0.5rem' }}>
              {((count / currentData.total_students) * 100).toFixed(1)}% من الإجمالي
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row 1: Gender and Sectors */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
            توزيع المشاركين حسب النوع
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.percentage}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  border: `1px solid ${UI.border}`,
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  color: UI.ink
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
            توزيع المشاركين حسب القطاع
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={sectorData.slice(0, 8)}>
              <CartesianGrid strokeDasharray="3 3" stroke={UI.border} />
              <XAxis
                dataKey="name"
                tick={{ fill: UI.inkSoft, fontSize: 12 }}
                angle={-15}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fill: UI.inkSoft }} />
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  border: `1px solid ${UI.border}`,
                  borderRadius: '12px',
                  fontFamily: 'inherit',
                  color: UI.ink
                }}
                formatter={(value) => [`${value} (${((value / currentData.total_students) * 100).toFixed(1)}%)`, 'عدد الطلاب']}
              />
              <Bar dataKey="value" fill={UI.primary} radius={[10, 10, 0, 0]}>
                {sectorData.slice(0, 8).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Sector by Gender Comparison */}
      <div style={{
        background: UI.card,
        borderRadius: '24px',
        padding: '2rem',
        marginBottom: '2rem',
        border: `1px solid ${UI.border}`,
        boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
      }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
          مقارنة المشاركين والمشاركات في كل قطاع
        </h2>
        <ResponsiveContainer width="100%" height={450}>
          <BarChart data={sectorGenderData.slice(0, 8)}>
            <CartesianGrid strokeDasharray="3 3" stroke={UI.border} />
            <XAxis
              dataKey="sector"
              tick={{ fill: UI.inkSoft, fontSize: 12 }}
              angle={-15}
              textAnchor="end"
              height={80}
            />
            <YAxis tick={{ fill: UI.inkSoft }} />
            <Tooltip
              contentStyle={{
                background: '#fff',
                border: `1px solid ${UI.border}`,
                borderRadius: '12px',
                fontFamily: 'inherit',
                color: UI.ink
              }}
            />
            <Legend
              wrapperStyle={{ color: UI.inkSoft }}
              iconType="circle"
            />
            {Object.keys(currentData.sector_by_gender).map((gender, index) => (
              <Bar
                key={gender}
                dataKey={gender}
                fill={COLORS[index % COLORS.length]}
                radius={[10, 10, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Questions Analysis */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '2rem',
        marginBottom: '2rem'
      }}>
        {/* Top Questions */}
        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.primaryDeep }}>
            الأسئلة الأعلى أداءً
          </h2>
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {topQuestions.map((q, index) => (
              <div key={index} style={{
                background: '#F7FAFC',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: `1px solid ${UI.border}`,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.8rem'
                }}>
                  <span style={{
                    background: UI.primary,
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    fontWeight: '900',
                    fontSize: '1.2rem',
                    minWidth: '50px',
                    textAlign: 'center'
                  }}>
                    #{index + 1}
                  </span>
                  <span style={{
                    background: 'rgba(73,138,168,0.15)',
                    color: UI.primaryDeep,
                    padding: '0.4rem 1.2rem',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}>
                    {q.percentage}%
                  </span>
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  color: UI.ink,
                  lineHeight: '1.6',
                  marginBottom: '0.8rem'
                }}>
                  {q.question}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.95rem',
                  color: UI.inkSoft
                }}>
                  <span>✓ إجابات صحيحة: {q.correct}</span>
                  <span>• إجمالي: {q.total}</span>
                </div>
                <div style={{
                  marginTop: '0.8rem',
                  background: 'rgba(171,189,198,0.35)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '8px'
                }}>
                  <div style={{
                    width: `${q.percentage}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${UI.primary} 0%, ${UI.primaryDeep} 100%)`,
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Questions */}
        <div style={{
          background: UI.card,
          borderRadius: '24px',
          padding: '2rem',
          border: `1px solid ${UI.border}`,
          boxShadow: '0 18px 40px rgba(25,23,29,0.08)'
        }}>
          <h2 style={{ fontSize: '1.7rem', fontWeight: '700', marginBottom: '1.5rem', color: UI.ink }}>
            الأسئلة الأقل أداءً
          </h2>
          <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {bottomQuestions.map((q, index) => (
              <div key={index} style={{
                background: '#F8F5F6',
                borderRadius: '16px',
                padding: '1.5rem',
                marginBottom: '1rem',
                border: `1px solid ${UI.border}`,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.8rem'
                }}>
                  <span style={{
                    background: UI.inkSoft,
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    fontWeight: '900',
                    fontSize: '1.2rem',
                    minWidth: '50px',
                    textAlign: 'center'
                  }}>
                    #{index + 1}
                  </span>
                  <span style={{
                    background: 'rgba(84,83,85,0.15)',
                    color: UI.inkSoft,
                    padding: '0.4rem 1.2rem',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '1.1rem'
                  }}>
                    {q.percentage}%
                  </span>
                </div>
                <div style={{
                  fontSize: '1.05rem',
                  color: UI.ink,
                  lineHeight: '1.6',
                  marginBottom: '0.8rem'
                }}>
                  {q.question}
                </div>
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.95rem',
                  color: UI.inkSoft
                }}>
                  <span>✓ إجابات صحيحة: {q.correct}</span>
                  <span>• إجمالي: {q.total}</span>
                </div>
                <div style={{
                  marginTop: '0.8rem',
                  background: 'rgba(171,189,198,0.35)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  height: '8px'
                }}>
                  <div style={{
                    width: `${q.percentage}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${UI.inkSoft} 0%, ${UI.ink} 100%)`,
                    transition: 'width 0.5s ease'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: UI.card,
        borderRadius: '24px',
        padding: '1.5rem',
        textAlign: 'center',
        border: `1px solid ${UI.border}`,
        marginTop: '2rem',
        boxShadow: '0 12px 30px rgba(25,23,29,0.08)'
      }}>
        <p style={{ margin: 0, color: UI.inkSoft, fontSize: '1.1rem' }}>
          تم إنشاء هذه اللوحة بناءً على البيانات الفعلية من الملفات المرفقة • جميع الإحصائيات دقيقة ومحدثة
        </p>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Dashboard />);
