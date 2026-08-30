// paper: YG-0
// name: otsus-timeline
export default function Slide() {
  return (
    <div style={{ backgroundColor: 'var(--color-ground)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', fontFamily: 'var(--font-body)', fontSize: '12px', fontSynthesis: 'none', height: '1080px', lineHeight: '16px', MozOsxFontSmoothing: 'grayscale', overflow: 'clip', overflowWrap: 'anywhere', paddingBottom: '56px', paddingInline: '96px', paddingTop: '72px', WebkitFontSmoothing: 'antialiased', width: '1920px' }}>
      <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', flexShrink: '0', height: '24px', justifyContent: 'space-between', width: '100%' }}>
        <div style={{ alignItems: 'center', boxSizing: 'border-box', display: 'flex', gap: '12px' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <path d="M12.5 2.2A7.2 7.2 0 1 0 12.5 15.8 5.6 5.6 0 1 1 12.5 2.2Z" fill="var(--color-red)" />
            <path d="M14.6 6.6l.7 1.5 1.6.2-1.2 1.1.3 1.6-1.4-.8-1.4.8.3-1.6-1.2-1.1 1.6-.2z" fill="var(--color-ink)" />
          </svg>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', lineHeight: '18px' }}>
            05 · OTSUS AND THE 2027 CLIFF
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', lineHeight: '18px' }}>
          S05-01
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '14px', paddingTop: '40px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '50px', width: '1400px' }}>
          Otsus has delivered Rp104 trillion since 2008, but the formula halved in 2023 and the law ends it entirely after 2027.
        </div>
        <div style={{ backgroundColor: 'var(--color-red)', boxSizing: 'border-box', flexShrink: '0', height: '4px', width: '72px' }} />
        <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '22px', lineHeight: '30px', width: '1300px' }}>
          Dana Otsus Aceh as a share of national DAU, 2008–2027, with annual allocations 2025–2027 in Rp trillion.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexGrow: '1', gap: '48px', paddingTop: '48px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '12px', width: '1080px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
            DANA OTSUS ACEH — SHARE OF NATIONAL DAU (TOP) AND ALLOCATION, RP TRILLION (BOTTOM)
          </div>
          <svg width="1080" height="470" viewBox="0 0 1080 470" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: '0' }}>
            <line x1="60" y1="60" x2="1020" y2="60" stroke="var(--color-line)" />
            <line x1="60" y1="130" x2="1020" y2="130" stroke="var(--color-line)" />
            <line x1="60" y1="200" x2="1020" y2="200" stroke="var(--color-stripe)" strokeWidth="1.5" />
            <text x="50" y="64" fontFamily="JetBrains Mono" fontSize="13" textAnchor="end" fill="#6B6B6B">
              2%
            </text>
            <text x="50" y="134" fontFamily="JetBrains Mono" fontSize="13" textAnchor="end" fill="#6B6B6B">
              1%
            </text>
            <text x="50" y="204" fontFamily="JetBrains Mono" fontSize="13" textAnchor="end" fill="#6B6B6B">
              0
            </text>
            <path d="M 60 60 H 780 V 130 H 1020" fill="none" stroke="var(--color-stripe)" strokeWidth="4" />
            <path d="M 1020 130 V 200" fill="none" stroke="var(--color-red)" strokeWidth="4" strokeDasharray="6 5" />
            <text x="420" y="48" fontFamily="Inter" fontSize="15" fontWeight="600" textAnchor="middle" fill="#0B0B0B">
              2% of DAU · years 1–15 (2008–2022)
            </text>
            <text x="900" y="118" fontFamily="Inter" fontSize="15" fontWeight="600" textAnchor="middle" fill="#0B0B0B">
              1% · years 16–20 (2023–2027)
            </text>
            <line x1="1020" y1="40" x2="1020" y2="430" stroke="var(--color-red)" strokeWidth="2" strokeDasharray="8 6" />
            <text x="1012" y="240" fontFamily="JetBrains Mono" fontSize="13" textAnchor="end" fill="#D42127">
              2028: nothing in law
            </text>
            <line x1="60" y1="420" x2="1020" y2="420" stroke="var(--color-stripe)" strokeWidth="1.5" />
            <rect x="854" y="282" width="40" height="138" fill="var(--color-stripe)" />
            <rect x="902" y="292" width="40" height="128" fill="var(--color-stripe)" />
            <rect x="950" y="287" width="40" height="133" fill="var(--color-red)" />
            <text x="874" y="272" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#0B0B0B">
              4.31
            </text>
            <text x="922" y="282" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#0B0B0B">
              4.00
            </text>
            <text x="970" y="277" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#D42127">
              4.15
            </text>
            <text x="874" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#6B6B6B">
              2025
            </text>
            <text x="922" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#6B6B6B">
              2026
            </text>
            <text x="970" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#6B6B6B">
              2027
            </text>
            <text x="1020" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#D42127">
              2028
            </text>
            <text x="60" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#6B6B6B">
              2008
            </text>
            <text x="300" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#6B6B6B">
              2013
            </text>
            <text x="540" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#6B6B6B">
              2018
            </text>
            <text x="780" y="440" fontFamily="JetBrains Mono" fontSize="13" textAnchor="middle" fill="#6B6B6B">
              2023
            </text>
            <text x="60" y="300" fontFamily="JetBrains Mono" fontSize="12" fill="#6B6B6B">
              RP TRILLION / YEAR
            </text>
            <text x="60" y="320" fontFamily="Inter" fontSize="15" fill="#0B0B0B">
              2025 KMK 29/2025 · 2026 UU 17/2025 · 2027 RAPBN
            </text>
            <text x="60" y="342" fontFamily="Inter" fontSize="15" fill="#0B0B0B">
              Cumulative 2008–2024: Rp104.23 trillion
            </text>
            <text x="60" y="464" fontFamily="JetBrains Mono" fontSize="12" fill="#6B6B6B">
              Bars: annual allocation. Step line: statutory share of DAU under Art 183.
            </text>
          </svg>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexGrow: '1', gap: '20px' }}>
          <div style={{ backgroundImage: 'url(https://app.paper.design/file-assets/01M18KDSJEN0TCH6K0JPSPVCA8/3AQYC7TBP35HGM5DRGPPKDQ16S.png)', backgroundPosition: '50%', backgroundSize: 'cover', borderRadius: '4px', boxSizing: 'border-box', flexShrink: '0', height: '230px', width: '100%' }} />
          <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', fontFamily: '"Fraunces", system-ui, sans-serif', fontSize: '84px', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: '88px' }}>
              Rp104T
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', fontFamily: '"Inter-Regular", "Inter", system-ui, sans-serif', fontSize: '16px', lineHeight: '24px' }}>
              Cumulative Otsus transferred 2008–2024 (Rp104.23 trillion, Kemenko Polkam). The 2027 tranche is the last the law provides.
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-tint)', borderRadius: '4px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '8px', paddingBlock: '20px', paddingInline: '24px', width: '100%' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-red)', fontFamily: '"JetBrains Mono", system-ui, sans-serif', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
              SO WHAT
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', fontFamily: '"Inter-Medium", "Inter", system-ui, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: '28px' }}>
              Rp4 trillion a year is nearly seven times the province's entire 2026 capital budget (Rp576B). Losing it in 2028 is a fiscal cliff, not a trim — the bill in DPR is the only bridge.
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignItems: 'flex-end', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', justifyContent: 'space-between', paddingTop: '24px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, lineHeight: '18px', width: '1400px' }}>
          Source: UU 11/2006 Art 183; KMK 29/2025; UU 17/2025; RAPBN 2027 via CNN, 20 Aug 2026; Kemenko Polkam via Kompas, 18 Jun 2026. [223][224][225][226][227][252] Image: generated
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '18px' }}>
          Aceh 2045 · Production Autonomy
        </div>
      </div>
    </div>
  );
}
