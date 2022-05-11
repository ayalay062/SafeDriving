using DAL;
using System.Collections.Generic;
using System.Linq;
using DTO;
using System;

namespace BL
{
    public class PersonLogic
    {


        //public List<drivers> drivers()//רשימת כל האנשים 
        //{
        //    return sd.drivers.ToList();
        //}
        //public List<begin> names()//רשימת כל האנשים 
        //{
        //    return sd.begin.ToList();
        //}

        public static PersonInfo Login(string email, string password)
        {

            PersonInfo result = new PersonInfo();

            using (var sd = new SafeDrivingEntities())
            {
                if (sd.persons.FirstOrDefault(x => x.mail == email) == null)
                {
                    result.Status = false;
                    result.ErrorType = ErrorTypes.errorEmail;
                    return result;
                }
                if (sd.persons.FirstOrDefault(x => x.password == password) == null)
                {
                    result.Status = false;
                    result.ErrorType = ErrorTypes.errorPassword;
                    return result;
                }

                result.Person = Convertions.PersonConvertion.PersonToDto(sd.persons.FirstOrDefault(x => x.password == password && x.mail == email));
                result.Status = true;
            }
            return result;
        }

        public static PersonInfo signUp(PersonDto personDto)
        {
            PersonInfo result = new PersonInfo();
            persons person = new persons();
            person = Convertions.PersonConvertion.DtoToPerson(personDto);
            SafeDrivingEntities sd = new SafeDrivingEntities();
            if (sd.persons.FirstOrDefault(x => x.mail == personDto.mail && x.id == personDto.id) != null)
            {
                result.ErrorType = ErrorTypes.personAlreadyExist;

                return result;
            }
            result.Status = true;
            result.Person = personDto;
            sd.persons.Add(person);
            //לדאוג שהסטטוס יהיה כבוי
            sd.SaveChanges();
            return result;
        }
    }
}
