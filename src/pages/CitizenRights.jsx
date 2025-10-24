import React, { useState } from "react";

const RightsAndResponsibilities = () => {
  const sections = [
    {
      title: "Citizen’s Rights under the Constitution",
      content: [
        "Right to Equality (Articles 14–18) – Guarantees equality before law and prohibits discrimination based on religion, caste, gender, or place of birth. Includes abolition of untouchability and titles.",
        "Right to Freedom (Articles 19–22) – Freedom of speech and expression, assembly, association, movement, residence, and profession. Subject to reasonable restrictions in interest of sovereignty, security, and public order.",
        "Right against Exploitation (Articles 23–24) – Protection from human trafficking, forced labor, and hazardous child labor.",
        "Right to Freedom of Religion (Articles 25–28) – Freedom to practice, profess, and propagate religion; freedom from religious instruction in state institutions.",
        "Cultural and Educational Rights (Articles 29–30) – Protect minorities' rights to preserve culture, language, and establish educational institutions.",
        "Right to Constitutional Remedies (Article 32) – Right to move the Supreme Court or High Courts to enforce fundamental rights.",
      ],
    },
    {
      title: "Consumer Rights",
      content: [
        "Right to Safety – Protection against hazardous goods and services that may harm health or life.",
        "Right to Information – Access to complete details about quality, quantity, ingredients, and price of products.",
        "Right to Choose – Freedom to select goods/services at competitive prices without coercion.",
        "Right to be Heard – Consumers can lodge complaints and expect a fair hearing in forums.",
        "Right to Redressal – Compensation for unfair trade practices, defective goods, or deficient services.",
        "Right to Consumer Education – Awareness about rights, responsibilities, and safe consumption practices.",
      ],
    },
    {
      title: "Tenant Rights",
      content: [
        "Right to Fair Rent – Protection from arbitrary rent hikes and eviction without proper legal notice.",
        "Security Deposit Protection – Lawful refund of security deposits with interest where applicable.",
        "Right to Safe and Habitable Living Conditions – Adequate sanitation, ventilation, and repair facilities.",
        "Eviction Guidelines – Legal eviction requires notice and due process; tenants can approach rent control authorities.",
        "Dispute Resolution – Tenants can seek mediation or legal remedies under tenancy laws.",
      ],
    },
    {
      title: "Employee Rights",
      content: [
        "Right to Fair Wages – Minimum wage, overtime pay, and timely salary payments.",
        "Safe Working Conditions – Employer must ensure safety equipment, training, and emergency preparedness.",
        "Protection from Discrimination & Harassment – Equal opportunity regardless of gender, caste, religion, or disability.",
        "Right to Unionize – Employees can form or join trade unions and engage in collective bargaining.",
        "Maternity & Leave Benefits – Paid maternity leave, sick leave, annual leave, and other statutory benefits.",
        "Social Security Benefits – Provident fund, insurance, pension schemes, and gratuity entitlements.",
      ],
    },
    {
      title: "Rights in Special Situations",
      content: [
        "Women – Protection against domestic violence, sexual harassment, equal pay, maternity benefits, and education.",
        "Children – Right to education, protection from exploitation, child labor, trafficking, and abuse.",
        "Elderly – Right to maintenance from children, protection from neglect and abuse, access to healthcare and social security.",
        "Persons with Disabilities – Equal access to education, employment, and facilities along with non-discrimination.",
      ],
    },
    {
      title: "Responsibilities of Citizens",
      content: [
        "Obey the law and respect constitutional provisions.",
        "Pay taxes honestly and timely to support national development.",
        "Preserve national heritage, culture, and environment.",
        "Promote harmony, respect diversity, and uphold democratic values.",
        "Defend the country in case of national emergencies.",
        "Participate in democratic processes such as voting.",
      ],
    },
  {
    title: "Women’s Rights",
    content: [
      "Right to Equality and Non-Discrimination.",
      "Protection against Domestic Violence and Sexual Harassment.",
      "Right to Equal Pay for Equal Work.",
      "Maternity Benefits and Workplace Safety.",
      "Right to Education and Political Participation.",
    ],
  },
  {
    title: "Children’s Rights",
    content: [
      "Right to Education and Free Primary Education.",
      "Protection from Child Labor and Exploitation.",
      "Right to Health and Nutrition.",
      "Right to Identity (Birth Certificate, Citizenship).",
      "Protection in Conflict Zones and Emergencies.",
    ],
  },
  {
    title: "Elderly Rights",
    content: [
      "Right to Maintenance and Financial Security.",
      "Protection from Abuse, Neglect, and Exploitation.",
      "Access to Healthcare and Social Programs.",
      "Right to Participate in Social and Community Activities.",
    ],
  },
  {
    title: "Labour Rights & Employment",
    content: [
      "Right to Minimum Wages, Working Hours, and Overtime Pay.",
      "Safe and Hygienic Working Conditions.",
      "Protection against Discrimination and Unfair Dismissal.",
      "Right to Form Trade Unions and Collective Bargaining.",
      "Access to Social Security, Pension, and Insurance.",
    ],
  },
  {
    title: "Consumer Rights – Extended",
    content: [
      "Right to Fair Trade Practices.",
      "Right to Replace or Refund Defective Goods.",
      "Right to Quality Services and Transparent Information.",
      "Right to Representation in Consumer Forums.",
      "Right to Consumer Awareness Programs.",
    ],
  },
  {
    title: "Environmental Rights",
    content: [
      "Right to Clean Air, Water, and Sustainable Environment.",
      "Protection of Forests, Wildlife, and Biodiversity.",
      "Participation in Environmental Conservation Programs.",
      "Responsibility to Reduce Pollution and Waste.",
      "Right to Access Environmental Information.",
    ],
  },
  {
    title: "Digital & Cyber Rights",
    content: [
      "Right to Privacy and Data Protection.",
      "Protection from Cybercrime and Online Fraud.",
      "Right to Freedom of Expression Online.",
      "Responsibility to Avoid Misinformation and Cyberbullying.",
      "Right to Access Digital Services and Information.",
    ],
  },
  {
    title: "Minority & Community Rights",
    content: [
      "Right to Preserve Language, Culture, and Religion.",
      "Right to Establish Educational Institutions.",
      "Protection against Social and Economic Discrimination.",
      "Right to Political Representation and Participation.",
      "Right to Government Assistance Programs for Minorities.",
    ],
  },
  {
    title: "Disaster & Emergency Rights",
    content: [
      "Right to Immediate Relief and Evacuation.",
      "Right to Safe Shelter and Food during Disasters.",
      "Access to Government Compensation and Aid.",
      "Responsibility to Follow Safety Guidelines.",
      "Participation in Community Relief Efforts.",
    ],
  },
  {
    title: "Education & Knowledge Rights",
    content: [
      "Right to Free and Compulsory Education for Children.",
      "Access to Adult Literacy and Skill Development Programs.",
      "Right to Equal Educational Opportunities.",
      "Protection from Discrimination in Educational Institutions.",
      "Responsibility to Promote Knowledge and Learning.",
    ],
  },
  {
    title: "Political Rights",
    content: [
      "Right to Vote and Participate in Elections.",
      "Right to Contest Elections for Public Office.",
      "Right to Freedom of Association and Political Expression.",
      "Responsibility to Respect Electoral Processes.",
      "Duty to Stay Informed and Participate Responsibly in Democracy.",
    ],
  },
  {
    title: "Health Rights",
    content: [
      "Right to Accessible and Affordable Healthcare.",
      "Right to Nutrition and Sanitation.",
      "Protection from Malpractice and Unsafe Medical Practices.",
      "Right to Information on Health Services.",
      "Responsibility to Maintain Personal and Public Health.",
    ],
  },
  {
    title: "Social Justice & Equality Rights",
    content: [
      "Protection against Caste, Gender, and Religious Discrimination.",
      "Right to Affirmative Action and Reservations.",
      "Access to Social Welfare Programs.",
      "Participation in Community Development Programs.",
      "Responsibility to Promote Equality and Justice in Society.",
    ],
  },
  {
    title: "Environmental Rights & Responsibilities",
    content: [
      "Right to a Clean Environment – Citizens can demand clean air, water, and safe surroundings.",
      "Responsibility to Protect Nature – Reduce waste, plant trees, conserve water and energy.",
      "Participate in Environmental Programs – Awareness and community participation in environmental protection.",
    ],
  },
  {
    title: "Digital & Privacy Rights",
    content: [
      "Right to Privacy – Personal data must be protected by law.",
      "Right to Digital Security – Protection from cybercrime, hacking, and online fraud.",
      "Responsibility for Safe Online Behavior – Avoid spreading misinformation, respect others online.",
    ],
  },
  {
    title: "Rights of Persons with Disabilities",
    content: [
      "Equal access to education, employment, public places, and transportation.",
      "Right to rehabilitation and assistive devices.",
      "Protection against discrimination and abuse.",
    ],
  },
  {
    title: "Minority Rights",
    content: [
      "Right to preserve culture, language, and religion.",
      "Right to establish and administer educational institutions.",
      "Protection against discrimination in employment and public life.",
    ],
  },
  {
    title: "Economic & Labour Rights",
    content: [
      "Right to fair wages and working conditions.",
      "Right to social security and insurance benefits.",
      "Protection against forced labor and exploitation.",
      "Right to participate in union and collective bargaining.",
    ],
  },
  {
    title: "Rights in Emergency & Disaster Situations",
    content: [
      "Right to timely government aid and relief.",
      "Right to safe evacuation and shelter during disasters.",
      "Responsibility to help community and follow safety guidelines.",
    ],
  },
  {
    title: "Education & Knowledge Rights",
    content: [
      "Right to free and compulsory education for children (6–14 years).",
      "Right to adult literacy and skill development programs.",
      "Responsibility to value education and share knowledge.",
    ],
  },
  {
    title: "General Responsibilities",
    content: [
      "Obey the Constitution and laws of the country.",
      "Respect the rights, beliefs, and opinions of others.",
      "Pay taxes honestly and on time.",
      "Promote harmony and unity in society.",
      "Participate in democratic processes responsibly.",
    ],
  },
  {
    title: "Environmental Responsibilities",
    content: [
      "Protect and preserve natural resources like water, air, and forests.",
      "Reduce, Reuse, and Recycle waste materials.",
      "Avoid pollution and support environmental conservation programs.",
      "Plant trees and maintain green spaces in the community.",
      "Promote awareness about climate change and sustainable practices.",
    ],
  },
  {
    title: "Social Responsibilities",
    content: [
      "Respect cultural diversity and promote inclusivity.",
      "Assist the needy and vulnerable in society.",
      "Act against discrimination and injustice wherever possible.",
      "Participate in community service and social welfare programs.",
      "Support educational initiatives and literacy programs.",
    ],
  },
  {
    title: "Digital & Cyber Responsibilities",
    content: [
      "Use digital technology ethically and responsibly.",
      "Avoid spreading misinformation or harmful content online.",
      "Protect your own and others’ personal data and privacy.",
      "Report cybercrimes and assist in maintaining online safety.",
      "Promote digital literacy in your community.",
    ],
  },
  {
    title: "Health Responsibilities",
    content: [
      "Maintain personal hygiene and health.",
      "Follow public health guidelines and vaccinations.",
      "Support initiatives for sanitation and clean surroundings.",
      "Assist in public health campaigns and awareness drives.",
      "Respect the rights of healthcare workers and institutions.",
    ],
  },
  {
    title: "Civic Responsibilities",
    content: [
      "Vote in elections and stay informed about public issues.",
      "Respect public property and avoid vandalism.",
      "Follow traffic rules and ensure road safety.",
      "Report crimes or unsafe situations to authorities.",
      "Participate in local governance and community development.",
    ],
  },
  {
    title: "Economic Responsibilities",
    content: [
      "Pay taxes and contribute to public welfare.",
      "Support local businesses and fair trade practices.",
      "Avoid corruption and unethical financial practices.",
      "Contribute to national development through honest work.",
      "Promote sustainable consumption and responsible spending.",
    ],
  },
  {
    title: "Family & Community Responsibilities",
    content: [
      "Provide care and support to family members.",
      "Respect elders and protect children’s rights.",
      "Promote education and skill development in the community.",
      "Assist neighbors and contribute to social cohesion.",
      "Be a role model in ethical and responsible behavior.",
    ],
  },
  {
    title: "Right to Privacy",
    content: [
      "Protection against unauthorized surveillance and data collection.",
      "Control over personal information shared online or offline.",
      "Right to confidentiality in personal communications.",
    ],
  },
  {
    title: "Right to Education",
    content: [
      "Access to free and compulsory education for children up to 14 years.",
      "Right to pursue higher education without discrimination.",
      "Access to vocational and skill-based training.",
    ],
  },
  {
    title: "Rights of Marginalized Communities",
    content: [
      "Scheduled Castes/Scheduled Tribes – Right to equality, education, and protection.",
      "Minorities – Right to preserve culture, language, and religion.",
      "Persons with Disabilities – Right to accessibility, education, and employment opportunities.",
    ],
  },
  {
    title: "Political Rights",
    content: [
      "Right to vote after attaining the legal age.",
      "Right to contest elections.",
      "Right to join political parties and participate in political processes.",
    ],
  },
  {
    title: "Right to Work and Livelihood",
    content: [
      "Right to choose an occupation and work freely.",
      "Protection from forced labor and exploitative employment.",
      "Right to equal pay for equal work.",
    ],
  },
  {
    title: "Freedom of Press and Expression",
    content: [
      "Right to publish and access information freely.",
      "Protection of journalists and media personnel from harassment.",
      "Right to form opinions and participate in public discourse.",
    ],
  },
  {
    title: "Right to Environment",
    content: [
      "Right to live in a clean and healthy environment.",
      "Protection against pollution and environmental degradation.",
      "Right to access environmental information and participate in decisions.",
    ],
  },
  {
    title: "Right to Health",
    content: [
      "Access to affordable and quality healthcare.",
      "Protection against denial of medical services.",
      "Right to preventive care, vaccination, and health education.",
    ],
  },
  {
    title: "Digital Rights",
    content: [
      "Right to internet access and digital literacy.",
      "Right to protection of personal data online.",
      "Right to freedom of expression online within legal limits.",
    ],
  },
  {
    title: "Right against Discrimination",
    content: [
      "Protection against caste, gender, religion, or disability-based discrimination.",
      "Right to equal opportunity in employment and education.",
      "Right to social inclusion and affirmative action benefits.",
    ],
  },
  {
    title: "Consumer Financial Rights",
    content: [
      "Right to fair banking, insurance, and investment practices.",
      "Protection against fraudulent financial schemes.",
      "Right to grievance redressal in financial matters.",
    ],
  },
  {
    title: "Right to Access Justice",
    content: [
      "Right to free legal aid if unable to afford legal services.",
      "Right to a fair and speedy trial.",
      "Right to appeal and review judicial decisions.",
    ],
  },
  {
    title: "Rights during Emergencies",
    content: [
      "Protection of fundamental rights even during emergencies wherever possible.",
      "Right to information on government actions during crises.",
      "Right to essential services and safety during disasters.",
    ],
  },
  {
    title: "Educational Responsibilities",
    content: [
      "Pursue lifelong learning and skill development.",
      "Support education for children and underprivileged groups.",
      "Promote scientific temper and critical thinking.",
    ],
  },
  {
    title: "Cultural Responsibilities",
    content: [
      "Preserve local and national cultural heritage.",
      "Participate in cultural events and promote arts.",
      "Respect traditions while promoting progressive values.",
    ],
  },
  {
    title: "Community Safety Responsibilities",
    content: [
      "Report unsafe conditions or criminal activity.",
      "Assist in disaster management and emergency response.",
      "Volunteer in community safety programs.",
    ],
  },
  {
    title: "Global Responsibilities",
    content: [
      "Promote peace, tolerance, and international cooperation.",
      "Support global initiatives for climate and sustainability.",
      "Respect international laws and human rights.",
    ],
  },
  {
    title: "Ethical Responsibilities",
    content: [
      "Act with honesty and integrity in personal and professional life.",
      "Avoid corruption, fraud, and exploitation.",
      "Promote fairness, justice, and ethical behavior in society.",
    ],
  },
  {
    title: "Media & Digital Responsibilities",
    content: [
      "Verify information before sharing online.",
      "Avoid hate speech, cyberbullying, and defamation.",
      "Respect copyright and intellectual property laws.",
    ],
  },
  {
    title: "Environmental Responsibilities",
    content: [
      "Reduce, reuse, and recycle waste.",
      "Plant trees and maintain green spaces.",
      "Avoid activities that pollute or harm nature.",
    ],
  },
  {
    title: "Civic & Social Responsibilities",
    content: [
      "Participate in local governance and community development.",
      "Assist in voter awareness and election participation.",
      "Support social welfare programs for marginalized groups.",
    ],
  },
  {
    title: "Digital Responsibilities",
    content: [
      "Use social media responsibly and avoid spreading misinformation.",
      "Respect online privacy and digital security of others.",
      "Report cybercrimes and illegal online activities.",
    ],
  },
  {
    title: "Economic & Financial Responsibilities",
    content: [
      "Pay taxes honestly and on time.",
      "Support local businesses and fair trade.",
      "Avoid corrupt or illegal financial practices.",
    ],
  },
  {
    title: "Disaster & Emergency Responsibilities",
    content: [
      "Help during natural disasters and emergencies.",
      "Follow government guidelines for safety and relief operations.",
      "Volunteer in rescue and rehabilitation efforts when possible.",
    ],
  },
  {
    title: "Legal & Ethical Responsibilities",
    content: [
      "Avoid illegal or unethical behavior in daily life.",
      "Promote justice and fairness in personal and professional dealings.",
      "Respect intellectual property and copyright laws.",
    ],
  },
  {
    title: "Global Citizenship Responsibilities",
    content: [
      "Be aware of global issues like climate change, poverty, and conflicts.",
      "Promote peace, tolerance, and sustainability.",
      "Support initiatives that benefit humanity beyond borders.",
    ],
  },
  ];
 const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Rights & Responsibilities</h1>
      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            ...styles.section,
            boxShadow:
              activeIndex === index
                ? "0 8px 20px rgba(0,0,0,0.15)"
                : "0 4px 10px rgba(0,0,0,0.05)",
            transform: activeIndex === index ? "scale(1.02)" : "scale(1)",
          }}
        >
          <div
            style={styles.sectionTitle}
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </div>
          {activeIndex === index && (
            <div style={styles.sectionContent}>
              {section.content.map((item, i) => (
                <div key={i} style={styles.itemCard}>
                  <span style={styles.itemBullet}></span>
                  <span style={styles.itemText}>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#1b262c",
    fontSize: "2.2rem",
    marginBottom: "30px",
    fontWeight: "600",
  },
  section: {
    marginBottom: "20px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  sectionTitle: {
    padding: "18px 25px",
    fontWeight: "600",
    fontSize: "1.3rem",
    background: "linear-gradient(90deg, #56ab2f 0%, #a8e063 100%)",
    color: "#fff",
    userSelect: "none",
  },
  sectionContent: {
    padding: "20px 15px",
    backgroundColor: "#f7f9f9",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    borderRadius: "0 0 12px 12px",
  },
  itemCard: {
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: "#e8f5e9",
    padding: "12px 15px",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    position: "relative",
  },
  itemBullet: {
    width: "10px",
    height: "10px",
    backgroundColor: "#2e7d32",
    borderRadius: "50%",
    flexShrink: 0,
    marginTop: "6px",
    marginRight: "12px",
  },
  itemText: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#1b5e20",
  },
};

export default RightsAndResponsibilities;