const generateFakeData = () => {
  const data = [];
  const names = ["David Alex", "Arun", "Aash", "Saud Gul", "vdfg"];
  const testOptions = [
    "1CBC",
    "16016",
    "12345",
    "12",
    "Aspect",
    "Blood culture",
    "asd",
    "asA",
    "Arya",
    "Arindam Chowdhury",
    "GLUCOSE FASTING",
    "ECBU",
  ];

  for (let i = 1; i <= 50; i++) {
    const numberOfTests = Math.floor(Math.random() * 5) + 3;
    const tests = [];
    for (let j = 0; j < numberOfTests; j++) {
      const testIndex = Math.floor(Math.random() * testOptions.length);
      tests.push(testOptions[testIndex]);
    }

    data.push({
      barcode: 100000000000 + Math.floor(Math.random() * 999999999999),
      clientCode: 1500000000 + Math.floor(Math.random() * 999999999),
      clientName: names[Math.floor(Math.random() * names.length)],
      gender: "Male",
      age: `${Math.floor(Math.random() * 12) + 1} Years`,
      phone: "+967733290111",
      tests: tests,
      date: `2024-${("0" + Math.floor(Math.random() * 12 + 1)).slice(-2)}-${(
        "0" + Math.floor(Math.random() * 28 + 1)
      ).slice(-2)} ${Math.floor(Math.random() * 23)}:${(
        "0" + Math.floor(Math.random() * 59)
      ).slice(-2)}`,
      done: Math.random() < 0.5 ? "Yes" : "No",
      signed: Math.random() < 0.5 ? "Yes" : "No",
      action: "View Details",
    });
  }

  return data;
};

const records = generateFakeData();

export default records;
