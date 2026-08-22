"use client";

import { useId, useState } from "react";

export default function PassportUpload() {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputId = useId();

  return (
    <label
      htmlFor={inputId}
      style={{
        padding: 22,
        borderRadius: 14,
        border: fileName ? "1px solid rgba(224,185,111,0.6)" : "1px dashed rgba(224,185,111,0.45)",
        background: "rgba(224,185,111,0.07)",
        display: "flex",
        alignItems: "center",
        gap: 14,
        flexWrap: "wrap",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 11,
          background: "rgba(224,185,111,0.18)",
          border: "1px solid rgba(224,185,111,0.42)",
          flex: "none",
          display: "grid",
          placeItems: "center",
        }}
      >
        {fileName ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e0b96f" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16V6M8 10l4-4 4 4" />
            <path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
          </svg>
        )}
      </div>
      <div style={{ flex: 1, minWidth: 180 }}>
        <div
          style={{
            fontFamily: "var(--font-cairo)",
            fontWeight: 700,
            fontSize: 17,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {fileName || "اضغط لاختيار صورة جواز السفر"}
        </div>
        <div style={{ color: "#8c8c8c", fontSize: 14, marginTop: 4 }}>
          {fileName ? "تم اختيار الملف بنجاح" : "صفحة البيانات من جواز السفر — PDF أو JPG حتى 5 ميغابايت."}
        </div>
      </div>
      <span
        style={{
          padding: "11px 22px",
          borderRadius: 11,
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.14)",
          fontFamily: "var(--font-cairo)",
          fontWeight: 700,
          fontSize: 15,
          flex: "none",
        }}
      >
        {fileName ? "تغيير الملف" : "اختر الملف"}
      </span>
      <input
        id={inputId}
        type="file"
        name="passport"
        accept="image/*,.pdf"
        style={{ display: "none" }}
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
      />
    </label>
  );
}
