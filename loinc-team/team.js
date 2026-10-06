// Team data for the card page. Edit this file to add or change people; the layout never needs touching.
//
// Everything below was collected on 2026-10-06 from public pages only:
//   - names, titles, photos, order: https://loinc.org/team
//   - bios and profile links:       https://www.regenstrief.org/person/<name>/
//   - committee roles:              https://loinc.org/committee
//   - conference sessions:          https://conference.loinc.org/ and regenstrief.org conference articles
// Nothing here is guessed. Where a field is missing, the websites had nothing to draw from,
// and the card shows "Background coming soon". Those are the gaps for each person to fill in.
//
// Fields:
//   name         required
//   role         required. Job title shown under the name.
//   credentials  optional. Shown after the name in the full bio, e.g. "MPH, MLS(ASCP)".
//   photo        optional. Path or URL to a portrait. Initials are shown if omitted.
//   since        optional. Year they joined the LOINC team.
//   before       optional. One line on where they came from, e.g. "12 years as a clinical lab scientist".
//   blurb        optional. Two or three sentences shown on the back of the card.
//   bio          optional. Array of paragraphs for the full bio. Falls back to blurb.
//   focus        optional. Array of things they own on the team.
//   askMeAbout   optional. Array of short expertise tags. These also drive the filter bar.
//   linkedin     optional. LinkedIn profile URL.
//   profile      optional. Regenstrief profile URL.
window.TEAM = [
  {
    name: "Marjorie Rallins",
    role: "Executive Director",
    credentials: "DPM, MS",
    photo: "photos/marjorie-rallins.jpg",
    since: 2021,
    before: "Podiatrist turned informaticist: SNOMED CT at the College of American Pathologists, then the AMA and the PCPI Foundation",
    blurb: "Marjorie has worked in informatics for almost 25 years, with an emphasis on terminology standards and clinical quality measurement. She has led LOINC and Health Data Standards at Regenstrief since January 2021.",
    bio: [
      "Marjorie Rallins, DPM, MS, is a nationally recognized leader in health data standards and informatics. She began her duties with LOINC at Regenstrief Institute on January 11, 2021.",
      "She previously served as vice president and chief scientific officer of the PCPI Foundation in Chicago, and as director of clinical informatics for the American Medical Association. Before that she was director of clinical editors for the College of American Pathologists, where she led international clinical teams in SNOMED CT development.",
      "Dr. Rallins received her podiatric medical degree from the William M. Scholl College of Podiatric Medicine in Chicago and her master of science degree from Northwestern University. She was chief resident at Southwest Detroit Hospital and practiced as a podiatrist. Her undergraduate degree is from Towson University in Maryland."
    ],
    askMeAbout: ["Terminology standards", "Clinical quality measures", "SNOMED CT"],
    profile: "https://www.regenstrief.org/person/marjorie-rallins/"
  },
  {
    name: "Eza Hafeza",
    role: "Director, Clinical Terminology Services",
    photo: "photos/eza-hafeza.jpg",
    blurb: "At the 2026 LOINC Conference, Eza co-presents Introduction to LOINC: History and Basics, the LOINC Mapping Use Cases session, and The LOINC Ontology: From Vision to Practice.",
    askMeAbout: ["LOINC basics", "Mapping", "LOINC Ontology"],
    profile: "https://www.regenstrief.org/person/eza-hafeza/"
  },
  {
    name: "Steven Wagers",
    role: "Director II, Technical Services and Operations",
    photo: "photos/steven-wagers.jpg",
    blurb: "At the 2026 LOINC Conference, Steven co-presents What Is LOINC Doing For You? and co-moderates the Translations roundtable.",
    askMeAbout: ["Translations"],
    profile: "https://www.regenstrief.org/person/steven-wagers/"
  },
  {
    name: "April Lackey",
    role: "Director, Operations",
    photo: "photos/april-lackey.jpg",
    profile: "https://www.regenstrief.org/person/april-lackey/"
  },
  {
    name: "Joe Amlung",
    role: "Senior Technical Advisor",
    photo: "photos/joe-amlung.jpg",
    blurb: "Joe co-presented Next-Generation Terminology Mapping for the Post-RELMA Era: OCL Mapper at the 2025 LOINC Conference. His Regenstrief profile also lists the HHS and IHS Health Information Technology Modernization Initiative.",
    askMeAbout: ["Mapping", "OCL Mapper"],
    profile: "https://www.regenstrief.org/person/joe-amlung/"
  },
  {
    name: "Tim Briscoe",
    role: "Systems Engineer IV",
    photo: "photos/tim-briscoe.jpg",
    blurb: "At the 2026 LOINC Conference, Tim co-presents What Is LOINC Doing For You? and co-moderates the Translations roundtable.",
    askMeAbout: ["Translations"]
  },
  {
    name: "Elizabeth Lumakovska",
    role: "Manager, Terminology and Content Development",
    photo: "photos/elizabeth-lumakovska.jpg",
    profile: "https://www.regenstrief.org/person/elizabeth-lumakovska/"
  },
  {
    name: "Felicia Owens",
    role: "Clinical Terminology Developer",
    photo: "photos/felicia-owens.jpg",
    profile: "https://www.regenstrief.org/person/felicia-owens/"
  },
  {
    name: "Jennifer Pianki",
    role: "Project Manager II",
    photo: "photos/jennifer-pianki.jpg",
    profile: "https://www.regenstrief.org/person/jennifer-pianki/"
  },
  {
    name: "Geoffrey Ratemo",
    role: "Clinical Terminology Developer",
    photo: "photos/geoffrey-ratemo.jpg",
    profile: "https://www.regenstrief.org/person/geoffrey-ratemo/"
  },
  {
    name: "David Baorto",
    role: "Clinical Advisor",
    photo: "photos/david-baorto.jpg",
    blurb: "At the 2026 LOINC Conference, David presents Applied LOINC: Analytics using LOINC, where he is listed with New York-Presbyterian Health System.",
    askMeAbout: ["Analytics"],
    profile: "https://www.regenstrief.org/person/david-baorto/"
  },
  {
    name: "Stan Huff",
    role: "Clinical Advisor",
    credentials: "MD",
    photo: "photos/stan-huff.jpg",
    blurb: "Stan chairs the Clinical LOINC Committee. At the 2026 LOINC Conference he gives the Clem McDonald Memorial Lecture and co-presents the sessions on LOINC basics, mapping use cases and the LOINC Ontology.",
    focus: ["Chair, Clinical LOINC Committee"],
    askMeAbout: ["Clinical LOINC", "LOINC basics", "Mapping", "LOINC Ontology"]
  },
  {
    name: "Rob McClure",
    role: "Clinical Advisor",
    credentials: "MD, FAMIA, FHL7",
    photo: "photos/rob-mcclure.jpg",
    blurb: "Rob chairs the LOINC Document Ontology Committee. At the 2026 LOINC Conference he co-presents Introduction to LOINC: History and Basics and moderates the Surveys roundtable.",
    focus: ["Chair, Document Ontology Committee"],
    askMeAbout: ["Document Ontology", "Surveys", "LOINC basics"]
  },
  {
    name: "Virginia Riehl",
    role: "Strategic Advisor",
    photo: "photos/virginia-riehl.jpg",
    blurb: "At the 2026 LOINC Conference, Virginia serves as recorder for the workshop on patient-focused interoperability."
  },
  {
    name: "Beth Sullivan",
    role: "Executive Assistant",
    photo: "photos/beth-sullivan.jpg",
    profile: "https://www.regenstrief.org/person/beth-sullivan/"
  }
];
