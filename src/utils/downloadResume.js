import {
  CV_CORE_COMPETENCIES,
  CV_EDUCATION,
  CV_EXPERIENCE,
  CV_META,
  CV_PROJECTS,
  CV_SUMMARY,
} from '../data/resumeCv'

const ATS_KEYWORDS =
  'Full Stack Developer; Software Engineer; MERN; MongoDB; PostgreSQL; MySQL; Redis; Firebase; Firestore; Supabase; Express; React; Node.js; TypeScript; JavaScript; REST API; BaaS; Realtime Database; Row Level Security; Frontend; Backend; Remote; Automation; Telegram Bot; Discord Bot'

/** Brand red sidebar + teal section bars — ATS CV template style */
const BRAND = { r: 220, g: 47, b: 62 }
const BAR = { r: 15, g: 92, b: 95 }

export async function downloadResumePdf() {
  const { jsPDF } = await import('jspdf')

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'letter',
    compress: false,
    precision: 16,
    floatPrecision: 16,
    lineHeight: 1.28,
  })

  doc.setProperties({
    title: `${CV_META.fullName} — Resume`,
    subject: 'Full-Stack Software Engineer — Curriculum Vitae',
    author: CV_META.fullName,
    keywords: ATS_KEYWORDS,
    creator: 'hamzaboukhari.site',
  })

  const pageW = doc.internal.pageSize.getWidth()
  const pageH = doc.internal.pageSize.getHeight()

  const SIDEBAR_W = 178
  const SIDEBAR_PAD = 26
  const MAIN_GAP = 24
  const M_RIGHT = 42
  const M_TOP = 42
  const M_BOT = 42

  const mainX = SIDEBAR_W + MAIN_GAP
  const mainW = pageW - mainX - M_RIGHT
  const sidebarTextW = SIDEBAR_W - SIDEBAR_PAD * 2

  const lh = (size) => Math.round(size * 1.3)

  const drawStripe = () => {
    doc.setFillColor(BRAND.r, BRAND.g, BRAND.b)
    doc.rect(0, 0, SIDEBAR_W, pageH, 'F')
  }

  drawStripe()

  let y = M_TOP

  const ensureMain = (need) => {
    if (y + need > pageH - M_BOT) {
      doc.addPage()
      drawStripe()
      y = M_TOP
    }
  }

  let sy = M_TOP

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  doc.setTextColor(255, 255, 255)
  for (const ln of doc.splitTextToSize(CV_META.fullName.toUpperCase(), sidebarTextW)) {
    doc.text(ln, SIDEBAR_PAD, sy)
    sy += lh(14)
  }
  sy += 6

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  for (const ln of doc.splitTextToSize(CV_META.headline, sidebarTextW)) {
    doc.text(ln, SIDEBAR_PAD, sy)
    sy += lh(9)
  }
  sy += 12

  doc.setDrawColor(255, 255, 255)
  doc.setLineWidth(0.45)
  doc.line(SIDEBAR_PAD, sy, SIDEBAR_W - SIDEBAR_PAD, sy)
  sy += 14

  doc.setFontSize(8.5)
  const contactBlock = [
    CV_META.location,
    CV_META.email,
    CV_META.website.replace(/^https?:\/\//, ''),
    CV_META.linkedIn.replace(/^https?:\/\//, ''),
  ]
  for (const line of contactBlock) {
    for (const ln of doc.splitTextToSize(line, sidebarTextW)) {
      doc.text(ln, SIDEBAR_PAD, sy)
      sy += lh(8.5)
    }
    sy += 3
  }
  sy += 6
  doc.line(SIDEBAR_PAD, sy, SIDEBAR_W - SIDEBAR_PAD, sy)
  sy += 14

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(8)
  doc.text('PERSONAL STATEMENT', SIDEBAR_PAD, sy)
  sy += lh(8) + 8

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(8)
  for (const ln of doc.splitTextToSize(CV_SUMMARY, sidebarTextW)) {
    doc.text(ln, SIDEBAR_PAD, sy)
    sy += lh(8)
  }

  const sectionBar = (title) => {
    const barH = 22
    ensureMain(barH + 14)
    doc.setFillColor(BAR.r, BAR.g, BAR.b)
    doc.rect(mainX, y, mainW, barH, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text(title.toUpperCase(), mainX + 10, y + 14)
    y += barH + 12
    doc.setTextColor(26, 26, 26)
    doc.setFont('helvetica', 'normal')
  }

  const mainLines = (strings, size, indent = 0, style = 'normal', color = [26, 26, 26]) => {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    doc.setTextColor(color[0], color[1], color[2])
    for (const text of strings) {
      const wrapped = doc.splitTextToSize(text, mainW - indent)
      for (const ln of wrapped) {
        ensureMain(lh(size))
        doc.text(ln, mainX + indent, y)
        y += lh(size)
      }
    }
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(26, 26, 26)
  }

  sectionBar('Work experience')

  for (const job of CV_EXPERIENCE) {
    ensureMain(lh(11) + lh(9) + lh(9.5) * 3)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10.5)
    doc.setTextColor(16, 16, 16)
    doc.text(job.role, mainX, y)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(110, 110, 110)
    const tw = doc.getTextWidth(job.dates)
    doc.text(job.dates, mainX + mainW - tw, y)
    y += lh(11)
    doc.setTextColor(26, 26, 26)
    mainLines([job.organization], 9.5, 0, 'italic', [75, 75, 75])
    y += 4
    for (const b of job.bullets) {
      mainLines([`${String.fromCharCode(8226)}  ${b}`], 9.5, 14)
    }
    y += 10
  }

  sectionBar('Project highlights')

  for (const p of CV_PROJECTS) {
    ensureMain(lh(10.5) * 4)
    mainLines([`${p.name} (${p.year})`], 10.5, 0, 'bold')
    if (p.detail) {
      mainLines([p.detail], 9, 0, 'normal', [70, 70, 70])
      y += 2
    }
    for (const b of p.bullets) {
      mainLines([`${String.fromCharCode(8226)}  ${b}`], 9.5, 14)
    }
    y += 8
  }

  sectionBar('Core competencies')

  for (const c of CV_CORE_COMPETENCIES) {
    mainLines([`${String.fromCharCode(8226)}  ${c}`], 9.5, 10)
  }
  y += 6

  sectionBar('Education')

  for (const e of CV_EDUCATION) {
    ensureMain(lh(10.5) * 3)
    mainLines([`${e.degree}, ${e.institution} — ${e.dates}`], 10.5, 0, 'bold')
    if (e.note) mainLines([e.note], 9.5, 12)
    y += 8
  }

  doc.save('Hamza-Boukhari-Resume.pdf')
}
