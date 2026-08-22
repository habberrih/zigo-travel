"use client";

import { useState } from "react";
import PassportUpload from "@/components/PassportUpload";

type Status = "idle" | "submitting" | "success" | "error" | "too-fast";

// Minimum time (ms) a real person needs to fill the form. Submissions faster
// than this are almost certainly bots — blocking them client-side keeps the
// form's traffic pattern looking human to Basin's spam classifier.
const MIN_FILL_TIME_MS = 3000;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mountedAt, setMountedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (Date.now() - mountedAt < MIN_FILL_TIME_MS) {
      setStatus("too-fast");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        setMountedAt(Date.now());
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          background: "linear-gradient(140deg,#1a1a1a,#0e0e0e)",
          border: "1px solid rgba(224,185,111,0.32)",
          borderRadius: 24,
          padding: "clamp(24px,3vw,38px)",
          display: "grid",
          gap: 14,
          justifyItems: "center",
          textAlign: "center",
          boxShadow: "0 30px 70px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 999,
            background: "rgba(90,209,138,0.16)",
            border: "1px solid rgba(90,209,138,0.45)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5ad18a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "var(--font-cairo)", fontWeight: 800, fontSize: 22, margin: 0 }}>
          تم إرسال طلبك بنجاح
        </h3>
        <p style={{ margin: 0, color: "#b3b3b3", fontSize: 16, lineHeight: 1.7, maxWidth: 360 }}>
          استلمنا بياناتك وسنتواصل معك خلال ساعات العمل، ونحن متاحون على مدار الساعة عبر واتساب.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="hover-bg-light"
          style={{
            marginTop: 6,
            padding: "12px 26px",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(255,255,255,0.06)",
            color: "#ffffff",
            fontFamily: "var(--font-cairo)",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          إرسال طلب آخر
        </button>
      </div>
    );
  }

  return (
    <form
      action={`https://usebasin.com/f/${process.env.NEXT_PUBLIC_BASIN_FORM_ID || "YOUR-BASIN-FORM-ID"}`}
      method="POST"
      encType="multipart/form-data"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      style={{
        background: "linear-gradient(140deg,#1a1a1a,#0e0e0e)",
        border: "1px solid rgba(224,185,111,0.32)",
        borderRadius: 24,
        padding: "clamp(24px,3vw,38px)",
        display: "grid",
        gap: 16,
        boxShadow: "0 30px 70px rgba(0,0,0,0.4)",
      }}
    >
      {/* Honeypot: real users never see or fill this; bots that auto-fill every
          field trip it and Basin silently discards the submission as spam. */}
      <div style={honeypotWrapperStyle} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input type="text" id="company" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      <h3 style={{ fontFamily: "var(--font-cairo)", fontWeight: 800, fontSize: 25, margin: 0 }}>أرسل طلبك</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 14, color: "#a3a3a3" }}>الاسم الكامل</span>
          <input type="text" name="name" required autoComplete="name" placeholder="مثال: أحمد المبروك" style={inputStyle} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 14, color: "#a3a3a3" }}>رقم الهاتف</span>
          <input type="tel" name="phone" required autoComplete="tel" placeholder="091 000 0000" style={{ ...inputStyle, direction: "ltr", textAlign: "right" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 14, color: "#a3a3a3" }}>نوع الخدمة</span>
          <select name="service" style={selectStyle}>
            <option style={optionStyle}>تأشيرة وموعد سفارة</option>
            <option style={optionStyle}>حجز مبدئي</option>
            <option style={optionStyle}>تذاكر طيران</option>
            <option style={optionStyle}>فنادق وإقامة</option>
            <option style={optionStyle}>رحلة سياحية</option>
            <option style={optionStyle}>رحلة علاج</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 14, color: "#a3a3a3" }}>الوجهة</span>
          <input type="text" name="destination" placeholder="مثال: إيطاليا" style={{ ...inputStyle, fontFamily: "var(--font-cairo)", fontWeight: 700 }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontSize: 14, color: "#a3a3a3" }}>تفاصيل إضافية</span>
        <textarea
          name="message"
          rows={3}
          placeholder="اكتب موعد سفرك المتوقع، عدد المسافرين، وأي ملاحظات."
          style={{ ...inputStyle, minHeight: 96, lineHeight: 1.7, resize: "vertical" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span style={{ fontSize: 14, color: "#a3a3a3" }}>إرفاق صورة جواز السفر</span>
        <PassportUpload />
      </div>

      {status === "error" && (
        <p style={{ margin: 0, color: "#e0857a", fontSize: 15, fontFamily: "var(--font-cairo)", fontWeight: 700 }}>
          تعذّر إرسال الطلب. تحقق من اتصالك بالإنترنت وحاول مرة أخرى، أو راسلنا مباشرة على واتساب.
        </p>
      )}

      {status === "too-fast" && (
        <p style={{ margin: 0, color: "#f0d49a", fontSize: 15, fontFamily: "var(--font-cairo)", fontWeight: 700 }}>
          تأكد من تعبئة البيانات ثم أعد الضغط على إرسال الطلب.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="hover-bright-sm"
        style={{
          padding: 17,
          border: 0,
          borderRadius: 13,
          background: "linear-gradient(120deg,#f0d49a,#c39a4c)",
          color: "#0a0a0a",
          fontFamily: "var(--font-cairo)",
          fontWeight: 800,
          fontSize: 18,
          cursor: status === "submitting" ? "not-allowed" : "pointer",
          opacity: status === "submitting" ? 0.7 : 1,
          boxShadow: "0 14px 34px rgba(224,185,111,0.25)",
        }}
      >
        {status === "submitting" ? "جارٍ الإرسال..." : "إرسال الطلب"}
      </button>
      <p style={{ margin: 0, color: "#8c8c8c", fontSize: 14 }}>نرد عادة خلال 24 ساعة عمل.</p>
    </form>
  );
}

const inputStyle: React.CSSProperties = {
  padding: "15px 16px",
  borderRadius: 12,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.09)",
  color: "#ffffff",
  fontFamily: "var(--font-tajawal)",
  fontSize: 17,
  outline: "none",
  width: "100%",
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  fontFamily: "var(--font-cairo)",
  fontWeight: 600,
  fontSize: 15,
  color: "#ffffff",
  backgroundColor: "#1a1a1a",
  appearance: "none",
  WebkitAppearance: "none",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  paddingInlineEnd: 40,
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23e0b96f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left 14px center",
};

const optionStyle: React.CSSProperties = {
  backgroundColor: "#1a1a1a",
  color: "#ffffff",
};

const honeypotWrapperStyle: React.CSSProperties = {
  position: "absolute",
  width: 1,
  height: 1,
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  whiteSpace: "nowrap",
};
