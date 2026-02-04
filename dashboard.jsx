import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [activeGrade, setActiveGrade] = useState('grade3');

  const data = {
    grade3: {
      gender: { "بنات": 531, "طفولة مبكرة": 260, "بنين": 134 },
      total_students: 925,
      sectors: {
        "حفر الباطن": 382, "الدمام": 129, "القطيف": 95, "الجبيل": 91,
        "الخبر": 90, "الخفجي": 55, "النعيرية": 48, "القرية العليا": 24,
        "بقيق": 6, "رأس تنورة": 4, "العديد": 1
      },
      sector_by_gender: {
        "بنات": {"حفر الباطن": 244, "الدمام": 69, "القطيف": 42, "الجبيل": 45, "الخبر": 52, "الخفجي": 30, "النعيرية": 28, "القرية العليا": 14, "بقيق": 3, "رأس تنورة": 3, "العديد": 1},
        "طفولة مبكرة": {"حفر الباطن": 105, "الدمام": 45, "القطيف": 35, "الجبيل": 23, "الخبر": 25, "الخفجي": 11, "النعيرية": 11, "القرية العليا": 4, "بقيق": 1, "رأس تنورة": 0, "العديد": 0},
        "بنين": {"حفر الباطن": 33, "الدمام": 15, "القطيف": 18, "الجبيل": 23, "الخبر": 13, "الخفجي": 14, "النعيرية": 9, "القرية العليا": 6, "بقيق": 2, "رأس تنورة": 1, "العديد": 0}
      },
      questions: [
        { question: "7-أيُّ عددٍ يجعل الجملة العددية التالية صحيحة ٤ × ٦ = ٢٤ ⬜ × ٤ = ٢٤", correct: 900, total: 925, percentage: 97.3 },
        { question: "2- الجملة التي توضّح خاصية العنصر المحايد في الجمع:", correct: 860, total: 925, percentage: 92.97 },
        { question: "9-يمثّل الجدول درجات ثلاثة أجزاء من اختبار، كيف نجد الدرجة الكلّية للاختبار؟", correct: 856, total: 925, percentage: 92.54 },
        { question: "6-معنى عبارة (أَطْبَقَ يَدَيْهِ):", correct: 836, total: 925, percentage: 90.38 },
        { question: "2-أيّ الكلمات التالية وردت في النص بصيغة الجمع:", correct: 833, total: 925, percentage: 90.05 },
        { question: "1-تقدير ناتج الجمع بالتقريب لأقرب ألف ٤٨٩٢ + ٣١٠٧ =", correct: 824, total: 925, percentage: 89.08 },
        { question: "3-العبارة التي تُمثّل خاصية التجميع في عملية الجمع:", correct: 821, total: 925, percentage: 88.76 },
        { question: "10-في المكتبة ٣٢٠ كتابًا للقصص و٤٥٠ كتابًا للعلوم، أُعير منها ١٨٠ كتابًا، فكم كتابًا بقي في المكتبة؟", correct: 819, total: 925, percentage: 88.54 },
        { question: "4-مع أحمد ٧٥٠ ريالًا، اشترى حقيبة بـ ٤٨٥ ريالًا، فكم ريالًا بقي معه؟", correct: 807, total: 925, percentage: 87.24 },
        { question: "5-الدرس الذي تعلمته من القصة:", correct: 793, total: 925, percentage: 85.73 },
        { question: "9-مرادف كلمة (تظاهر)", correct: 790, total: 925, percentage: 85.41 },
        { question: "10-ما رأيك في تصرّف الثعلب؟", correct: 782, total: 925, percentage: 84.54 },
        { question: "5-كان في الحديقة ١٦ شجرة تفاح، و١٤ شجرة برتقال، و١٠ أشجار ليمون، فإذا قُطِعَت ٣ أشجار من كل نوع، فكم شجرة بقيت في الحديقة؟", correct: 776, total: 925, percentage: 83.89 },
        { question: "6-تقدير ناتج الطرح بالتقريب لأقرب مئة ٨١٢ − ٤٦٨ =", correct: 775, total: 925, percentage: 83.78 },
        { question: "8- الحدث الذي يدلّ على ذكاء الأرنب الصغير:", correct: 760, total: 925, percentage: 82.16 },
        { question: "مُسْتَعْمِلًا التَّمْثِيلَ الْمُجَاوِرَ، أُجِيبُ عَمَّا يَلِي: كم تزيد درجة هيا عن درجة سمر؟", correct: 710, total: 925, percentage: 76.76 },
        { question: "9-أيُ شخصية في القصة تصرّفت بذكاء وساعدت في تغيير نهاية الحدث؟", correct: 697, total: 925, percentage: 75.35 },
        { question: "4-العلاقة بين حَذَرِ الأرنب ونجاته:", correct: 696, total: 925, percentage: 75.24 },
        { question: "7- الترتيب الصحيح لأحداث القصة:", correct: 668, total: 925, percentage: 72.22 },
        { question: "3-يدلُّ قول الأب: «إنَّ الثعلبَ يموتُ وفمُهُ مفتوحٌ»", correct: 630, total: 925, percentage: 68.11 }
      ]
    },
    grade6: {
      gender: { "بنين": 148, "بنات": 127 },
      total_students: 275,
      sectors: {
        "الجبيل": 81, "الدمام": 60, "الخبر": 44, "النعيرية": 35,
        "حفر الباطن": 23, "رأس تنورة": 18, "القطيف": 10, "القرية العليا": 2,
        "بقيق": 1, "الخفجي": 1
      },
      sector_by_gender: {
        "بنين": {"الجبيل": 47, "الدمام": 35, "الخبر": 22, "النعيرية": 18, "حفر الباطن": 11, "رأس تنورة": 9, "القطيف": 4, "القرية العليا": 1, "بقيق": 0, "الخفجي": 1},
        "بنات": {"الجبيل": 34, "الدمام": 25, "الخبر": 22, "النعيرية": 17, "حفر الباطن": 12, "رأس تنورة": 9, "القطيف": 6, "القرية العليا": 1, "بقيق": 1, "الخفجي": 0}
      },
      questions: [
        { question: "الكلمة التي تُصنف \"اسم آلة\" من بين الكلمات التالية", correct: 255, total: 275, percentage: 92.73 },
        { question: "الكلمة التي احتوت على \"همزة متوسطة\" هي", correct: 245, total: 275, percentage: 89.09 },
        { question: "التصرف السليم عند رؤية شخص يقطع الأشجار لبيعها\"حطب\"", correct: 237, total: 275, percentage: 86.18 },
        { question: "ضد كلمة \"الجافة\" الواردة في النص:", correct: 237, total: 275, percentage: 86.18 },
        { question: "تتميز النباتات في المناطق الجافة بخصائص تمكنها من:", correct: 233, total: 275, percentage: 84.73 },
        { question: "ما مرادف كلمة \"النامي\" الواردة في النص؟", correct: 230, total: 275, percentage: 83.64 },
        { question: "المُخطط الذي يُستخدم لتمثيل توزيع البيانات", correct: 229, total: 275, percentage: 83.27 },
        { question: "المصطلح الصحيح لفظيًا وإملائيًا من المصطلحات التالية:", correct: 227, total: 275, percentage: 82.55 },
        { question: "أيُّ من التحوّلات التالية يعدُّ تحوّلًا فيزيائيًّا؟", correct: 221, total: 275, percentage: 80.36 },
        { question: "اكتب \"جملة فعلية\" بسيطة ذات معنى مفيد تحتوي على \"فاعل ومفعول به\"", correct: 219, total: 275, percentage: 79.64 },
        { question: "ما كمية الكهرباء المستخدمة من جهاز بقدرة (500 واط) يعمل لمدة 30 دقيقة؟", correct: 215, total: 275, percentage: 78.18 },
        { question: "العبارة الصحيحة التي توضّح علاقة الإنتاجية بالقوة الشرائية للفرد:", correct: 214, total: 275, percentage: 77.82 },
        { question: "أيٌّ من التَّالي خاصيَّة كيميائيَّة:", correct: 213, total: 275, percentage: 77.45 },
        { question: "أي نوع من الصخور يستخدم في صنع الإسمنت؟", correct: 207, total: 275, percentage: 75.27 },
        { question: "Column6", correct: 196, total: 275, percentage: 71.27 },
        { question: "أيُّ من القوى الآتية مغناطيسيةٌ؟", correct: 182, total: 275, percentage: 66.18 },
        { question: "Column4", correct: 126, total: 275, percentage: 45.82 },
        { question: "Column1", correct: 123, total: 275, percentage: 44.73 },
        { question: "Column8", correct: 119, total: 275, percentage: 43.27 },
        { question: "أي الأجهزة يستخدم لرفع الأجسام الثقيلة من مكانٍ إلى آخر؟", correct: 95, total: 275, percentage: 34.55 },
        { question: "Column3", correct: 90, total: 275, percentage: 32.73 },
        { question: "Column2", correct: 87, total: 275, percentage: 31.64 },
        { question: "Column7", correct: 74, total: 275, percentage: 26.91 },
        { question: "Column", correct: 62, total: 275, percentage: 22.55 },
        { question: "Column5", correct: 52, total: 275, percentage: 18.91 }
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
                formatter={(value, name) => [`${value} (${((value / currentData.total_students) * 100).toFixed(1)}%)`, 'عدد الطلاب']}
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

export default Dashboard;
