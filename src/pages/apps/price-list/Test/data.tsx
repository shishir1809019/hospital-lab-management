const generateRecords = () => {
  const tests = [
    "Complete Blood Count ASGU",
    "RBC",
    "COVID",
    "Hemoglobine",
    "blood",
    "Admin",
    "ahdsadjq",
    "Urine R/N",
    "Meraj",
    "COVID-19 ELISA",
  ];

  const records = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    test: tests[index % tests.length],
    price: Math.floor(Math.random() * 450) + 1,
  }));

  return records;
};

const records = generateRecords();

export default records;
