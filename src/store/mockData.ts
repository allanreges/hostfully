import Location1 from "@/assets/location-01.jpg";
import Location2 from "@/assets/location-02.jpg";
import Location3 from "@/assets/location-03.jpg";
import Location4 from "@/assets/location-04.jpg";
import Location5 from "@/assets/location-05.jpg";
import Location6 from "@/assets/location-06.jpg";
import Location7 from "@/assets/location-07.jpg";
import Location8 from "@/assets/location-08.jpg";
import Location9 from "@/assets/location-09.jpg";

import { Location } from "../types/types";

export const data: Location[] = [
  {
    id: "17fd4f39-79b8-4f54-85f9-483c7665137a",
    location: "New York City, NY",
    price: 200,
    name: "Luxurious Apartment in Manhattan",
    type: "Apartment",
    image: Location1,
    reservations: [],
    details:
      "Spacious and modern apartment in the heart of Manhattan, perfect for a luxurious stay.",
  },
  {
    id: "b8723f2d-6d0c-42f6-8b86-d0a35189e6d7",
    location: "Los Angeles, CA",
    price: 150,
    name: "Cozy House in Hollywood Hills",
    type: "House",
    image: Location2,
    reservations: [],
    details:
      "Charming house nestled in the Hollywood Hills, offering a cozy retreat with scenic views.",
  },
  {
    id: "5c8f7a1d-5e3a-4e2e-9f7b-6c387487b3e2",
    location: "Miami, FL",
    price: 180,
    name: "Oceanfront Condo with Stunning Views",
    type: "Condo",
    image: Location3,
    reservations: [],
    details:
      "Elegant condo with direct ocean views, ideal for those seeking a beachfront escape.",
  },
  {
    id: "9fd3db0f-81b7-4c73-8b3a-61c537e9efdb",
    location: "Chicago, IL",
    price: 120,
    name: "Downtown Loft with City Skyline Views",
    type: "Loft",
    image: Location4,
    reservations: [],
    details:
      "Modern loft in downtown Chicago offering panoramic views of the city skyline.",
  },
  {
    id: "e149f678-ec2b-4b69-958d-143461ec3f91",
    location: "San Francisco, CA",
    price: 250,
    name: "Modern Penthouse near Golden Gate Bridge",
    type: "Penthouse",
    image: Location5,
    reservations: [],
    details:
      "Luxurious penthouse with contemporary design, located near the iconic Golden Gate Bridge.",
  },
  {
    id: "3c0f9295-e522-49fb-8ec4-4a1a02d37a29",
    location: "Orlando, FL",
    price: 130,
    name: "Family-Friendly Vacation Home in Disney Area",
    type: "House",
    image: Location6,
    reservations: [],
    details:
      "Perfect family vacation home near Disney, featuring a spacious and kid-friendly environment.",
  },
  {
    id: "f34140e8-b90a-4d5a-96a8-2b5db8f76213",
    location: "Las Vegas, NV",
    price: 180,
    name: "Luxury Suite on the Strip",
    type: "Suite",
    image: Location7,
    reservations: [],
    details:
      "Extravagant suite located on the famous Las Vegas Strip, providing a luxurious experience.",
  },
  {
    id: "567a7d62-4c52-4f95-b352-02a5941aa2eb",
    location: "Seattle, WA",
    price: 160,
    name: "Charming Cottage in Pike Place Market",
    type: "Cottage",
    image: Location8,
    reservations: [],
    details:
      "Quaint cottage in the heart of Pike Place Market, offering a charming and peaceful stay.",
  },
  {
    id: "ae8548a7-0e2a-4aa6-8e04-8d8f75d297d3",
    location: "Denver, CO",
    price: 200,
    name: "Mountain View Cabin near Red Rocks",
    type: "Cabin",
    image: Location9,
    reservations: [],
    details:
      "Cozy cabin with breathtaking mountain views, located near the iconic Red Rocks Amphitheatre.",
  },
];
