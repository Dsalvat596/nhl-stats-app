export class Player {
   public alternateCaptain: boolean;
   public birthCity: string;
   public birthCountry: string;
   public birthDate: Date;
   public birthStateProvince: string;
   public captain: boolean;
   public currentAge: number;
   public currentTeam: {
       id: number;
       name: string;
   };
   public firstName: string;
   public fullName: string;
   public height: string;
   public id: number;
   public lastName: string;
   public nationality: string;
   public primaryNumber: string;
   public primaryPosition: {
       abbreviation: string;
       code: string;
       name: string;
       type: string;
   };
   public rookie: boolean;
   public shootsCatches: string;
   public weight: number;
   public person?;
   public image?: string
}