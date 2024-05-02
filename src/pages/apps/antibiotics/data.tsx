const generateRecords = () => {
  const records = [];
  const baseNames = [
    "Amoxicilline",
    "Antibiotics",
    "ofloxacin",
    "corona",
    "PENCLINE",
    "Medicament",
    "Ciprofloxacin",
    "Azithromycin",
    "Metformin",
    "Aspirin",
  ];

  for (let i = 1; i <= 50; i++) {
    const baseIndex = i % baseNames.length;
    const name = baseNames[baseIndex];
    const shortcut = name.substring(0, 3).toUpperCase();
    const commercialName = name;

    records.push({
      id: i,
      name: name,
      shortcut: shortcut,
      commercialName: commercialName + (i % 2 === 0 ? " Extra" : ""),
      action: "View Details",
    });
  }
  return records;
};

const records = generateRecords();

export default records;
