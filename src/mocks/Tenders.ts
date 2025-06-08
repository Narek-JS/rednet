export interface ITenderSlot {
    id: number;
    name: string;
    type: string;
    location: string;
    quantity: number;
    description: string;
  }
  
  export interface ITender {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    location: string;
    lastBid: number;
    category: string;
    description: string;
    items: ITenderSlot[];
  }
  
  const testDesc = `«k Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02,«Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02
  « lՃանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02
  «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02
  
  «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02
  «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02
  «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02
  
  «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02`;
  
  export const TENDER_MOCK: ITender[] = [
    {
      id: 1,
      name: "«ooo Ճանապարհային դեպարտամենտ 1»",
      // startDate: new Date("2024-08-20T22:15:00.000Z"),
      // endDate: new Date("2024-08-20T23:15:00.000Z"),
      startDate: new Date("2024-08-04T12:35:00.000Z"),
      endDate: new Date("2024-08-04T13:35:00.000Z"),
      lastBid: 1000,
      location: "Yerevan",
      category: "Մենեջմենտ",
      description:
        " h «Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02    ",
      items: [
        {
          id: 1,
          name: "Չափաբաժին 1",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 30,
          description: testDesc
        },
        {
          id: 2,
          name: "Չափաբաժին 2",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 40,
          description: testDesc
        },
        {
          id: 3,
          name: "Չափաբաժին 3",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 50,
          description: testDesc
        }
      ]
    },
    {
      id: 2,
      name: "«Ճանապարհային դեպարտամենտ 2»",
      startDate: new Date("2024-08-20T22:15:00.000Z"),
      endDate: new Date("2024-08-20T23:15:00.000Z"),
      lastBid: 200,
      location: "Yerevan",
      category: "Մենեջմենտ",
      items: [
        {
          id: 1,
          name: "Չափաբաժին 1",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 30,
          description: testDesc
        },
        {
          id: 2,
          name: "Չափաբաժին 2",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 40,
          description: testDesc
        },
        {
          id: 3,
          name: "Չափաբաժին 3",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 50,
          description: testDesc
        }
      ],
      description:
        "«Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02    "
    },
    {
      id: 3,
      name: "«Ճանապարհային դեպարտամենտ 3»",
      startDate: new Date("2024-08-20T22:15:00.000Z"),
      endDate: new Date("2024-08-20T23:15:00.000Z"),
      lastBid: 400,
  
      location: "Yerevan",
      category: "Մենեջմենտ",
      items: [
        {
          id: 1,
          name: "Չափաբաժին 1",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 30,
          description: testDesc
        },
        {
          id: 2,
          name: "Չափաբաժին 2",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 40,
          description: testDesc
        },
        {
          id: 3,
          name: "Չափաբաժին 3",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 50,
          description: testDesc
        }
      ],
      description:
        "«Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02    "
    },
    {
      id: 4,
      name: "«Ճանապարհային դեպարտամենտ 4»",
      startDate: new Date("2024-08-20T22:15:00.000Z"),
      endDate: new Date("2024-08-20T23:15:00.000Z"),
      lastBid: 600,
  
      location: "Yerevan",
      category: "Մենեջմենտ",
      items: [
        {
          id: 1,
          name: "Չափաբաժին 1",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 30,
          description: testDesc
        },
        {
          id: 2,
          name: "Չափաբաժին 2",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 40,
          description: testDesc
        },
        {
          id: 3,
          name: "Չափաբաժին 3",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 50,
          description: testDesc
        }
      ],
      description:
        "«Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02    "
    },
    {
      id: 5,
      name: "«Ճանապարհային դեպարտամենտ 5»",
      startDate: new Date("2024-08-20T22:15:00.000Z"),
      endDate: new Date("2024-08-20T23:15:00.000Z"),
      lastBid: 800,
  
      location: "Yerevan",
      category: "Մենեջմենտ",
      items: [
        {
          id: 1,
          name: "Չափաբաժին 1",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 30,
          description: testDesc
        },
        {
          id: 2,
          name: "Չափաբաժին 2",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 40,
          description: testDesc
        },
        {
          id: 3,
          name: "Չափաբաժին 3",
          type: "Example Cell",
          location: "Yerevan",
          quantity: 50,
          description: testDesc
        }
      ],
      description:
        "«Ճանապարհային դեպարտամենտ» հիմնադրամի կարիքների համար ֆինանսական աուդիտի անցկացման ծառայությունների ձեռքբերման նպատակով հայտարարված գնանշման հարցում։Հայտերի ներկայացման հրավեր ՃԴ-ԳՀԾՁԲ-2023/02    "
    }
  ];
  