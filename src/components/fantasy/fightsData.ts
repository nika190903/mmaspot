export type FightSection =
  | "Main Card"
  | "Prelims"
  | "Early Prelims";

export type FighterData = {
  name: string;
  record: string;
  country: string;
};

export type FightData = {
  id: number;
  fightNumber: number;
  label: string;
  section: FightSection;
  division: string;
  rounds: 3 | 5;
  isTitleFight?: boolean;
  fighterOne: FighterData;
  fighterTwo: FighterData;
};

export const fightsData: FightData[] = [
  {
    id: 1,
    fightNumber: 1,
    label: "Main Event",
    section: "Main Card",
    division: "Welterweight Championship",
    rounds: 5,
    isTitleFight: true,
    fighterOne: {
      name: "Islam Makhachev",
      record: "28-1-0",
      country: "Russia",
    },
    fighterTwo: {
      name: "Ian Machado Garry",
      record: "17-1-0",
      country: "Ireland",
    },
  },
  {
    id: 2,
    fightNumber: 2,
    label: "Co-Main Event",
    section: "Main Card",
    division: "Bantamweight",
    rounds: 5,
    fighterOne: {
      name: "Merab Dvalishvili",
      record: "19-5-0",
      country: "Georgia",
    },
    fighterTwo: {
      name: "Petr Yan",
      record: "18-5-0",
      country: "Russia",
    },
  },
  {
    id: 3,
    fightNumber: 3,
    label: "Main Card",
    section: "Main Card",
    division: "Middleweight",
    rounds: 3,
    fighterOne: {
      name: "Roman Dolidze",
      record: "14-3-0",
      country: "Georgia",
    },
    fighterTwo: {
      name: "Paulo Costa",
      record: "14-4-0",
      country: "Brazil",
    },
  },
  {
    id: 4,
    fightNumber: 4,
    label: "Main Card",
    section: "Main Card",
    division: "Lightweight",
    rounds: 3,
    fighterOne: {
      name: "Arman Tsarukyan",
      record: "22-3-0",
      country: "Armenia",
    },
    fighterTwo: {
      name: "Justin Gaethje",
      record: "26-5-0",
      country: "United States",
    },
  },
  {
    id: 5,
    fightNumber: 5,
    label: "Main Card",
    section: "Main Card",
    division: "Featherweight",
    rounds: 3,
    fighterOne: {
      name: "Movsar Evloev",
      record: "19-0-0",
      country: "Russia",
    },
    fighterTwo: {
      name: "Diego Lopes",
      record: "26-7-0",
      country: "Brazil",
    },
  },
  {
    id: 6,
    fightNumber: 6,
    label: "Featured Prelim",
    section: "Prelims",
    division: "Light Heavyweight",
    rounds: 3,
    fighterOne: {
      name: "Johnny Walker",
      record: "21-9-0",
      country: "Brazil",
    },
    fighterTwo: {
      name: "Azamat Murzakanov",
      record: "14-0-0",
      country: "Russia",
    },
  },
  {
    id: 7,
    fightNumber: 7,
    label: "Preliminary Card",
    section: "Prelims",
    division: "Welterweight",
    rounds: 3,
    fighterOne: {
      name: "Michael Morales",
      record: "17-0-0",
      country: "Ecuador",
    },
    fighterTwo: {
      name: "Geoff Neal",
      record: "16-6-0",
      country: "United States",
    },
  },
  {
    id: 8,
    fightNumber: 8,
    label: "Preliminary Card",
    section: "Prelims",
    division: "Flyweight",
    rounds: 3,
    fighterOne: {
      name: "Manel Kape",
      record: "20-7-0",
      country: "Angola",
    },
    fighterTwo: {
      name: "Kai Kara-France",
      record: "25-11-0",
      country: "New Zealand",
    },
  },
  {
    id: 9,
    fightNumber: 9,
    label: "Preliminary Card",
    section: "Prelims",
    division: "Women's Strawweight",
    rounds: 3,
    fighterOne: {
      name: "Amanda Lemos",
      record: "15-4-1",
      country: "Brazil",
    },
    fighterTwo: {
      name: "Marina Rodriguez",
      record: "17-5-2",
      country: "Brazil",
    },
  },
  {
    id: 10,
    fightNumber: 10,
    label: "Early Prelims",
    section: "Early Prelims",
    division: "Lightweight",
    rounds: 3,
    fighterOne: {
      name: "Mateusz Gamrot",
      record: "24-3-0",
      country: "Poland",
    },
    fighterTwo: {
      name: "Benoit Saint Denis",
      record: "14-3-0",
      country: "France",
    },
  },
  {
    id: 11,
    fightNumber: 11,
    label: "Early Prelims",
    section: "Early Prelims",
    division: "Featherweight",
    rounds: 3,
    fighterOne: {
      name: "Dan Ige",
      record: "19-9-0",
      country: "United States",
    },
    fighterTwo: {
      name: "Jean Silva",
      record: "16-2-0",
      country: "Brazil",
    },
  },
  {
    id: 12,
    fightNumber: 12,
    label: "Opening Bout",
    section: "Early Prelims",
    division: "Bantamweight",
    rounds: 3,
    fighterOne: {
      name: "Umar Nurmagomedov",
      record: "18-1-0",
      country: "Russia",
    },
    fighterTwo: {
      name: "Mario Bautista",
      record: "15-2-0",
      country: "United States",
    },
  },
];