import React from "react";

const IPCSections = () => {
  const parts = [
    {
      title: "General Principles",
      color: "#34a853",
      description:
        "This part forms the doctrinal base of criminal law. It defines key terms, explains criminal liability, and lays down exceptions. For exams and practice, focus on illustrations, general exceptions, and landmark case laws like State of Maharashtra v. Mayer Hans George (Mistake of fact) and K.M. Nanavati v. State of Maharashtra (Grave and sudden provocation).",
      sections: [
        {
          name: "Sec 2–11: Definitions",
          desc:
            "Defines crucial terms like 'offence', 'illegal', 'injury', 'life', 'public', and 'document'. These sections act as the dictionary of IPC. Example: 'Illegal' covers acts forbidden by law or that give rise to civil liability."
        },
        {
          name: "Sec 76–106: General Exceptions",
          desc:
            "Details situations where an act is not an offence. Includes acts done by mistake of fact (not mistake of law), acts of children under 7 years, insane persons, acts done under duress, consent, and private defence. Landmark cases: R v. Dudley & Stephens (necessity not a defence for murder), and Darshan Singh v. State of Punjab (private defence scope)."
        }
      ]
    },
    {
      title: "Offences Against the Human Body",
      color: "#ea4335",
      description:
        "Covers offences like culpable homicide, murder, hurt, grievous hurt, wrongful restraint, confinement, sexual offences, and dowry death. Questions often test the difference between Sec 299 (Culpable Homicide) and Sec 300 (Murder) along with exceptions. Important case law: Virsa Singh v. State of Punjab (intention for murder), Tukaram v. State of Maharashtra (rape consent).",
      sections: [
        {
          name: "Sec 299–304: Homicide & Murder",
          desc:
            "Explains culpable homicide (mens rea + actus reus) and distinguishes murder. Exceptions include sudden fight, grave provocation, exceeding right of private defence. Case laws: K.M. Nanavati v. State of Maharashtra, Virsa Singh v. State of Punjab."
        },
        {
          name: "Sec 306–309: Suicide",
          desc:
            "Covers abetment of suicide (important for dowry death cases). Attempt to suicide is no longer punishable after Mental Healthcare Act, 2017 except under certain circumstances. Key case: Gian Kaur v. State of Punjab (right to die not part of Art. 21)."
        },
        {
          name: "Sec 319–326: Hurt & Grievous Hurt",
          desc:
            "Defines hurt and grievous hurt (eight kinds listed). Focus on difference between simple and grievous hurt. Landmark case: Jashanmal Jhamatmal v. Brahmanand (permanent disfiguration counted as grievous hurt)."
        },
        {
          name: "Sec 339–348: Restraint & Confinement",
          desc:
            "Deals with unlawful restraint (preventing a person from proceeding in any direction) and confinement (wrongfully confining within circumscribed limits). Important for kidnapping/illegal detention cases."
        },
        {
          name: "Sec 375–376D: Rape & Sexual Offences",
          desc:
            "Defines rape, consent, exceptions (e.g., marital rape exception for wife above 18). Includes gang rape (376D) and custodial rape provisions. Case laws: Tukaram v. State of Maharashtra (Mathura case), Vishaka v. State of Rajasthan (sexual harassment guidelines)."
        }
      ]
    },
    {
      title: "Offences Against Property",
      color: "#fbbc04",
      description:
        "Includes theft, extortion, robbery, dacoity, criminal misappropriation, breach of trust, cheating, and receiving stolen property. Sec 420 (Cheating) is one of the most used sections. Landmark case: Hridaya Ranjan v. State of Bihar (mens rea in cheating).",
      sections: [
        {
          name: "Sec 378–404: Theft & Robbery",
          desc:
            "Theft: dishonest taking of movable property without consent. Robbery = Theft + fear/violence. Dacoity = Robbery by 5 or more persons. Important for distinguishing between theft, robbery and extortion."
        },
        {
          name: "Sec 405–420: Cheating & Trust Breach",
          desc:
            "Explains breach of trust (dishonest misappropriation by entrusted person) and cheating (fraudulent inducement). Section 420 widely invoked in business disputes. Case law: Hridaya Ranjan v. State of Bihar (fraudulent intention at inception is key)."
        }
      ]
    },
    {
      title: "Offences Against State & Public Order",
      color: "#a142f4",
      description:
        "Deals with crimes like waging war, sedition, unlawful assembly, rioting, promoting enmity between groups. Landmark case: Kedarnath Singh v. State of Bihar (validity of sedition law).",
      sections: [
        {
          name: "Sec 121–124A: State Offences",
          desc:
            "Waging war against Government (Sec 121) punishable with death or life imprisonment. Sec 124A: Sedition – exciting disaffection towards government. Case: Kedarnath Singh upheld sedition but limited it to incitement to violence."
        },
        {
          name: "Sec 141–160: Public Tranquillity",
          desc:
            "Defines unlawful assembly, rioting, affray. Relevant for protest and mob violence cases. Case law: Kuldip Singh v. State of Haryana (unlawful assembly object must be common)."
        }
      ]
    },
    {
      title: "Other Important Sections",
      color: "#4285f4",
      description:
        "Frequently used sections like outraging modesty (354), cruelty (498A) and attempts (511). Must-know for both exams and practice.",
      sections: [
        {
          name: "Sec 354: Modesty of Woman",
          desc:
            "Assault with intent to outrage modesty. Includes sexual harassment, voyeurism, stalking. Case: Rupan Deol Bajaj v. KPS Gill (outraging modesty of woman)."
        },
        {
          name: "Sec 498A: Cruelty",
          desc:
            "Covers cruelty by husband or relatives. Frequently invoked in dowry harassment cases. Landmark case: Sushil Kumar Sharma v. Union of India (misuse of 498A discussion)."
        },
        {
          name: "Sec 511: Attempts",
          desc:
            "Provides general punishment for attempts to commit offences. Useful for attempt to murder, attempt to rape cases."
        }
      ]
    }
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f9fafb" }}>
      <h1 style={{ fontSize: "2.5rem", textAlign: "center", fontWeight: "800", marginBottom: "40px", color: "#1a3d2f" }}>
        📚 IPC Important Sections – Lawyer's Full Exam Notes
      </h1>
      {parts.map((part, index) => (
        <section key={index} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              paddingLeft: "15px",
              borderLeft: `8px solid ${part.color}`,
              marginBottom: "12px",
              color: part.color
            }}
          >
            {part.title}
          </h2>
          <p style={{ fontStyle: "italic", marginBottom: "20px", color: "#555" }}>{part.description}</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px"
            }}
          >
            {part.sections.map((section, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: part.color + "22",
                  padding: "24px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
                }}
              >
                <h3 style={{ fontSize: "1.2rem", fontWeight: "600", marginBottom: "10px", color: part.color }}>
                  {section.name}
                </h3>
                <p style={{ fontSize: "1rem", color: "#333", lineHeight: "1.6" }}>{section.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default IPCSections;