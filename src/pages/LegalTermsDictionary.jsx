import React, { useState } from "react";

const legalTerms = [
  { term: "Ad Litem", meaning: "For the purpose of legal action – guardian ad litem represents minors.", provisions: "General Legal Principle" },
  { term: "Amicus Curiae", meaning: "Friend of the court – person or organization that offers information in a case.", provisions: "General Legal Principle" },
  { term: "Habeas Corpus", meaning: "A writ requiring a person under arrest to be brought before a judge.", provisions: "Article 32, 226 – Indian Constitution" },
  { term: "Obiter Dicta", meaning: "Remarks made by a judge that are not binding as precedent.", provisions: "General Legal Principle" },
  { term: "Res Judicata", meaning: "A matter already judged – cannot be pursued again.", provisions: "Section 11, CPC, 1908" },
  { term: "Stare Decisis", meaning: "Doctrine of precedent – courts follow prior decisions.", provisions: "General Legal Principle" },
  { term: "Mens Rea", meaning: "Guilty mind – criminal intent required for liability.", provisions: "General Criminal Law Principle" },
  { term: "Actus Reus", meaning: "The physical act of committing a crime.", provisions: "General Criminal Law Principle" },
  { term: "Ratio Decidendi", meaning: "The legal reasoning or principle behind a court’s decision.", provisions: "General Legal Principle" },
  { term: "Ultra Vires", meaning: "Beyond one’s legal power or authority.", provisions: "Companies Act, 2013" },
  { term: "In Camera", meaning: "Proceedings held in private, not open to the public.", provisions: "Section 327, CrPC" },
  { term: "Prima Facie", meaning: "Based on first impression – sufficient to establish a fact unless disproved.", provisions: "General Legal Principle" },
  { term: "Ex Parte", meaning: "Proceeding brought by one party without notice to or presence of the other party.", provisions: "Order IX, CPC" },
  { term: "Per Curiam", meaning: "A decision delivered by the court collectively, without naming any specific judge.", provisions: "General Legal Principle" },
  { term: "Locus Standi", meaning: "Right or capacity to bring an action or to appear in a court.", provisions: "General Legal Principle" },
  { term: "Nemo Judex in Causa Sua", meaning: "No one should be a judge in their own cause (principle of natural justice).", provisions: "Principles of Natural Justice" },
  { term: "Audi Alteram Partem", meaning: "Hear the other side – right to fair hearing.", provisions: "Principles of Natural Justice" },
  { term: "Quid Pro Quo", meaning: "Something given in exchange for something else.", provisions: "General Contract Law" },
  { term: "De Jure", meaning: "According to law – lawful or legitimate.", provisions: "General Legal Principle" },
  { term: "De Facto", meaning: "In fact or in reality – something that exists but may not be legally recognized.", provisions: "General Legal Principle" },
  { term: "Sub Judice", meaning: "Under judicial consideration and therefore prohibited from public discussion.", provisions: "Contempt of Courts Act, 1971" },
  { term: "Vicarious Liability", meaning: "Liability imposed on one person for the acts of another (e.g., employer for employee).", provisions: "Law of Torts" },
  { term: "Strict Liability", meaning: "Liability without the need to prove negligence or fault.", provisions: "Rylands v. Fletcher Principle – Law of Torts" },
  { term: "Absolute Liability", meaning: "Liability without exceptions or defenses – stricter than strict liability.", provisions: "M.C. Mehta v. Union of India" },
  { term: "Doctrine of Eclipse", meaning: "A pre-constitutional law inconsistent with fundamental rights becomes dormant, not void.", provisions: "Article 13 – Indian Constitution" },
  { term: "Doctrine of Severability", meaning: "Invalid portions of a statute can be severed, leaving the valid part operative.", provisions: "Article 13 – Indian Constitution" },
  { term: "Doctrine of Waiver", meaning: "A person can waive their right, provided it does not affect public interest.", provisions: "General Constitutional Law Principle" },
  { term: "Doctrine of Pleasure", meaning: "Government servants hold office during the pleasure of the President/Governor.", provisions: "Article 310 – Indian Constitution" },
  { term: "Doctrine of Pith and Substance", meaning: "Determines the true nature of a law to see under which legislative list it falls.", provisions: "Constitutional Law Principle" },
  { term: "Doctrine of Colourable Legislation", meaning: "Legislature cannot do indirectly what it cannot do directly.", provisions: "Constitutional Law Principle" },
  { term: "Doctrine of Territorial Nexus", meaning: "State laws can apply outside its territory if there is sufficient connection.", provisions: "Article 245 – Indian Constitution" },
  { term: "Doctrine of Basic Structure", meaning: "Parliament cannot alter the basic structure of the Constitution.", provisions: "Kesavananda Bharati Case, 1973" },
  { term: "Estoppel", meaning: "A person is prevented from denying what they have previously stated or agreed.", provisions: "Section 115, Indian Evidence Act, 1872" },
  { term: "Injunction", meaning: "A court order restraining a party from doing a particular act.", provisions: "Specific Relief Act, 1963" },
  { term: "Tort", meaning: "A civil wrong for which compensation may be claimed.", provisions: "Law of Torts" },
  { term: "Assault", meaning: "An act that creates apprehension of harmful contact in another person.", provisions: "Law of Torts" },
  { term: "Battery", meaning: "Actual harmful or offensive contact with another person.", provisions: "Law of Torts" },
  { term: "Defamation", meaning: "False statement harming a person's reputation (includes libel and slander).", provisions: "Section 499-500, IPC" },
  { term: "Negligence", meaning: "Failure to exercise reasonable care, causing harm to another.", provisions: "Law of Torts" },
  { term: "Burden of Proof", meaning: "Obligation to prove allegations in court.", provisions: "General Legal Principle" },
  { term: "Onus Probandi", meaning: "Latin for 'burden of proof'.", provisions: "General Legal Principle" },
  { term: "Caveat Emptor", meaning: "Let the buyer beware – buyer is responsible for checking goods before purchase.", provisions: "Section 16-18, Indian Contract Act, 1872" },
  { term: "Caveat Venditor", meaning: "Let the seller beware – seller is responsible for quality of goods.", provisions: "General Contract Law" },
  { term: "Pro Bono", meaning: "Legal work undertaken voluntarily and without payment.", provisions: "General Legal Principle" },
  { term: "Fiduciary Duty", meaning: "Duty to act in the best interest of another party (trustee-beneficiary relationship).", provisions: "Trusts Act, 1882" },
  { term: "Litigation", meaning: "Process of taking legal action.", provisions: "General Legal Principle" },
  { term: "Arbitration", meaning: "Dispute resolution by a neutral third party outside courts.", provisions: "Arbitration and Conciliation Act, 1996" },
  { term: "Mediation", meaning: "Facilitated negotiation between parties with a mediator.", provisions: "General Legal Principle" },
  { term: "Conciliation", meaning: "Similar to mediation but conciliator may propose solutions.", provisions: "General Legal Principle" },
  { term: "Jurisdiction", meaning: "Legal authority of a court to hear and decide a case.", provisions: "General Legal Principle" },
  { term: "Quasi-Judicial", meaning: "Functions resembling judicial proceedings but not conducted by a court.", provisions: "General Legal Principle" },
  { term: "Writ", meaning: "Formal order issued by a court (e.g., Habeas Corpus, Mandamus, Certiorari).", provisions: "Articles 32, 226 – Indian Constitution" },
  { term: "Mandamus", meaning: "A writ issued by a court ordering a public official or body to perform a mandatory duty.", provisions: "Articles 32, 226 – Indian Constitution" },
  { term: "Certiorari", meaning: "A writ directing a lower court to deliver its record for review by a higher court.", provisions: "Articles 32, 226 – Indian Constitution" },
  { term: "Prohibition", meaning: "A writ issued by a higher court stopping a lower court from exceeding its jurisdiction.", provisions: "Articles 32, 226 – Indian Constitution" },
  { term: "Quo Warranto", meaning: "A writ challenging a person's right to hold a public office.", provisions: "Articles 32, 226 – Indian Constitution" },
  { term: "PIL (Public Interest Litigation)", meaning: "Legal action initiated to protect public interest, even by a person not directly affected.", provisions: "Articles 32, 226 – Indian Constitution" },
  { term: "Laches", meaning: "Failure to assert a right in a timely manner, which can bar relief.", provisions: "General Legal Principle" },
  { term: "Acquittal", meaning: "A judgment that a person is not guilty of the crime with which they were charged.", provisions: "CrPC" },
  { term: "Conviction", meaning: "A formal declaration that someone is guilty of a criminal offense.", provisions: "CrPC" },
  { term: "Bail", meaning: "Temporary release of an accused person pending trial, sometimes with conditions.", provisions: "Sections 436-439, CrPC" },
  { term: "Anticipatory Bail", meaning: "Bail granted in anticipation of arrest for a non-bailable offense.", provisions: "Section 438, CrPC" },
  { term: "Parole", meaning: "Conditional release of a prisoner before the completion of the sentence.", provisions: "Prisons Act, 1894" },
  { term: "Probation", meaning: "Release of an offender under supervision instead of imprisonment.", provisions: "Probation of Offenders Act, 1958" },
  { term: "Summons", meaning: "A court order requiring a person to appear in court.", provisions: "CrPC" },
  { term: "Warrant", meaning: "An order authorizing law enforcement to arrest, search, or seize property.", provisions: "CrPC" },
  { term: "Charge Sheet", meaning: "A formal document of accusation prepared by the police after investigation.", provisions: "CrPC" },
  { term: "FIR (First Information Report)", meaning: "A document prepared by police when they receive information about a cognizable offense.", provisions: "Section 154, CrPC" },
  { term: "Affidavit", meaning: "A written statement confirmed by oath or affirmation, used as evidence.", provisions: "Evidence Act, 1872" },
  { term: "Plaint", meaning: "A statement of claim filed by the plaintiff in civil cases.", provisions: "CPC" },
  { term: "Written Statement", meaning: "Reply filed by the defendant in response to a plaint.", provisions: "Order VIII, CPC" },
  { term: "Decree", meaning: "Final judgment of a civil court conclusively determining the rights of parties.", provisions: "Section 2(2), CPC" },
  { term: "Order", meaning: "Formal expression of a court's decision that is not a decree.", provisions: "Section 2(14), CPC" },
  { term: "Judgment", meaning: "Formal decision given by a court after considering facts and law.", provisions: "Section 2(9), CPC" },
  { term: "Appeal", meaning: "Application to a higher court to review and change the decision of a lower court.", provisions: "CPC / CrPC" },
  { term: "Revision", meaning: "Supervisory jurisdiction exercised by a higher court to correct errors of lower courts.", provisions: "CPC / CrPC" },
  { term: "Review", meaning: "Reconsideration of a court's own judgment for error.", provisions: "Section 114, CPC" },
  { term: "Contempt of Court", meaning: "Act that disrespects or disobeys the authority or dignity of a court.", provisions: "Contempt of Courts Act, 1971" },
  { term: "Perjury", meaning: "Offense of willfully telling a lie under oath in a judicial proceeding.", provisions: "Sections 191-193, IPC" },
  { term: "Forgery", meaning: "Making a false document with intent to deceive.", provisions: "Sections 463-471, IPC" },
  { term: "Misappropriation", meaning: "Dishonest use of someone else's property entrusted to one’s care.", provisions: "Section 403-404, IPC" },
  { term: "Cheating", meaning: "Deceiving someone to deliver property or take any action they would not otherwise take.", provisions: "Sections 415-420, IPC" },
  { term: "Defalcation", meaning: "Misuse or embezzlement of funds by a person in a position of trust.", provisions: "General Legal Principle" },
  { term: "Lien", meaning: "Legal right to keep possession of property until a debt is paid.", provisions: "Indian Contract Act, 1872" },
  { term: "Mortgage", meaning: "Legal transfer of interest in property as security for a loan.", provisions: "Transfer of Property Act, 1882" },
  { term: "Lease", meaning: "Contractual arrangement where one party allows another to use property for a period in exchange for rent.", provisions: "Transfer of Property Act, 1882" },
  { term: "Easement", meaning: "Right to use another person's land for a specific purpose.", provisions: "Indian Easements Act, 1882" },
  { term: "Consideration", meaning: "Something of value exchanged between parties to form a valid contract.", provisions: "Section 2(d), Indian Contract Act, 1872" },
  { term: "Offer", meaning: "Proposal made with intention to create legal relations when accepted.", provisions: "Section 2(a), Indian Contract Act, 1872" },
  { term: "Acceptance", meaning: "Unqualified assent to the terms of an offer, creating a contract.", provisions: "Section 2(b), Indian Contract Act, 1872" },
  { term: "Void Contract", meaning: "Agreement with no legal effect.", provisions: "Section 2(g), Indian Contract Act, 1872" },
  { term: "Voidable Contract", meaning: "Contract that can be enforced or rescinded at the option of one party.", provisions: "Section 2(i), Indian Contract Act, 1872" },
  { term: "Breach of Contract", meaning: "Failure to perform contractual obligations.", provisions: "Section 73, Indian Contract Act, 1872" },
  { term: "Damages", meaning: "Monetary compensation awarded for loss or injury.", provisions: "Law of Contracts / Torts" },
  { term: "Nominal Damages", meaning: "Small sum awarded to recognize a legal wrong without substantial loss.", provisions: "Law of Contracts / Torts" },
  { term: "Specific Performance", meaning: "Court order directing a party to fulfill their contractual obligation.", provisions: "Specific Relief Act, 1963" },
  { term: "Insolvency", meaning: "State of being unable to pay debts as they fall due.", provisions: "Insolvency and Bankruptcy Code, 2016" },
  { term: "Bankruptcy", meaning: "Legal process where an insolvent debtor’s assets are distributed among creditors.", provisions: "Insolvency and Bankruptcy Code, 2016" },
  { term: "Arrest", meaning: "Taking a person into custody under authority of law.", provisions: "CrPC" },
  { term: "Remand", meaning: "Sending an accused person back to custody pending further proceedings.", provisions: "CrPC" },
  { term: "Charge", meaning: "Formal accusation of an offense.", provisions: "CrPC" },
  { term: "Cross-Examination", meaning: "Questioning of a witness by the opposing party.", provisions: "Indian Evidence Act, 1872" },
  { term: "Examination-in-Chief", meaning: "Initial questioning of a witness by the party who called them.", provisions: "Indian Evidence Act, 1872" },
  { term: "Ab Initio", meaning: "From the beginning – used to indicate that something was invalid from the start.", provisions: "General Legal Principle" },
  { term: "Ad Hoc", meaning: "For a specific purpose or situation, temporary in nature.", provisions: "General Legal Principle" },
  { term: "Adjournment Sine Die", meaning: "Adjournment of proceedings without assigning a day for resumption.", provisions: "CPC / CrPC" },
  { term: "Animus Possidendi", meaning: "Intention to possess – required element in adverse possession.", provisions: "General Property Law Principle" },
  { term: "Animus Nocendi", meaning: "Intention to harm – mental element in certain crimes.", provisions: "General Criminal Law Principle" },
  { term: "Assumpsit", meaning: "A legal action for breach of a simple contract.", provisions: "General Contract Law" },
  { term: "Autrefois Acquit", meaning: "Plea that the accused has been previously acquitted of the same offense.", provisions: "General Criminal Law Principle" },
  { term: "Autrefois Convict", meaning: "Plea that the accused has been previously convicted of the same offense.", provisions: "General Criminal Law Principle" },
  { term: "Causa Causans", meaning: "The immediate cause of damage, as opposed to a remote cause.", provisions: "General Legal Principle" },
  { term: "Causa Proxima", meaning: "The proximate or nearest cause of an event or injury.", provisions: "General Legal Principle" },
  { term: "Malfeasance", meaning: "Wrongful conduct by a public official.", provisions: "General Legal Principle" },
  { term: "Misfeasance", meaning: "Improper or unlawful performance of a lawful act.", provisions: "General Legal Principle" },
  { term: "Nonfeasance", meaning: "Failure to perform an act that is required by law.", provisions: "General Legal Principle" },
];



const styles = {
  page: {
    padding: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    background: "linear-gradient(to right, #efe8f5ff, #f2e9f8ff)", // soft green tones for legal theme
    minHeight: "100vh",
  },
  title: {
    fontSize: "42px",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "40px",
    color: "#4b1b5eff", // dark green for heading
    letterSpacing: "1px",
  },
  searchBar: {
    width: "100%",
    padding: "15px 18px",
    marginBottom: "40px",
    fontSize: "16px",
    borderRadius: "12px",
    border: "1px solid #e1c8e6ff",
    outline: "none",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
  cardHover: {
    transform: "translateY(-4px) scale(1.02)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
  },
  termTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#612e7dff",
  },
  definition: {
    fontSize: "15px",
    marginBottom: "10px",
    color: "#47374fff",
    lineHeight: "1.5",
  },
  provisions: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#c62828",
    marginTop: "auto",
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    color: "#616161",
    fontSize: "14px",
  },
};

const LegalTermsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredTerms = legalTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📖 Legal Terms Dictionary</h1>

      <input
        type="text"
        placeholder="🔍 Search legal terms..."
        style={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={styles.grid}>
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(hoveredIndex === index ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 style={styles.termTitle}>⚖️ {item.term}</h2>
              <p style={styles.definition}>{item.meaning}</p>
              <p style={styles.provisions}>📚 {item.provisions}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", fontSize: "18px", color: "#c62828" }}>
            ❌ No terms found matching your search.
          </p>
        )}
      </div>

      <p style={styles.footer}>
        © 2025 LawSimplify – Your complete legal dictionary for students
      </p>
    </div>
  );
};

export default LegalTermsPage;
