import React, { useState } from "react";
import {
    FaMoneyCheckAlt,
    FaSignature,
    FaUserSecret,
    FaLaptopCode,
    FaUserShield,
    FaFileContract,
    FaBullhorn,
    FaHome,
    FaCarCrash,
    FaStore,
    FaBalanceScale,
} from "react-icons/fa";

const iconMap = {
    FaMoneyCheckAlt: FaMoneyCheckAlt,
    FaSignature: FaSignature,
    FaUserSecret: FaUserSecret,
    FaLaptopCode: FaLaptopCode,
    FaUserShield: FaUserShield,
    FaFileContract: FaFileContract,
    FaBullhorn: FaBullhorn,
    FaHome: FaHome,
    FaCarCrash: FaCarCrash,
    FaStore: FaStore,
    FaBalanceScale: FaBalanceScale,
};

const casesData = [
    {
        type: "Employment Harassment / Workplace Bullying",
        details: {
            overview: "Unfair treatment, intimidation, or hostile environment at workplace.",
            considerations: [
                "Collect emails, chat logs, and witness statements.",
                "Review company policies and grievance procedures."
            ],
            fightingTips: [
                "Document incidents thoroughly.",
                "Challenge credibility of accusations if false.",
            ],
            winningStrategies: [
                "Use HR records and witness testimony.",
                "Show consistent pattern of harassment affecting client.",
            ],
        },
    },
    {
        type: "Property Damage / Vandalism",
        details: {
            overview: "Intentional damage to someone’s property.",
            considerations: [
                "Collect photographs, CCTV footage, and witness statements.",
                "Estimate cost of repair or replacement."
            ],
            fightingTips: [
                "Dispute intent to damage property.",
                "Question authenticity of evidence.",
            ],
            winningStrategies: [
                "Present clear documentation and expert valuation.",
                "Negotiate restitution or insurance claims.",
            ],
        },
    },
    {
        type: "Illegal Eviction of Tenants",
        details: {
            overview: "Landlord forcing tenants out without proper legal notice.",
            considerations: [
                "Review rental agreements and notices served.",
                "Check local tenancy laws."
            ],
            fightingTips: [
                "Challenge validity of eviction notice.",
                "Ensure procedural lapses by landlord are highlighted.",
            ],
            winningStrategies: [
                "Present documentation of valid tenancy.",
                "Seek injunction to prevent eviction.",
            ],
        },
    },
    {
        type: "Consumer Fraud & Misleading Ads",
        details: {
            overview: "Businesses deceiving customers with false claims or ads.",
            considerations: [
                "Collect advertisements, invoices, and contracts.",
                "Evaluate impact on consumer rights."
            ],
            fightingTips: [
                "Challenge evidence of misrepresentation.",
                "Demonstrate compliance with consumer laws if defending.",
            ],
            winningStrategies: [
                "Show consumer losses and breach of law.",
                "Seek compensation and corrective action.",
            ],
        },
    },
    {
        type: "Loan & Credit Card Disputes",
        details: {
            overview: "Disputes over repayment, interest, or defaults on loans or credit cards.",
            considerations: [
                "Review loan agreements and statements.",
                "Verify interest calculations and notices."
            ],
            fightingTips: [
                "Dispute calculation errors or illegitimate charges.",
                "Challenge bank procedure compliance.",
            ],
            winningStrategies: [
                "Provide proof of payments and correspondence.",
                "Negotiate settlement or waiver with bank.",
            ],
        },
    },
    {
        type: "Marriage & Divorce Disputes",
        details: {
            overview: "Legal proceedings related to marriage annulment, divorce, or separation.",
            considerations: [
                "Collect marriage certificate, financial records, and communications.",
                "Understand grounds for divorce or annulment."
            ],
            fightingTips: [
                "Challenge claims without sufficient proof.",
                "Argue procedural lapses or consent issues.",
            ],
            winningStrategies: [
                "Present credible evidence supporting client’s position.",
                "Use mediation or negotiation for settlement.",
            ],
        },
    },
    {
        type: "Medical Insurance Claims",
        details: {
            overview: "Disputes between insured and insurers over claims.",
            considerations: [
                "Collect policy documents and medical records.",
                "Check terms and conditions of insurance."
            ],
            fightingTips: [
                "Dispute insurer’s denial with factual evidence.",
                "Clarify policy exclusions and inclusions.",
            ],
            winningStrategies: [
                "Use medical expert opinion to support claim.",
                "Seek arbitration or legal recourse if necessary.",
            ],
        },
    },
    {
        type: "Intellectual Property Licensing Disputes",
        details: {
            overview: "Conflicts over licensing agreements, royalties, or IP use.",
            considerations: [
                "Review licensing contracts and IP registrations.",
                "Assess scope and terms of IP rights."
            ],
            fightingTips: [
                "Challenge unauthorized claims or breach allegations.",
                "Negotiate compliance with license terms.",
            ],
            winningStrategies: [
                "Present contracts and prior correspondence.",
                "Seek injunctions or monetary compensation for infringement.",
            ],
        },
    },
    {
        type: "Corporate Compliance & Regulatory Issues",
        details: {
            overview: "Non-compliance with corporate laws, ROC filings, or statutory regulations.",
            considerations: [
                "Review company records, filings, and internal audits.",
                "Understand relevant statutory provisions."
            ],
            fightingTips: [
                "Challenge procedural errors or misinterpretation of laws.",
                "Demonstrate proactive compliance measures.",
            ],
            winningStrategies: [
                "Use expert corporate advice and documentation.",
                "Negotiate penalties or show corrective measures.",
            ],
        },
    },
    {
        type: "Defective Product Liability",
        details: {
            overview: "Cases where manufacturers are held responsible for harmful or faulty products.",
            considerations: [
                "Collect product samples, purchase receipts, and medical reports.",
                "Determine defect type and impact."
            ],
            fightingTips: [
                "Challenge causation between defect and harm if defending.",
                "Scrutinize compliance with safety standards.",
            ],
            winningStrategies: [
                "Present evidence linking defect to damage.",
                "Seek compensation for damages and injuries.",
            ],
        },
    },
    {
        type: "Rape / Sexual Assault",
        details: {
            overview: "Non-consensual sexual act or assault on a person.",
            considerations: [
                "Collect medical reports and forensic evidence.",
                "Record victim statements and witness testimonies.",
            ],
            fightingTips: [
                "Ensure chain of evidence is maintained.",
                "Challenge false allegations if defending.",
            ],
            winningStrategies: [
                "Use forensic reports, eyewitness accounts, and CCTV footage.",
                "Follow strict legal procedures under IPC and POCSO Act.",
            ],
        },
    },
    {
        type: "Child Abuse / Child Exploitation",
        details: {
            overview: "Physical, sexual, or emotional abuse or neglect of children.",
            considerations: [
                "Obtain medical and psychological reports.",
                "Document family background and guardianship details.",
            ],
            fightingTips: [
                "Ensure child protection laws are strictly followed.",
                "Challenge false claims or misinterpretation of incidents.",
            ],
            winningStrategies: [
                "Use child welfare expert testimonies.",
                "Coordinate with child protection services for evidence.",
            ],
        },
    },
    {
        type: "Sexual Exploitation / Molestation (Outside Workplace/Public)",
        details: {
            overview:
                "Any act of sexual harassment, assault, or molestation that occurs in public spaces or outside of the victim’s workplace.",
            considerations: [
                "Document the incident with witnesses and evidence.",
                "Report to local authorities immediately.",
                "Collect medical and psychological reports if required.",
            ],
            fightingTips: [
                "File complaints promptly under relevant IPC sections.",
                "Ensure public witnesses are available and statements recorded.",
                "Challenge any attempts to downplay or misrepresent the incident.",
            ],
            winningStrategies: [
                "Use forensic and expert testimonies for corroboration.",
                "Maintain a detailed record of all communications and evidence.",
                "Coordinate with NGOs or legal aid for support.",
            ],
        },
    },
    {
        type: "Marital Rape",
        details: {
            overview:
                "Non-consensual sexual intercourse or acts within a marriage, where one spouse forces the other to engage in sexual activity against their will.",
            considerations: [
                "Obtain medical and psychological assessments.",
                "Document any threats, coercion, or intimidation.",
                "Record marital history and previous complaints, if any.",
            ],
            fightingTips: [
                "File legal complaints according to jurisdictional law.",
                "Challenge any misconceptions about marital consent.",
                "Protect evidence of coercion or intimidation.",
            ],
            winningStrategies: [
                "Use expert testimonies regarding consent and abuse dynamics.",
                "Coordinate with women’s rights organizations.",
                "Present clear evidence of non-consent and psychological harm.",
            ],
        },
    },
    {
        type: "Cyber Sexual Harassment / Revenge Porn",
        details: {
            overview:
                "Use of digital or online platforms to harass, threaten, blackmail, or share intimate content of a person without consent.",
            considerations: [
                "Take screenshots and preserve all digital evidence.",
                "Report incidents to cybercrime authorities.",
                "Document the perpetrator’s attempts to intimidate or coerce.",
            ],
            fightingTips: [
                "File complaints under IT Act and relevant IPC sections.",
                "Ensure evidence is admissible in court.",
                "Challenge attempts to delete or tamper with digital evidence.",
            ],
            winningStrategies: [
                "Use cyber forensic experts for evidence verification.",
                "Coordinate with law enforcement and legal aid.",
                "Leverage prior case laws on cyber harassment and revenge porn.",
            ],
        },
    },

    {
        type: "Cheque Bounce (Dishonor of Cheque)",
        details: {
            overview:
                "Occurs when a cheque issued by the drawer is returned unpaid due to insufficient funds or other reasons.",
            considerations: [
                "Verify cheque validity and drawer's bank details.",
                "Ensure legal notice is sent within 30 days of cheque bounce.",
                "Collect evidence like the bounced cheque, bank memo, and legal notice receipt.",
            ],
            fightingTips: [
                "Scrutinize reasons for cheque bounce carefully.",
                "Negotiate settlement before court proceedings if possible.",
                "Prepare to prove the dishonor was unconditional and payment demanded.",
            ],
            winningStrategies: [
                "Present clear evidence of cheque dishonor and notice compliance.",
                "Use witness testimony and bank records effectively.",
                "Argue the presumption of dishonor under Section 139 of NI Act.",
            ],
        },
    },
    {
        type: "Sign Forgery",
        details: {
            overview:
                "Illegal act of forging someone’s signature on a document with intent to deceive.",
            considerations: [
                "Identify and gather questioned documents.",
                "Secure expert handwriting analysis if possible.",
                "Gather witness testimonies regarding signature authenticity.",
            ],
            fightingTips: [
                "Challenge authenticity of signature early.",
                "Undermine forged document credibility.",
                "Cross-examine opposing witnesses skillfully.",
            ],
            winningStrategies: [
                "Employ expert forensic analysis results.",
                "Demonstrate motive for forgery by opposition.",
                "Use inconsistencies in signed documents as proof.",
            ],
        },
    },
    {
        type: "Theft and Petty Theft",
        details: {
            overview:
                "The unlawful taking of someone’s property with intent to permanently deprive.",
            considerations: [
                "Secure chain of custody evidence.",
                "Get eyewitness accounts and surveillance footage.",
                "Understand the value and nature of stolen property.",
            ],
            fightingTips: [
                "Establish lack of intent or mistaken identity.",
                "Challenge prosecution's evidence rigorously.",
                "Present alibi or alternative explanations.",
            ],
            winningStrategies: [
                "Raise reasonable doubt about accused’s involvement.",
                "Highlight procedural lapses during investigation.",
                "Use character witnesses if applicable.",
            ],
        },
    },
    {
        type: "Cybercrime (Phishing, Hacking)",
        details: {
            overview:
                "Unauthorized access, data theft, or fraud via digital means.",
            considerations: [
                "Collect digital evidence with chain of custody.",
                "Involve cyber forensic experts if needed.",
                "Understand relevant laws like IT Act provisions.",
            ],
            fightingTips: [
                "Verify digital evidence authenticity.",
                "Dispute attribution to accused without clear evidence.",
                "Prepare to counter advanced technical arguments.",
            ],
            winningStrategies: [
                "Use expert testimonies and cyber forensic reports.",
                "Point out gaps or tampering in evidence.",
                "Present strong circumstantial evidence supporting innocence.",
            ],
        },
    },
    {
        type: "Domestic Violence",
        details: {
            overview:
                "Abuse or violence within family or intimate relationships.",
            considerations: [
                "Seek detailed victim statements and medical reports.",
                "Understand provisions under Protection of Women from Domestic Violence Act.",
                "Collect supporting witness or neighbor testimonies.",
            ],
            fightingTips: [
                "Prepare defense to show false allegations if applicable.",
                "Identify inconsistencies in complaints.",
                "Secure client’s alibi and credible witnesses.",
            ],
            winningStrategies: [
                "Show corroborated evidence and disproving false claims.",
                "Use legal protections and amendments effectively.",
                "Demonstrate client’s good character.",
            ],
        },
    },
    {
        type: "Breach of Contract",
        details: {
            overview:
                "Non-fulfillment of contractual terms by any party.",
            considerations: [
                "Review contract clauses thoroughly.",
                "Collect communication records between parties.",
                "Evaluate damages or losses caused.",
            ],
            fightingTips: [
                "Challenge validity of contract terms contested by opponent.",
                "Negotiate settlement or arbitration if possible.",
                "Highlight opponent’s non-compliance or delays.",
            ],
            winningStrategies: [
                "Produce clear contractual evidence and correspondence.",
                "Use expert witnesses for valuation of damages.",
                "Leverage legal precedents supporting case.",
            ],
        },
    },
    {
        type: "Defamation",
        details: {
            overview:
                "Making false statements that harm a person's reputation.",
            considerations: [
                "Gather proof of false statement and its publication.",
                "Collect evidence of reputational harm.",
                "Identify defendant’s motive or malice.",
            ],
            fightingTips: [
                "Argue truth as a defense if applicable.",
                "Show statements are opinion or fair comment.",
                "Question plaintiff’s damage claims.",
            ],
            winningStrategies: [
                "Provide clear factual support for defenses.",
                "Dispute plaintiff’s evidence of harm.",
                "Use case laws that support freedom of expression.",
            ],
        },
    },
    {
        type: "Cheque Forgery",
        details: {
            overview:
                "Fraudulent signing or alteration of cheque instruments.",
            considerations: [
                "Track the origin and custody of the cheque.",
                "Involve bank and forensic document examiners.",
                "Collect related financial transaction records.",
            ],
            fightingTips: [
                "Dispute signature authenticity claims.",
                "Challenge evidence chain from bank.",
                "Argue possible internal fraud or error.",
            ],
            winningStrategies: [
                "Prove irregularities favoring accused.",
                "Present expert opinion on cheque forgery.",
                "Use inconsistencies in opposition’s case.",
            ],
        },
    },
    {
        type: "Eviction and Rent Disputes",
        details: {
            overview:
                "Conflicts between landlords and tenants over possession and payment.",
            considerations: [
                "Review rent agreements and notices served.",
                "Collect payment records and communication.",
                "Understand local tenancy laws.",
            ],
            fightingTips: [
                "Prove improper notice or harassment by landlord/tenant.",
                "Show valid payments and tenancy rights.",
                "Offer mediation before escalation.",
            ],
            winningStrategies: [
                "Use documented evidence supporting tenancy claims.",
                "Interpret tenancy laws favoring client.",
                "Present settlement agreements or continued payments.",
            ],
        },
    },
    {
        type: "Motor Vehicle Accident Claims",
        details: {
            overview:
                "Claims related to damages or injuries from road accidents.",
            considerations: [
                "Gather police reports, medical bills, and insurance details.",
                "Evaluate extent of injuries and liability.",
                "Secure eyewitness and expert testimony.",
            ],
            fightingTips: [
                "Argue comparative negligence or validity of claims.",
                "Challenge causation and extent of damages.",
                "Utilize insurance policy terms.",
            ],
            winningStrategies: [
                "Present strong documentary and witness proof.",
                "Clarify liability under motor vehicle laws.",
                "Negotiate fair compensation settlements.",
            ],
        },
    },
    {
        type: "Murder (Homicide)",
        details: {
            overview:
                "Unlawful killing of a human being, with or without premeditation (culpable homicide).",
            considerations: [
                "Collect forensic, medical, and ballistic evidence.",
                "Gather eyewitness testimony and motive-related proof.",
                "Confirm chain of custody for weapon used.",
            ],
            fightingTips: [
                "Challenge cause-of-death report accuracy.",
                "Show lack of premeditation or accidental death.",
                "Discredit unreliable witnesses.",
            ],
            winningStrategies: [
                "Present alibi or strong circumstantial evidence.",
                "Demonstrate procedural lapses in investigation.",
                "Argue for lesser charge (culpable homicide not murder) if applicable.",
            ],
        },
    },
    {
        type: "Attempt to Murder (Sec. 307 IPC)",
        details: {
            overview:
                "Act done with intent to cause death but where death does not occur.",
            considerations: [
                "Collect medical reports proving extent of injuries.",
                "Secure weapon and eyewitnesses if any.",
                "Evaluate motive and intent elements.",
            ],
            fightingTips: [
                "Dispute intent to kill — argue it was sudden provocation.",
                "Challenge eyewitness credibility.",
            ],
            winningStrategies: [
                "Prove injuries were not life-threatening.",
                "Use forensic expert testimony to downgrade charge.",
                "Show lack of premeditation.",
            ],
        },
    },
    {
        type: "Attempt to Suicide (Sec. 309 IPC)",
        details: {
            overview:
                "Self-harm attempt criminalized under IPC, though decriminalization efforts exist.",
            considerations: [
                "Assess mental health records and reasons for attempt.",
                "Collect witness statements regarding event circumstances.",
            ],
            fightingTips: [
                "Show mental illness or extreme distress.",
                "Argue for rehabilitation rather than punishment.",
            ],
            winningStrategies: [
                "Use psychiatric evaluation to seek discharge or leniency.",
                "Cite recent mental health law reforms.",
            ],
        },
    },
    {
        type: "Drug Possession / NDPS Act Cases",
        details: {
            overview:
                "Illegal possession, consumption, or trafficking of narcotics.",
            considerations: [
                "Check seizure memo and chain of custody.",
                "Verify compliance with NDPS procedural safeguards.",
            ],
            fightingTips: [
                "Challenge search and seizure legality.",
                "Dispute quantity classification (small vs. commercial).",
            ],
            winningStrategies: [
                "Show procedural violations render seizure invalid.",
                "Present proof of false implication.",
            ],
        },
    },
    {
        type: "Corruption & Bribery (Prevention of Corruption Act)",
        details: {
            overview:
                "Public servant taking illegal gratification or bribe.",
            considerations: [
                "Examine trap proceedings and recordings.",
                "Collect independent witness testimonies.",
            ],
            fightingTips: [
                "Dispute voluntariness of bribe acceptance.",
                "Show absence of demand — only acceptance not enough.",
            ],
            winningStrategies: [
                "Use forensic tests (phenolphthalein test errors) to challenge case.",
                "Prove money was taken under duress or for legal purpose.",
            ],
        },
    },
    {
        type: "Fraud & Misrepresentation",
        details: {
            overview:
                "Deception intended to gain unfair advantage, often in business or financial transactions.",
            considerations: [
                "Collect contracts, emails, and payment receipts.",
                "Track financial transactions thoroughly.",
            ],
            fightingTips: [
                "Dispute fraudulent intent — show it was a business failure.",
                "Highlight plaintiff’s negligence in due diligence.",
            ],
            winningStrategies: [
                "Present clean financial statements and expert opinions.",
                "Show lack of mens rea (guilty mind).",
            ],
        },
    },
    {
        type: "Trespassing & Encroachment",
        details: {
            overview:
                "Unauthorized entry onto another person’s land or property.",
            considerations: [
                "Verify ownership documents and boundary maps.",
                "Gather photographs, witness statements.",
            ],
            fightingTips: [
                "Dispute property title or possession rights.",
                "Show implied permission or easement rights.",
            ],
            winningStrategies: [
                "Produce original property title deeds.",
                "Demarcate boundaries with government surveyor support.",
            ],
        },
    },
    {
        type: "Partition of Property",
        details: {
            overview:
                "Division of ancestral or jointly owned property among heirs/co-owners.",
            considerations: [
                "Collect revenue records, family tree, and ownership papers.",
                "Identify share of each party as per law.",
            ],
            fightingTips: [
                "Dispute claimants’ legal heirship.",
                "Question valuation or extent of property claimed.",
            ],
            winningStrategies: [
                "Produce genealogy documents supporting claim.",
                "Request court-appointed commissioner for fair division.",
            ],
        },
    },
    {
        type: "Adoption & Guardianship",
        details: {
            overview:
                "Legal process of adopting a child or appointing guardian for minor.",
            considerations: [
                "Verify eligibility of adoptive parents.",
                "Follow procedures under Juvenile Justice Act / HAMA.",
            ],
            fightingTips: [
                "Dispute consent of biological parents if fraudulent.",
                "Ensure compliance with adoption guidelines.",
            ],
            winningStrategies: [
                "Produce adoption deed and court orders.",
                "Show welfare of child as paramount consideration.",
            ],
        },
    },
    {
        type: "Maintenance & Alimony Claims",
        details: {
            overview:
                "Financial support claim by spouse, child, or parents under law.",
            considerations: [
                "Collect income proof, expenses, lifestyle evidence.",
                "File petition under CrPC Sec. 125 or personal laws.",
            ],
            fightingTips: [
                "Challenge exaggerated income claims.",
                "Show independent income of spouse/child if applicable.",
            ],
            winningStrategies: [
                "Produce salary slips, IT returns to prove paying capacity.",
                "Negotiate fair amount through mediation.",
            ],
        },
    },
    {
        type: "Child Custody Disputes",
        details: {
            overview:
                "Determining who gets legal and physical custody of a child post separation/divorce.",
            considerations: [
                "Evaluate best interests of child — schooling, safety, environment.",
                "Collect psychological evaluation reports if needed.",
            ],
            fightingTips: [
                "Challenge opposing party’s ability to provide care.",
                "Show better education, healthcare facilities on client’s side.",
            ],
            winningStrategies: [
                "Present proof of stability and nurturing environment.",
                "Show child’s preference if mature enough.",
            ],
        },
    },
    {
        type: "Consumer Disputes",
        details: {
            overview:
                "Issues with defective goods or deficient services under Consumer Protection Act.",
            considerations: [
                "Collect bills, warranty cards, communication proof.",
                "Determine jurisdiction of consumer forum.",
            ],
            fightingTips: [
                "Challenge limitation period or locus standi of complainant.",
                "Show no deficiency or defect existed.",
            ],
            winningStrategies: [
                "Produce technical expert reports proving defect/service lapse.",
                "Seek compensation including mental agony and costs.",
            ],
        },
    },
    {
        type: "Medical Negligence",
        details: {
            overview:
                "When a medical professional breaches duty of care causing harm to patient.",
            considerations: [
                "Collect hospital records, prescriptions, and bills.",
                "Obtain expert medical opinion.",
            ],
            fightingTips: [
                "Show no causal link between act and damage.",
                "Prove reasonable standard of care was followed.",
            ],
            winningStrategies: [
                "Use expert testimony to establish breach of duty.",
                "Show extent of harm and claim damages accordingly.",
            ],
        },
    },
    {
        type: "Cyberbullying & Online Harassment",
        details: {
            overview:
                "Harassment, threats, or defamation on digital platforms and social media.",
            considerations: [
                "Collect screenshots, chat logs, and metadata.",
                "File complaint under IT Act Sec. 66A, 67 or IPC sections.",
            ],
            fightingTips: [
                "Dispute authenticity of online identity.",
                "Show hacked account or fake profile usage.",
            ],
            winningStrategies: [
                "Involve cybercrime cell for traceability.",
                "Present technical evidence linking culprit to crime.",
            ],
        },
    },
    {
        type: "Money Recovery Suits",
        details: {
            overview:
                "Civil suits to recover borrowed or unpaid money.",
            considerations: [
                "Collect loan agreements, promissory notes, payment records.",
                "Compute interest and damages properly.",
            ],
            fightingTips: [
                "Dispute existence of debt.",
                "Show payment already made or adjusted.",
            ],
            winningStrategies: [
                "Produce bank statements, written acknowledgements.",
                "Seek summary judgment for faster recovery.",
            ],
        },
    },
    {
        type: "Illegal Dismissal (Employment Disputes)",
        details: {
            overview:
                "Wrongful termination or retrenchment of employee without due process.",
            considerations: [
                "Review appointment letter, company policies.",
                "Collect termination letter and proof of service record.",
            ],
            fightingTips: [
                "Challenge maintainability if employee not covered under labour laws.",
                "Show termination for misconduct was justified.",
            ],
            winningStrategies: [
                "Prove termination violated principles of natural justice.",
                "Seek reinstatement or compensation with interest.",
            ],
        },
    },
    {
        type: "Environmental Law Violations",
        details: {
            overview:
                "Pollution, illegal tree cutting, or violations of environment clearance norms.",
            considerations: [
                "Collect pollution board reports and environmental impact assessments.",
                "File complaint under Environment Protection Act.",
            ],
            fightingTips: [
                "Challenge standing of complainant if PIL is frivolous.",
                "Show compliance with permissions and norms.",
            ],
            winningStrategies: [
                "Present independent expert reports showing violation.",
                "Seek injunctive relief to prevent further damage.",
            ],
        },
    },
    {
        type: "Stalking & Harassment (Sec. 354D IPC)",
        details: {
            overview:
                "Unwanted following, watching, or contacting of a person causing fear or distress.",
            considerations: [
                "Collect CCTV footage, call records, and witness statements.",
                "File FIR promptly to prevent escalation.",
            ],
            fightingTips: [
                "Dispute intent to harass.",
                "Show consensual communication history.",
            ],
            winningStrategies: [
                "Present digital and witness proof of stalking.",
                "Seek restraining orders for victim’s protection.",
            ],
        },
    },
    {
        type: "Extortion & Blackmail",
        details: {
            overview:
                "Threatening someone to obtain money, property, or advantage.",
            considerations: [
                "Gather call recordings, chats, and witnesses.",
                "File FIR under Sec. 383 IPC.",
            ],
            fightingTips: [
                "Dispute voluntariness of payment.",
                "Challenge admissibility of electronic evidence.",
            ],
            winningStrategies: [
                "Present strong proof of threats and demands.",
                "Use police trap evidence and witnesses.",
            ],
        },
    },
    {
        type: "Forgery of Documents (Sec. 465 IPC)",
        details: {
            overview:
                "Creation of false documents with intent to cheat or defraud.",
            considerations: [
                "Secure original and forged copies for comparison.",
                "Involve handwriting/document experts.",
            ],
            fightingTips: [
                "Question chain of custody for forged document.",
                "Show no wrongful gain was intended.",
            ],
            winningStrategies: [
                "Produce expert forensic reports confirming forgery.",
                "Show motive and opportunity of opposite party.",
            ],
        },
    },
    {
        type: "Tax Evasion & Financial Fraud",
        details: {
            overview:
                "Deliberate evasion of taxes or financial misreporting.",
            considerations: [
                "Review IT department notices and financial records.",
                "Check GST, TDS compliance reports.",
            ],
            fightingTips: [
                "Argue genuine accounting error — no mens rea.",
                "Show voluntary disclosure and payment.",
            ],
            winningStrategies: [
                "Provide reconciled accounts and CA certification.",
                "Seek compounding of offence where possible.",
            ],
        },
    },
    {
        type: "Land Acquisition Disputes",
        details: {
            overview:
                "Conflicts over government acquisition of private land for projects.",
            considerations: [
                "Review compensation awarded and acquisition notification.",
                "Check compliance with Land Acquisition Act.",
            ],
            fightingTips: [
                "Challenge public purpose declaration if arbitrary.",
                "Dispute compensation valuation.",
            ],
            winningStrategies: [
                "Produce higher valuation reports by experts.",
                "Seek fair market value plus solatium as per law.",
            ],
        },
    },
    {
        type: "Right to Information (RTI) Appeals",
        details: {
            overview:
                "Denial or delay of information under RTI Act.",
            considerations: [
                "File first appeal within 30 days of PIO reply.",
                "Document timeline of application and replies.",
            ],
            fightingTips: [
                "Show information falls under exempted category.",
                "Argue privacy or security concerns if defending PIO.",
            ],
            winningStrategies: [
                "Present proof of PIO inaction or delay.",
                "Seek penalties and compensation from Information Commission.",
            ],
        },
    },
    {
        type: "Public Nuisance & Noise Pollution",
        details: {
            overview:
                "Acts causing disturbance to public life — loudspeakers, illegal constructions, etc.",
            considerations: [
                "Collect sound level reports, photographs, video proof.",
                "File complaint with local authority.",
            ],
            fightingTips: [
                "Dispute extent of nuisance caused.",
                "Show compliance with noise regulations.",
            ],
            winningStrategies: [
                "Produce scientific measurements showing nuisance.",
                "Seek injunctions or removal orders.",
            ],
        },
    },
    {
        type: "Eve-Teasing / Outraging Modesty (Sec. 354 IPC)",
        details: {
            overview:
                "Sexually colored remarks, stalking, or harassment of women in public.",
            considerations: [
                "File FIR immediately and preserve witness evidence.",
                "Collect CCTV footage if available.",
            ],
            fightingTips: [
                "Argue mistaken identity or false implication.",
                "Show consensual interaction if applicable.",
            ],
            winningStrategies: [
                "Present corroborative eyewitness testimony.",
                "Use digital evidence to establish harassment.",
            ],
        },
    },
    {
        type: "Hit-and-Run Cases",
        details: {
            overview:
                "Accidents where driver flees the scene without reporting or helping victim.",
            considerations: [
                "Gather FIR, CCTV footage, and witness accounts.",
                "Identify vehicle through RTO records.",
            ],
            fightingTips: [
                "Dispute involvement of accused vehicle.",
                "Show accident was unavoidable or unintentional.",
            ],
            winningStrategies: [
                "Produce forensic vehicle examination report.",
                "Seek compensation for victim through MACT.",
            ],
        },
    },
    {
        type: "Human Trafficking",
        details: {
            overview:
                "Illegal trade or exploitation of humans for forced labor, prostitution, etc.",
            considerations: [
                "Collect rescue records, victim statements, and medical tests.",
                "Coordinate with NGOs for rehabilitation.",
            ],
            fightingTips: [
                "Challenge identity of victim if mismatch.",
                "Dispute trafficking intent — argue voluntary migration.",
            ],
            winningStrategies: [
                "Provide proof of coercion, threats, or exploitation.",
                "Seek maximum punishment under Immoral Traffic Act.",
            ],
        },
    },
    {
        type: "Money Laundering (PMLA Cases)",
        details: {
            overview:
                "Disguising illicit money as legitimate through financial channels.",
            considerations: [
                "Trace transaction trail using banking records.",
                "Review ED/CBI attachments and notices.",
            ],
            fightingTips: [
                "Dispute proceeds-of-crime linkage.",
                "Argue lack of scheduled offence.",
            ],
            winningStrategies: [
                "Present audited records disproving allegations.",
                "Seek release of attached properties via adjudicating authority.",
            ],
        },
    },
    {
        type: "Sedition & Unlawful Assembly",
        details: {
            overview:
                "Acts inciting disaffection against government or unlawful gathering of people.",
            considerations: [
                "Analyze speech, writings, and context carefully.",
                "Review FIR for misuse of Sec. 124A IPC.",
            ],
            fightingTips: [
                "Argue constitutional right to free speech.",
                "Show lack of incitement to violence.",
            ],
            winningStrategies: [
                "Cite landmark SC judgments narrowing sedition law.",
                "Produce evidence of peaceful protest nature.",
            ],
        },
    },
    {
        type: "Dowry Death (Sec. 304B IPC)",
        details: {
            overview:
                "Death of a woman within 7 years of marriage due to dowry-related harassment.",
            considerations: [
                "Collect postmortem report, witness statements, and marriage records.",
                "File FIR immediately to preserve evidence.",
            ],
            fightingTips: [
                "Dispute dowry demand linkage to death.",
                "Argue accidental or natural death cause.",
            ],
            winningStrategies: [
                "Show pattern of cruelty with corroborative proof.",
                "Bring independent witnesses to strengthen case.",
            ],
        },
    },
    {
        type: "Sexual Harassment at Workplace (POSH Cases)",
        details: {
            overview:
                "Unwelcome sexual behavior or remarks at workplace.",
            considerations: [
                "File complaint with ICC within 3 months of incident.",
                "Collect emails, messages, or CCTV footage.",
            ],
            fightingTips: [
                "Challenge jurisdiction if complaint filed beyond limitation.",
                "Show interaction was consensual.",
            ],
            winningStrategies: [
                "Present multiple witness statements supporting victim.",
                "Ensure company policy compliance and disciplinary action.",
            ],
        },
    },
    {
        type: "Bank Loan Defaults & SARFAESI Disputes",
        details: {
            overview:
                "When borrowers default on secured loans, leading to asset seizure by banks.",
            considerations: [
                "Review loan agreement, notices under SARFAESI Act.",
                "Check outstanding dues and interest computation.",
            ],
            fightingTips: [
                "Challenge improper notice or valuation of assets.",
                "Seek restructuring or settlement plan.",
            ],
            winningStrategies: [
                "Show procedural lapses by bank.",
                "Seek relief from DRT or High Court under writ jurisdiction.",
            ],
        },
    },
    {
        type: "Trademark & Copyright Infringement",
        details: {
            overview:
                "Unauthorized use of intellectual property leading to passing off or loss.",
            considerations: [
                "Collect trademark certificates, copyright registration.",
                "Document instances of infringement.",
            ],
            fightingTips: [
                "Challenge validity of IP registration.",
                "Argue fair use, parody, or educational use.",
            ],
            winningStrategies: [
                "Seek injunction against infringing goods/services.",
                "Claim damages and account of profits.",
            ],
        },
    },
    {
        type: "Data Privacy Breaches",
        details: {
            overview:
                "Unauthorized sharing or misuse of personal data.",
            considerations: [
                "Collect logs, data access records, and policies violated.",
                "File complaint with CERT-In or police cyber cell.",
            ],
            fightingTips: [
                "Show consent was taken under company policy.",
                "Prove anonymization of data.",
            ],
            winningStrategies: [
                "Show data leak caused quantifiable harm.",
                "Claim compensation and corrective measures.",
            ],
        },
    },
    {
        type: "RTI Whistleblower Protection",
        details: {
            overview:
                "Threats or retaliation faced by people exposing corruption via RTI.",
            considerations: [
                "Collect copies of RTI application and replies.",
                "Document threats or attacks received.",
            ],
            fightingTips: [
                "Show RTI query was frivolous or harassment tool.",
            ],
            winningStrategies: [
                "Seek police protection and judicial intervention.",
                "Escalate matter to Whistleblower Protection Commission.",
            ],
        },
    },
    {
        type: "Juvenile Justice Cases",
        details: {
            overview:
                "Crimes committed by persons below 18 years, tried under Juvenile Justice Act.",
            considerations: [
                "Confirm age through birth certificate, school records.",
                "Ensure rehabilitation over punishment.",
            ],
            fightingTips: [
                "Dispute age determination if incorrect.",
                "Argue for trial as adult in heinous crimes (if prosecution).",
            ],
            winningStrategies: [
                "Seek bail and counseling facilities for juvenile.",
                "Argue for reformation over incarceration.",
            ],
        },
    },
];

const CourtCasesDetailed = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCases = casesData.filter((caseItem) =>
        caseItem.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.pageContainer}>
            <h1 style={styles.heading}>
                Most Commonly Attained Court Cases & How to Handle Them
            </h1>
            <p style={styles.intro}>
                A comprehensive guide for law students explaining key case types,
                considerations before taking cases, how to fight opponents, and winning
                strategies.
            </p>

            {/* Search Bar */}
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search case type..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={styles.searchInput}
                />
            </div>

            {filteredCases.length === 0 ? (
                <p style={styles.noResult}>No cases found for "{searchTerm}"</p>
            ) : (
                filteredCases.map((caseItem, index) => {
                    const IconComponent = iconMap[caseItem.icon];
                    return (
                        <div key={index} style={styles.caseCard}>
                            <div style={styles.titleRow}>
                                {IconComponent && <IconComponent style={styles.icon} />}
                                <h2 style={styles.caseTitle}>{caseItem.type}</h2>
                            </div>
                            <p style={styles.subheading}>Overview</p>
                            <p style={styles.text}>{caseItem.details.overview}</p>

                            <p style={styles.subheading}>Considerations Before Taking Case</p>
                            <ul style={styles.list}>
                                {caseItem.details.considerations.map((point, i) => (
                                    <li key={i} style={styles.listItem}>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <p style={styles.subheading}>How to Fight Against Opponent</p>
                            <ul style={styles.list}>
                                {caseItem.details.fightingTips.map((tip, i) => (
                                    <li key={i} style={styles.listItem}>
                                        {tip}
                                    </li>
                                ))}
                            </ul>

                            <p style={styles.subheading}>How to Win the Case</p>
                            <ul style={styles.list}>
                                {caseItem.details.winningStrategies.map((strategy, i) => (
                                    <li key={i} style={styles.listItem}>
                                        {strategy}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })
            )}
        </div>
    );
};

const styles = {
    pageContainer: {
        maxWidth: "950px",
        margin: "30px auto",
        padding: "25px 20px",
        fontFamily: "'Open Sans', sans-serif",
        backgroundColor: "#f8f9fb",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
        color: "#2d3a4a",
    },
    heading: {
        textAlign: "center",
        fontSize: "36px",
        marginBottom: "10px",
        color: "#1a73e8",
        fontWeight: "700",
    },
    intro: {
        fontSize: "18px",
        textAlign: "center",
        marginBottom: "25px",
        fontWeight: "500",
        color: "#555",
    },
    searchContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "25px",
    },
    searchInput: {
        width: "60%",
        padding: "12px 18px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
        transition: "0.3s",
    },
    noResult: {
        textAlign: "center",
        fontSize: "16px",
        color: "#888",
        marginTop: "20px",
    },
    caseCard: {
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        marginBottom: "30px",
        padding: "25px 30px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
    },
    titleRow: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "12px",
    },
    caseTitle: {
        fontSize: "24px",
        color: "#0d47a1",
        fontWeight: "700",
        borderBottom: "2px solid #1a73e8",
        paddingBottom: "4px",
        flex: 1,
    },
    subheading: {
        fontSize: "18px",
        fontWeight: "600",
        marginBottom: "8px",
        color: "#2a3f6b",
        marginTop: "15px",
    },
    text: {
        fontSize: "16px",
        marginBottom: "15px",
        lineHeight: "1.6",
        color: "#555",
    },
    list: {
        marginBottom: "20px",
        paddingLeft: "22px",
    },
    listItem: {
        fontSize: "15px",
        lineHeight: "1.5",
        color: "#3c4a65",
        marginBottom: "8px",
    },
    icon: {
        fontSize: "26px",
        color: "#1a73e8",
    },
};

export default CourtCasesDetailed;
