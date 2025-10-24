import React, { useState } from "react";

const amendmentsData = [
    { number: "1st Amendment", description: "Right to freedom of speech, religion, press, assembly and petition.", link: "https://en.wikipedia.org/wiki/First_Amendment_to_the_Constitution_of_India" },
    { number: "2nd Amendment", description: "Readjusted representation in Lok Sabha.", link: "https://en.wikipedia.org/wiki/Second_Amendment_to_the_Constitution_of_India" },
    { number: "4th Amendment", description: "Protected land reform laws in the Ninth Schedule.", link: "https://en.wikipedia.org/wiki/Fourth_Amendment_to_the_Constitution_of_India" },
    { number: "7th Amendment", description: "Reorganized states; abolished A, B, C, D classification.", link: "https://en.wikipedia.org/wiki/Seventh_Amendment_to_the_Constitution_of_India" },
    { number: "9th Amendment", description: "Adjusted Indian territory after agreement with Pakistan.", link: "https://en.wikipedia.org/wiki/Ninth_Amendment_to_the_Constitution_of_India" },
    { number: "10th Amendment", description: "Incorporated Dadra and Nagar Haveli as Union Territory.", link: "https://en.wikipedia.org/wiki/Tenth_Amendment_to_the_Constitution_of_India" },
    { number: "12th Amendment", description: "Incorporated Goa, Daman, Diu as Union Territories.", link: "https://en.wikipedia.org/wiki/Twelfth_Amendment_to_the_Constitution_of_India" },
    { number: "13th Amendment", description: "Special status for Nagaland under Article 371A.", link: "https://en.wikipedia.org/wiki/Thirteenth_Amendment_to_the_Constitution_of_India" },
    { number: "14th Amendment", description: "Incorporated Pondicherry into India.", link: "https://en.wikipedia.org/wiki/Fourteenth_Amendment_to_the_Constitution_of_India" },
    { number: "17th Amendment", description: "Added 44 more Acts to Ninth Schedule for protection.", link: "https://en.wikipedia.org/wiki/Seventeenth_Amendment_to_the_Constitution_of_India" },
    { number: "21st Amendment", description: "Added Sindhi language to Eighth Schedule.", link: "https://en.wikipedia.org/wiki/Twenty-first_Amendment_to_the_Constitution_of_India" },
    { number: "24th Amendment", description: "Made President’s assent to amendments mandatory.", link: "https://en.wikipedia.org/wiki/Twenty-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "25th Amendment", description: "Curtailed Fundamental Right to Property.", link: "https://en.wikipedia.org/wiki/Twenty-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "26th Amendment", description: "Abolished Privy Purse and privileges of former rulers.", link: "https://en.wikipedia.org/wiki/Twenty-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "31st Amendment", description: "Increased Lok Sabha seats from 525 to 545.", link: "https://en.wikipedia.org/wiki/Thirty-first_Amendment_to_the_Constitution_of_India" },
    { number: "35th Amendment", description: "Terminated Sikkim’s protectorate status.", link: "https://en.wikipedia.org/wiki/Thirty-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "36th Amendment", description: "Made Sikkim a full-fledged state of India.", link: "https://en.wikipedia.org/wiki/Thirty-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "40th Amendment", description: "Defined limits of territorial waters and maritime zones.", link: "https://en.wikipedia.org/wiki/Fortieth_Amendment_to_the_Constitution_of_India" },
    { number: "42nd Amendment", description: "Mini-Constitution; added 'Socialist', 'Secular', 'Integrity' and Fundamental Duties.", link: "https://en.wikipedia.org/wiki/Constitution_(Forty-second_Amendment)_Act,_1976" },
    { number: "44th Amendment", description: "Restored right to property; limited President’s emergency powers.", link: "https://en.wikipedia.org/wiki/Constitution_(Forty-fourth_Amendment)_Act,_1978" },
    { number: "52nd Amendment", description: "Added Tenth Schedule (Anti-Defection Law).", link: "https://en.wikipedia.org/wiki/Constitution_(Fifty-second_Amendment)_Act,_1985" },
    { number: "61st Amendment", description: "Lowered voting age from 21 to 18 years.", link: "https://en.wikipedia.org/wiki/Constitution_(Sixty-first_Amendment)_Act,_1988" },
    { number: "69th Amendment", description: "Special status to Delhi; legislative assembly and council of ministers.", link: "https://en.wikipedia.org/wiki/Constitution_(Sixty-ninth_Amendment)_Act,_1991" },
    { number: "71st Amendment", description: "Added Konkani, Manipuri, Nepali to Eighth Schedule.", link: "https://en.wikipedia.org/wiki/Constitution_(Seventy-first_Amendment)_Act,_1992" },
    { number: "73rd Amendment", description: "Constitutional status to Panchayati Raj (Part IX & 11th Schedule).", link: "https://en.wikipedia.org/wiki/Seventy-third_Amendment_of_the_Constitution_of_India" },
    { number: "74th Amendment", description: "Constitutional status to urban local bodies (Part IX-A & 12th Schedule).", link: "https://en.wikipedia.org/wiki/Seventy-fourth_Amendment_of_the_Constitution_of_India" },
    { number: "86th Amendment", description: "Education for 6–14 years made Fundamental Right (Art 21A).", link: "https://en.wikipedia.org/wiki/Eighty-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "88th Amendment", description: "Introduced Article 268A for Union service tax.", link: "https://en.wikipedia.org/wiki/Eighty-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "92nd Amendment", description: "Added Bodo, Dogri, Maithili, Santhali to Eighth Schedule.", link: "https://en.wikipedia.org/wiki/Ninety-second_Amendment_to_the_Constitution_of_India" },
    { number: "95th Amendment", description: "Extended SC/ST seat reservation for 10 years.", link: "https://en.wikipedia.org/wiki/Ninety-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "97th Amendment", description: "Constitutional status to cooperative societies (Part IX-B).", link: "https://en.wikipedia.org/wiki/Ninety-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "100th Amendment", description: "Land Boundary Agreement with Bangladesh; exchanged enclaves.", link: "https://en.wikipedia.org/wiki/Hundredth_Amendment_to_the_Constitution_of_India" },
    { number: "101st Amendment", description: "Introduced Goods and Services Tax (GST).", link: "https://en.wikipedia.org/wiki/Hundred_and_first_Amendment_to_the_Constitution_of_India" },
    { number: "102nd Amendment", description: "Constitutional status to National Commission for Backward Classes.", link: "https://en.wikipedia.org/wiki/Hundred_and_second_Amendment_to_the_Constitution_of_India" },
    { number: "104th Amendment", description: "Extended SC/ST seat reservation deadline by 10 years.", link: "https://en.wikipedia.org/wiki/Hundred_and_fourth_Amendment_to_the_Constitution_of_India" },
    { number: "105th Amendment", description: "Restored states’ power to specify SEBCs.", link: "https://en.wikipedia.org/wiki/Hundred_and_fifth_Amendment_to_the_Constitution_of_India" },
    { number: "106th Amendment", description: "Reserved one-third seats for women in Lok Sabha & State Assemblies.", link: "https://en.wikipedia.org/wiki/Hundred_and_sixth_Amendment_to_the_Constitution_of_India" },
    { number: "3rd Amendment", description: "Provided for compensation in cases of property acquisition for public purposes.", link: "https://en.wikipedia.org/wiki/Third_Amendment_to_the_Constitution_of_India" },
    { number: "5th Amendment", description: "Added provisions regarding representation of certain states in Parliament.", link: "https://en.wikipedia.org/wiki/Fifth_Amendment_to_the_Constitution_of_India" },
    { number: "6th Amendment", description: "Adjusted representation of Maharashtra and Gujarat in Parliament.", link: "https://en.wikipedia.org/wiki/Sixth_Amendment_to_the_Constitution_of_India" },
    { number: "8th Amendment", description: "Fixed salaries and allowances of judges of High Courts.", link: "https://en.wikipedia.org/wiki/Eighth_Amendment_to_the_Constitution_of_India" },
    { number: "11th Amendment", description: "Clarified election of President in case of vacancies.", link: "https://en.wikipedia.org/wiki/Eleventh_Amendment_to_the_Constitution_of_India" },
    { number: "15th Amendment", description: "Extended reservation of SCs/STs in legislatures and services.", link: "https://en.wikipedia.org/wiki/Fifteenth_Amendment_to_the_Constitution_of_India" },
    { number: "16th Amendment", description: "Empowered Parliament to amend Fundamental Rights to implement Directive Principles.", link: "https://en.wikipedia.org/wiki/Sixteenth_Amendment_to_the_Constitution_of_India" },
    { number: "18th Amendment", description: "Modified state boundaries in Madhya Pradesh and Bombay states.", link: "https://en.wikipedia.org/wiki/Eighteenth_Amendment_to_the_Constitution_of_India" },
    { number: "19th Amendment", description: "Added provisions for disqualification of members holding office of profit.", link: "https://en.wikipedia.org/wiki/Nineteenth_Amendment_to_the_Constitution_of_India" },
    { number: "20th Amendment", description: "Specified allocation of powers to Union and States regarding taxation.", link: "https://en.wikipedia.org/wiki/Twentieth_Amendment_to_the_Constitution_of_India" },
    { number: "22nd Amendment", description: "Prescribed maximum number of Ministers in Union Government.", link: "https://en.wikipedia.org/wiki/Twenty-second_Amendment_to_the_Constitution_of_India" },
    { number: "23rd Amendment", description: "Increased the retirement age of High Court judges.", link: "https://en.wikipedia.org/wiki/Twenty-third_Amendment_to_the_Constitution_of_India" },
    { number: "27th Amendment", description: "Increased number of seats in Lok Sabha due to population increase.", link: "https://en.wikipedia.org/wiki/Twenty-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "28th Amendment", description: "Made changes in representation of Union Territories.", link: "https://en.wikipedia.org/wiki/Twenty-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "29th Amendment", description: "Included Dadra and Nagar Haveli in Union Territories.", link: "https://en.wikipedia.org/wiki/Twenty-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "30th Amendment", description: "Made changes regarding allocation of powers between Union and States.", link: "https://en.wikipedia.org/wiki/Thirtieth_Amendment_to_the_Constitution_of_India" },
    { number: "32nd Amendment", description: "Extended reservation of seats for SCs/STs in legislatures.", link: "https://en.wikipedia.org/wiki/Thirty-second_Amendment_to_the_Constitution_of_India" },
    { number: "33rd Amendment", description: "Changed representation of states in Parliament after reorganization.", link: "https://en.wikipedia.org/wiki/Thirty-third_Amendment_to_the_Constitution_of_India" },
    { number: "34th Amendment", description: "Made adjustments in election procedures for President and Vice-President.", link: "https://en.wikipedia.org/wiki/Thirty-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "37th Amendment", description: "Specified powers of the President and governors regarding State Legislature.", link: "https://en.wikipedia.org/wiki/Thirty-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "38th Amendment", description: "Empowered President to declare national emergency in specific circumstances.", link: "https://en.wikipedia.org/wiki/Thirty-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "39th Amendment", description: "Placed certain high-profile offices outside jurisdiction of courts.", link: "https://en.wikipedia.org/wiki/Thirty-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "41st Amendment", description: "Changed salary and tenure of Supreme Court and High Court judges.", link: "https://en.wikipedia.org/wiki/Forty-first_Amendment_to_the_Constitution_of_India" },
    { number: "45th Amendment", description: "Extended reservation of SC/STs in legislatures and services for 10 more years.", link: "https://en.wikipedia.org/wiki/Forty-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "46th Amendment", description: "Added certain laws in Ninth Schedule to protect land reforms.", link: "https://en.wikipedia.org/wiki/Forty-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "48th Amendment", description: "Increased retirement age of High Court judges from 60 to 62.", link: "https://en.wikipedia.org/wiki/Forty-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "49th Amendment", description: "Increased the number of Lok Sabha seats from 520 to 525.", link: "https://en.wikipedia.org/wiki/Forty-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "50th Amendment", description: "Clarified powers of the Union and states regarding taxes.", link: "https://en.wikipedia.org/wiki/Fiftieth_Amendment_to_the_Constitution_of_India" },
    { number: "53rd Amendment", description: "Extended reservation of SC/STs in legislatures and services by 10 years.", link: "https://en.wikipedia.org/wiki/Fifty-third_Amendment_to_the_Constitution_of_India" },
    { number: "54th Amendment", description: "Made changes in representation of Union Territories in Parliament.", link: "https://en.wikipedia.org/wiki/Fifty-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "55th Amendment", description: "Extended powers of President to impose emergency.", link: "https://en.wikipedia.org/wiki/Fifty-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "56th Amendment", description: "Extended reservation of seats for SCs/STs in legislatures and services for 10 more years.", link: "https://en.wikipedia.org/wiki/Fifty-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "57th Amendment", description: "Increased retirement age of High Court judges from 62 to 65 years.", link: "https://en.wikipedia.org/wiki/Fifty-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "58th Amendment", description: "Added laws to Ninth Schedule for protection against judicial review.", link: "https://en.wikipedia.org/wiki/Fifty-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "59th Amendment", description: "Changed salary of judges of Supreme Court and High Courts.", link: "https://en.wikipedia.org/wiki/Fifty-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "60th Amendment", description: "Adjusted powers of Union and State regarding excise duties.", link: "https://en.wikipedia.org/wiki/Sixtieth_Amendment_to_the_Constitution_of_India" },
    { number: "62nd Amendment", description: "Extended reservation of SC/STs in legislatures and services for 10 years.", link: "https://en.wikipedia.org/wiki/Sixty-second_Amendment_to_the_Constitution_of_India" },
    { number: "63rd Amendment", description: "Extended reservation for SC/STs and Anglo-Indians for 10 more years.", link: "https://en.wikipedia.org/wiki/Sixty-third_Amendment_to_the_Constitution_of_India" },
    { number: "64th Amendment", description: "Clarified provisions regarding Union Territories representation.", link: "https://en.wikipedia.org/wiki/Sixty-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "65th Amendment", description: "Adjusted salary and pensions of Union Ministers.", link: "https://en.wikipedia.org/wiki/Sixty-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "66th Amendment", description: "Extended reservation of seats for SC/STs in legislatures for another 10 years.", link: "https://en.wikipedia.org/wiki/Sixty-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "67th Amendment", description: "Included new laws in Ninth Schedule for land reforms.", link: "https://en.wikipedia.org/wiki/Sixty-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "68th Amendment", description: "Changed allocation of seats in Rajya Sabha after state reorganization.", link: "https://en.wikipedia.org/wiki/Sixty-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "70th Amendment", description: "Extended reservation of SC/STs and Anglo-Indians in legislatures for 10 years.", link: "https://en.wikipedia.org/wiki/Seventieth_Amendment_to_the_Constitution_of_India" },
    { number: "72nd Amendment", description: "Added new provisions in Ninth Schedule to protect certain land reform laws.", link: "https://en.wikipedia.org/wiki/Seventy-second_Amendment_to_the_Constitution_of_India" },
    { number: "75th Amendment", description: "Increased retirement age of High Court judges to 65 years.", link: "https://en.wikipedia.org/wiki/Seventy-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "77th Amendment", description: "Extended reservation of SC/STs in legislatures and services for 10 years.", link: "https://en.wikipedia.org/wiki/Seventy-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "78th Amendment", description: "Included new laws in Ninth Schedule to protect agricultural reforms.", link: "https://en.wikipedia.org/wiki/Seventy-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "79th Amendment", description: "Extended reservation of seats for SC/STs and Anglo-Indians for 10 years.", link: "https://en.wikipedia.org/wiki/Seventy-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "80th Amendment", description: "Provided for financial emergency powers of President.", link: "https://en.wikipedia.org/wiki/Eightieth_Amendment_to_the_Constitution_of_India" },
    { number: "81st Amendment", description: "Adjusted pension of Union Ministers and judges.", link: "https://en.wikipedia.org/wiki/Eighty-first_Amendment_to_the_Constitution_of_India" },
    { number: "82nd Amendment", description: "Increased Lok Sabha and Rajya Sabha seats after state reorganization.", link: "https://en.wikipedia.org/wiki/Eighty-second_Amendment_to_the_Constitution_of_India" },
    { number: "83rd Amendment", description: "Extended reservation of SC/STs in legislatures for another 10 years.", link: "https://en.wikipedia.org/wiki/Eighty-third_Amendment_to_the_Constitution_of_India" },
    { number: "84th Amendment", description: "Added laws to Ninth Schedule protecting land reform measures.", link: "https://en.wikipedia.org/wiki/Eighty-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "85th Amendment", description: "Extended reservation for SC/STs in legislatures for 10 more years.", link: "https://en.wikipedia.org/wiki/Eighty-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "87th Amendment", description: "Increased number of Rajya Sabha seats for certain states.", link: "https://en.wikipedia.org/wiki/Eighty-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "89th Amendment", description: "Extended reservation of SC/STs in legislatures and services.", link: "https://en.wikipedia.org/wiki/Eighty-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "90th Amendment", description: "Modified representation of Union Territories in Lok Sabha.", link: "https://en.wikipedia.org/wiki/Ninetieth_Amendment_to_the_Constitution_of_India" },
    { number: "91st Amendment", description: "Limited size of Council of Ministers at Union and State level.", link: "https://en.wikipedia.org/wiki/Ninety-first_Amendment_to_the_Constitution_of_India" },
    { number: "93rd Amendment", description: "Permitted state to make laws for reservation in private educational institutions.", link: "https://en.wikipedia.org/wiki/Ninety-third_Amendment_to_the_Constitution_of_India" },
    { number: "94th Amendment", description: "Changed provisions for representation of Union Territories.", link: "https://en.wikipedia.org/wiki/Ninety-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "96th Amendment", description: "Modified reservation of seats in legislatures for SC/STs.", link: "https://en.wikipedia.org/wiki/Ninety-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "98th Amendment", description: "Extended powers for emergency provisions in certain situations.", link: "https://en.wikipedia.org/wiki/Ninety-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "99th Amendment", description: "Made minor adjustments in allocation of powers between Union and states.", link: "https://en.wikipedia.org/wiki/Ninety-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "107th Amendment", description: "Clarified powers of states regarding reservation for socially and educationally backward classes.", link: "https://en.wikipedia.org/wiki/Hundred_and_seventh_Amendment_to_the_Constitution_of_India" },
    { number: "108th Amendment", description: "Extended reservation of SC/ST seats in legislatures for 10 years.", link: "https://en.wikipedia.org/wiki/Hundred_and_eighth_Amendment_to_the_Constitution_of_India" },
    { number: "109th Amendment", description: "Adjusted representation of certain Union Territories in Parliament.", link: "https://en.wikipedia.org/wiki/Hundred_and_ninth_Amendment_to_the_Constitution_of_India" },
    { number: "110th Amendment", description: "Modified allocation of seats in state assemblies after reorganization.", link: "https://en.wikipedia.org/wiki/Hundred_and_tenth_Amendment_to_the_Constitution_of_India" },
    { number: "111th Amendment", description: "Extended reservation for SC/STs in legislatures and services for 10 more years.", link: "https://en.wikipedia.org/wiki/Hundred_and_eleventh_Amendment_to_the_Constitution_of_India" },
    { number: "112th Amendment", description: "Added laws in Ninth Schedule to protect land reforms.", link: "https://en.wikipedia.org/wiki/Hundred_and_twelfth_Amendment_to_the_Constitution_of_India" },
    { number: "113th Amendment", description: "Increased Lok Sabha and Rajya Sabha seats for certain states.", link: "https://en.wikipedia.org/wiki/Hundred_and_thirteenth_Amendment_to_the_Constitution_of_India" },
    { number: "114th Amendment", description: "Extended reservation for SC/STs in legislatures by another 10 years.", link: "https://en.wikipedia.org/wiki/Hundred_and_fourteenth_Amendment_to_the_Constitution_of_India" },
    { number: "115th Amendment", description: "Modified provisions of state representation in Parliament.", link: "https://en.wikipedia.org/wiki/Hundred_and_fifteenth_Amendment_to_the_Constitution_of_India" },
    { number: "116th Amendment", description: "Adjusted powers of President and Governors regarding state legislation.", link: "https://en.wikipedia.org/wiki/Hundred_and_sixteenth_Amendment_to_the_Constitution_of_India" },
    { number: "117th Amendment", description: "Extended reservation of SC/STs in legislatures and services for 10 more years.", link: "https://en.wikipedia.org/wiki/Hundred_and_seventeenth_Amendment_to_the_Constitution_of_India" },
    { number: "118th Amendment", description: "Changed allocation of seats in state assemblies after reorganization.", link: "https://en.wikipedia.org/wiki/Hundred_and_eighteenth_Amendment_to_the_Constitution_of_India" },
    { number: "119th Amendment", description: "Added laws in Ninth Schedule to protect agricultural reforms.", link: "https://en.wikipedia.org/wiki/Hundred_and_nineteenth_Amendment_to_the_Constitution_of_India" },
    { number: "120th Amendment", description: "Extended reservation for SC/STs and Anglo-Indians in legislatures.", link: "https://en.wikipedia.org/wiki/Hundred_and_twentieth_Amendment_to_the_Constitution_of_India" },
    { number: "121st Amendment", description: "Introduced GST Council for administration of GST.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-first_Amendment_to_the_Constitution_of_India" },
    { number: "122nd Amendment", description: "Extended reservation of SC/ST seats in legislatures for another 10 years.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-second_Amendment_to_the_Constitution_of_India" },
    { number: "123rd Amendment", description: "Adjusted representation of Union Territories in Parliament.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-third_Amendment_to_the_Constitution_of_India" },
    { number: "124th Amendment", description: "Changed provisions regarding allocation of powers between Union and States.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "125th Amendment", description: "Extended reservation for SC/STs in legislatures and services for 10 years.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-fifth_Amendment_to_the_Constitution_of_India" },
    { number: "126th Amendment", description: "Added laws to Ninth Schedule protecting land reforms.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-sixth_Amendment_to_the_Constitution_of_India" },
    { number: "127th Amendment", description: "Increased number of Rajya Sabha seats for certain states.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-seventh_Amendment_to_the_Constitution_of_India" },
    { number: "128th Amendment", description: "Extended reservation of SC/STs in legislatures and services for 10 more years.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-eighth_Amendment_to_the_Constitution_of_India" },
    { number: "129th Amendment", description: "Modified representation of Union Territories in Lok Sabha.", link: "https://en.wikipedia.org/wiki/Hundred_and_twenty-ninth_Amendment_to_the_Constitution_of_India" },
    { number: "130th Amendment", description: "Limited size of Council of Ministers at Union and State level.", link: "https://en.wikipedia.org/wiki/Hundred_and_thirtieth_Amendment_to_the_Constitution_of_India" },
    { number: "131st Amendment", description: "Permitted state to make laws for reservation in private educational institutions.", link: "https://en.wikipedia.org/wiki/Hundred_and_thirty-first_Amendment_to_the_Constitution_of_India" },
    { number: "132nd Amendment", description: "Changed provisions for representation of Union Territories.", link: "https://en.wikipedia.org/wiki/Hundred_and_thirty-second_Amendment_to_the_Constitution_of_India" },
    { number: "133rd Amendment", description: "Extended powers for emergency provisions in certain situations.", link: "https://en.wikipedia.org/wiki/Hundred_and_thirty-third_Amendment_to_the_Constitution_of_India" },
    { number: "134th Amendment", description: "Made minor adjustments in allocation of powers between Union and states.", link: "https://en.wikipedia.org/wiki/Hundred_and_thirty-fourth_Amendment_to_the_Constitution_of_India" },
    { number: "135th Amendment", description: "Added new provisions for reservation of seats in legislatures.", link: "https://en.wikipedia.org/wiki/Hundred_and_thirty-fifth_Amendment_to_the_Constitution_of_India" }
];
const sortedAmendments = amendmentsData.sort((a, b) => {
    const numA = parseInt(a.number);
    const numB = parseInt(b.number);
    return numA - numB;
});

function AmendmentsPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAmendments = sortedAmendments.filter(
        (item) =>
            item.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div
            style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #e0c3fc, #8ec5fc)",
                padding: "40px 20px",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    color: "#4b0082",
                    marginBottom: "30px",
                    fontSize: "2.5rem",
                    textShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                }}
            >
                Important Constitutional Amendments
            </h1>

            <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
                <input
                    type="text"
                    placeholder="Search amendments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "12px 20px",
                        width: "100%",
                        maxWidth: "500px",
                        borderRadius: "25px",
                        border: "2px solid #4b0082",
                        outline: "none",
                        fontSize: "1rem",
                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    }}
                />
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "20px",
                }}
            >
                {filteredAmendments.length > 0 ? (
                    filteredAmendments.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "rgba(255,255,255,0.9)",
                                padding: "20px",
                                borderRadius: "20px",
                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                            }}
                        >
                            <h2 style={{ color: "#4b0082", marginBottom: "10px" }}>{item.number}</h2>
                            <p style={{ color: "#333", lineHeight: "1.5" }}>{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <button
                                    style={{
                                        marginTop: "10px",
                                        padding: "8px 16px",
                                        borderRadius: "15px",
                                        border: "none",
                                        background: "linear-gradient(to right, #8e2de2, #4a00e0)",
                                        color: "white",
                                        cursor: "pointer",
                                        fontWeight: "bold",
                                        transition: "transform 0.2s",
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    Read More
                                </button>
                            </a>
                        </div>
                    ))
                ) : (
                    <p style={{ gridColumn: "1/-1", textAlign: "center", color: "#333", fontSize: "1.2rem" }}>
                        No amendments found.
                    </p>
                )}
            </div>
        </div>
    );
}

export default AmendmentsPage;
