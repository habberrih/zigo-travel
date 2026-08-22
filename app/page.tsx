import React from "react";
import Image from "next/image";
import VisitorCounter from "@/components/VisitorCounter";
import ContactForm from "@/components/ContactForm";

const PlaneIcon = ({
  size = 28,
  color = "#e0b96f",
  style,
}: {
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    style={{ transform: "scaleX(-1) rotate(-10deg)", ...style }}
  >
    <path d="M2.6 19.6 21.4 12 2.6 4.4l0 5.9L15 12 2.6 13.7z" />
  </svg>
);

const stats = [
  { value: "+40", label: "دولة نجهّز تأشيراتها" },
  { value: "+12,000", label: "مسافر خدمناهم" },
  { value: "24/7", label: "دعم بالهاتف وواتساب" },
  { value: "طرابلس", label: "مكتب نلتقي فيه فعلاً" },
];

const services = [
  {
    title: "خدمات التأشيرات",
    desc: "تجهيز ملفات شنغن وأوروبا ودول العالم، مع قائمة مستندات واضحة ومراجعة قبل التقديم.",
    highlight: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <circle cx="12" cy="10" r="3" />
        <path d="M8 17h8" />
      </svg>
    ),
  },
  {
    title: "مواعيد السفارات",
    desc: "حجز مواعيد السفارات ومراكز التأشيرات في مختلف الدول ومتابعة أقرب موعد متاح.",
    highlight: true,
    badge: "الأكثر طلباً",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <path d="M8 15h4" />
      </svg>
    ),
  },
  {
    title: "حجز مبدئي",
    desc: "حجز طيران وفندق مبدئي (قابل للإلغاء) لإرفاقه بملف التأشيرة قبل التأكيد النهائي.",
    highlight: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "تذاكر الطيران",
    desc: "ذهاب فقط أو ذهاب وعودة، على جميع الخطوط، ضمن خطة رحلتك لا كخدمة منفصلة.",
    highlight: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.5 20.5l1.5-4.5 4.5-1.5" />
        <path d="M3 13l18-7-7 18-2.5-6.5L3 13z" />
      </svg>
    ),
  },
  {
    title: "الفنادق والإقامة",
    desc: "اقتراح وحجز إقامة تناسب وجهتك ونوع رحلتك وميزانيتك ضمن الحزمة الكاملة.",
    highlight: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 19v-7a2 2 0 0 1 2-2h10a4 4 0 0 1 4 4v5" />
        <path d="M3 19h18M3 12V7" />
        <circle cx="8" cy="13" r="1.6" />
      </svg>
    ),
  },
  {
    title: "الرحلات السياحية",
    desc: "برامج جاهزة أو مخصصة، رحلات جماعية وعائلية، داخل ليبيا وخارجها.",
    highlight: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5 5-2z" />
      </svg>
    ),
  },
  {
    title: "رحلات العلاج",
    desc: "تنسيق كامل لرحلات العلاج بالخارج: المستشفى، الموعد، التأشيرة، والإقامة.",
    highlight: false,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.4-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 3.5C19 16.6 12 21 12 21z" />
        <path d="M12 11v4M10 13h4" />
      </svg>
    ),
  },
];

const steps = [
  { n: "1", title: "قل لنا وجهتك", desc: "الوجهة والمدة والميزانية ونوع الرحلة.", highlight: false },
  { n: "2", title: "نجهّز المستندات", desc: "قائمة واضحة ومراجعة كاملة لملف التأشيرة.", highlight: false },
  { n: "3", title: "نحجز الموعد", desc: "موعد السفارة أو مركز التأشيرات ومتابعة الحالة.", highlight: false },
  { n: "4", title: "الطيران والفندق", desc: "نحجز التذكرة والإقامة ضمن خطة واحدة.", highlight: false },
  { n: "5", title: "استمتع برحلتك", desc: "متابعة معك من المغادرة حتى العودة.", highlight: true },
];

const destinations = [
  { name: "إيطاليا", tag: "شنغن · سياحة وأعمال", image: "/assets/destinations/italy.jpg" },
  { name: "مالطا", tag: "شنغن · سياحة ودراسة", image: "/assets/destinations/malta.jpg" },
  { name: "فرنسا", tag: "شنغن · سياحة وعلاج", image: "/assets/destinations/france.jpg" },
];

const moreDestinations = [
  { name: "تركيا", tag: "سياحة" },
  { name: "الإمارات", tag: "زيارة" },
  { name: "ألمانيا", tag: "شنغن" },
  { name: "المملكة المتحدة", tag: "زيارة" },
];

const whyUs = [
  { title: "ملف واحد ومسؤول واحد", desc: "شخص واحد يتابع رحلتك من التأشيرة حتى العودة." },
  { title: "شفافية كاملة", desc: "نوضح المطلوب والتكلفة والمدة مسبقاً، دون وعود بمنح التأشيرة." },
  { title: "حضور محلي", desc: "مكتبنا في طرابلس ودعم على مدار الساعة بالهاتف وواتساب." },
];

const testimonials = [
  { text: "جهّزوا لي ملف شنغن كامل وحجزوا الموعد في وقت قصير. المتابعة كانت يومية.", name: "أحمد م.", city: "طرابلس" },
  { text: "رحلة علاج لوالدي: نسّقوا المستشفى والإقامة والتذاكر. ارتحنا من التفاصيل.", name: "سلمى ع.", city: "بنغازي" },
  { text: "حجزنا برنامج عائلي لإستانبول بسعر واضح من البداية، بدون مفاجآت.", name: "خالد ب.", city: "مصراتة" },
];

const cardStyle: React.CSSProperties = {
  padding: 32,
  borderRadius: 22,
  background: "linear-gradient(160deg,#181818,#0e0e0e)",
  border: "1px solid rgba(255,255,255,0.08)",
  transition: "transform .25s, border-color .25s",
};

const iconBoxStyle: React.CSSProperties = {
  width: 46,
  height: 46,
  borderRadius: 13,
  background: "rgba(224,185,111,0.16)",
  border: "1px solid rgba(224,185,111,0.4)",
  display: "grid",
  placeItems: "center",
};

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-tajawal)" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          padding: "14px clamp(20px,4vw,56px)",
          background: "rgba(0,0,0,0.82)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(224,185,111,0.16)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              lineHeight: 1.05,
              direction: "ltr",
            }}
          >
            <span
              style={{
                fontFamily: "Georgia,'Times New Roman',serif",
                fontWeight: 700,
                fontSize: 28,
                letterSpacing: 5,
                background: "linear-gradient(100deg,#f4dba6,#c39a4c)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              ZIGO
            </span>
            <span style={{ fontSize: 10, letterSpacing: 4.5, color: "#a3a3a3", marginTop: 5 }}>
              TRAVEL &amp; TOURISM
            </span>
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(14px,2vw,30px)",
            fontSize: 16,
            fontWeight: 500,
            color: "#d6d6d6",
            flexWrap: "wrap",
          }}
        >
          <a href="#services" className="nav-link">الخدمات</a>
          <a href="#appointments" className="nav-link">مواعيد السفارات</a>
          <a href="#visa" className="nav-link">التأشيرات</a>
          <a href="#how" className="nav-link">كيف نعمل</a>
          <a href="#contact-form" className="nav-link">تواصل معنا</a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontFamily: "var(--font-cairo)", fontSize: 15, color: "#e0b96f", direction: "ltr", wordSpacing: 6 }}>
            091 51 014 51
          </span>
          <a
            href="#contact-form"
            className="hover-bright"
            style={{
              padding: "11px 24px",
              borderRadius: 999,
              background: "linear-gradient(120deg,#f0d49a,#c39a4c)",
              color: "#0a0a0a",
              fontFamily: "var(--font-cairo)",
              fontWeight: 800,
              fontSize: 15,
              boxShadow: "0 8px 24px rgba(224,185,111,0.25)",
            }}
          >
            ابدأ ملفك
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "min(88vh,860px)",
          display: "flex",
          alignItems: "center",
          padding: "clamp(56px,7vw,110px) clamp(20px,4vw,56px)",
        }}
      >
        <Image
          src="/assets/hero-sky2.png"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", opacity: 0.5 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(270deg,rgba(0,0,0,0.97) 20%,rgba(0,0,0,0.72) 55%,rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg,#0a0a0a 2%,rgba(0,0,0,0) 45%)",
          }}
        />
        <div className="animate-float-up" style={{ position: "relative", width: "100%", maxWidth: 1440, margin: "0 auto" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 20px",
              borderRadius: 999,
              border: "1px solid rgba(224,185,111,0.45)",
              background: "rgba(224,185,111,0.1)",
              color: "#f0d49a",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            وكالة سفر متكاملة · نعمل 24/7
          </span>
          <h1
            style={{
              fontFamily: "var(--font-cairo)",
              fontWeight: 900,
              fontSize: "clamp(40px,6vw,86px)",
              lineHeight: 1.35,
              margin: "26px 0 0",
              maxWidth: "16ch",
              textWrap: "balance",
              textShadow: "0 6px 40px rgba(0,0,0,0.5)",
            }}
          >
            مكان واحد لتنظيم{" "}
            <span
              style={{
                background: "linear-gradient(100deg,#f4dba6,#c39a4c)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              رحلتك الدولية
            </span>{" "}
            كاملة
          </h1>
          <p style={{ fontSize: "clamp(18px,1.6vw,24px)", lineHeight: 1.65, color: "#ececec", margin: "22px 0 0", maxWidth: 620 }}>
            من تجهيز ملف التأشيرة وحجز موعد السفارة، إلى تذكرة الطيران والفندق والبرنامج السياحي — نتابع معك كل خطوة حتى العودة.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cairo)",
              fontWeight: 700,
              fontSize: "clamp(19px,1.7vw,26px)",
              color: "#e0b96f",
              margin: "20px 0 0",
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "var(--font-cairo)", fontWeight: 900, letterSpacing: 0.5 }}>
              <span style={{ direction: "ltr" }}>ZIGO</span>
              <PlaneIcon />
            </span>
            <span>معكم تحت أي سماء وفوق أي أرض</span>
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
            <a
              href="#contact-form"
              className="hover-lift-sm"
              style={{
                padding: "18px 40px",
                borderRadius: 14,
                background: "linear-gradient(120deg,#f0d49a,#c39a4c)",
                color: "#0a0a0a",
                fontFamily: "var(--font-cairo)",
                fontWeight: 800,
                fontSize: 19,
                boxShadow: "0 16px 40px rgba(224,185,111,0.28)",
                transition: "transform .2s",
              }}
            >
              خطّط رحلتك الآن
            </a>
            <a
              href="#appointments"
              className="hover-bg-light"
              style={{
                padding: "18px 40px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.28)",
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(8px)",
                color: "#ffffff",
                fontFamily: "var(--font-cairo)",
                fontWeight: 700,
                fontSize: 19,
                transition: "background .2s",
              }}
            >
              اطلب موعد سفارة
            </a>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginTop: 48, color: "#c8cfe4", fontSize: 16, fontFamily: "var(--font-cairo)" }}>
            {["التأشيرة", "موعد السفارة", "المستندات", "الطيران", "الفندق"].map((label) => (
              <React.Fragment key={label}>
                <span
                  style={{
                    padding: "10px 18px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {label}
                </span>
                <span style={{ color: "#e0b96f" }}>←</span>
              </React.Fragment>
            ))}
            <span
              style={{
                padding: "10px 18px",
                borderRadius: 12,
                background: "linear-gradient(120deg,rgba(240,212,154,0.24),rgba(195,154,76,0.18))",
                border: "1px solid rgba(224,185,111,0.5)",
                color: "#f4dba6",
              }}
            >
              الرحلة
            </span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ padding: "0 clamp(20px,4vw,56px)" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "-40px auto 0",
            position: "relative",
            zIndex: 5,
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            background: "rgba(224,185,111,0.18)",
            border: "1px solid rgba(224,185,111,0.25)",
            borderRadius: 22,
            overflow: "hidden",
            boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#131313", padding: "26px 30px", flex: "1 1 180px" }}>
              <div style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: 32, color: "#e0b96f" }}>{s.value}</div>
              <div style={{ color: "#a3a3a3", fontSize: 15, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
          <div style={{ background: "#131313", padding: "26px 30px", flex: "1 1 100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 9, height: 9, borderRadius: 999, background: "#5ad18a", boxShadow: "0 0 0 4px rgba(90,209,138,0.18)" }} />
              <VisitorCounter />
            </div>
            <div style={{ color: "#a3a3a3", fontSize: 15 }}>زائر للموقع منذ الإطلاق</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: "clamp(72px,8vw,120px) clamp(20px,4vw,56px) 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <span style={{ color: "#e0b96f", fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>خدماتنا</span>
          <h2 style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: "clamp(32px,3.6vw,50px)", margin: "10px 0 12px", textWrap: "balance" }}>
            كل ما تحتاجه للسفر، تحت سقف واحد
          </h2>
          <p style={{ color: "#a3a3a3", fontSize: 19, margin: "0 0 44px", maxWidth: 640 }}>
            لا تتنقل بين مكاتب ووسطاء — نبدأ من التأشيرة وننتهي عند باب فندقك.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 20 }}>
            {services.map((s) =>
              s.highlight ? (
                <div
                  key={s.title}
                  className="hover-lift"
                  style={{
                    padding: 32,
                    borderRadius: 22,
                    background: "linear-gradient(150deg,#20190c,#121212)",
                    border: "1px solid rgba(224,185,111,0.45)",
                    transition: "transform .25s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ ...iconBoxStyle, background: "rgba(224,185,111,0.24)", border: "1px solid rgba(224,185,111,0.55)" }}>{s.icon}</div>
                    <span
                      style={{
                        fontSize: 13,
                        fontWeight: 800,
                        color: "#0a0a0a",
                        background: "linear-gradient(120deg,#f4dba6,#c39a4c)",
                        padding: "6px 14px",
                        borderRadius: 999,
                      }}
                    >
                      {s.badge}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-cairo)", fontSize: 24, margin: "22px 0 10px" }}>{s.title}</h3>
                  <p style={{ color: "#e2e2e2", fontSize: 17, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>
              ) : (
                <div key={s.title} className="hover-card" style={cardStyle}>
                  <div style={iconBoxStyle}>{s.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-cairo)", fontSize: 24, margin: "22px 0 10px" }}>{s.title}</h3>
                  <p style={{ color: "#b3b3b3", fontSize: 17, lineHeight: 1.75, margin: 0 }}>{s.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Appointments */}
      <section id="appointments" style={{ padding: "clamp(72px,8vw,120px) clamp(20px,4vw,56px) 0" }}>
        <div style={{ position: "relative", maxWidth: 1440, margin: "0 auto", border: "1px solid rgba(224,185,111,0.32)", borderRadius: 28, overflow: "hidden" }}>
          <Image src="/assets/sky-band.png" alt="" fill style={{ objectFit: "cover", opacity: 0.35 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(250deg,rgba(0,0,0,0.96),rgba(20,20,20,0.86))" }} />
          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
              gap: 36,
              alignItems: "center",
              padding: "clamp(30px,4vw,56px)",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "7px 18px",
                  borderRadius: 999,
                  background: "rgba(224,185,111,0.18)",
                  border: "1px solid rgba(224,185,111,0.45)",
                  color: "#f4dba6",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                خدمة سريعة
              </span>
              <h2 style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: "clamp(30px,3.4vw,46px)", margin: "18px 0 14px", textWrap: "balance" }}>
                مواعيد السفارات ومراكز التأشيرات
              </h2>
              <p style={{ color: "#e2e2e2", fontSize: 19, lineHeight: 1.75, margin: "0 0 28px", maxWidth: 560 }}>
                أخبرنا بالدولة ونوع التأشيرة، ونتولى البحث عن أقرب موعد متاح وحجزه نيابة عنك.
              </p>
              <a
                href="#contact-form"
                className="hover-lift-sm"
                style={{
                  display: "inline-block",
                  padding: "17px 38px",
                  borderRadius: 14,
                  background: "linear-gradient(120deg,#f0d49a,#c39a4c)",
                  color: "#0a0a0a",
                  fontFamily: "var(--font-cairo)",
                  fontWeight: 800,
                  fontSize: 18,
                  boxShadow: "0 14px 34px rgba(224,185,111,0.25)",
                  transition: "transform .2s",
                }}
              >
                تواصل معنا لطلب موعد
              </a>
            </div>
            <div
              style={{
                display: "grid",
                gap: 14,
                background: "rgba(0,0,0,0.62)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 20,
                padding: 30,
              }}
            >
              <span style={{ fontFamily: "var(--font-cairo)", fontWeight: 800, fontSize: 20 }}>تشمل الخدمة</span>
              <div style={{ display: "grid", gap: 14, color: "#e2e2e2", fontSize: 17, lineHeight: 1.7 }}>
                {[
                  "متابعة المواعيد المتاحة لدى السفارات ومراكز التأشيرات",
                  "حجز الموعد نيابة عنك وتأكيده عبر الهاتف أو واتساب",
                  "مراجعة المستندات المطلوبة قبل موعد التقديم",
                  "تذكيرك بالموعد ومرافقتك في خطوات التقديم",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 12 }}>
                    <span style={{ color: "#e0b96f" }}>•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ margin: "6px 0 0", color: "#8c8c8c", fontSize: 14, lineHeight: 1.6 }}>
                نساعدك في تجهيز الملف وترتيب الموعد. قرار منح التأشيرة يعود للسفارة وحدها.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section id="how" style={{ padding: "clamp(72px,8vw,120px) clamp(20px,4vw,56px) 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <span style={{ color: "#e0b96f", fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>كيف نعمل</span>
          <h2 style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: "clamp(32px,3.6vw,50px)", margin: "10px 0 12px" }}>
            خمس خطوات من الفكرة حتى الإقلاع
          </h2>
          <p style={{ color: "#a3a3a3", fontSize: 19, margin: "0 0 44px" }}>تعرف في كل لحظة أين وصل ملفك ومن يتابعه.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 18 }}>
            {steps.map((s) => (
              <div
                key={s.n}
                style={{
                  position: "relative",
                  padding: 30,
                  borderRadius: 20,
                  background: s.highlight ? "linear-gradient(150deg,#20190c,#121212)" : "#151515",
                  border: s.highlight ? "1px solid rgba(224,185,111,0.4)" : "1px solid rgba(255,255,255,0.07)",
                  overflow: "hidden",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: -14,
                    left: 14,
                    fontFamily: "var(--font-cairo)",
                    fontWeight: 900,
                    fontSize: 84,
                    color: s.highlight ? "rgba(224,185,111,0.16)" : "rgba(224,185,111,0.1)",
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </span>
                <h3 style={{ fontFamily: "var(--font-cairo)", fontSize: 21, margin: "0 0 8px", position: "relative" }}>{s.title}</h3>
                <p style={{ margin: 0, color: s.highlight ? "#e2e2e2" : "#b3b3b3", fontSize: 16, lineHeight: 1.7, position: "relative" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa destinations */}
      <section id="visa" style={{ padding: "clamp(72px,8vw,120px) clamp(20px,4vw,56px) 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 40 }}>
            <div>
              <span style={{ color: "#e0b96f", fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>الوجهات</span>
              <h2 style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: "clamp(32px,3.6vw,50px)", margin: "10px 0 10px" }}>
                وجهات نجهّز تأشيراتها
              </h2>
              <p style={{ color: "#a3a3a3", fontSize: 19, margin: 0 }}>شنغن، المملكة المتحدة، وأكثر من 40 دولة حول العالم.</p>
            </div>
            <a href="#contact-form" style={{ fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 17 }}>
              اسأل عن دولتك ←
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 18 }}>
            {destinations.map((d) => (
              <div
                key={d.name}
                className="hover-lift"
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  border: "1px solid rgba(224,185,111,0.32)",
                  aspectRatio: "5/4",
                  background: "#0b0b0b",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: 24,
                  transition: "transform .25s",
                }}
              >
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(0deg,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.15) 55%,rgba(0,0,0,0.35) 100%)",
                  }}
                />
                <PlaneIcon size={34} style={{ position: "absolute", top: 22, right: 22, opacity: 0.9 }} />
                <h3 style={{ fontFamily: "var(--font-cairo)", fontSize: 24, margin: "0 0 6px", position: "relative" }}>{d.name}</h3>
                <span style={{ color: "#b3b3b3", fontSize: 15, position: "relative" }}>{d.tag}</span>
              </div>
            ))}
            <div style={{ display: "grid", gap: 12, alignContent: "center", padding: 26, borderRadius: 20, background: "#151515", border: "1px solid rgba(255,255,255,0.07)" }}>
              {moreDestinations.map((d, i) => (
                <div
                  key={d.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: i < moreDestinations.length - 1 ? 12 : 0,
                    borderBottom: i < moreDestinations.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 18 }}>{d.name}</span>
                  <span style={{ color: "#a3a3a3", fontSize: 15 }}>{d.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why ZIGO */}
      <section style={{ padding: "clamp(72px,8vw,120px) clamp(20px,4vw,56px) 0" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(28px,4vw,56px)",
            alignItems: "center",
            background: "linear-gradient(120deg,#161616,#0e0e0e)",
            border: "1px solid rgba(224,185,111,0.22)",
            borderRadius: 28,
            padding: "clamp(28px,3.5vw,52px)",
          }}
        >
          <div>
            <span style={{ color: "#e0b96f", fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>لماذا ZIGO</span>
            <h2 style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: "clamp(30px,3.4vw,46px)", margin: "10px 0 0" }}>
              وكيل واحد يتحمّل المسؤولية
            </h2>
            <div style={{ display: "grid", gap: 24, marginTop: 30 }}>
              {whyUs.map((w) => (
                <div key={w.title} style={{ display: "flex", gap: 16 }}>
                  <div style={{ width: 10, height: 10, borderRadius: 3, background: "#e0b96f", marginTop: 10, flex: "none" }} />
                  <div>
                    <h3 style={{ fontFamily: "var(--font-cairo)", fontSize: 21, margin: "0 0 6px" }}>{w.title}</h3>
                    <p style={{ margin: 0, color: "#c4c4c4", fontSize: 18, lineHeight: 1.7 }}>{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "1/1", minHeight: 260, borderRadius: 22, overflow: "hidden", background: "#101010", border: "1px solid rgba(255,255,255,0.08)" }}>
            <Image src="/assets/zigo-pass.png" alt="بطاقة ZIGO Travel Pass" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: "clamp(72px,8vw,120px) clamp(20px,4vw,56px) 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <span style={{ color: "#e0b96f", fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>آراء العملاء</span>
          <h2 style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: "clamp(32px,3.6vw,50px)", margin: "10px 0 40px" }}>
            تجارب مسافرين معنا
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 20 }}>
            {testimonials.map((t) => (
              <div key={t.name} style={{ padding: 32, borderRadius: 22, background: "#151515", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ color: "#e0b96f", fontSize: 17, letterSpacing: 4, marginBottom: 14 }}>★★★★★</div>
                <p style={{ margin: "0 0 20px", fontSize: 18, lineHeight: 1.85, color: "#ececec" }}>{t.text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 999, background: "rgba(224,185,111,0.16)", border: "1px solid rgba(224,185,111,0.35)", display: "grid", placeItems: "center" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="3.4" />
                      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-cairo)", fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: "#a3a3a3", fontSize: 14 }}>{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-form" style={{ padding: "clamp(72px,8vw,120px) clamp(20px,4vw,56px) 0" }}>
        <div
          style={{
            maxWidth: 1440,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "clamp(28px,4vw,48px)",
            alignItems: "start",
          }}
        >
          <div>
            <span style={{ color: "#e0b96f", fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>تواصل معنا</span>
            <h2 style={{ fontFamily: "var(--font-cairo)", fontWeight: 900, fontSize: "clamp(32px,3.6vw,50px)", margin: "10px 0 12px" }}>
              أخبرنا بوجهتك ونبدأ الترتيب
            </h2>
            <p style={{ color: "#a3a3a3", fontSize: 19, margin: "0 0 32px", maxWidth: 520 }}>
              اتصل بنا أو أرسل طلبك ونرد عليك خلال ساعات العمل، ونحن متاحون على مدار الساعة عبر واتساب.
            </p>
            <div style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "center", padding: 22, borderRadius: 18, background: "#151515", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(224,185,111,0.16)", border: "1px solid rgba(224,185,111,0.4)", flex: "none", display: "grid", placeItems: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#a3a3a3", fontSize: 14 }}>الهاتف وواتساب</div>
                  <div style={{ direction: "ltr", fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 19, color: "#ffffff", display: "flex", flexDirection: "column", gap: 6, wordSpacing: 10 }}>
                    <span>091 51 014 51</span>
                    <span>094 51 014 51</span>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center", padding: 22, borderRadius: 18, background: "#151515", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(224,185,111,0.16)", border: "1px solid rgba(224,185,111,0.4)", flex: "none", display: "grid", placeItems: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#a3a3a3", fontSize: 14 }}>المكتب الرئيسي</div>
                  <div style={{ fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 19 }}>طرابلس — ليبيا</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center", padding: 22, borderRadius: 18, background: "#151515", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ width: 44, height: 44, borderRadius: 13, background: "rgba(224,185,111,0.16)", border: "1px solid rgba(224,185,111,0.4)", flex: "none", display: "grid", placeItems: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#a3a3a3", fontSize: 14 }}>أوقات العمل</div>
                  <div style={{ fontFamily: "var(--font-cairo)", fontWeight: 700, fontSize: 19, display: "flex", flexDirection: "column", gap: 4 }}>
                    <span>من السبت إلى الخميس</span>
                    <span>من 9 صباحاً إلى 10 مساءً</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/218915101451"
        className="hover-bright"
        style={{
          position: "fixed",
          left: 24,
          bottom: 24,
          zIndex: 70,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "14px 22px",
          borderRadius: 999,
          background: "#1fab54",
          color: "#fff",
          fontFamily: "var(--font-cairo)",
          fontWeight: 800,
          fontSize: 17,
          boxShadow: "0 16px 40px rgba(31,171,84,0.35)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.7-4.3A8.5 8.5 0 1 1 20.5 11.5z" />
          <path d="M9 9.2c0 3 2.8 5.8 5.8 5.8" />
        </svg>
        <span>راسلنا على واتساب</span>
      </a>

      {/* Footer */}
      <footer
        style={{
          marginTop: "clamp(56px,7vw,96px)",
          padding: "40px clamp(20px,4vw,56px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          color: "#8c8c8c",
          fontSize: 15,
        }}
      >
        <span>ZIGO للسفر والسياحة — المكتب الرئيسي، طرابلس</span>
        <span style={{ direction: "ltr", fontFamily: "var(--font-cairo)", color: "#d6d6d6", wordSpacing: 8 }}>
          091 51 014 51 · 094 51 014 51
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="https://www.facebook.com/share/1EPNADeizY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover-bg-gold" style={socialIconStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#e0b96f">
              <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.6-1.5H16.6V4.4A21 21 0 0 0 14.3 4.3c-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/zigo.travel?igsi=MTU4bTBmZXYxb3hwZg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover-bg-gold" style={socialIconStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.8">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1.1" fill="#e0b96f" stroke="none" />
            </svg>
          </a>
          <a href="https://www.tiktok.com/@zigo.travel?_r=1&_t=ZS-996HPppdkCG" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover-bg-gold" style={socialIconStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#e0b96f">
              <path d="M14.2 3h2.6a5.3 5.3 0 0 0 4 4.1v2.6a7.9 7.9 0 0 1-4-1.2v5.9a5.9 5.9 0 1 1-5.1-5.8v2.7a3.2 3.2 0 1 0 2.5 3.1z" />
            </svg>
          </a>
          <a href="https://wa.me/218915101451" aria-label="WhatsApp" className="hover-bg-gold" style={socialIconStyle}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.7-4.3A8.5 8.5 0 1 1 20.5 11.5z" />
              <path d="M9 9.2c0 3 2.8 5.8 5.8 5.8" />
            </svg>
          </a>
        </div>
        <span style={{ width: "100%", fontSize: 13, color: "#7a7a7a", lineHeight: 1.7 }}>
          جميع الصور من مواد ZIGO للسفر والسياحة.
        </span>
      </footer>
    </div>
  );
}

const socialIconStyle: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 12,
  border: "1px solid rgba(224,185,111,0.35)",
  background: "rgba(224,185,111,0.08)",
  display: "grid",
  placeItems: "center",
};
