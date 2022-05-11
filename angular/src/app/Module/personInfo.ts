import { person } from './person';

export class personInfo{
Person: person;
Status:boolean;
errorType:ErrorTypes;
}



export enum ErrorTypes
{
// [Description("Email is not Exist")]
errorEmail,

//   [Description("Password is UnCorrect")]
errorPassword,

//  [Description("User Already Exist")]
personAlreadyExist
}