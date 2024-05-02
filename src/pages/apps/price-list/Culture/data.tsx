const generateRecords = () => {
  const tests = [
    "ECBU",
    "Organism",
    "Fat test",
    "Blood culture",
    "blood",
    "Glucose",
    "Eyeratche",
    "Urine R/N",
    "Papier pastels",
    "Histopathology",
    "Complete Blood Count ASGU",
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
