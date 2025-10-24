import React from "react";

const ImportantArticlesNotes = () => {
  const parts = [
    {
      title: "Fundamental Rights (Part III)",
      color: "#f28b82", // redish for rights
      description: "Essential rights of citizens enforceable by courts, protecting individuals from state action.",
      articles: [
        { name: "Article 14: Right to Equality", desc: "Equality before law; prohibits discrimination on grounds of religion, race, caste, sex, or place of birth." },
        { name: "Article 15: Prohibition of Discrimination", desc: "Prevents discrimination in access to public places, jobs, and education." },
        { name: "Article 17: Abolition of Untouchability", desc: "Untouchability is prohibited; violation is punishable by law." },
        { name: "Article 19: Freedom of Speech and Expression", desc: "Includes freedom of expression, assembly, association, movement, and residence." },
        { name: "Article 21: Protection of Life and Personal Liberty", desc: "No person can be deprived of life or personal liberty except according to the procedure established by law." },
        { name: "Article 32: Right to Constitutional Remedies", desc: "Allows individuals to approach the Supreme Court for enforcement of Fundamental Rights." },
      ],
    },
    {
      title: "Fundamental Duties (Part IVA)",
      color: "#fbbc04", // yellow for duties
      description: "Moral obligations of citizens to uphold the Constitution and promote unity, harmony, and good citizenship.",
      articles: [
        { name: "Article 51A: Fundamental Duties", desc: "Respect the Constitution, promote harmony, protect environment and public property, value heritage, and promote scientific temper." },
      ],
    },
    {
      title: "Directive Principles of State Policy (Part IV)",
      color: "#34a853", // green for DPS
      description: "Guidelines for the State to ensure social, economic, and political justice; not enforceable by courts.",
      articles: [
        { name: "Article 38: Social Welfare", desc: "State shall secure a social order for promotion of welfare of the people." },
        { name: "Article 39: Principles of Policy", desc: "Ensure adequate means of livelihood, equal opportunity, and equitable distribution of resources." },
        { name: "Article 41: Right to Work, Education and Public Assistance", desc: "State to provide work, education, and assistance to those unable to support themselves." },
        { name: "Article 44: Uniform Civil Code", desc: "Directs State to implement a uniform civil code for all citizens, replacing personal laws based on religion." },
        { name: "Article 46: Promotion of Interests of Weaker Sections", desc: "Promote education and economic interests of SCs, STs, and other weaker sections." },
      ],
    },
    {
      title: "Special Provisions",
      color: "#4285f4", // blue for special
      description: "Key provisions related to states, reservation, and special powers.",
      articles: [
        { name: "Article 330 & 332: Reservation of Seats", desc: "Seats reserved for Scheduled Castes and Scheduled Tribes in Parliament and State Assemblies." },
        { name: "Article 370: Special Provisions for J&K", desc: "Previously granted autonomy to Jammu & Kashmir (now abrogated)." },
        { name: "Article 371: Special Provisions for Certain States", desc: "Special administrative and legislative provisions for states like Maharashtra, Gujarat, Nagaland, etc." },
      ],
    },
    {
      title: "Governance & Executive",
      color: "#aa00ff", // purple for governance
      description: "Important provisions about the President, Governors, and Council of Ministers.",
      articles: [
        { name: "Article 52–61: President of India", desc: "Election, powers, and impeachment procedure for the President." },
        { name: "Article 74 & 75: Council of Ministers", desc: "Aid and advise the President; provisions for Ministers at Union level." },
        { name: "Article 123: Ordinance Making Power of President", desc: "President can promulgate ordinances when Parliament is not in session." },
        { name: "Article 153–164: Governor & State Executive", desc: "Defines Governor's role, powers, and Council of Ministers in states." },
      ],
    },
    {
      title: "Elections",
      color: "#f06292", // pink for elections
      description: "Key provisions governing free and fair elections.",
      articles: [
        { name: "Article 324: Election Commission", desc: "Superintendence, direction, and control of elections to Parliament, State Legislatures, and offices of President and Vice-President." },
        { name: "Article 326: Adult Suffrage", desc: "Elections to the House of the People and Legislative Assemblies based on universal adult suffrage." },
      ],
    },
    {
      title: "Amendment of Constitution",
      color: "#00bfa5", // teal for amendments
      description: "How the Constitution can be amended.",
      articles: [
        { name: "Article 368: Power of Parliament to Amend Constitution", desc: "Special procedure for Parliament to amend the Constitution." },
      ],
    },
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f2f2f2" }}>
      <h1 style={{textAlign: "center",color: "#da20a2ff",fontSize: "2.5rem"}}>Important Articles List</h1>
      {parts.map((part, index) => (
        <section key={index} style={{ marginBottom: "40px" }}>
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "700",
              paddingLeft: "15px",
              borderLeft: `8px solid ${part.color}`,
              marginBottom: "12px",
              color: part.color,
            }}
          >
            {part.title}
          </h2>
          <p style={{ fontStyle: "italic", marginBottom: "20px", color: "#555" }}>{part.description}</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {part.articles.map((article, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: part.color + "33", // light pastel version of heading color
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
                }}
              >
                <h3 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "10px", color: part.color }}>
                  {article.name}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "#333", lineHeight: "1.5" }}>{article.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ImportantArticlesNotes;