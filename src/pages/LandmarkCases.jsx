import React, { useState } from "react";

const caseSummaries = [
  {
    case: "Kesavananda Bharati v. State of Kerala",
    citation: "1973",
    court: "Supreme Court",
    facts: "Kesavananda Bharati, head of a Kerala religious mutt, challenged amendments curtailing judicial review and fundamental rights.",
    issue: "Whether Parliament can amend the Constitution to alter its 'basic structure'.",
    decision: "Parliament cannot alter the basic structure of the Constitution.",
    ratio: "Established the 'Basic Structure Doctrine'.",
    significance: "Limited Parliament’s power on constitutional amendments; ensured judiciary can review amendments.",
    provisions: "Articles 13, 368"
  },
  {
    case: "Maneka Gandhi v. Union of India",
    citation: "1978",
    court: "Supreme Court",
    facts: "Maneka Gandhi's passport was impounded without following due process, prompting her challenge.",
    issue: "Whether impounding a passport without due process violates right to personal liberty.",
    decision: "Law affecting personal liberty must be just, fair, and reasonable.",
    ratio: "Expanded interpretation of Article 21 to include right to travel abroad.",
    significance: "Broadened scope of Article 21; strengthened personal liberty protection.",
    provisions: "Article 21"
  },
  {
    case: "A.K. Gopalan v. State of Madras",
    citation: "1950",
    court: "Supreme Court",
    facts: "A.K. Gopalan challenged preventive detention under the Preventive Detention Act.",
    issue: "Whether preventive detention laws infringe upon fundamental rights.",
    decision: "Preventive detention upheld; Article 21 interpreted narrowly.",
    ratio: "Restricted scope of Article 21.",
    significance: "Limited personal liberty; later expanded by Maneka Gandhi.",
    provisions: "Article 21"
  },
  {
    case: "Shreya Singhal v. Union of India",
    citation: "2015",
    court: "Supreme Court",
    facts: "Challenged Section 66A of IT Act criminalizing offensive online content.",
    issue: "Whether Section 66A violates freedom of speech.",
    decision: "Section 66A struck down as unconstitutional.",
    ratio: "Online speech protected under Article 19(1)(a); arbitrary restrictions invalid.",
    significance: "Strengthened online freedom of speech.",
    provisions: "Article 19(1)(a)"
  },
  {
    case: "Vishakha v. State of Rajasthan",
    citation: "1997",
    court: "Supreme Court",
    facts: "PIL filed seeking guidelines to prevent sexual harassment after gang rape of a social worker.",
    issue: "Whether absence of legal provisions on sexual harassment violates women's rights.",
    decision: "Supreme Court issued Vishakha Guidelines for workplace harassment.",
    ratio: "Sexual harassment recognized as violation of fundamental rights.",
    significance: "Landmark case for women's workplace safety.",
    provisions: "Articles 14, 19, 21"
  },
  {
    case: "Indira Gandhi v. Raj Narain",
    citation: "1975",
    court: "Supreme Court",
    facts: "Indira Gandhi's election challenged for alleged malpractice.",
    issue: "Whether election violation can nullify results and limit executive powers.",
    decision: "Election annulled; set limits on executive powers.",
    ratio: "Affirmed rule of law and democratic accountability.",
    significance: "Strengthened judicial oversight over executive.",
    provisions: "Articles 102, 356"
  },
  {
    case: "M.C. Mehta v. Union of India (Oleum Gas Leak Case)",
    citation: "1987",
    court: "Supreme Court",
    facts: "Gas leak from Oleum plant in Delhi caused environmental and public health hazard.",
    issue: "Environmental protection and corporate liability.",
    decision: "Strict liability applied; company held responsible.",
    ratio: "Companies must prevent environmental harm.",
    significance: "Landmark environmental judgment in India.",
    provisions: "Environmental laws, Public Liability Insurance Act"
  },
  {
    case: "R. v. Joginder Singh",
    citation: "1950",
    court: "Supreme Court",
    facts: "Case on fundamental rights during criminal investigation.",
    issue: "Right against self-incrimination.",
    decision: "Police cannot coerce confessions violating rights.",
    ratio: "Protection under Article 20(3) reinforced.",
    significance: "Strengthened protection of individual rights in criminal procedure.",
    provisions: "Article 20(3)"
  },
  {
    case: "Kesavananda Bharati II",
    citation: "1975",
    court: "Supreme Court",
    facts: "Further clarification on amendments of Constitution post initial Kesavananda verdict.",
    issue: "Scope of constitutional amendments.",
    decision: "Basic structure doctrine reaffirmed.",
    ratio: "Limited Parliament's power to amend Constitution.",
    significance: "Reinforced limits on constitutional amendments.",
    provisions: "Articles 13, 368"
  },
  {
    case: "SR Bommai v. Union of India",
    citation: "1994",
    court: "Supreme Court",
    facts: "Dismissal of state governments under Article 356 challenged.",
    issue: "Judicial review of President’s Rule.",
    decision: "President’s Rule can be challenged in court.",
    ratio: "Strengthened judicial review of constitutional powers.",
    significance: "Safeguarded federalism; prevented misuse of Article 356.",
    provisions: "Article 356"
  },
  {
    case: "Minerva Mills v. Union of India",
    citation: "1980",
    court: "Supreme Court",
    facts: "Challenge to 42nd Constitutional Amendment curbing judicial review.",
    issue: "Whether Parliament can abridge fundamental rights.",
    decision: "Basic structure doctrine reinforced; amendment partially struck down.",
    ratio: "Fundamental rights and judicial review are part of Constitution’s basic structure.",
    significance: "Reinforced limits on Parliament’s power.",
    provisions: "Articles 13, 368"
  },
  {
    case: "Mohammed Ahmed Khan v. Shah Bano Begum",
    citation: "1985",
    court: "Supreme Court",
    facts: "Maintenance rights of divorced Muslim woman challenged under personal law.",
    issue: "Right to maintenance under secular law versus personal law.",
    decision: "Court awarded maintenance under secular law.",
    ratio: "Balances personal law with fundamental rights.",
    significance: "Led to enactment of Muslim Women (Protection of Rights on Divorce) Act.",
    provisions: "Articles 14, 21"
  },
  {
    case: "D.K. Basu v. State of West Bengal",
    citation: "1997",
    court: "Supreme Court",
    facts: "Custodial deaths and lack of safeguards in police custody.",
    issue: "Protection of human rights during detention.",
    decision: "Guidelines issued for arrests and detention.",
    ratio: "Ensures fundamental rights are not violated in custody.",
    significance: "Strengthened human rights safeguards in police procedures.",
    provisions: "Articles 20, 21, 22"
  },
  {
    case: "MC Mehta v. Kamal Nath",
    citation: "1997",
    court: "Supreme Court",
    facts: "Industrial pollution by private companies harming environment.",
    issue: "Polluter’s liability for environmental harm.",
    decision: "Company held liable and corrective actions mandated.",
    ratio: "Environmental protection prioritized over economic interest.",
    significance: "Strengthened 'polluter pays' principle in India.",
    provisions: "Articles 21, Environmental Laws"
  },
  {
    case: "State of Madras v. Champakam Dorairajan",
    citation: "1951",
    court: "Supreme Court",
    facts: "Caste-based reservations in educational institutions challenged.",
    issue: "Whether caste-based quotas violate equality.",
    decision: "Article 15 upheld; limited scope clarified.",
    ratio: "Guided future reservation policies in India.",
    significance: "Laid foundation for reservation jurisprudence.",
    provisions: "Articles 15, 29"
  },
  {
    case: "L. Chandra Kumar v. Union of India",
    citation: "1997",
    court: "Supreme Court",
    facts: "Questioned judicial review powers over administrative tribunals.",
    issue: "Whether tribunals are immune from judicial review.",
    decision: "Tribunals are subject to judicial review.",
    ratio: "Judiciary retains power to review constitutional validity.",
    significance: "Strengthened judicial oversight on administrative bodies.",
    provisions: "Articles 136, 226, 32"
  },
  {
    case: "R.K. Garg v. Union of India",
    citation: "1981",
    court: "Supreme Court",
    facts: "Price control on essential commodities challenged.",
    issue: "Reasonableness of trade restrictions under Article 301.",
    decision: "Restrictions must be reasonable and in public interest.",
    ratio: "Reasonable restrictions allowed for public welfare.",
    significance: "Balanced free trade with public interest.",
    provisions: "Article 301"
  },
  {
    case: "Kesavananda Bharati III",
    citation: "1983",
    court: "Supreme Court",
    facts: "Further interpretation of basic structure doctrine.",
    issue: "Scope and limits of constitutional amendments.",
    decision: "Doctrine reaffirmed and strengthened.",
    ratio: "Ensures fundamental rights and structure remain inviolable.",
    significance: "Reiterated judiciary’s role in protecting basic structure.",
    provisions: "Articles 13, 368"
  },
  {
    case: "Olga Tellis v. Bombay Municipal Corporation",
    citation: "1985",
    court: "Supreme Court",
    facts: "Eviction of pavement dwellers challenged.",
    issue: "Right to livelihood under Article 21.",
    decision: "Eviction without rehabilitation is unconstitutional.",
    ratio: "Right to life includes right to livelihood.",
    significance: "Expanded interpretation of right to life.",
    provisions: "Articles 14, 21"
  },
  {
    case: "Manohar Lal Sharma v. Union of India",
    citation: "2004",
    court: "Supreme Court",
    facts: "Arbitrary government actions challenged in administrative matters.",
    issue: "Protection against arbitrary executive power.",
    decision: "Due process and reasonableness required.",
    ratio: "Executive actions must be fair and just.",
    significance: "Strengthened procedural fairness in governance.",
    provisions: "Articles 14, 19, 21"
  },
  {
    case: "Indian Young Lawyers Association v. State of Kerala (Sabarimala Case)",
    citation: "2018",
    court: "Supreme Court",
    facts: "Entry of women into Sabarimala Temple challenged.",
    issue: "Equality versus religious freedom.",
    decision: "Temple entry cannot discriminate based on gender.",
    ratio: "Gender equality upheld over customary practices.",
    significance: "Major milestone for women’s rights and gender equality.",
    provisions: "Articles 14, 15, 25"
  },
  {
    case: "Anuradha Bhasin v. Union of India",
    citation: "2020",
    court: "Supreme Court",
    facts: "Internet shutdown in Jammu & Kashmir challenged.",
    issue: "Freedom of speech and communication under Article 19.",
    decision: "Shutdown must be proportionate and justified.",
    ratio: "Right to communication is part of fundamental rights.",
    significance: "Expanded digital rights under fundamental rights framework.",
    provisions: "Article 19(1)(a), 21"
  },
  {
    case: "Navtej Singh Johar v. Union of India",
    citation: "2018",
    court: "Supreme Court",
    facts: "Challenge to Section 377 IPC criminalizing consensual same-sex relations.",
    issue: "Right to equality and personal liberty.",
    decision: "Section 377 partially struck down.",
    ratio: "Decriminalized consensual same-sex relations.",
    significance: "Major milestone for LGBTQ+ rights in India.",
    provisions: "Articles 14, 15, 21"
  },
  {
    case: "Shayara Bano v. Union of India",
    citation: "2017",
    court: "Supreme Court",
    facts: "Triple talaq practice challenged.",
    issue: "Right to equality and gender justice.",
    decision: "Triple talaq declared unconstitutional.",
    ratio: "Protects Muslim women’s fundamental rights.",
    significance: "Strengthened women’s rights in personal law.",
    provisions: "Articles 14, 21"
  },
  {
    case: "K.S. Puttaswamy v. Union of India",
    citation: "2017",
    court: "Supreme Court",
    facts: "Aadhaar and right to privacy challenged.",
    issue: "Right to privacy as fundamental right.",
    decision: "Privacy is part of Article 21.",
    ratio: "Strengthened protection of personal data and liberty.",
    significance: "Landmark case for data protection and privacy rights.",
    provisions: "Article 21"
  },
  {
    case: "I.R. Coelho v. State of Tamil Nadu",
    citation: "2007",
    court: "Supreme Court",
    facts: "Validity of laws placed under Ninth Schedule challenged.",
    issue: "Judicial review versus legislative power.",
    decision: "Basic structure doctrine applies even to Ninth Schedule.",
    ratio: "Ensures Constitution supremacy over legislature.",
    significance: "Limits Parliament’s immunity under Ninth Schedule.",
    provisions: "Articles 13, 368"
  },
  {
    case: "Balco Employees Union v. Union of India",
    citation: "2002",
    court: "Supreme Court",
    facts: "Privatization of public sector challenged affecting workers’ rights.",
    issue: "Workers’ rights and administrative procedures.",
    decision: "Proper procedure required for transfer and privatization.",
    ratio: "Protects labor rights during administrative reforms.",
    significance: "Balanced economic reforms with workers’ rights.",
    provisions: "Articles 14, 19, 21"
  },
  {
    case: "Union of India v. T.M.A. Pai Foundation",
    citation: "2002",
    court: "Supreme Court",
    facts: "Regulation of private educational institutions challenged.",
    issue: "Right to establish educational institutions.",
    decision: "Regulations allowed but autonomy protected.",
    ratio: "Balances educational rights with public interest.",
    significance: "Defined scope of autonomy for private institutions.",
    provisions: "Articles 19(1)(g), 21"
  },
  {
    case: "Aruna Shanbaug v. Union of India",
    citation: "2011",
    court: "Supreme Court",
    facts: "Passive euthanasia for a long-term comatose patient.",
    issue: "Right to life and death under Article 21.",
    decision: "Passive euthanasia allowed under strict guidelines.",
    ratio: "Human dignity recognized as part of Article 21.",
    significance: "Landmark for euthanasia jurisprudence in India.",
    provisions: "Articles 21"
  },
  {
    case: "Naz Foundation v. Government of NCT of Delhi",
    citation: "2009",
    court: "Delhi High Court",
    facts: "Section 377 IPC challenged for criminalizing consensual gay sex.",
    issue: "Right to equality and liberty.",
    decision: "Section 377 read down for consenting adults.",
    ratio: "Paved way for Navtej Singh Johar case.",
    significance: "Key milestone for LGBTQ+ rights.",
    provisions: "Articles 14, 15, 21"
  },
  {
    case: "Romesh Thapar v. State of Madras",
    citation: "1950",
    court: "Supreme Court",
    facts: "Romesh Thapar's publication was banned under the Madras Maintenance of Public Order Act, 1949.",
    issue: "Whether the ban violated the freedom of speech and expression under Article 19(1)(a).",
    decision: "The ban was unconstitutional; freedom of speech includes freedom to propagate ideas.",
    ratio: "Freedom of speech includes the freedom to propagate ideas; restrictions must be reasonable.",
    significance: "Strengthened the interpretation of freedom of speech and expression.",
    provisions: "Article 19(1)(a)"
  },
  {
    case: "Minerva Mills v. Union of India",
    citation: "1980",
    court: "Supreme Court",
    facts: "Challenge to the 42nd Amendment's clauses that curtailed judicial review and fundamental rights.",
    issue: "Whether the Parliament could amend the Constitution to alter its basic structure.",
    decision: "The Court held that the Parliament cannot alter the basic structure of the Constitution.",
    ratio: "Reaffirmed the basic structure doctrine established in Kesavananda Bharati case.",
    significance: "Reinforced the limits on Parliament's power to amend the Constitution.",
    provisions: "Articles 13, 368"
  },
  {
    case: "Olga Tellis v. Bombay Municipal Corporation",
    citation: "1985",
    court: "Supreme Court",
    facts: "Eviction of pavement dwellers in Mumbai without providing alternative accommodation.",
    issue: "Whether the right to livelihood is a part of the right to life under Article 21.",
    decision: "Eviction without rehabilitation is unconstitutional; right to livelihood is part of right to life.",
    ratio: "Right to life includes the right to livelihood; eviction without rehabilitation is a violation.",
    significance: "Expanded the scope of the right to life under Article 21.",
    provisions: "Articles 14, 21"
  },
  {
    case: "Indra Sawhney v. Union of India",
    citation: "1992",
    court: "Supreme Court",
    facts: "Challenge to the implementation of reservations for backward classes in government jobs.",
    issue: "Whether caste can be used as a criterion for identifying backward classes for reservations.",
    decision: "Caste can be used as a criterion; set a 50% ceiling for reservations.",
    ratio: "Established the 'creamy layer' concept and capped reservations at 50%.",
    significance: "Clarified the scope and limits of reservations in India.",
    provisions: "Article 16"
  },
  {
    case: "S. R. Bommai v. Union of India",
    citation: "1994",
    court: "Supreme Court",
    facts: "Dismissal of state governments under Article 356 challenged.",
    issue: "Whether the imposition of President's Rule in states is subject to judicial review.",
    decision: "President's Rule can be challenged in court; reaffirmed federalism.",
    ratio: "Strengthened judicial review of executive actions under Article 356.",
    significance: "Safeguarded federalism and prevented misuse of Article 356.",
    provisions: "Article 356"
  },
  {
    case: "Shayara Bano v. Union of India",
    citation: "2017",
    court: "Supreme Court",
    facts: "Challenge to the practice of triple talaq (instant divorce) in Muslim personal law.",
    issue: "Whether triple talaq is unconstitutional and violates fundamental rights.",
    decision: "Triple talaq declared unconstitutional; practice deemed arbitrary and discriminatory.",
    ratio: "Protected Muslim women's fundamental rights under Articles 14 and 21.",
    significance: "Strengthened women's rights in personal law.",
    provisions: "Articles 14, 21"
  },
  {
    case: "K.S. Puttaswamy v. Union of India (Aadhaar Case)",
    citation: "2017",
    court: "Supreme Court",
    facts: "Challenge to the constitutional validity of the Aadhaar scheme.",
    issue: "Whether the Aadhaar scheme violates the right to privacy under Article 21.",
    decision: "Aadhaar is constitutionally valid; right to privacy is a fundamental right.",
    ratio: "Established the right to privacy as a fundamental right under Article 21.",
    significance: "Landmark case for data protection and privacy rights.",
    provisions: "Article 21"
  },
  {
    case: "I.R. Coelho v. State of Tamil Nadu",
    citation: "2007",
    court: "Supreme Court",
    facts: "Validity of laws placed under the Ninth Schedule challenged.",
    issue: "Whether laws placed under the Ninth Schedule are immune from judicial review.",
    decision: "Basic structure doctrine applies even to laws under the Ninth Schedule.",
    ratio: "Ensured Constitution's supremacy over legislature.",
    significance: "Limited Parliament’s immunity under Ninth Schedule.",
    provisions: "Articles 13, 368"
  },
  {
    case: "Association for Democratic Reforms v. Union of India",
    citation: "2024",
    court: "Supreme Court",
    facts: "Challenge to the Union’s 2018 Electoral Bonds scheme.",
    issue: "Whether the Electoral Bonds scheme violates the voters’ right to information under Article 19(1)(a).",
    decision: "Struck down the Electoral Bonds scheme; violated right to information.",
    ratio: "Ensured transparency in electoral funding.",
    significance: "Reformed electoral transparency and accountability.",
    provisions: "Article 19(1)(a)"
  },
  {
    case: "A.K. Gopalan v. State of Madras",
    citation: "1950",
    court: "Supreme Court",
    facts: "Preventive detention of A.K. Gopalan challenged under the Preventive Detention Act.",
    issue: "Whether preventive detention violates fundamental rights under Articles 19 and 21.",
    decision: "Preventive detention upheld; Article 21 interpreted narrowly.",
    ratio: "Narrow interpretation of personal liberty; later broadened by Maneka Gandhi.",
    significance: "Limited personal liberty protections initially; shaped future law on detention.",
    provisions: "Articles 19, 21"
  },
  {
    case: "Maneka Gandhi v. Union of India",
    citation: "1978",
    court: "Supreme Court",
    facts: "Maneka Gandhi's passport impounded without due process.",
    issue: "Whether personal liberty includes the right to travel abroad and due process.",
    decision: "Law affecting personal liberty must be just, fair, and reasonable.",
    ratio: "Broadened interpretation of Article 21; read Article 14 into Article 21.",
    significance: "Expanded personal liberty and due process in India.",
    provisions: "Articles 14, 21"
  },
  {
    case: "S.R. Bommai v. Union of India",
    citation: "1994",
    court: "Supreme Court",
    facts: "Dismissal of state governments under Article 356 challenged.",
    issue: "Judicial review of President's Rule.",
    decision: "President's Rule can be challenged in court.",
    ratio: "Strengthened federalism and judicial review of executive powers.",
    significance: "Prevented misuse of Article 356 and strengthened democracy.",
    provisions: "Article 356"
  },
  {
    case: "Vishakha v. State of Rajasthan",
    citation: "1997",
    court: "Supreme Court",
    facts: "PIL filed after gang rape of social worker to prevent sexual harassment at workplace.",
    issue: "Whether absence of legal provisions violates women's rights.",
    decision: "Supreme Court issued Vishakha Guidelines.",
    ratio: "Recognized sexual harassment as violation of fundamental rights.",
    significance: "Landmark case for workplace safety for women.",
    provisions: "Articles 14, 19, 21"
  },
  {
    case: "D.K. Basu v. State of West Bengal",
    citation: "1997",
    court: "Supreme Court",
    facts: "Custodial deaths and lack of safeguards challenged.",
    issue: "Protection of human rights during arrest and detention.",
    decision: "Guidelines issued for arrests and detention.",
    ratio: "Ensures fundamental rights are not violated in custody.",
    significance: "Strengthened human rights safeguards.",
    provisions: "Articles 20, 21, 22"
  },
  {
    case: "Indira Gandhi v. Raj Narain",
    citation: "1975",
    court: "Supreme Court",
    facts: "Indira Gandhi's election challenged for malpractice.",
    issue: "Whether election violation can nullify results and limit executive powers.",
    decision: "Election annulled; limits set on executive powers.",
    ratio: "Affirmed rule of law and democratic accountability.",
    significance: "Strengthened judicial oversight over executive.",
    provisions: "Articles 102, 356"
  },
  {
    case: "Minerva Mills v. Union of India",
    citation: "1980",
    court: "Supreme Court",
    facts: "Challenge to 42nd Amendment curbing judicial review.",
    issue: "Whether Parliament can abridge fundamental rights.",
    decision: "Basic structure doctrine reinforced; amendment partially struck down.",
    ratio: "Fundamental rights and judicial review are part of Constitution’s basic structure.",
    significance: "Reinforced limits on Parliament’s power.",
    provisions: "Articles 13, 368"
  },
  {
    case: "Mohammed Ahmed Khan v. Shah Bano Begum",
    citation: "1985",
    court: "Supreme Court",
    facts: "Maintenance rights of divorced Muslim woman challenged under personal law.",
    issue: "Right to maintenance under secular law versus personal law.",
    decision: "Court awarded maintenance under secular law.",
    ratio: "Balances personal law with fundamental rights.",
    significance: "Led to enactment of Muslim Women (Protection of Rights on Divorce) Act.",
    provisions: "Articles 14, 21"
  },
  {
    case: "MC Mehta v. Union of India (Oleum Gas Leak)",
    citation: "1987",
    court: "Supreme Court",
    facts: "Gas leak in Delhi caused environmental and public health hazards.",
    issue: "Environmental protection and corporate liability.",
    decision: "Strict liability applied; company held responsible.",
    ratio: "Companies must prevent environmental harm.",
    significance: "Landmark environmental judgment.",
    provisions: "Environmental laws, Public Liability Insurance Act"
  },
  {
    case: "MC Mehta v. Kamal Nath",
    citation: "1997",
    court: "Supreme Court",
    facts: "Industrial pollution by private company harming environment.",
    issue: "Polluter’s liability for environmental harm.",
    decision: "Company held liable; corrective actions mandated.",
    ratio: "Environmental protection prioritized over economic interest.",
    significance: "Strengthened 'polluter pays' principle.",
    provisions: "Articles 21, Environmental laws"
  },
  {
    case: "L. Chandra Kumar v. Union of India",
    citation: "1997",
    court: "Supreme Court",
    facts: "Questioned judicial review powers over administrative tribunals.",
    issue: "Whether tribunals are immune from judicial review.",
    decision: "Tribunals are subject to judicial review.",
    ratio: "Judiciary retains power to review constitutional validity.",
    significance: "Strengthened judicial oversight on administrative bodies.",
    provisions: "Articles 136, 226, 32"
  },
  {
    case: "Naz Foundation v. Govt. of NCT Delhi",
    citation: "2009",
    court: "Delhi High Court",
    facts: "Section 377 IPC challenged for criminalizing consensual gay sex.",
    issue: "Right to equality and liberty.",
    decision: "Section 377 read down for consenting adults.",
    ratio: "Paved way for Navtej Singh Johar case.",
    significance: "Key milestone for LGBTQ+ rights.",
    provisions: "Articles 14, 15, 21"
  },
  {
    case: "Navtej Singh Johar v. Union of India",
    citation: "2018",
    court: "Supreme Court",
    facts: "Challenge to Section 377 IPC criminalizing consensual same-sex relations.",
    issue: "Right to equality and personal liberty.",
    decision: "Section 377 partially struck down.",
    ratio: "Decriminalized consensual same-sex relations.",
    significance: "Major milestone for LGBTQ+ rights in India.",
    provisions: "Articles 14, 15, 21"
  },
  {
    case: "Indian Young Lawyers Association v. State of Kerala (Sabarimala Case)",
    citation: "2018",
    court: "Supreme Court",
    facts: "Entry of women into Sabarimala Temple challenged.",
    issue: "Equality versus religious freedom.",
    decision: "Temple entry cannot discriminate based on gender.",
    ratio: "Gender equality upheld over customary practices.",
    significance: "Milestone for women’s rights and gender equality.",
    provisions: "Articles 14, 15, 25"
  },
  {
    case: "Anuradha Bhasin v. Union of India",
    citation: "2020",
    court: "Supreme Court",
    facts: "Internet shutdown in Jammu & Kashmir challenged.",
    issue: "Freedom of speech and communication under Article 19.",
    decision: "Shutdown must be proportionate and justified.",
    ratio: "Right to communication is part of fundamental rights.",
    significance: "Expanded digital rights under fundamental rights framework.",
    provisions: "Article 19(1)(a), 21"
  },
  {
    case: "Union of India v. T.M.A. Pai Foundation",
    citation: "2002",
    court: "Supreme Court",
    facts: "Regulation of private educational institutions challenged.",
    issue: "Right to establish educational institutions.",
    decision: "Regulations allowed but autonomy protected.",
    ratio: "Balances educational rights with public interest.",
    significance: "Defined scope of autonomy for private institutions.",
    provisions: "Articles 19(1)(g), 21"
  },
  {
    case: "Aruna Shanbaug v. Union of India",
    citation: "2011",
    court: "Supreme Court",
    facts: "Passive euthanasia for long-term comatose patient.",
    issue: "Right to life and death under Article 21.",
    decision: "Passive euthanasia allowed under strict guidelines.",
    ratio: "Human dignity recognized as part of Article 21.",
    significance: "Landmark for euthanasia jurisprudence in India.",
    provisions: "Articles 21"
  }
];

const styles = {
  page: {
    padding: "30px",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  searchBar: {
    width: "100%",
    padding: "12px 20px",
    marginBottom: "30px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    marginBottom: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    transition: "box-shadow 0.3s",
  },
  caseTitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#2980b9",
  },
  subInfo: {
    fontSize: "14px",
    fontStyle: "italic",
    color: "#7f8c8d",
    marginBottom: "10px",
  },
  fact: { marginBottom: "6px", color: "#34495e" },
  issue: { marginBottom: "6px", color: "#34495e" },
  decision: { marginBottom: "6px", color: "#34495e" },
  ratio: { marginBottom: "6px", color: "#34495e" },
  significance: { marginBottom: "6px", fontWeight: "bold", color: "#27ae60" },
  provisions: { marginBottom: "6px", fontWeight: "bold", color: "#c0392b" },
  label: { fontWeight: "bold" },
  footer: { textAlign: "center", marginTop: "40px", color: "#7f8c8d" },
};

const CaseSummariesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter cases based on search term
  const filteredCases = caseSummaries.filter(
    (item) =>
      item.case.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.facts.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.issue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🎓 Landmark Case Summaries</h1>

      <input
        type="text"
        placeholder="🔍 Search by case name, facts, or issue..."
        style={styles.searchBar}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredCases.length > 0 ? (
        filteredCases.map((item, index) => (
          <div key={index} style={styles.card}>
            <h2 style={styles.caseTitle}>📄 {item.case}</h2>
            {item.citation && item.court && (
              <p style={styles.subInfo}>
                {item.court} | {item.citation}
              </p>
            )}
            <p style={styles.fact}>
              <span style={styles.label}>📜 Facts:</span> {item.facts}
            </p>
            <p style={styles.issue}>
              <span style={styles.label}>💡 Issue:</span> {item.issue}
            </p>
            <p style={styles.decision}>
              <span style={styles.label}>⚖️ Decision:</span> {item.decision}
            </p>
            <p style={styles.ratio}>
              <span style={styles.label}>🔑 Ratio:</span> {item.ratio}
            </p>
            {item.significance && (
              <p style={styles.significance}>
                <span style={styles.label}>🌟 Significance:</span> {item.significance}
              </p>
            )}
            {item.provisions && (
              <p style={styles.provisions}>
                <span style={styles.label}>📚 Provisions:</span> {item.provisions}
              </p>
            )}
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", fontSize: "18px", color: "#e74c3c" }}>
          No cases found matching your search.
        </p>
      )}

      <p style={styles.footer}>© 2025 LawSimplify – Your complete case bank for students</p>
    </div>
  );
};

export default CaseSummariesPage;