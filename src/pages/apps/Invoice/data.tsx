interface Record {
  barcode: string;
  clientCode: string;
  clientName: string;
  doctorName: string;
  subtotal: number;
  reference: string;
  discount: number;
  total: number;
  paid: number;
  due: number;
  date: string;
  status: string;
}

const records: Record[] = [
  {
    barcode: "123456789012",
    clientCode: "C001",
    clientName: "John Doe",
    doctorName: "Dr. Smith",
    subtotal: 150.0,
    reference: "Ref001",
    discount: 15.0,
    total: 135.0,
    paid: 100.0,
    due: 35.0,
    date: "2024-04-29",
    status: "Pending",
  },
  {
    barcode: "987654321098",
    clientCode: "C002",
    clientName: "Jane Roe",
    doctorName: "Dr. Jones",
    subtotal: 200.0,
    reference: "Ref002",
    discount: 20.0,
    total: 180.0,
    paid: 180.0,
    due: 0.0,
    date: "2024-04-30",
    status: "Completed",
  },
  {
    barcode: "234567890123",
    clientCode: "C003",
    clientName: "Alice Johnson",
    doctorName: "Dr. Reynolds",
    subtotal: 300.0,
    reference: "Ref003",
    discount: 45.0,
    total: 255.0,
    paid: 255.0,
    due: 0.0,
    date: "2024-05-01",
    status: "Completed",
  },
  {
    barcode: "345678901234",
    clientCode: "C004",
    clientName: "Michael Bay",
    doctorName: "Dr. Hansen",
    subtotal: 250.0,
    reference: "Ref004",
    discount: 25.0,
    total: 225.0,
    paid: 100.0,
    due: 125.0,
    date: "2024-05-02",
    status: "Pending",
  },
  {
    barcode: "456789012345",
    clientCode: "C005",
    clientName: "Lisa Ray",
    doctorName: "Dr. Watson",
    subtotal: 180.0,
    reference: "Ref005",
    discount: 18.0,
    total: 162.0,
    paid: 162.0,
    due: 0.0,
    date: "2024-05-03",
    status: "Completed",
  },
  {
    barcode: "567890123456",
    clientCode: "C006",
    clientName: "Oscar Wild",
    doctorName: "Dr. Lee",
    subtotal: 220.0,
    reference: "Ref006",
    discount: 22.0,
    total: 198.0,
    paid: 150.0,
    due: 48.0,
    date: "2024-05-04",
    status: "Pending",
  },
  {
    barcode: "678901234567",
    clientCode: "C007",
    clientName: "Gary Oldman",
    doctorName: "Dr. Chang",
    subtotal: 190.0,
    reference: "Ref007",
    discount: 19.0,
    total: 171.0,
    paid: 171.0,
    due: 0.0,
    date: "2024-05-05",
    status: "Completed",
  },
  {
    barcode: "789012345678",
    clientCode: "C008",
    clientName: "Megan Fox",
    doctorName: "Dr. Zimmerman",
    subtotal: 210.0,
    reference: "Ref008",
    discount: 10.5,
    total: 199.5,
    paid: 199.5,
    due: 0.0,
    date: "2024-05-06",
    status: "Completed",
  },
  {
    barcode: "890123456789",
    clientCode: "C009",
    clientName: "Sophia Loren",
    doctorName: "Dr. Martinez",
    subtotal: 230.0,
    reference: "Ref009",
    discount: 23.0,
    total: 207.0,
    paid: 100.0,
    due: 107.0,
    date: "2024-05-07",
    status: "Pending",
  },
  {
    barcode: "901234567890",
    clientCode: "C010",
    clientName: "Bruce Wayne",
    doctorName: "Dr. Kent",
    subtotal: 500.0,
    reference: "Ref010",
    discount: 50.0,
    total: 450.0,
    paid: 300.0,
    due: 150.0,
    date: "2024-05-08",
    status: "Pending",
  },
];

const branches = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

function generateClientCodes(numCodes: any, numDigits: any) {
  const codes = new Set();

  while (codes.size < numCodes) {
    let code = "";
    for (let i = 0; i < numDigits; i++) {
      code += Math.floor(Math.random() * 10);
    }
    codes.add(code);
  }

  return Array.from(codes);
}

const clientCodes = generateClientCodes(10, 10);

const clientNames = [
  "Emma Johnson",
  "Noah Smith",
  "Olivia Williams",
  "Liam Brown",
  "Sophia Jones",
  "Mason Miller",
  "Ava Davis",
  "Jacob Garcia",
  "Isabella Rodriguez",
  "Ethan Wilson",
];

const doctorNames = [
  "Dr. Emily Thompson",
  "Dr. Michael Robinson",
  "Dr. Hannah Martinez",
  "Dr. James Clark",
  "Dr. Chloe Lewis",
  "Dr. Benjamin Lee",
  "Dr. Mia Walker",
  "Dr. William Hall",
  "Dr. Ava Allen",
  "Dr. Ethan Young",
];

const generateFakeData = () => {
  const testNames = [
    "(GLUCOSE) FASTING",
    "1",
    "12",
    "12345",
    "16016",
    "1CBC",
    "2",
  ];
  const data = [];
  for (let i = 0; i < 50; i++) {
    const testName = testNames[Math.floor(Math.random() * testNames.length)];
    const price = Math.floor(Math.random() * 500) + 1;
    data.push({
      testName,
      price,
    });
  }
  return data;
};

const testCultureRecords = generateFakeData();

export {
  records,
  branches,
  clientCodes,
  clientNames,
  doctorNames,
  testCultureRecords,
};
