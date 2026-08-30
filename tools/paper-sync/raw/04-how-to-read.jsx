// paper: 6D-0
// name: how-to-read
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
            00 · FRONT
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', lineHeight: '18px' }}>
          S00-04
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '14px', paddingTop: '40px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '44px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '50px', width: '1400px' }}>
          Every slide states a finding in its title, carries a dated source, and uses only numbers we could verify.
        </div>
        <div style={{ backgroundColor: 'var(--color-red)', boxSizing: 'border-box', flexShrink: '0', height: '4px', width: '72px' }} />
        <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '22px', lineHeight: '30px', width: '1300px' }}>
          How to read this deck: conventions for titles, charts, status colours, numbers and legal citations.
        </div>
      </div>
      <div style={{ boxSizing: 'border-box', display: 'flex', flexGrow: '1', gap: '48px', paddingTop: '48px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '28px', width: '840px' }}>
          <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '20px' }}>
            <div style={{ boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-mono)', paddingTop: '6px', width: '120px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-red)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
                TITLES
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '36px' }}>
                Action titles are findings.
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: '28px' }}>
                Read only the titles and you have the argument. The subtitle says what the visual shows and for which period.
              </div>
            </div>
          </div>
          <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '20px' }}>
            <div style={{ boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-mono)', paddingTop: '6px', width: '120px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-red)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
                CHARTS
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '36px' }}>
                Every chart carries Source + date.
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: '28px' }}>
                Footer format: Source: publisher, document, date. [n] — the bracket number points to the endnotes in Section 12. One red highlight per chart marks the number that matters.
              </div>
            </div>
          </div>
          <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '20px' }}>
            <div style={{ boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-mono)', paddingTop: '6px', width: '120px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-red)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
                NUMBERS
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '36px' }}>
                Verified-only; ranges where sources disagree.
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: '28px' }}>
                Primary releases (BPS, DJPK, JDIH, DPMPTSP) rank first; news reports of official statements second. Unverified claims are excluded, not footnoted. Bracketed [verify] marks a placeholder.
              </div>
            </div>
          </div>
          <div style={{ alignItems: 'flex-start', boxSizing: 'border-box', display: 'flex', gap: '20px' }}>
            <div style={{ boxSizing: 'border-box', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-mono)', paddingTop: '6px', width: '120px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-red)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
                LAW
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '36px' }}>
                Legal citations follow JDIH form.
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '18px', lineHeight: '28px' }}>
                UU 11/2006 Ps 183 ayat (2); PP 23/2015; Perpres 75/2008; Qanun Aceh 1/2026; Putusan MK 140/PUU-XXIII/2025. Ps = Pasal (article); links resolve to peraturan.go.id or peraturan.bpk.go.id.
              </div>
            </div>
          </div>
        </div>
        <div style={{ boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '24px', width: '840px' }}>
          <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
            STATUS COLOURS USED IN MATRICES
          </div>
          <div style={{ boxSizing: 'border-box', display: 'flex', gap: '24px' }}>
            <div style={{ borderColor: 'var(--color-line)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '10px', padding: '20px', width: '264px' }}>
              <div style={{ backgroundColor: 'var(--color-ok)', borderRadius: '2px', boxSizing: 'border-box', flexShrink: '0', height: '14px', width: '100%' }} />
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, lineHeight: '26px' }}>
                Implemented
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '20px' }}>
                Rule exists and is used in practice.
              </div>
            </div>
            <div style={{ borderColor: 'var(--color-line)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '10px', padding: '20px', width: '264px' }}>
              <div style={{ backgroundColor: 'var(--color-warn)', borderRadius: '2px', boxSizing: 'border-box', flexShrink: '0', height: '14px', width: '100%' }} />
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, lineHeight: '26px' }}>
                Partial
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '20px' }}>
                Rule exists; thin, capped or bypassed.
              </div>
            </div>
            <div style={{ borderColor: 'var(--color-line)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '10px', padding: '20px', width: '264px' }}>
              <div style={{ backgroundColor: 'var(--color-red)', borderRadius: '2px', boxSizing: 'border-box', flexShrink: '0', height: '14px', width: '100%' }} />
              <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, lineHeight: '26px' }}>
                Blocked
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '15px', lineHeight: '20px' }}>
                No implementing rule, or contradicted by later law.
              </div>
            </div>
          </div>
          <div style={{ boxSizing: 'border-box', display: 'inline-block', fontFamily: 'var(--font-mono)', paddingTop: '12px' }}>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
              ANATOMY OF A SLIDE
            </div>
          </div>
          <div style={{ backgroundColor: 'var(--color-ground)', borderColor: 'var(--color-line)', borderRadius: '4px', borderStyle: 'solid', borderWidth: '1px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: '14px', padding: '24px' }}>
            <div style={{ boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', letterSpacing: '0.08em', lineHeight: '16px' }}>
                0N · SECTION
              </div>
              <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '16px' }}>
                S0N-0M
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: '30px' }}>
              Action title: one full sentence that states the finding.
            </div>
            <div style={{ backgroundColor: 'var(--color-red)', boxSizing: 'border-box', flexShrink: '0', height: '3px', width: '48px' }} />
            <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '22px' }}>
              Subtitle: what the visual shows, unit, period.
            </div>
            <div style={{ boxSizing: 'border-box', display: 'flex', gap: '16px' }}>
              <div style={{ borderColor: 'var(--color-line)', borderRadius: '4px', borderStyle: 'dashed', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '70px', width: '280px' }} />
              <div style={{ borderColor: 'var(--color-line)', borderRadius: '4px', borderStyle: 'dashed', borderWidth: '1px', boxSizing: 'border-box', flexShrink: '0', height: '70px', width: '200px' }} />
              <div style={{ backgroundColor: 'var(--color-tint)', borderRadius: '4px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', flexShrink: '0', gap: '4px', height: '70px', padding: '12px', width: '240px' }}>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-red)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', lineHeight: '14px' }}>
                  SO WHAT
                </div>
                <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-body)', fontSize: '13px', lineHeight: '18px' }}>
                  One takeaway per slide.
                </div>
              </div>
            </div>
            <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '13px', lineHeight: '16px' }}>
              Source: publisher, document, date. [n] Image: generated
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignItems: 'flex-end', borderTopColor: 'var(--color-line)', borderTopStyle: 'solid', borderTopWidth: '1px', boxSizing: 'border-box', display: 'flex', flexShrink: '0', justifyContent: 'space-between', paddingTop: '24px', width: '100%' }}>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-muted)', display: 'inline-block', flexShrink: '0', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 500, lineHeight: '18px', width: '1400px' }}>
          Source: deck conventions; JDIH citation style per peraturan.go.id and peraturan.bpk.go.id. [42]
        </div>
        <div style={{ boxSizing: 'border-box', color: 'var(--color-ink)', display: 'inline-block', fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: '18px' }}>
          Aceh 2045 · Production Autonomy
        </div>
      </div>
    </div>
  );
}
