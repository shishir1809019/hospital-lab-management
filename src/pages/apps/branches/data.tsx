const generateRecords = (count: any) => {
  const records = [];
  const cities = [
    "Dhaka",
    "Chittagong",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Rangpur",
    "Mymensingh",
  ];
  for (let i = 1; i <= count; i++) {
    const cityIndex = i % cities.length;
    records.push({
      id: i,
      name: `${cities[cityIndex]} Branch`,
      phone: `${Math.floor(1000000000 + Math.random() * 9000000000)}`,
      address: `House #${i}, Road #${i + 1}, ${cities[cityIndex]}, Bangladesh`,
      action: "View Details",
    });
  }
  return records;
};

const records = generateRecords(50); // Generate 50 records

export default records;
