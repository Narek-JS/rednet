import avatar from "@/assets/avatar.png";

export interface IAuctionItem {
  id: number;
  name: string;
  subDescription: string;
  startDate: Date;
  endDate: Date;
  lastBid: number;
  location: string;
  description: string;
  category: string;
  images: string[];
}

export interface IAuction {
  id: number;
  profileImage: string;
  companyName: string;
  companyType: string;
  category: string;
  items: IAuctionItem[];
}

export const AUCTION_MOCKS: IAuction[] = [
    {
      id: 1,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-05T22:00:00.000Z"),

          lastBid: 129,
          location: "Yerevan",
          description: "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: [],
          category: ""
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 2,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 3,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 4,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 5,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 6,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 7,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 8,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 9,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 10,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 11,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 12,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 13,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    },
    {
      id: 14,
      companyName: "Apple",
      companyType: "Technology",
      category: "Classic & Collector Cars",
      profileImage: avatar.src,
  
      items: [
        {
          id: 1,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-02T21:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T22:00:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Classic & Collector Cars",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 2,
          name: "2013 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may make it random not equal to other auctions
          // end date is 1 hour after start date
          startDate: new Date("2024-08-04T12:35:00.000Z"),
          endDate: new Date("2024-08-04T13:35:00.000Z"),
  
          lastBid: 250,
          location: "Yerevan",
          category: "Vintage Treasures",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 3,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          // create startDate with date and time  to be random date between today and 15 of may
          startDate: new Date("2024-08-03T16:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-03T17:45:00.000Z"),
          lastBid: 900,
          location: "Yerevan",
          category: "Luxury Lifestyles",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 4,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T22:15:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T23:15:00.000Z"),
          lastBid: 820,
          location: "Yerevan",
          category: "Art Collectors' Corner",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 5,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-07T06:00:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-07T07:00:00.000Z"),
          lastBid: 0,
          location: "Yerevan",
          category: "Tech & Gadgets",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 6,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-09T13:20:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-09T14:20:00.000Z"),
          lastBid: 129,
          location: "Yerevan",
          category: "Home & Garden",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 7,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-11T18:45:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-11T19:45:00.000Z"),
          lastBid: 240,
          location: "Yerevan",
          category: "Sports & Memorabilia",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 8,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-02T03:10:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-02T04:10:00.000Z"),
          lastBid: 1800,
          location: "Yerevan",
          category: "Rare Finds",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 9,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-04T11:25:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-04T12:25:00.000Z"),
          lastBid: 450,
          location: "Yerevan",
          category: "Automotive Alley",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 10,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-06T19:40:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-06T20:40:00.000Z"),
          lastBid: 729,
          location: "Yerevan",
          category: "Books & Manuscripts",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 11,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-08T07:55:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-08T08:55:00.000Z"),
          lastBid: 610,
          location: "Yerevan",
          category: "Music & Instruments",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        },
        {
          id: 12,
          name: "2014 AUDI Q5 PREMIUM",
          subDescription: "A breif 40min hiking trip through the alps.",
          startDate: new Date("2024-08-10T14:30:00.000Z"),
          // end date is 1 hour after start date
          endDate: new Date("2024-08-10T15:30:00.000Z"),
          lastBid: 529,
          location: "Yerevan",
          category: "Fashion Forward",
          description:
            "Location. Near the airport, Tahiti Village Resort & Spa is in Las Vegas's South of The Strip neighborhood and close to Bali Hai Golf Club. Additional area points of interest include Thomas and Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility. Mack Center and the University of Nevada-Las Vegas. Property Features. Dining options at Tahiti Village Resort & Spa include a restaurant and a poolside bar. Recreational amenities include an outdoor pool, a spa tub, a sauna, and a fitness facility.",
          images: []
        }
      ]
    }
  ];
  