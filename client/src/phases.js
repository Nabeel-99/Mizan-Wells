import feed1 from "./assets/images/phase1.jpg";
import feed2 from "./assets/images/phase2.jpg";
import feed3 from "./assets/images/phase3.jpeg";

import well1 from "./assets/images/well1.JPG";
import well2 from "./assets/images/well2.JPG";
import well3 from "./assets/images/well3.JPG";
import well4 from "./assets/images/well4.JPG";
import well5 from "./assets/images/well5.JPG";
import well6 from "./assets/images/well6.JPG";
import well7 from "./assets/images/well7.JPG";
import well8 from "./assets/images/well8.JPG";
import well9 from "./assets/images/well9.JPG";
import well10 from "./assets/images/well10.JPG";
import well11 from "./assets/images/well11.JPG";
import well12 from "./assets/images/well12.JPG";
import well13 from "./assets/images/well13.JPG";
import well14 from "./assets/images/well14.JPG";

import tree1 from "./assets/images/tree1.JPG";
import tree2 from "./assets/images/tree2.JPG";
import tree3 from "./assets/images/tree3.JPG";
import tree4 from "./assets/images/tree4.JPG";
import tree5 from "./assets/images/tree5.JPG";
import tree6 from "./assets/images/tree6.JPG";
import tree7 from "./assets/images/tree7.JPG";
import tree8 from "./assets/images/tree8.JPG";
import tree9 from "./assets/images/tree9.JPG";

export const phases = [
  {
    id: "feed-the-poor",
    title: "Feed The Poor",
    details: [
      {
        phaseNumber: 1,
        status: "Pending",
        startDate: "2nd January, 2025",
        estimatedEndDate: "8th August, 2025",
        amountSpent: "₦200,000",
        location: "Abuja, Wuse 2 Shuaibu Street",
        phaseDetails: [
          "Excavation completed as of Jan 25, 2025.",
          "Materials sourced and delivered by Feb 1, 2025.",
          "Team coordination and safety checks completed before moving to next phase.",
        ],
        images: [feed1, feed2, feed3],
      },
      {
        phaseNumber: 2,
        status: "In Progress",
        startDate: "10th February, 2025",
        estimatedEndDate: "15th August, 2025",
        amountSpent: "₦450,000",
        location: "Abuja, Wuse 2 Shuaibu Street",
        phaseDetails: [
          "Construction of the foundation walls started.",
          "Reinforcement materials installed in foundation trenches.",
          "Electrical conduits set for the foundation layout.",
        ],
        images: [feed1, feed2, feed3],
      },
      {
        phaseNumber: 3,
        status: "Completed",
        startDate: "1st March, 2025",
        estimatedEndDate: "20th September, 2025",
        amountSpent: "₦800,000",
        location: "Abuja, Wuse 2 Shuaibu Street",
        phaseDetails: [
          "Plumbing installation completed.",
          "Roof trusses and framework set.",
          "Electrical wiring installation started.",
        ],
        images: [feed1, feed2, feed3],
      },
    ],
  },
  {
    id: "village-wells-project",
    title: "Village Wells Project",
    details: [
      {
        phaseNumber: 1,
        status: "Pending",
        startDate: "1st April, 2025",
        estimatedEndDate: "30th June, 2025",
        amountSpent: "₦500,000",
        location: "Rural Village, Benue State",
        phaseDetails: [
          "Site surveying and soil testing completed.",
          "Initial excavation and clearing of land for the well.",
          "Water source identified and tested for viability.",
        ],
        images: [well1, well2, well3, well4],
      },
      {
        phaseNumber: 2,
        status: "In Progress",
        startDate: "1st July, 2025",
        estimatedEndDate: "30th September, 2025",
        amountSpent: "₦1,000,000",
        location: "Rural Village, Benue State",
        phaseDetails: [
          "Well structure construction started.",
          "Reinforcement and materials installation ongoing.",
          "Plumbing setup for water distribution in the village.",
        ],
        images: [well5, well6, well7, well8],
      },
      {
        phaseNumber: 3,
        status: "In Progress",
        startDate: "1st October, 2025",
        estimatedEndDate: "15th November, 2025",
        amountSpent: "₦1,200,000",
        location: "Rural Village, Benue State",
        phaseDetails: [
          "Water pump installation completed.",
          "Testing and ensuring water flow and pressure.",
          "Health and safety training for local workers on maintenance.",
        ],
        images: [well9, well10, well11, well12],
      },
      {
        phaseNumber: 4,
        status: "Completed",
        startDate: "16th November, 2025",
        estimatedEndDate: "30th December, 2025",
        amountSpent: "₦2,500,000",
        location: "Rural Village, Benue State",
        phaseDetails: [
          "Final inspection and community handover.",
          "Training of community leaders for ongoing maintenance.",
          "Full operational testing of water supply system.",
        ],
        images: [well13, well14],
      },
    ],
  },
  {
    id: "trees-for-future-generations",
    title: "Trees for Future Generations",
    details: [
      {
        phaseNumber: 1,
        status: "Pending",
        startDate: "1st May, 2025",
        estimatedEndDate: "31st July, 2025",
        amountSpent: "₦500,000",
        location: "Deforested Area, Ogun State",
        phaseDetails: [
          "Site preparation and soil testing completed.",
          "Tree saplings sourced and delivered.",
          "Land cleared and ready for planting.",
        ],
        images: [tree1, tree2, tree3],
      },
      {
        phaseNumber: 2,
        status: "In Progress",
        startDate: "1st August, 2025",
        estimatedEndDate: "31st October, 2025",
        amountSpent: "₦1,200,000",
        location: "Deforested Area, Ogun State",
        phaseDetails: [
          "Tree planting in progress.",
          "Monitoring of tree saplings for growth.",
          "Regular irrigation setup established.",
        ],
        images: [tree4, tree5, tree6],
      },
      {
        phaseNumber: 3,
        status: "Completed",
        startDate: "1st November, 2025",
        estimatedEndDate: "31st December, 2025",
        amountSpent: "₦1,500,000",
        location: "Deforested Area, Ogun State",
        phaseDetails: [
          "Tree saplings fully grown and thriving.",
          "Final inspection and community involvement.",
          "Ongoing care and maintenance plan implemented.",
        ],
        images: [tree7, tree8, tree9],
      },
    ],
  },
];
