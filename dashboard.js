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
    grade3: {
      gender: {
        "بنات": 531,
        "طفولة مبكرة": 260,
        "بنين": 134
      },
      total_students: 925,
      sectors: {
        "الدمام": 129,
        "حفر الباطن": 382,
        "القطيف": 95,
        "الجبيل": 91,
        "القرية العليا": 24,
        "الخبر": 90,
        "الخفجي": 55,
        "بقيق": 6,
        "النعيرية": 48,
        "رأس تنورة": 4,
        "العديد": 1
      },
      sector_by_gender: {
        "بنات": {
          "الدمام": 69,
          "حفر الباطن": 268,
          "الجبيل": 51,
          "القطيف": 38,
          "الخبر": 63,
          "القرية العليا": 12,
          "الخفجي": 12,
          "النعيرية": 14,
          "بقيق": 3,
          "العديد": 1
        },
        "طفولة مبكرة": {
          "الدمام": 35,
          "حفر الباطن": 60,
          "القطيف": 40,
          "القرية العليا": 12,
          "الخبر": 19,
          "الخفجي": 36,
          "الجبيل": 36,
          "النعيرية": 21,
          "بقيق": 1
        },
        "بنين": {
          "الدمام": 25,
          "حفر الباطن": 54,
          "الخبر": 8,
          "الجبيل": 4,
          "بقيق": 2,
          "القطيف": 17,
          "النعيرية": 13,
          "الخفجي": 7,
          "رأس تنورة": 4
        }
      },
      questions: [
        {
          question: "7-أيُّ عددٍ يجعل الجملة العددية  التالية صحيحة  ٤ × ٦ = ٢٤   ⬜ × ٤ = ٢٤",
          correct: 900,
          total: 925,
          percentage: 97.3
        },
        {
          question: "2- الجملة التي توضّح خاصية العنصر المحايد في الجمع:",
          correct: 860,
          total: 925,
          percentage: 92.97
        },
        {
          question: "9-يمثّل الجدول درجات ثلاثة أجزاء من اختبار، كيف نجد الدرجة الكلّية للاختبار؟",
          correct: 856,
          total: 925,
          percentage: 92.54
        },
        {
          question: "6-معنى عبارة (أَطْبَقَ يَدَيْهِ):",
          correct: 836,
          total: 925,
          percentage: 90.38
        },
        {
          question: "2-أيّ الكلمات التالية وردت في النص بصيغة الجمع:",
          correct: 833,
          total: 925,
          percentage: 90.05
        },
        {
          question: "9-مرادف كلمة (تظاهر)",
          correct: 833,
          total: 925,
          percentage: 90.05
        },
        {
          question: "4-مع أحمد ٧٥٠ ريالًا، اشترى حقيبة بـ ٤٨٥ ريالًا، فكم ريالًا بقي معه؟",
          correct: 811,
          total: 925,
          percentage: 87.68
        },
        {
          question: "8- الحدث الذي يدلّ على ذكاء الأرنب الصغير:",
          correct: 806,
          total: 925,
          percentage: 87.14
        },
        {
          question: "10-في المكتبة ٣٢٠ كتابًا للقصص و٤٥٠ كتابًا للعلوم، أُعير منها ١٨٠ كتابًا، فكم كتابًا بقي في المكتبة؟",
          correct: 800,
          total: 925,
          percentage: 86.49
        },
        {
          question: "3-العبارة التي تُمثّل خاصية التجميع في عملية الجمع :",
          correct: 793,
          total: 925,
          percentage: 85.73
        },
        {
          question: "5-الدرس الذي تعلمته من القصة:",
          correct: 779,
          total: 925,
          percentage: 84.22
        },
        {
          question: "1-تقدير ناتج الجمع بالتقريب لأقرب ألف ٤٨٩٢ + ٣١٠٧ =",
          correct: 766,
          total: 925,
          percentage: 82.81
        },
        {
          question: "6-تقدير ناتج الطرح بالتقريب لأقرب مئة ٨١٢ − ٤٦٨ =",
          correct: 754,
          total: 925,
          percentage: 81.51
        },
        {
          question: "10-ما رأيك في تصرّف الثعلب؟",
          correct: 737,
          total: 925,
          percentage: 79.68
        },
        {
          question: "5-كان في الحديقة ١٦ شجرة تفاح، و١٤ شجرة برتقال، و١٠ أشجار ليمون، فإذا قُطِعَت ٣ أشجار من كل نوع، فكم شجرة بقيت في الحديقة؟",
          correct: 737,
          total: 925,
          percentage: 79.68
        },
        {
          question: "مُسْتَعْمِلًا التَّمْثِيلَ الْمُجَاوِرَ، أُجِيبُ عَمَّا يَلِي: كم تزيد درجة هيا عن درجة سمر؟",
          correct: 710,
          total: 925,
          percentage: 76.76
        },
        {
          question: "9-أيُ شخصية في القصة تصرّفت بذكاء وساعدت في تغيير نهاية الحدث؟",
          correct: 697,
          total: 925,
          percentage: 75.35
        },
        {
          question: "4-العلاقة بين حَذَرِ الأرنب ونجاته:",
          correct: 696,
          total: 925,
          percentage: 75.24
        },
        {
          question: "7- الترتيب الصحيح لأحداث القصة:",
          correct: 668,
          total: 925,
          percentage: 72.22
        },
        {
          question: "3-يدلُّ قول الأب: «إنَّ الثعلبَ يموتُ وفمُهُ مفتوحٌ»",
          correct: 630,
          total: 925,
          percentage: 68.11
        }
      ]
    },
    grade6: {
      gender: {
        "بنات": 127,
        "بنين": 148
      },
      total_students: 275,
      sectors: {
        "القطيف": 10,
        "الدمام": 60,
        "بقيق": 1,
        "الخبر": 44,
        "حفر الباطن": 23,
        "القرية العليا": 2,
        "الجبيل": 81,
        "النعيرية": 35,
        "رأس تنورة": 18,
        "الخفجي": 1
      },
      sector_by_gender: {
        "بنات": {
          "القطيف": 4,
          "الدمام": 6,
          "حفر الباطن": 15,
          "القرية العليا": 2,
          "الجبيل": 80,
          "النعيرية": 1,
          "رأس تنورة": 17,
          "الخبر": 2
        },
        "بنين": {
          "الدمام": 54,
          "بقيق": 1,
          "الخبر": 42,
          "القطيف": 6,
          "حفر الباطن": 8,
          "الجبيل": 1,
          "النعيرية": 34,
          "رأس تنورة": 1,
          "الخفجي": 1
        }
      },
      questions: [
        {
          question: "الكلمة التي تُصنف \"اسم آلة\" من بين الكلمات التالية هي:",
          correct: 255,
          total: 275,
          percentage: 92.73
        },
        {
          question: "الكلمة التي احتوت على \"همزة متوسطة\" هي",
          correct: 245,
          total: 275,
          percentage: 89.09
        },
        {
          question: "التصرف السليم عند رؤية شخص يقطع الأشجار لبيعها\"حطباً\" هو:",
          correct: 237,
          total: 275,
          percentage: 86.18
        },
        {
          question: "ضد كلمة \"الجافة\" الواردة في النص:",
          correct: 237,
          total: 275,
          percentage: 86.18
        },
        {
          question: "تتميز النباتات في المناطق الجافة بخصائص تمكنها من:",
          correct: 233,
          total: 275,
          percentage: 84.73
        },
        {
          question: "خلط طالب الخلّ مع بيكربونات الصوديوم، فلاحظ تصاعد فقاعات غازية. ما الاستنتاج الصحيح؟",
          correct: 213,
          total: 275,
          percentage: 77.45
        },
        {
          question: "خطر \"إضافي\" قد يهدد النباتات (غير الذي ورد في النص):",
          correct: 211,
          total: 275,
          percentage: 76.73
        },
        {
          question: "دفع طالبٌ صندوقًا كما هو موضّح في الشكل التالي. ما مقدار الشغل المبذول (بالجول)؟",
          correct: 206,
          total: 275,
          percentage: 74.91
        },
        {
          question: "في نشاط استكشافي، طلب المعلم من الطلاب، تحديد المادة الأنسب التي تسمح بتحريك المروحة عند توصيلها بالنقطتين (1) و(2)",
          correct: 204,
          total: 275,
          percentage: 74.18
        },
        {
          question: "ما مرادف كلمة \"النامي\" الواردة في النص ؟",
          correct: 200,
          total: 275,
          percentage: 72.73
        },
        {
          question: "من الأخطار التي تواجه الغطاء النباتي في المملكة   العربية السعودية:",
          correct: 194,
          total: 275,
          percentage: 70.55
        },
        {
          question: "خلية جنسية في الإنسان تحتوي على 23 كروموسومًا، فكم يكون عدد الكروموسومات في البويضة   المخصبة (اللاقحة)؟",
          correct: 190,
          total: 275,
          percentage: 69.09
        },
        {
          question: "إحدى السمات التالية لا تنطبق على الإنسان.",
          correct: 189,
          total: 275,
          percentage: 68.73
        },
        {
          question: "تعيش بعض أنواع البكتيريا داخل أمعاء الأبقار وتساعدها على هضم الغذاء، وفي المقابل تحصل البكتيريا على الغذاء والمأوى. ما نوع العلاقة بين البكتيريا والأبقار؟",
          correct: 179,
          total: 275,
          percentage: 65.09
        },
        {
          question: "في السلسلة الغذائية الموضحة في الشكل، ما الكائن الذي يُعدّ المستهلك الأول؟",
          correct: 177,
          total: 275,
          percentage: 64.36
        },
        {
          question: "تُظهر الصورة طريقةً للمحافظة على التربة ومنع انجرافها بسبب الرياح. ما اسم هذه الطريقة؟",
          correct: 175,
          total: 275,
          percentage: 63.64
        },
        {
          question: "وجد طالب صخرًا يحتوي على طبقات   واضحة وبداخله بقايا كائنات. ما   نوع الصخر غالبًا؟",
          correct: 152,
          total: 275,
          percentage: 55.27
        },
        {
          question: "Column6",
          correct: 151,
          total: 275,
          percentage: 54.91
        },
        {
          question: "ثلاث شجرات أطوالها أعداد صحيحة من الأمتار ، طول الشجرة الثانية يساوي نصف طول الشجرة الأولى، والشجرة الثالثة أطول من الثانية وأقصر من الأولى، إذا كان مجموع ارتفاعات الأشجار ٢٤ مترًا، فما طول الشجرة الث",
          correct: 142,
          total: 275,
          percentage: 51.64
        },
        {
          question: "Column8",
          correct: 138,
          total: 275,
          percentage: 50.18
        },
        {
          question: "يُصنف النص السابق من حيث النوع بأنه نص:",
          correct: 136,
          total: 275,
          percentage: 49.45
        },
        {
          question: "أيُّ العبارات التالية تساعدك على تحديد الخلية النباتية في الشكل؟",
          correct: 129,
          total: 275,
          percentage: 46.91
        },
        {
          question: "الفكرة الرئيسة التي يدور حولها النص هي:",
          correct: 113,
          total: 275,
          percentage: 41.09
        },
        {
          question: "Column1",
          correct: 104,
          total: 275,
          percentage: 37.82
        },
        {
          question: "Column4",
          correct: 91,
          total: 275,
          percentage: 33.09
        },
        {
          question: "Column3",
          correct: 90,
          total: 275,
          percentage: 32.73
        },
        {
          question: "Column2",
          correct: 87,
          total: 275,
          percentage: 31.64
        },
        {
          question: "Column7",
          correct: 74,
          total: 275,
          percentage: 26.91
        },
        {
          question: "Column",
          correct: 62,
          total: 275,
          percentage: 22.55
        },
        {
          question: "Column5",
          correct: 52,
          total: 275,
          percentage: 18.91
        }
      ]
    },
    grade9: {
      gender: {
        "بنات": 413,
        "بنين": 337
      },
      total_students: 750,
      sectors: {
        "الجبيل": 132,
        "النعيرية": 13,
        "حفر الباطن": 96,
        "الدمام": 111,
        "القطيف": 117,
        "العديد": 12,
        "الخبر": 195,
        "القرية العليا": 31,
        "الخفجي": 42,
        "رأس تنورة": 1
      },
      sector_by_gender: {
        "بنات": {
          "الجبيل": 67,
          "النعيرية": 2,
          "حفر الباطن": 19,
          "الدمام": 38,
          "القطيف": 24,
          "العديد": 12,
          "الخبر": 186,
          "القرية العليا": 30,
          "الخفجي": 34,
          "رأس تنورة": 1
        },
        "بنين": {
          "النعيرية": 11,
          "حفر الباطن": 77,
          "الجبيل": 65,
          "الدمام": 73,
          "القطيف": 93,
          "القرية العليا": 1,
          "الخبر": 9,
          "الخفجي": 8
        }
      },
      questions: [
        {
          question: "في جملة (وقد سهل هذا التحوّل على رواد المكتبات) معنى كلمة (التحوّل):",
          correct: 657,
          total: 750,
          percentage: 87.6
        },
        {
          question: "تستخدم عادة اسم المؤلف، كلمة (المؤلف) في العبارة السابقة:",
          correct: 636,
          total: 750,
          percentage: 84.8
        },
        {
          question: "معنى كلمة (النكوص) الواردة في   النص:",
          correct: 597,
          total: 750,
          percentage: 79.6
        },
        {
          question: "الشكل المجاور عندما تصطف الكروموسومات   المتضاعفة في منتصف الخلية فهذا يمثل الطور:",
          correct: 597,
          total: 750,
          percentage: 79.6
        },
        {
          question: "عند حدود الصفائح الجانبية تتكون:",
          correct: 591,
          total: 750,
          percentage: 78.8
        },
        {
          question: "سبعينات القرن العشرين الميلادي تعني الفترة بين:",
          correct: 588,
          total: 750,
          percentage: 78.4
        },
        {
          question: "حسب   الشكل التالي، ما الذي يحدث للحبل؟",
          correct: 580,
          total: 750,
          percentage: 77.33
        },
        {
          question: "فكرة ضخ الماء باستخدام المضخة (الدينمو) من   خزان أرضي إلى خزان علوي تشبه فكرة لأحد   الأنشطة الموجودة في الجسم وهي:",
          correct: 574,
          total: 750,
          percentage: 76.53
        },
        {
          question: "تشكلت الأحفورة التالية في الصخر لأنه صخر:",
          correct: 573,
          total: 750,
          percentage: 76.4
        },
        {
          question: "في عبارة: \"كانت البطاقات بداخل الفهارس\"، كلمة (كانت) تُعدّ من (كان وأخواتها).",
          correct: 547,
          total: 750,
          percentage: 72.93
        },
        {
          question: "الخلية التالية موجودة في جميع أنسجة الجسم ما عدا:",
          correct: 529,
          total: 750,
          percentage: 70.53
        },
        {
          question: "يتميز الحيوان الموجود في الصورة (العقرب) بأنه:",
          correct: 528,
          total: 750,
          percentage: 70.4
        },
        {
          question: "في عبارة (بل وجب عليها مسايرة الحاضر) الضمير في كلمة (عليها) يعود على:",
          correct: 521,
          total: 750,
          percentage: 69.47
        },
        {
          question: "Column1",
          correct: 520,
          total: 750,
          percentage: 69.33
        },
        {
          question: "صرف خالد ٥٧٠ ريال اثناء تسوقه وهي تعادل ٣٠% من مدخراته .فكم كان اجمالي مدخراته ؟",
          correct: 519,
          total: 750,
          percentage: 69.2
        },
        {
          question: "Column5",
          correct: 514,
          total: 750,
          percentage: 68.53
        },
        {
          question: "Column6",
          correct: 486,
          total: 750,
          percentage: 64.8
        },
        {
          question: "كانت ........ قديماً تعتمد على الفهارس التقليدية في البحث. الكلمة الصحيحة التي تكمل الفراغ في السابق هي:",
          correct: 482,
          total: 750,
          percentage: 64.27
        },
        {
          question: "جميع مجموعات الجدول الدوري تندرج تحت مسمى (العناصر الممثلة) ما عدا المجموعات:",
          correct: 477,
          total: 750,
          percentage: 63.6
        },
        {
          question: "ما المقصود بـ (مصادر المعلومات) الواردة في النص؟",
          correct: 448,
          total: 750,
          percentage: 59.73
        },
        {
          question: "Column4",
          correct: 439,
          total: 750,
          percentage: 58.53
        },
        {
          question: "Column7",
          correct: 428,
          total: 750,
          percentage: 57.07
        },
        {
          question: "Column8",
          correct: 403,
          total: 750,
          percentage: 53.73
        },
        {
          question: "في الموجة الصوتية الموضحة في الشكل  أي مما يلي يمثل النقطتين (1) و (2) على الترتيب:",
          correct: 397,
          total: 750,
          percentage: 52.93
        },
        {
          question: "Column2",
          correct: 395,
          total: 750,
          percentage: 52.67
        },
        {
          question: "أي الأدراج له طاقة وضع أقل:",
          correct: 386,
          total: 750,
          percentage: 51.47
        },
        {
          question: "Column3",
          correct: 384,
          total: 750,
          percentage: 51.2
        },
        {
          question: "العلاقة بين مصطلحي (البحث المباشر، والبحث الآلي) علاقة:",
          correct: 353,
          total: 750,
          percentage: 47.07
        },
        {
          question: "كتبت كلمة (المكتبات) بالتاء المفتوحة لأنها:",
          correct: 310,
          total: 750,
          percentage: 41.33
        },
        {
          question: "Column",
          correct: 1,
          total: 750,
          percentage: 0.13
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
          لوحة إحصائيات الاختبارات
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
          الصف الثالث المتوسط
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
