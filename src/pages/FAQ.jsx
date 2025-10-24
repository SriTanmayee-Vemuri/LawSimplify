import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
const faqs = [
    {
        question: "How can I file an FIR?",
        answer:
            "You can file an FIR at the nearest police station in person or online if your state police website supports it. Provide all details like date, time, place, and description of the incident. Keep a copy or acknowledgment for your records.",
    },
    {
        question: "How can I apply for free legal aid?",
        answer:
            "If you cannot afford a lawyer, you can apply for legal aid through your state or district legal services authority. Fill out the application form, provide income proof, and the nature of your case. A lawyer will be assigned to help you.",
    },
    {
        question: "What are my rights as a tenant?",
        answer:
            "Tenants have the right to a habitable property, protection against illegal eviction, and privacy. You should have a written rental agreement stating rent, deposit, and maintenance responsibilities.",
    },
    {
        question: "What can I do if I receive defective goods or services?",
        answer:
            "You can file a complaint with the local consumer forum or online portal. Keep all receipts, bills, and evidence. The forum can help you get a replacement, refund, or compensation.",
    },
    {
        question: "What legal steps can I take if I face domestic violence?",
        answer:
            "You can file a complaint under the Protection of Women from Domestic Violence Act at the local police station or approach a protection officer. Immediate relief like protection orders, residence rights, and maintenance can be sought.",
    },
    {
        question: "What should I do if I face workplace harassment?",
        answer:
            "Report the incident to your employer or HR department. You can also approach the Internal Complaints Committee under the Sexual Harassment of Women at Workplace Act. Keep records of emails, messages, and evidence.",
    },
    {
        question: "How can I report online fraud or harassment?",
        answer:
            "File a complaint with the local police or the official cybercrime portal of India. Include screenshots, messages, and any evidence. Authorities will guide you on the investigation process.",
    },
    {
        question: "How can I resolve disputes over property ownership?",
        answer:
            "First, try mediation or negotiation. If unresolved, you may file a civil suit in a competent court. Keep all property documents, sale deeds, and proof of ownership ready.",
    },
    {
        question: "What is the process for drafting a will?",
        answer:
            "A will is a legal document specifying how your assets will be distributed after your death. You should clearly list your assets, beneficiaries, and appoint an executor. It must be signed by you in the presence of at least two witnesses. Registration is optional but recommended for added legal validity.",
    },
    {
        question: "How do I register a marriage legally?",
        answer:
            "To register a marriage, both parties must provide proof of age, address, and identity. Registration is done under the Special Marriage Act (for interfaith or civil marriages) or the relevant personal law. Submit the application to the local marriage registrar, along with affidavits and required documents. A marriage certificate is issued after verification.",
    },
    {
        question: "What legal actions can I take for a breach of contract?",
        answer:
            "If someone fails to fulfill a contract, you can first send a legal notice demanding compliance or compensation. If unresolved, you may file a civil suit for breach of contract claiming damages or specific performance. Keep all contract documents, correspondence, and evidence to support your claim.",
    },
    {
        question: "How can I protect my intellectual property rights?",
        answer:
            "Intellectual property (IP) includes trademarks, copyrights, patents, and designs. You should register your IP with the respective government authority. This ensures legal protection against unauthorized use. In case of infringement, you can file a complaint in court or send cease-and-desist notices.",
    },
    {
        question: "What are my rights as a consumer?",
        answer:
            "Consumers have rights under the Consumer Protection Act, including the right to be informed, right to choose, right to safety, and right to seek redressal. If a product or service is defective or deficient, you can file a complaint with the consumer forum or online portal to claim a refund, replacement, or compensation.",
    },
    {
        question: "What is the legal procedure for filing a cybercrime complaint?",
        answer:
            "Cybercrime complaints can be filed at the local police station or via the official cybercrime portal of India. Include all relevant information such as screenshots, emails, or messages. Authorities will register the complaint, investigate, and take action against the offender under the IT Act.",
    },
    {
        question: "How do I apply for a legal name change?",
        answer:
            "To change your name legally, you must first publish a notice in the official gazette. Then, submit an affidavit stating the reason for the change along with identity proof to a local notary. The change is legally recognized once it is published in the Gazette of India or the state gazette.",
    },
    {
        question: "What steps can I take if I face harassment on social media?",
        answer:
            "Collect evidence of harassment, including screenshots, messages, or videos. Report the incident to the platform and also file a complaint with local police or the cybercrime cell. Legal actions may include injunctions, restraining orders, or prosecution under relevant IT and IPC provisions.",
    },
    {
        question: "How do I register a property or land legally?",
        answer:
            "Property registration is mandatory under the Registration Act. You need to submit the sale deed, identity proof, and property documents to the sub-registrar office. Pay the applicable stamp duty and registration fee. After verification, the property is legally registered in your name, providing protection against disputes.",
    },
    {
        question: "What legal recourse do I have for harassment by neighbors?",
        answer:
            "You can first attempt to resolve the matter amicably. If harassment persists, file a complaint with the local police or file a civil suit for nuisance. Keep evidence such as videos, photos, or witnesses to support your claim. Courts can grant restraining orders or compensation if harassment is proven.",
    },
    {
        question: "How do I file a complaint against a government department?",
        answer:
            "Complaints against government departments can be filed via the public grievance portal or directly at the concerned office. Provide all relevant details and documents. If the complaint is not resolved, you may approach higher authorities, Ombudsman, or file a writ petition in the court for redressal.",
    },
    {
        question: "What is the procedure for filing a PIL (Public Interest Litigation)?",
        answer:
            "A PIL can be filed in a High Court or the Supreme Court on matters affecting the public interest, such as environment, human rights, or social issues. You do not need to be directly affected. Include factual details, evidence, and the relief sought. The court may accept or reject the PIL based on its merit.",
    },
    {
        question: "What is the process to obtain a police clearance certificate?",
        answer:
            "A police clearance certificate (PCC) is issued to verify that an individual has no criminal record. You must apply at your local police station or online portal, provide ID proof, address proof, and passport details if required. After verification, the PCC is issued for employment, travel, or visa purposes.",
    },
    {
        question: "How do I register a trademark for my business?",
        answer:
            "To protect your brand or logo, you can register a trademark with the Controller General of Patents, Designs, and Trademarks. Submit the application online, provide details of the trademark, business, and goods/services, and pay the fees. After examination and publication, your trademark is registered if there are no objections.",
    },
    {
        question: "What is the procedure for obtaining a PAN card or updating it?",
        answer:
            "Apply through the official NSDL or UTIITSL portals, providing identity proof, address proof, and photographs. For updates, submit the PAN correction form with the relevant documents. PAN cards are necessary for tax filing, banking, and financial transactions.",
    },
    {
        question: "How do I file an RTI application to seek government information?",
        answer:
            "You can file a Right to Information (RTI) application to any public authority by submitting the application online or at the designated Public Information Officer (PIO). Include your question clearly and pay the nominal application fee. The authority must respond within 30 days, providing the requested information.",
    },
    {
        question: "What legal steps can I take against harassment or bullying at school?",
        answer:
            "Report the incident to the school authorities or management. If unresolved, approach the child protection authorities or local police. Laws like the Protection of Children from Sexual Offences (POCSO) Act and Right to Education Act provide legal remedies and protection for children.",
    },
    {
        question: "How do I apply for a change of address in official documents?",
        answer:
            "For documents like Aadhar, passport, or driving license, submit an online or offline application with valid address proof. Each government department has a specific procedure and verification process, after which your address will be updated.",
    },
    {
        question: "What is the process to contest a traffic challan?",
        answer:
            "You can contest a traffic challan in the local traffic police court or online portal. Submit evidence supporting your claim, pay any required fees for contesting, and appear on the scheduled hearing date. The court may dismiss or reduce the penalty if your case is valid.",
    },
    {
        question: "How can I obtain legal guardianship for a minor?",
        answer:
            "Apply to the local district court under the Guardians and Wards Act. Provide proof of relationship, financial capability, and reason for guardianship. The court will evaluate the minor's best interest before granting guardianship.",
    },
    {
        question: "What are the steps to register a company or business in India?",
        answer:
            "You need to apply online through the Ministry of Corporate Affairs portal, choose the business type (LLP, Pvt Ltd, etc.), submit documents (ID proof, address proof, PAN), and pay fees. Once approved, you receive a certificate of incorporation.",
    },
    {
        question: "How do I claim compensation for road accidents?",
        answer:
            "File a claim under the Motor Vehicles Act with your insurance provider. You can also approach the Motor Accident Claims Tribunal (MACT) for legal compensation. Keep evidence like accident reports, medical bills, and witness statements to support your claim.",
    },
    {
        question: "What is the process to register a birth or death certificate?",
        answer:
            "Apply to the local municipal office or online portal within the stipulated time frame (birth within 21 days, death within 21 days). Provide hospital or family records as proof. The certificate serves as official proof for identity and legal purposes.",
    },
    {
        question: "How can I file a complaint against a corrupt government official?",
        answer:
            "You can file a complaint with the Anti-Corruption Bureau or the Lokayukta in your state. Include evidence such as documents, videos, or witness statements. Complaints can also be made online in many states through dedicated portals.",
    },
    {
        question: "What are my rights under the Consumer Protection Act for online shopping?",
        answer:
            "If you receive defective goods or services online, you can file a complaint with the consumer forum. Keep invoices, screenshots, and communication with the seller. You may claim replacement, refund, or compensation for losses.",
    },
    {
        question: "How do I register a complaint for medical negligence?",
        answer:
            "You can file a complaint with the hospital authorities first. If unresolved, approach the Consumer Court or State Medical Council. Provide medical records, bills, and evidence of negligence. The court or council may direct compensation or disciplinary action.",
    },
    {
        question: "What is the procedure for applying for a divorce?",
        answer:
            "File a petition in the family court under the relevant personal law (Hindu Marriage Act, Special Marriage Act, etc.). Include grounds for divorce, proof of marriage, and any supporting evidence. The court may grant divorce after hearings, reconciliation attempts, and legal procedures.",
    },
    {
        question: "How can I contest a will if I suspect fraud?",
        answer:
            "You can file a civil suit in a competent court challenging the validity of the will. Provide evidence of undue influence, coercion, or forgery. The court may examine witnesses, documents, and other proofs before deciding.",
    },
    {
        question: "What is the process for registering a partnership deed?",
        answer:
            "Draft a partnership deed including the names of partners, capital contributions, profit-sharing ratio, and other terms. Submit it to the Registrar of Firms in your state with the required fees. Registration is optional but provides legal validity and helps in dispute resolution.",
    },
    {
        question: "How do I apply for legal aid for criminal cases?",
        answer:
            "You can approach the District Legal Services Authority (DLSA) and submit an application stating your financial status and details of the criminal case. Eligible applicants will be assigned a lawyer free of cost.",
    },
    {
        question: "What are my rights under the Right to Education Act?",
        answer:
            "Every child aged 6-14 has the right to free and compulsory education. Schools must not deny admission based on caste, religion, gender, or disability. You can approach the local education authorities or court for enforcement.",
    },
    {
        question: "How do I report illegal encroachment on my property?",
        answer:
            "File a complaint with the local municipal authority or police. Provide ownership documents, survey details, and evidence of encroachment. Authorities may take action to remove illegal structures and restore your property rights.",
    },
    {
        question: "How can I get a legal notice sent to someone?",
        answer:
            "A legal notice can be sent through a lawyer on your behalf. It should clearly state the grievance, relief sought, and a deadline for compliance. Sending a notice is often the first step before filing a civil or criminal case.",
    },
    {
        question: "What is the difference between a bailable and a non-bailable offence?",
        answer:
            "Bailable offences allow the accused to get bail as a matter of right by furnishing a bond, whereas non-bailable offences require court approval for bail. Serious crimes like murder are non-bailable.",
    },
    {
        question: "What are my rights if I am arrested?",
        answer:
            "You have the right to know the reason for arrest, right to remain silent, right to consult a lawyer, and the right to be produced before a magistrate within 24 hours. You cannot be forced to sign a confession.",
    },
    {
        question: "What is anticipatory bail and when can I apply for it?",
        answer:
            "Anticipatory bail is a pre-arrest bail granted by a Sessions Court or High Court when a person fears arrest in a non-bailable offence. It prevents arrest if the court is convinced that the accusation is false or motivated.",
    },
    {
        question: "How do I register a cybercrime complaint?",
        answer:
            "You can file a complaint through the official National Cyber Crime Reporting Portal (cybercrime.gov.in) or visit the nearest cyber cell police station. Provide digital evidence such as emails, screenshots, or transaction details.",
    },
    {
        question: "What is PIL (Public Interest Litigation) and who can file it?",
        answer:
            "A PIL allows any citizen to approach the High Court or Supreme Court to protect the public interest in matters like environment, corruption, or human rights violations. It is meant to serve the greater good of society.",
    },
    {
        question: "What is the difference between a civil case and a criminal case?",
        answer:
            "Civil cases deal with disputes between individuals or organizations (e.g., property, contracts), while criminal cases deal with offences against the state (e.g., theft, assault). Remedies differ — compensation in civil cases vs. punishment in criminal cases.",
    },
    {
        question: "What is the process to adopt a child legally?",
        answer:
            "Adoption must be done through a registered adoption agency under the Juvenile Justice Act or Hindu Adoption and Maintenance Act. Home study reports, eligibility checks, and court orders are part of the process to ensure legality.",
    },
    {
        question: "How can I file a cheque bounce case?",
        answer:
            "Send a legal notice to the drawer within 30 days of cheque dishonor. If no payment is made within 15 days, file a complaint under Section 138 of the Negotiable Instruments Act in the Magistrate Court.",
    },
    {
        question: "What are my rights during police questioning?",
        answer:
            "You cannot be forced to confess, and you have the right to remain silent under Article 20(3) of the Constitution. Women cannot be called to police stations for questioning after sunset and before sunrise without a magistrate's permission.",
    },
    {
        question: "What is the limitation period for filing a legal case?",
        answer:
            "The limitation period varies depending on the nature of the case — e.g., 3 years for contract disputes, 12 years for property disputes, and no time limit for serious criminal offences like murder.",
    },
    {
        question: "What are the grounds for termination of employment legally?",
        answer:
            "An employer can terminate employment for misconduct, poor performance, redundancy, or violation of company policy — but must follow due process, issue a notice period or pay in lieu of notice, and settle dues as per labor laws.",
    },
    {
        question: "How can I legally evict a tenant?",
        answer:
            "Serve a notice to the tenant as per the rental agreement. If they refuse to vacate, file an eviction suit in civil court under the Rent Control Act citing valid grounds like non-payment of rent, illegal use, or damage to property.",
    },
    {
        question: "What is a legal heir certificate and how to get it?",
        answer:
            "A legal heir certificate identifies the rightful heirs of a deceased person for claiming assets like property, pension, or insurance. Apply at the local Tahsildar office with death certificate, identity proofs, and family details.",
    },
    {
        question: "What are my rights if I am denied entry to a public place?",
        answer:
            "You have the right to enter places open to the general public, regardless of caste, religion, or gender. Denial based on discrimination can be challenged under constitutional rights and anti-discrimination laws.",
    },
    {
        question: "What is an FIR and how is it different from a complaint?",
        answer:
            "An FIR (First Information Report) is a document prepared by police to start investigation for a cognizable offence. A complaint can be made to police or magistrate but may not always result in an FIR unless the offence is cognizable.",
    },
    {
        question: "Can I withdraw a case after filing it?",
        answer:
            "Yes, civil cases can usually be withdrawn with the court's permission. Criminal cases can only be withdrawn with the permission of the court and under specific conditions, depending on the nature of the offence.",
    },
    {
        question: "What are my rights as a consumer when I buy a car or bike?",
        answer:
            "You have the right to receive the product free from manufacturing defects, with proper warranty and documentation. If you face defects, you can claim free repairs, replacement, or refund under the Consumer Protection Act.",
    },
    {
        question: "What is the procedure for name change legally?",
        answer:
            "Prepare an affidavit for name change, publish it in two newspapers, and submit it to the government gazette office for notification. Once published, use it to update your name in official records like Aadhaar, PAN, and passport.",
    },
    {
        question: "What is the process for filing a writ petition?",
        answer:
            "You can file a writ petition directly in the High Court or Supreme Court if your fundamental rights are violated. Types of writs include Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto.",
    },
    {
        question: "What are my rights if my employer withholds my salary?",
        answer:
            "You can send a legal notice, file a complaint with the Labor Commissioner, or approach the Payment of Wages Authority. Employers cannot arbitrarily withhold salaries beyond the due date as per labor laws.",
    },
    {
        question: "What is RTI and how do I file an RTI application?",
        answer:
            "The Right to Information (RTI) Act allows citizens to request information from any public authority. File an RTI application addressed to the Public Information Officer (PIO) of the department, pay the nominal fee, and you must receive a reply within 30 days.",
    },
    {
        question: "What is the process for filing a divorce in India?",
        answer:
            "Divorce can be filed as mutual consent (both parties agree) or contested (one party disagrees). File a petition in the family court with grounds such as cruelty, desertion, or irretrievable breakdown. Mutual consent divorce usually finalizes in 6 months.",
    },
    {
        question: "What is a power of attorney and why is it used?",
        answer:
            "A Power of Attorney (PoA) is a legal document giving someone authority to act on your behalf in financial, legal, or property matters. It can be general (broad powers) or special (specific task). Registration is advised for property-related PoA.",
    },
    {
        question: "What are my rights if my passport or visa is confiscated?",
        answer:
            "Authorities must provide a valid reason in writing for confiscation. You can appeal to higher authorities or approach the court under writ jurisdiction to challenge arbitrary confiscation.",
    },
    {
        question: "What is the legal process for child custody after separation?",
        answer:
            "Custody is decided by the court based on the best interests of the child. There are two types — physical custody and legal custody. Either parent can apply, and the court may grant joint or sole custody depending on welfare of the child.",
    },
    {
        question: "How do I legally start an NGO or Trust?",
        answer:
            "You can register as a Trust, Society, or Section 8 Company. Each requires a governing document (Trust Deed, MoA & Rules), minimum members, and registration with the relevant Registrar. Obtain PAN, open a bank account, and apply for 80G/12A for tax exemptions.",
    },
    {
        question: "What is defamation and how do I take legal action?",
        answer:
            "Defamation is making false statements harming someone's reputation. You can send a legal notice demanding retraction/apology, and file a civil suit for damages or a criminal complaint under Section 499 IPC for punishment.",
    },
    {
        question: "How do I file a complaint about medical negligence?",
        answer:
            "You can approach the hospital grievance cell first. If unresolved, file a complaint with the Consumer Forum under deficiency of service or Medical Council of India for disciplinary action against the doctor.",
    },
    {
        question: "What is an e-stamp and when do I need it?",
        answer:
            "E-stamp is a digital way of paying stamp duty for agreements, property transactions, or affidavits. It is secure and tamper-proof. Purchase from an authorized e-stamping center or online portal and attach it to your document.",
    },
    {
        question: "What is the procedure to get a succession certificate?",
        answer:
            "A succession certificate is required to claim debts, securities, or movable assets of a deceased person. Apply to the district court with death certificate, list of heirs, and property details. The court issues it after public notice and verification.",
    },
    {
        question: "How can I legally change my religion in India?",
        answer:
            "Submit a declaration/affidavit of conversion, perform the religious ceremony if required, and publish the change in two local newspapers. Get a certificate of conversion from the religious institution. Notify the government for Gazette publication.",
    },
    {
        question: "What are my rights as a victim of sexual harassment in public transport?",
        answer:
            "You can file a complaint with the local police under IPC Sections 354/509, contact women helplines (like 1091), or report through online portals. You have the right to immediate FIR registration and protection of your identity.",
    },
    {
        question: "How do I get a caste certificate or income certificate?",
        answer:
            "Apply at the local Tehsil/MRO office or online state portal with ID proof, address proof, and relevant documents. Verification will be done before the certificate is issued. This is essential for claiming reservations or government schemes.",
    },
    {
        question: "What is dowry harassment and how do I take legal action?",
        answer:
            "Dowry harassment falls under Section 498A IPC. File a complaint at the local police station or Women Cell. You can seek protection orders, residence rights, and maintenance under Domestic Violence Act as well.",
    },
    {
        question: "What is the process for quashing an FIR?",
        answer:
            "You can approach the High Court under Section 482 CrPC to quash an FIR if the case is false, malicious, or settled amicably between parties. The court will quash it if it believes continuing the case serves no purpose.",
    },
    {
        question: "What is the legal remedy if I am denied maternity benefits?",
        answer:
            "Under the Maternity Benefit Act, eligible women employees are entitled to paid maternity leave and benefits. If denied, file a complaint with the Labor Commissioner or approach the court for enforcement of rights.",
    },
    {
        question: "How do I handle property disputes among siblings?",
        answer:
            "Try family settlement or mediation first. If unresolved, file a partition suit in civil court. The court will divide the property as per legal heirship or will, ensuring each sibling gets their rightful share.",
    },
    {
        question: "What is a Lok Adalat and how does it work?",
        answer:
            "Lok Adalat is an alternative dispute resolution mechanism where disputes are settled amicably outside court. Awards are binding and have the status of a civil court decree. It is faster, cheaper, and promotes compromise.",
    },
    {
        question: "How do I legally adopt an orphan or abandoned child?",
        answer:
            "Register on the CARA (Central Adoption Resource Authority) website, complete the home study process, and get matched with a child legally cleared for adoption. Adoption is finalized by a competent court order.",
    },
    {
        question: "What legal rights do grandparents have over grandchildren?",
        answer:
            "Grandparents can seek visitation or even custody if parents are unfit or deceased, by filing a petition in the family court. Courts consider the child's best interest before granting rights.",
    },
    {
        question: "What are my rights if my employer does not pay my salary on time?",
        answer:
            "You can send a written demand notice to the employer. If unresolved, file a complaint before the Labour Commissioner or under the Payment of Wages Act. For higher positions, you can approach a civil court for breach of contract.",
    },
    {
        question: "Can I be terminated without notice during probation?",
        answer:
            "Yes, most employment contracts allow termination during probation without notice or with a short notice period. Check your appointment letter for terms. If termination is arbitrary or discriminatory, you can challenge it legally.",
    },
    {
        question: "What are maternity benefits available to women employees?",
        answer:
            "Under the Maternity Benefit Act, women are entitled to 26 weeks of paid leave (for first two children), nursing breaks, and protection from dismissal during maternity leave. Organizations with 50+ employees must provide crèche facilities.",
    },
    {
        question: "How do I file a sexual harassment complaint at workplace?",
        answer:
            "File a complaint with the Internal Complaints Committee (ICC) of your organization within 3 months of the incident. If no ICC exists, you can approach the Local Complaints Committee under the POSH Act.",
    },
    {
        question: "Can landlords increase rent arbitrarily?",
        answer:
            "No, rent increases must follow state-specific Rent Control Acts. Usually, landlords can increase rent annually by a fixed percentage (e.g., 5–10%) or as agreed in the rental agreement.",
    },
    {
        question: "What to do if tenant refuses to vacate after agreement ends?",
        answer:
            "Serve a legal eviction notice. If the tenant still refuses, file an eviction suit in the rent controller or civil court. Avoid forcibly evicting tenants yourself, as it may be illegal.",
    },
    {
        question: "How can I file RTI if my earlier request was ignored?",
        answer:
            "File a first appeal with the First Appellate Authority (FAA) of the concerned department within 30 days. If not satisfied, file a second appeal with the State or Central Information Commission.",
    },
    {
        question: "How do I protect myself from online loan app harassment?",
        answer:
            "Report the harassment to the cybercrime portal (cybercrime.gov.in), block the harassing number, and file a complaint with police under IT Act Section 66A and IPC provisions. RBI has also banned unregistered lending apps.",
    },
    {
        question: "What is my right if someone posts my personal photos without consent?",
        answer:
            "You can file a complaint under Section 66E of IT Act (violation of privacy) and IPC Section 354C (voyeurism). Social media platforms are legally required to take down such content upon reporting.",
    },
    {
        question: "How do I get refund from e-commerce sites if they refuse?",
        answer:
            "Raise a complaint through the platform’s grievance officer. If unresolved, file a complaint on the National Consumer Helpline (1800-11-4000) or on the Consumer Commission (E-Daakhil portal).",
    },
    {
        question: "What to do if builder delays possession of my flat?",
        answer:
            "File a complaint under RERA (Real Estate Regulation Act) to claim compensation or refund. You can also approach the consumer forum for deficiency in service.",
    },
    {
        question: "What are my rights under environmental law?",
        answer:
            "You have the right to clean air, safe drinking water, and pollution-free surroundings under Article 21. You can file a complaint with the Pollution Control Board or a PIL in the High Court for environmental violations.",
    },
    {
        question: "What is a PIL and who can file it?",
        answer:
            "Public Interest Litigation (PIL) is filed to protect public interest on issues like environment, corruption, or rights violations. Any citizen can file it in High Court or Supreme Court, even if not personally affected.",
    },
    {
        question: "How do I check if a company is legally registered?",
        answer:
            "Visit the Ministry of Corporate Affairs (MCA) portal, search for the company by name or CIN, and verify its registration details, directors, and compliance status.",
    },
    {
        question: "What if I lose my Aadhaar, PAN, or passport?",
        answer:
            "Report the loss to the local police (for passport, file FIR). For Aadhaar and PAN, you can reprint or download e-copies from UIDAI and Income Tax portals. For passport, apply for reissue.",
    },
    {
        question: "What is the difference between bailable and non-bailable offence?",
        answer:
            "In a bailable offence, you have a right to be released on bail by the police or magistrate. In a non-bailable offence, bail is at the discretion of the court based on case facts.",
    },
    {
        question: "Can police enter my house without a warrant?",
        answer:
            "Police can enter without warrant only in urgent situations (e.g., to prevent crime, rescue victim, or arrest a person caught red-handed). Otherwise, a warrant is required.",
    },
    {
        question: "What is anticipatory bail and when can I apply?",
        answer:
            "Anticipatory bail is a pre-arrest bail under Section 438 CrPC, granted by Sessions Court or High Court, to protect you from arrest in a non-bailable offence where you fear false implication.",
    },
    {
        question: "What are whistleblower protections in India?",
        answer:
            "The Whistleblower Protection Act safeguards individuals who expose corruption or wrongdoing in government organizations. Your identity is kept confidential, and victimization is prohibited.",
    },
    {
        question: "How can I adopt a child legally in India?",
        answer:
            "Register on the CARA (Central Adoption Resource Authority) portal, undergo home study, and get matched with a child legally free for adoption. Adoption must be finalized by a competent court to be legally valid.",
    },
    {
        question: "How do I file my Income Tax Return (ITR) online?",
        answer:
            "Visit the official income tax e-filing portal, register/login, choose the correct ITR form (ITR-1, ITR-2, etc.), fill details of income, deductions, and tax paid, and submit online. Verify using Aadhaar OTP, net banking, or sending signed ITR-V to CPC Bangalore.",
    },
    {
        question: "What legal requirements must I fulfill to start a small business?",
        answer:
            "You must register your business (Sole Proprietorship, Partnership, or Pvt Ltd), get GST registration (if applicable), obtain required licenses like Shop & Establishment Act license, and comply with labor laws. Maintaining proper accounts is mandatory.",
    },
    {
        question: "What are my rights as an NRI when buying property in India?",
        answer:
            "NRIs can buy residential or commercial property in India (except agricultural land or plantation) using NRE/NRO accounts. Payment must be made through banking channels, and repatriation of sale proceeds is allowed within FEMA guidelines.",
    },
    {
        question: "How can I challenge a traffic challan online?",
        answer:
            "Visit the state e-challan website or Parivahan portal, enter vehicle details, and view the challan. If you wish to dispute it, file a representation or contest it in the traffic court on the given date with supporting evidence.",
    },
    {
        question: "What is Public Nuisance and how can I complain?",
        answer:
            "Public nuisance is any act causing inconvenience or harm to the public (e.g., loudspeakers, illegal encroachments). You can file a written complaint to the local police or municipal authority, or approach the magistrate under Section 133 CrPC.",
    },
    {
        question: "How do I get police clearance certificate (PCC)?",
        answer:
            "Apply through the Passport Seva Kendra website or local police station. Submit ID proof, address proof, and purpose of PCC (job, visa, immigration). PCC is usually issued after police verification of your records.",
    },
    {
        question: "What is a legal notice and when should I send one?",
        answer:
            "A legal notice is a formal written communication to a person or entity before filing a lawsuit, demanding specific action or resolution. It is commonly used in disputes over payments, property, or contracts and gives the other party a chance to respond.",
    },
    {
        question: "How do I protect my intellectual property (trademarks, copyright, patents)?",
        answer:
            "For trademarks, apply with the Controller General of Patents, Designs, and Trademarks. For copyright, register your work with the Copyright Office. Patents require filing a detailed specification with the Indian Patent Office. Registration gives you exclusive rights.",
    },
    {
        question: "What are my rights under the Right to Education (RTE) Act?",
        answer:
            "Children aged 6 to 14 have the right to free and compulsory education. Private schools must reserve 25% of seats for children from weaker sections. You can approach the education department if admission is denied.",
    },
    {
        question: "How do I submit electronic evidence in court?",
        answer:
            "Electronic records like emails, WhatsApp chats, and CCTV footage are admissible under Section 65B of the Indian Evidence Act. A 65B certificate must be provided to authenticate the electronic evidence in court.",
    },
    {
        question: "How can I get a stay order from court?",
        answer:
            "File an application for injunction in the appropriate court explaining urgency and irreparable harm if action is not stopped. The court may grant a temporary stay until the case is heard in detail.",
    },
    {
        question: "What is the process of filing an appeal if I lose a case?",
        answer:
            "You can file an appeal in a higher court within the limitation period (usually 30-90 days from judgment). The memorandum of appeal must state the grounds for challenging the lower court's decision, along with a copy of the judgment.",
    },
    {
        question: "What are my rights under environmental law?",
        answer:
            "You have the right to clean air, safe drinking water, and pollution-free surroundings under Article 21 of the Constitution (Right to Life). You can file a PIL for environmental protection, report violations to the Pollution Control Board, and seek action under the Environment Protection Act, Water Act, and Air Act."
    },
    {
        question: "What is mediation and how does it work?",
        answer:
            "Mediation is a voluntary process where a neutral third party (mediator) helps disputing parties reach a settlement. It is faster, confidential, and less expensive than litigation, and the outcome is binding if both parties agree to it."
    },
    {
        question: "Can I record a conversation and use it as legal evidence?",
        answer:
            "Yes, you can record a conversation if you are a part of it. Such recordings can be used as evidence in court, provided they are not tampered with and are relevant to the case."
    },
    {
        question: "What is a caveat petition and when should I file it?",
        answer:
            "A caveat is a legal notice to a court that no order should be passed without hearing you. File it if you expect a case may be filed against you, especially in property disputes, injunctions, or probate matters."
    },
    {
        question: "What legal remedies do I have for defamatory posts online?",
        answer:
            "You can send a takedown notice to the platform, file a defamation suit in civil court for damages, or lodge a criminal complaint under IPC Section 499/500. Evidence like screenshots and URLs are crucial."
    },
    {
        question: "What is an affidavit and when is it used?",
        answer:
            "An affidavit is a sworn statement of facts in writing, signed before a notary or magistrate. It is used in legal processes like name change, address proof, or as supporting evidence in court."
    },
    {
        question: "Can police enter my house without a warrant?",
        answer:
            "Police need a warrant to search your house except in urgent situations like preventing a crime, chasing an offender, or saving someone from danger. You can ask them to show their warrant or authorization."
    },
    {
        question: "What is the difference between summons and warrant?",
        answer:
            "A summons is an order to appear before a court voluntarily, while a warrant authorizes police to arrest you or search premises. Warrants are issued for serious offences or when summons are ignored."
    },
    {
        question: "What is the procedure for filing a contempt of court case?",
        answer:
            "Contempt of court can be civil (disobedience of court orders) or criminal (scandalizing court authority). File a petition in the same court detailing the violation. The court may issue notice and punish with fine or imprisonment."
    },
    {
        question: "Can I represent myself in court without a lawyer?",
        answer:
            "Yes, you have the right to appear as a 'party-in-person' in any case. However, you must follow court procedures and file necessary documents properly. In complex cases, it is advisable to hire a lawyer."
    },
  {
    question: "What is a summons in legal terms?",
    answer: "A summons is an official notice issued by a court requiring a person to appear before it. Ignoring a summons may lead to legal penalties or arrest."
  },
  {
    question: "What is a charge sheet and how is it filed?",
    answer: "A charge sheet is a document prepared by the police after investigation, detailing the offences committed by the accused. It is filed in court to start the trial process."
  },
  {
    question: "What is the difference between cognizable and non-cognizable offences?",
    answer: "Cognizable offences allow police to register FIR and investigate without prior court permission. Non-cognizable offences require prior approval from a magistrate before investigation."
  },
  {
    question: "How do I challenge a government order?",
    answer: "You can file a writ petition in High Court or Supreme Court challenging the legality or constitutionality of a government order."
  },
  {
    question: "What is a cheque dishonor and its legal implications?",
    answer: "Cheque dishonor occurs when the bank refuses to honor a cheque due to insufficient funds or signature mismatch. You can file a case under Section 138 of the Negotiable Instruments Act."
  },
  {
    question: "What is a civil writ and what are its types?",
    answer: "A civil writ is a court order directing a person or authority to act or refrain from acting. Types include Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo Warranto."
  },
  {
    question: "What is anticipatory compensation?",
    answer: "Anticipatory compensation is a provisional amount awarded by court to a victim before the final judgment to prevent hardship or loss."
  },
  {
    question: "What is a legal injunction?",
    answer: "An injunction is a court order directing a party to do or refrain from doing a specific act, often used to prevent irreparable harm."
  },
  {
    question: "What is a decree in civil cases?",
    answer: "A decree is the formal expression of a court's decision in a civil suit which determines the rights of the parties involved."
  },
  {
    question: "What is the process for filing a contempt of court case?",
    answer: "A contempt case can be filed if someone disobeys or insults a court order. It is initiated by the affected party or court itself, and can lead to fines or imprisonment."
  },
  {
    question: "What is a legal affidavit?",
    answer: "An affidavit is a written statement sworn before a notary or magistrate declaring facts as true. It is often used in court or official applications."
  },
  {
    question: "What is garnishment of salary?",
    answer: "Garnishment is a legal process where a portion of a person's salary is withheld by the employer to pay off debts or court-ordered dues."
  },
  {
    question: "What is a settlement agreement?",
    answer: "A settlement agreement is a legal contract where parties agree to resolve a dispute outside court, often including compensation or withdrawal of claims."
  },
  {
    question: "What is a bond in legal context?",
    answer: "A bond is a written obligation to perform a specific act or pay a sum of money, often used in court for bail or contractual obligations."
  },
  {
    question: "What is a surety?",
    answer: "A surety is a person who guarantees the performance or obligations of another, often seen in bail or loan agreements."
  },
  {
    question: "What is contempt by publication?",
    answer: "Contempt by publication occurs when media or individuals publish material that undermines or disrespects the authority of the court."
  },
  {
    question: "How is property inheritance determined if no will exists?",
    answer: "If there is no will, inheritance is governed by the applicable personal laws (Hindu Succession Act, Muslim Personal Law, etc.) and property is distributed among legal heirs."
  },
  {
    question: "What is a litigation hold?",
    answer: "A litigation hold is a legal order to preserve documents, emails, and evidence when a lawsuit is anticipated or ongoing."
  },
  {
    question: "What is the process for filing a consumer complaint against an online service?",
    answer: "File the complaint on the National Consumer Helpline or e-Daakhil portal with evidence, invoices, and communication. The forum mediates or issues orders for redressal."
  },
  {
    question: "What is a caveat in legal terms?",
    answer: "A caveat is a formal notice filed in court requesting that no order or decision be passed without informing the person who filed it."
  },
  {
    question: "What is the difference between a legal guardian and a natural guardian?",
    answer: "A natural guardian is typically a parent with inherent rights over a child. A legal guardian is appointed by a court to protect the child’s welfare."
  },
  {
    question: "What is legal limbo?",
    answer: "Legal limbo refers to a situation where a matter is pending with no resolution, often due to procedural delays or ambiguous laws."
  },
  {
    question: "What is a contempt notice?",
    answer: "A contempt notice is issued by court to a person who is accused of disobeying court orders or disrespecting the judicial process."
  },
  {
    question: "What is a settlement decree in family law?",
    answer: "A settlement decree is a court-approved agreement between spouses or family members to resolve disputes related to alimony, custody, or property."
  },
  {
    question: "What are the legal provisions for whistleblowers in private companies?",
    answer: "Private companies are guided by internal whistleblower policies under Companies Act Section 177, protecting employees who report fraud or misconduct."
  },
  {
    question: "What is the process for filing a legal claim for mental harassment?",
    answer: "You can file a civil or criminal complaint, provide evidence like messages or witnesses, and seek compensation or protection orders under relevant laws."
  },
  {
    question: "What is a criminal summons?",
    answer: "A criminal summons is a court-issued order requiring the accused to appear before the court on a specific date to answer criminal charges."
  },
  {
    question: "What is an ex parte order?",
    answer: "An ex parte order is a court order passed in the absence of one party, usually in urgent situations where immediate relief is necessary."
  },
  {
    question: "What is a legal caveat for anticipatory relief?",
    answer: "A caveat for anticipatory relief is filed to prevent a court from passing an order against you without giving you an opportunity to present your case."
  },
  {
    question: "What is the procedure to register a Society in India?",
    answer:
      "To register a society, submit a Memorandum of Association and Rules & Regulations to the Registrar of Societies in your state, along with the minimum required members. Once approved, you receive a registration certificate, giving the society legal status.",
  },
  {
    question: "How do I get a PAN card for a minor?",
    answer:
      "A PAN card for a minor can be applied by the guardian. Submit Form 49A, identity proof of the guardian, birth certificate of the minor, and proof of address. PAN is essential for tax purposes.",
  },
  {
    question: "What is the procedure to obtain a duplicate driving license?",
    answer:
      "Apply online through the Parivahan portal or at the local RTO, providing a FIR for lost license, identity proof, and address proof. Pay the applicable fees and receive a duplicate license after verification.",
  },
  {
    question: "How can I file a complaint against a bank?",
    answer:
      "File a complaint with the bank's grievance officer. If unresolved, approach the Banking Ombudsman scheme with details of the complaint and evidence. The Ombudsman can direct the bank to resolve your issue or compensate you.",
  },
  {
    question: "What are my legal rights as a consumer when booking a flight ticket?",
    answer:
      "Air passengers have rights under the Civil Aviation Requirements, including refunds for cancellations, compensation for delays, and assistance for denied boarding. Complaints can be filed with the airline or Directorate General of Civil Aviation (DGCA).",
  },
  {
    question: "How do I legally change my mobile number registered with Aadhaar?",
    answer:
      "Visit the nearest Aadhaar enrollment/update center with ID proof and request an update. Provide OTP verification on the old number, if accessible. The updated mobile number is linked after verification.",
  },
  {
    question: "What is the process to challenge an income tax notice?",
    answer:
      "You can respond online through the income tax e-filing portal. If disagreement persists, file an appeal with the Commissioner of Income Tax (Appeals) within the stipulated time, providing supporting documents.",
  },
  {
    question: "How do I register a legal complaint against deforestation or illegal logging?",
    answer:
      "File a complaint with the local forest department or the Pollution Control Board. You can also approach the High Court via PIL. Provide evidence like photos, videos, and GPS location for verification.",
  },
  {
    question: "How do I obtain a Marriage Certificate if the marriage was registered many years ago?",
    answer:
      "Apply at the local Marriage Registrar’s office or online portal, providing details like date, place, and parties’ identities. Pay applicable fees, and after verification, the certificate is issued.",
  },
  {
    question: "What is the process for applying for a government scholarship?",
    answer:
      "Visit the official scholarship portal or concerned department, fill out the online application form, submit required documents like income and caste certificates, and track the application status. Scholarships are disbursed after verification.",
  },
  {
    question: "How can I legally protect my online business from copycats?",
    answer:
      "Register your trademarks, domain names, and copyrights. Send cease-and-desist notices to infringers. In case of continued infringement, file a civil or criminal complaint under IP laws and IT Act provisions.",
  },
  {
    question: "What is the procedure to contest a property tax assessment?",
    answer:
      "File an appeal with the local municipal authority within the stipulated period. Provide evidence of property details and valuation. If unresolved, you can approach the appellate authority or tribunal for reconsideration.",
  },
  {
    question: "How do I obtain a digital signature certificate?",
    answer:
      "Apply through licensed Certifying Authorities in India, providing identity and address proof. After verification, a digital signature certificate (DSC) is issued for signing electronic documents.",
  },
  {
    question: "How can I file a complaint for harassment via phone calls or SMS?",
    answer:
      "Collect evidence of calls or messages, then file a complaint with the local police or cybercrime portal. Telecom providers also allow registration of complaints against harassment numbers.",
  },
  {
    question: "How do I register a copyright for my music, book, or art?",
    answer:
      "Submit an application to the Copyright Office online or offline, including work details, ownership proof, and fee payment. After examination and verification, the copyright registration certificate is issued.",
  },
  {
    question: "What is the process for claiming insurance after an accident?",
    answer:
      "Notify the insurance company immediately. Submit a claim form along with accident reports, medical bills, and policy documents. The insurer will assess and disburse compensation based on terms and coverage.",
  },
  {
    question: "How do I file a complaint for environmental pollution in my area?",
    answer:
      "Report to the local Pollution Control Board or municipal authority, providing evidence like photos, videos, or lab test results. You can also approach courts through a PIL if the issue persists.",
  },
  {
    question: "How do I obtain a Disability Certificate?",
    answer:
      "Apply to the designated medical board at the government hospital, providing medical records and proof of disability. The certificate confirms your disability percentage for availing benefits and reservations.",
  },
  {
    question: "What is the procedure for registering a Labour Union?",
    answer:
      "Submit an application to the Registrar of Trade Unions with the union's constitution, minimum required members, and list of office bearers. Registration gives legal recognition and protection to the union.",
  },
  {
    question: "How can I legally protect my online content from plagiarism?",
    answer:
      "Use copyright registration, watermarking, and terms of service agreements. Send cease-and-desist notices to violators. Persistent infringement can be addressed through civil court or cybercrime complaints.",
  },
  {
    question: "What is the process for applying for government housing schemes?",
    answer:
      "Check eligibility criteria on the scheme’s official portal. Submit the application with required proofs like income, caste, and residence. After verification, allotment is made according to guidelines.",
  },
  {
    question: "How do I file a complaint for animal cruelty?",
    answer:
      "Approach the local police or Animal Welfare Board of India. Submit evidence of cruelty or neglect. Complaints are taken seriously under the Prevention of Cruelty to Animals Act.",
  },
  {
    question: "What is the procedure to obtain a firearms license in India?",
    answer:
      "Apply to the local District Magistrate with reasons for possession, police verification, and medical fitness certificate. The authority evaluates the application and issues a license under Arms Act provisions.",
  },
  {
    question: "How do I apply for an E-way bill for goods transport?",
    answer:
      "Register on the GST portal, fill in details of consignment, transporter, and goods. Generate the E-way bill online, which is mandatory for inter- and intra-state transport exceeding threshold limits.",
  },
  {
    question: "What legal actions can I take if someone spreads false rumors about me online?",
    answer:
      "Collect evidence, send a legal notice to the offender, and file a civil defamation suit or criminal complaint under IPC Sections 499/500. Cybercrime authorities can also investigate.",
  },
  {
    question: "How do I file a complaint for illegal mining activities?",
    answer:
      "Report to the local mining department, state pollution control board, or district administration. Provide evidence like photographs, GPS data, and documents. Authorities may take legal action under mining and environmental laws.",
  },
  {
    question: "What is the procedure to get a police verification certificate for employment?",
    answer:
      "Apply at your local police station or through the employer. Submit identity and address proofs, along with application forms. The police will verify your background and issue the certificate.",
  },
  {
    question: "How do I register a cooperative society?",
    answer:
      "Submit the society’s bylaws, member list, and application to the Registrar of Cooperative Societies. Once verified and approved, the cooperative is legally registered and can operate under cooperative law.",
  },
  {
    question: "How do I claim compensation under Workmen’s Compensation Act?",
    answer:
      "If injured at work, inform your employer and file a claim with the labor commissioner or tribunal. Provide medical records and proof of employment. Compensation is awarded for injury, disability, or death due to work-related incidents.",
  },
  {
    question: "What is the procedure to get anticipatory bail for serious charges?",
    answer:
      "File an application under Section 438 CrPC in the Sessions Court or High Court before arrest, stating reasons for fear of arrest. The court considers factors like nature of offence, evidence, and applicant’s background before granting bail.",
  },
];

const LegalFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm) ||
      faq.answer.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Legal Advice & FAQs</h1>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchBar}
      />
      {filteredFaqs.map((faq, index) => (
        <div key={index} style={styles.card} onClick={() => toggleFAQ(index)}>
          <div style={styles.question}>
            {faq.question}
            <span style={styles.symbol}>{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && <div style={styles.answer}>{faq.answer}</div>}
        </div>
      ))}
      <p style={styles.disclaimer}>
        *This information is for educational purposes only and does not constitute legal advice. For professional guidance, consult a qualified lawyer.*
      </p>
    </div>
  );
};

// Embedded CSS styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "0 20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2e7d32",
  },
  searchBar: {
    width: "100%",
    padding: "10px 15px",
    marginBottom: "30px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "15px",
    padding: "15px 20px",
    cursor: "pointer",
    backgroundColor: "#f9f9f9",
    transition: "all 0.3s ease",
  },
  question: {
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  symbol: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  answer: {
    marginTop: "10px",
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#333",
  },
  disclaimer: {
    marginTop: "30px",
    fontSize: "14px",
    fontStyle: "italic",
    color: "#555",
    textAlign: "center",
  },
};

export default LegalFAQs;