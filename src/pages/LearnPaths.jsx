import React, { useState } from "react";
import { Briefcase, Layers, BookOpen, ShieldCheck, Users, Home, Globe, CloudRain, UserCheck, Percent, Plane, Heart, Film, Trophy, Anchor, Gavel, Zap, Truck, Smile } from "lucide-react";

const LawPage = () => {
    const [search, setSearch] = useState("");
    const LAW_SPECIALIZATIONS = [
        {
            id: 1,
            name: "Criminal Law",
            description: "Deals with crimes, legal punishments, and prosecution of offenders.",
            salary: "₹5L - ₹15L per annum",
            careerFields: ["Law Firms", "Government Agencies", "Public Prosecutor Offices"],
            icon: <ShieldCheck size={32} />
        },
        {
            id: 2,
            name: "Corporate Law",
            description: "Covers business, corporate governance, mergers, and contracts.",
            salary: "₹6L - ₹25L per annum",
            careerFields: ["Corporate Firms", "Startups", "Legal Advisory"],
            icon: <Briefcase size={32} />
        },
        {
            id: 3,
            name: "Civil Law",
            description: "Covers disputes between individuals or organizations not involving crimes.",
            salary: "₹4L - ₹12L per annum",
            careerFields: ["Law Firms", "Mediation Centers", "Judiciary"],
            icon: <Gavel size={32} />
        },
        {
            id: 4,
            name: "Constitutional Law",
            description: "Deals with the interpretation and implementation of a country's constitution.",
            salary: "₹6L - ₹20L per annum",
            careerFields: ["Government", "Judiciary", "Policy Advisory"],
            icon: <BookOpen size={32} />
        },
        {
            id: 5,
            name: "Administrative Law",
            description: "Covers regulations, government agencies, and their actions.",
            salary: "₹5L - ₹15L per annum",
            careerFields: ["Government Departments", "Regulatory Bodies", "Public Policy"],
            icon: <Layers size={32} />
        },
        {
            id: 6,
            name: "Family Law",
            description: "Deals with marriage, divorce, child custody, and adoption issues.",
            salary: "₹4L - ₹12L per annum",
            careerFields: ["Family Courts", "Law Firms", "Mediation Services"],
            icon: <Users size={32} />
        },
        {
            id: 7,
            name: "Intellectual Property Law",
            description: "Covers patents, copyrights, trademarks, and trade secrets.",
            salary: "₹7L - ₹20L per annum",
            careerFields: ["Tech Firms", "Media Companies", "Innovation Hubs"],
            icon: <Zap size={32} />
        },
        {
            id: 8,
            name: "Environmental Law",
            description: "Covers regulations regarding environmental protection and sustainability.",
            salary: "₹5L - ₹18L per annum",
            careerFields: ["NGOs", "Government Agencies", "Corporate Compliance"],
            icon: <CloudRain size={32} />
        },
        {
            id: 9,
            name: "Labor and Employment Law",
            description: "Deals with employer-employee relationships, labor rights, and workplace regulations.",
            salary: "₹5L - ₹15L per annum",
            careerFields: ["HR Departments", "Law Firms", "Government Labor Boards"],
            icon: <UserCheck size={32} />
        },
        {
            id: 10,
            name: "Tax Law",
            description: "Covers taxation policies, compliance, and disputes.",
            salary: "₹6L - ₹20L per annum",
            careerFields: ["Tax Advisory Firms", "Corporate Finance", "Government Revenue Departments"],
            icon: <Percent size={32} />
        },
        {
            id: 11,
            name: "Immigration Law",
            description: "Deals with citizenship, visas, and migration policies.",
            salary: "₹4L - ₹12L per annum",
            careerFields: ["Immigration Consultancy", "Law Firms", "Government Agencies"],
            icon: <Plane size={32} />
        },
        {
            id: 12,
            name: "Property / Real Estate Law",
            description: "Covers land ownership, real estate transactions, and tenancy disputes.",
            salary: "₹5L - ₹15L per annum",
            careerFields: ["Real Estate Firms", "Law Firms", "Property Consultants"],
            icon: <Home size={32} />
        },
        {
            id: 13,
            name: "Contract Law",
            description: "Focuses on agreements, obligations, and breach of contracts.",
            salary: "₹5L - ₹18L per annum",
            careerFields: ["Corporate Firms", "Legal Advisory", "Startups"],
            icon: <Gavel size={32} />
        },
        {
            id: 14,
            name: "International Law",
            description: "Covers treaties, international disputes, and global regulations.",
            salary: "₹7L - ₹25L per annum",
            careerFields: ["UN / International Organizations", "Embassies", "Global Law Firms"],
            icon: <Globe size={32} />
        },
        {
            id: 15,
            name: "Cyber Law / IT Law",
            description: "Deals with internet, technology, cybersecurity, and data privacy laws.",
            salary: "₹6L - ₹20L per annum",
            careerFields: ["Tech Companies", "Cybersecurity Firms", "Legal Advisory"],
            icon: <Zap size={32} />
        },
        {
            id: 16,
            name: "Human Rights Law",
            description: "Protects the rights and freedoms of individuals and groups.",
            salary: "₹4L - ₹15L per annum",
            careerFields: ["NGOs", "Government", "International Organizations"],
            icon: <ShieldCheck size={32} />
        },
        {
            id: 17,
            name: "Banking and Finance Law",
            description: "Covers banking regulations, loans, investments, and financial institutions.",
            salary: "₹6L - ₹25L per annum",
            careerFields: ["Banks", "Financial Institutions", "Corporate Firms"],
            icon: <Briefcase size={32} />
        },
        {
            id: 18,
            name: "Competition / Antitrust Law",
            description: "Ensures fair competition and prevents monopolies.",
            salary: "₹6L - ₹20L per annum",
            careerFields: ["Corporate Firms", "Regulatory Bodies", "Legal Advisory"],
            icon: <Layers size={32} />
        },
        {
            id: 19,
            name: "Consumer Protection Law",
            description: "Covers rights and remedies of consumers against unfair practices.",
            salary: "₹5L - ₹15L per annum",
            careerFields: ["NGOs", "Corporate Compliance", "Law Firms"],
            icon: <Smile size={32} />
        },
        {
            id: 20,
            name: "Education Law",
            description: "Deals with regulations around schools, universities, and education policies.",
            salary: "₹4L - ₹12L per annum",
            careerFields: ["Educational Institutions", "Government", "Legal Advisory"],
            icon: <BookOpen size={32} />
        },
        {
            id: 21,
            name: "Health / Medical Law",
            description: "Covers medical ethics, healthcare regulations, and patient rights.",
            salary: "₹5L - ₹18L per annum",
            careerFields: ["Hospitals", "Healthcare Firms", "Government Agencies"],
            icon: <Heart size={32} />
        },
        {
            id: 22,
            name: "Entertainment / Media Law",
            description: "Deals with media, broadcasting, film, and celebrity rights.",
            salary: "₹5L - ₹20L per annum",
            careerFields: ["Media Companies", "Film Industry", "Law Firms"],
            icon: <Film size={32} />
        },
        {
            id: 23,
            name: "Sports Law",
            description: "Covers sports regulations, contracts, and athlete rights.",
            salary: "₹4L - ₹15L per annum",
            careerFields: ["Sports Teams", "Law Firms", "Sports Federations"],
            icon: <Trophy size={32} />
        },
        {
            id: 24,
            name: "Maritime / Admiralty Law",
            description: "Deals with shipping, marine commerce, and maritime disputes.",
            salary: "₹6L - ₹22L per annum",
            careerFields: ["Shipping Companies", "Law Firms", "International Trade"],
            icon: <Anchor size={32} />
        },
        {
            id: 25,
            name: "Arbitration and ADR",
            description: "Covers out-of-court dispute resolution methods.",
            salary: "₹5L - ₹20L per annum",
            careerFields: ["Law Firms", "Corporate Firms", "Mediation Centers"],
            icon: <Gavel size={32} />
        },
        {
            id: 26,
            name: "Energy / Oil & Gas Law",
            description: "Deals with regulations on energy, oil, gas, and renewable resources.",
            salary: "₹6L - ₹25L per annum",
            careerFields: ["Energy Companies", "Corporate Firms", "Government Agencies"],
            icon: <Zap size={32} />
        },
        {
            id: 27,
            name: "Transportation Law",
            description: "Covers laws related to aviation, railways, and road transport.",
            salary: "₹5L - ₹18L per annum",
            careerFields: ["Transport Companies", "Law Firms", "Regulatory Bodies"],
            icon: <Truck size={32} />
        },
        {
            id: 28,
            name: "Insurance Law",
            description: "Deals with policies, claims, and insurance regulations.",
            salary: "₹5L - ₹20L per annum",
            careerFields: ["Insurance Firms", "Corporate Compliance", "Law Firms"],
            icon: <ShieldCheck size={32} />
        },
        {
            id: 29,
            name: "Elder / Senior Citizen Law",
            description: "Covers rights and protections for senior citizens.",
            salary: "₹4L - ₹12L per annum",
            careerFields: ["NGOs", "Legal Advisory", "Government Agencies"],
            icon: <Users size={32} />
        }
    ];


    const filteredLaws = LAW_SPECIALIZATIONS.filter(
        (law) =>
            law.name.toLowerCase().includes(search.toLowerCase()) ||
            law.careerFields.some((field) =>
                field.toLowerCase().includes(search.toLowerCase())
            )
    );

    return (
        <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", background: "#f4f6f8", minHeight: "100vh" }}>
            <header style={{ textAlign: "center", padding: "2rem", background: "linear-gradient(90deg, #1c3c72, #2a5298)", color: "white" }}>
                <h1>Explore Law Specializations</h1>
                <input
                    type="text"
                    placeholder="Search by law or career field..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ marginTop: "1rem", padding: "0.5rem 1rem", width: "300px", borderRadius: "25px", border: "none", outline: "none" }}
                />
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", padding: "2rem" }}>
                {filteredLaws.map((law) => (
                    <div key={law.id} style={{ background: "white", padding: "1.5rem", borderRadius: "15px", boxShadow: "0px 5px 15px rgba(0,0,0,0.1)", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.2)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.1)"; }}
                    >
                        <div style={{ color: "#2a5298", marginBottom: "1rem" }}>{law.icon}</div>
                        <h2 style={{ margin: 0, fontSize: "1.4rem", fontWeight: 700 }}>{law.name}</h2>
                        <p style={{ fontSize: "0.95rem", margin: "0.5rem 0" }}>{law.description}</p>
                        <p style={{ fontSize: "0.85rem", color: "#555" }}>Estimated Salary: {law.salary}</p>
                        <p style={{ fontSize: "0.85rem", color: "#555" }}>Target Fields: {law.careerFields.join(", ")}</p>
                        <button style={{ marginTop: "1rem", padding: "0.5rem 1rem", borderRadius: "20px", border: "none", background: "#2a5298", color: "white", cursor: "pointer" }}
                            onMouseEnter={(e) => e.currentTarget.style.background = "#1c3c72"}
                            onMouseLeave={(e) => e.currentTarget.style.background = "#2a5298"}
                        >
                        <a href="https://www.indeed.com/career-advice/finding-a-job/areas-of-law?utm_source=chatgpt.com" target="_blank" style={{color: "#fff",textDecoration: "none" }}>Learn More</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LawPage;
