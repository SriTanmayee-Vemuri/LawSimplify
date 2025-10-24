import React, { useState, useEffect } from "react";
import {
  FaGavel,
  FaBook,
  FaUserTie,
  FaBalanceScale,
  FaLandmark,
  FaHome,
  FaLaptopCode,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaBuilding,
  FaGlobe,
  FaGraduationCap,
  FaClock,
  FaPen,
} from "react-icons/fa";

export default function LawStudyRoadmap() {
  const [open, setOpen] = useState({});
  const [program, setProgram] = useState("bba5"); // "bba5" or "bba3"

  const toggle = (key) => setOpen((s) => ({ ...s, [key]: !s[key] }));

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.title = "Law Student Roadmap | LawSimplify";
  }, []);

  // BBA LLB 5-year roadmap with semester-wise division
  const bba5Subjects = [
    {
      year: "1st Year",
      semesters: [
        {
          sem: "Semester 1",
          subjects: [
            {
              title: "Constitutional Law",
              why: "Foundation of Indian legal system, understanding Fundamental Rights and DPSP.",
              learn: "Judicial review, rights enforcement, Indian Constitution structure.",
              icon: <FaLandmark className="icon" />,
            },
            {
              title: "Law of Contract I",
              why: "Essential for understanding agreements in personal and business life.",
              learn: "Contract formation, performance, breach, remedies.",
              icon: <FaBook className="icon" />,
            },
            {
              title: "Law of Torts",
              why: "Understanding civil wrongs helps in advising and litigation.",
              learn: "Negligence, defamation, strict liability, consumer rights.",
              icon: <FaBalanceScale className="icon" />,
            },
          ],
        },
        {
          sem: "Semester 2",
          subjects: [
            {
              title: "Family Law I",
              why: "Important for social legal issues.",
              learn: "Marriage, divorce, adoption, succession across religions.",
              icon: <FaUserTie className="icon" />,
            },
            {
              title: "Legal Method / Jurisprudence",
              why: "Develops critical thinking and legal reasoning.",
              learn: "Nature of law, sources, schools of jurisprudence.",
              icon: <FaLightbulb className="icon" />,
            },
            {
              title: "Legal English / Communication Skills",
              why: "Lawyers must communicate clearly.",
              learn: "Drafting, legal writing, comprehension, oral skills.",
              icon: <FaGavel className="icon" />,
            },
          ],
        },
      ],
    },
    {
      year: "2nd–3rd Year",
      semesters: [
        {
          sem: "Semester 3",
          subjects: [
            {
              title: "Indian Penal Code (IPC)",
              why: "Core criminal law for understanding crimes and punishment.",
              learn: "Offences, penalties, definitions, criminal liability.",
              icon: <FaGavel className="icon" />,
            },
            {
              title: "Civil Procedure Code (CPC)",
              why: "Understanding civil dispute resolution.",
              learn: "Civil suits, decrees, appeals, execution.",
              icon: <FaHome className="icon" />,
            },
          ],
        },
        {
          sem: "Semester 4",
          subjects: [
            {
              title: "Criminal Procedure Code (CrPC)",
              why: "Shows how criminal trials are conducted.",
              learn: "FIR, investigation, trial procedures, appeals.",
              icon: <FaBalanceScale className="icon" />,
            },
            {
              title: "Law of Evidence",
              why: "Key for courtroom practice.",
              learn: "Admissibility of evidence, witnesses, documents.",
              icon: <FaBook className="icon" />,
            },
            {
              title: "Property Law",
              why: "Important for civil and commercial law practice.",
              learn: "Transfer of Property Act, easements, trusts.",
              icon: <FaHome className="icon" />,
            },
          ],
        },
      ],
    },
    {
      year: "3rd–4th Year",
      semesters: [
        {
          sem: "Semester 5",
          subjects: [
            {
              title: "Company Law",
              why: "Crucial for corporate practice.",
              learn: "Incorporation, directors, meetings, mergers, compliance.",
              icon: <FaBuilding className="icon" />,
            },
            {
              title: "Competition Law",
              why: "Business regulation and anti-trust knowledge.",
              learn: "Market competition rules, anti-competitive practices.",
              icon: <FaBalanceScale className="icon" />,
            },
          ],
        },
        {
          sem: "Semester 6",
          subjects: [
            {
              title: "Banking & Insurance Laws",
              why: "For commercial law and finance.",
              learn: "RBI regulations, SEBI, IRDAI, negotiable instruments.",
              icon: <FaHome className="icon" />,
            },
            {
              title: "Taxation Laws (Income Tax + GST)",
              why: "Helps understand fiscal laws.",
              learn: "Income tax basics, GST, compliance procedures.",
              icon: <FaBook className="icon" />,
            },
            {
              title: "Environmental Law",
              why: "For sustainable and corporate responsibility.",
              learn: "Pollution control, biodiversity, forest laws.",
              icon: <FaLeaf className="icon" />,
            },
            {
              title: "Intellectual Property Rights (IPR)",
              why: "Growing field in tech, business, entertainment.",
              learn: "Copyright, patents, trademarks, enforcement.",
              icon: <FaLaptopCode className="icon" />,
            },
          ],
        },
      ],
    },
    {
      year: "5th Year",
      semesters: [
        {
          sem: "Semester 9-10",
          subjects: [
            {
              title: "Practical Skills & Drafting",
              why: "Hands-on legal training is essential.",
              learn: "Moot courts, drafting, pleading, internships, ADR.",
              icon: <FaGavel className="icon" />,
            },
            {
              title: "Elective / Optional Papers",
              why: "Specialize according to interest.",
              learn: "Cyber Law, International Trade, Humanitarian, Maritime, Media Law.",
              icon: <FaBook className="icon" />,
            },
          ],
        },
      ],
    },
  ];

  // BBA/BBa LLB 3-year roadmap with electives in 3rd year
  const bba3Subjects = [
    {
      year: "1st Year",
      semesters: [
        {
          sem: "Semester 1",
          subjects: [
            {
              title: "Constitutional Law",
              why: "Foundation of legal system and rights knowledge.",
              learn: "Fundamental Rights, DPSP, Indian Constitution structure.",
              icon: <FaLandmark className="icon" />,
            },
            {
              title: "Law of Contract I",
              why: "Essential for contracts and agreements.",
              learn: "Formation, performance, breach, remedies.",
              icon: <FaBook className="icon" />,
            },
            {
              title: "Law of Torts",
              why: "Understanding civil wrongs and liabilities.",
              learn: "Negligence, defamation, strict liability, consumer law.",
              icon: <FaBalanceScale className="icon" />,
            },
          ],
        },
      ],
    },
    {
      year: "2nd Year",
      semesters: [
        {
          sem: "Semester 3",
          subjects: [
            {
              title: "Criminal Law & Procedure",
              why: "Core criminal law knowledge for practice.",
              learn: "IPC, CrPC, Evidence, trial procedures.",
              icon: <FaGavel className="icon" />,
            },
            {
              title: "Civil Procedure & Property Law",
              why: "Understanding civil disputes and property regulations.",
              learn: "CPC, Transfer of Property, easements, trusts.",
              icon: <FaHome className="icon" />,
            },
            {
              title: "Family Law",
              why: "Social legal knowledge.",
              learn: "Marriage, Divorce, Succession, Adoption laws.",
              icon: <FaUserTie className="icon" />,
            },
          ],
        },
      ],
    },
    {
      year: "3rd Year",
      semesters: [
        {
          sem: "Semester 5-6",
          subjects: [
            {
              title: "Company Law & Commercial Laws",
              why: "Corporate, taxation, and business regulations.",
              learn: "Company Act, Banking & Insurance laws, GST, Taxation.",
              icon: <FaBuilding className="icon" />,
            },
            {
              title: "Practical Skills & Electives",
              why: "Prepare for legal practice and specialization.",
              learn: "Moot courts, drafting, ADR, Cyber law, IPR, Media Law.",
              icon: <FaGavel className="icon" />,
            },
          ],
        },
      ],
    },
  ];
  const data = program === "bba5" ? bba5Subjects : bba3Subjects;


  // Important Skills & Actions with distinct icons
  const importantSkills = [
    {
      skill: "Moot Courts & Mock Trials",
      action: "Participate in moots, competitions, and mock trials to develop advocacy and argumentation skills.",
      icon: <FaGavel className="icon" />,
    },
    {
      skill: "Legal Research & Case Analysis",
      action: "Read case laws, analyze judgments, summarize principles, and maintain a case diary.",
      icon: <FaBook className="icon" />,
    },
    {
      skill: "Drafting & Legal Writing",
      action: "Practice drafting contracts, petitions, notices, and affidavits regularly for clarity and precision.",
      icon: <FaPen className="icon" />,
    },
    {
      skill: "Client Counseling & Communication",
      action: "Develop negotiation, communication, and interpersonal skills via internships and workshops.",
      icon: <FaUserTie className="icon" />,
    },
    {
      skill: "Internships & Practical Exposure",
      action: "Work with law firms, courts, NGOs, or corporate legal departments to gain real-world experience.",
      icon: <FaHandshake className="icon" />,
    },
    {
      skill: "Time Management & Study Planning",
      action: "Divide subjects per semester, revise regularly, and maintain a study timetable for consistency.",
      icon: <FaClock className="icon" />,
    },
    {
      skill: "Case Briefing & Analysis",
      action: "Summarize landmark judgments, analyze facts and legal principles, and practice problem-solving.",
      icon: <FaBalanceScale className="icon" />,
    },
  ];

  return (
    <>
      <style>{`
        body { margin: 0; font-family: 'Poppins', sans-serif; background: linear-gradient(135deg,#eef2ff,#ffffff,#dbeafe); }
        .container { max-width: 1200px; margin: 0 auto; background: rgba(255,255,255,0.7); backdrop-filter: blur(10px); border-radius: 24px; box-shadow: 0 8px 30px rgba(0,0,0,0.08); overflow: hidden; border: 1px solid #e5e7eb; }
        header { background: linear-gradient(to right,#1e3a8a,#3730a3); color: white; padding: 2rem; display: flex; justify-content: space-between; align-items: center; }
        header h1 { font-size: 2rem; font-weight: 700; margin: 0; }
        .grid { display: grid; gap: 1.5rem; }
        @media(min-width: 768px) { .grid-3 { grid-template-columns: 2fr 1fr; } .grid-2 { grid-template-columns: 1fr 1fr; } }
        .card { background: rgba(255, 255, 255, 0.8); border: 1px solid #e5e7eb; border-radius: 18px; padding: 1rem; transition: all 0.3s ease; font-size: 0.9rem; }
        .card:hover { transform: scale(1.02); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }
        .icon { color: #4338ca; font-size: 1.5rem; }
        .aside { background: linear-gradient(to bottom,#f8fafc,#ffffff); border-radius: 16px; padding: 1.5rem; box-shadow: 0 4px 14px rgba(0,0,0,0.05); }
        button { cursor: pointer; }
        .tab-btn { padding: 0.5rem 1rem; border: none; border-radius: 8px; margin-right: 0.5rem; font-weight: 600; cursor: pointer; }
        .tab-btn.active { background: #4338ca; color: white; }
      `}</style>

      <div className="p-6 md:p-12">
        <div className="container">
          <header>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <FaGraduationCap style={{ fontSize: "2rem", color: "#facc15" }} />
              <div>
                <h1>Law Student Roadmap</h1>
                <p style={{ fontSize: "0.85rem", opacity: 0.9 }}>Year/Semester-wise Subjects • Importance • Learnings</p>
              </div>
            </div>
            <div>
              <button className={`tab-btn ${program === "bba5" ? "active" : ""}`} onClick={() => setProgram("bba5")}>BBA LLB (5 Years)</button>
              <button className={`tab-btn ${program === "bba3" ? "active" : ""}`} onClick={() => setProgram("bba3")}>BBa LLB (3 Years)</button>
            </div>
          </header>

          <main style={{ padding: "2rem" }}>
            <section className="grid grid-3">
              <div>
                {data.map((y, i) => (
                  <div key={i} style={{ marginBottom: "2rem" }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 600, borderBottom: "1px solid #e5e7eb", paddingBottom: "0.5rem", marginBottom: "1rem" }}>{y.year}</h2>
                    {y.semesters.map((sem, k) => (
                      <div key={k} style={{ marginBottom: "1.5rem" }}>
                        <h3 style={{ fontWeight: 600, fontSize: "1.2rem", marginBottom: "0.75rem", color: "#4338ca" }}>{sem.sem}</h3>
                        <div className="grid grid-2">
                          {sem.subjects.map((s, j) => (
                            <article key={j} className="card">
                              <div style={{ display: "flex", gap: "0.75rem" }}>
                                {s.icon}
                                <div style={{ flex: 1 }}>
                                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h3 style={{ fontWeight: 600 }}>{s.title}</h3>
                                    <button
                                      onClick={() => toggle(s.title + y.year + sem.sem)}
                                      style={{ height: "40px", fontSize: "0.75rem", textDecoration: "none", color: "#f90da3ff" }}
                                    >
                                      {open[s.title + y.year + sem.sem] ? "Hide" : "Read"}
                                    </button>
                                  </div>
                                  <p style={{ marginTop: "0.5rem" }}><strong>Why:</strong> {s.why}</p>
                                  <p style={{ marginTop: "0.25rem" }}><strong>What You Learn:</strong> {s.learn}</p>
                                  {open[s.title + y.year + sem.sem] && (
                                    <div style={{ marginTop: "0.5rem", background: "#eef2ff", padding: "0.5rem", borderRadius: "8px" }}>
                                      <ul style={{ paddingLeft: "1rem" }}>
                                        <li>Key statutes & landmark judgments</li>
                                        <li>Conceptual clarity + case study practice</li>
                                        <li>Attempt past papers for mastery</li>
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Important Skills Section */}
                <section style={{ marginTop: "2rem" }}>
                  <h2 style={{ fontSize: "1.5rem", fontWeight: 600, borderBottom: "1px solid #e5e7eb", paddingBottom: "0.5rem", marginBottom: "1rem" }}>Important Skills & Study Actions</h2>
                  <div className="grid grid-2">
                    {importantSkills.map((s, i) => (
                      <div key={i} className="card" style={{ display: "flex", gap: "0.5rem", alignItems: "start" }}>
                        {s.icon}
                        <div>
                          <p style={{ fontWeight: 600 }}>{s.skill}</p>
                          <p style={{ color: "#374151" }}>{s.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <aside className="aside">
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Study Tips</h3>
                <ul style={{ marginBottom: "1.5rem" }}>
                  <li>Start with Constitution & IPC first</li>
                  <li>Maintain a case law diary</li>
                  <li>Weekly drafting practice builds confidence</li>
                  <li>Participate in at least 2 moots per year</li>
                  <li>Make revision flashcards for exams</li>
                </ul>

                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>Resources</h3>
                <ul style={{ marginBottom: "1.5rem" }}>
                  <li>Bare Acts & Govt. websites</li>
                  <li>SC/HC judgments online</li>
                  <li>LiveLaw & Bar & Bench blogs</li>
                  <li>Free lectures on YouTube</li>
                </ul>

                <button onClick={() => window.print()} style={{ padding: "0.5rem", width: "100%", borderRadius: "8px", border: "1px solid #d1d5db", background: "white", marginBottom: "0.5rem" }}>
                  Print / Save as PDF
                </button>
                <button onClick={() => navigator.clipboard.writeText(window.location.href)} style={{ padding: "0.5rem", width: "100%", borderRadius: "8px", background: "#4338ca", color: "white" }}>
                  Copy Page Link
                </button>
              </aside>
            </section>
          </main>

          <footer style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.75rem", color: "#6b7280" }}>
            Designed with ❤️ for law students • Year/Semester-wise roadmap & clarity
          </footer>
        </div>
      </div>
    </>
  );
}
