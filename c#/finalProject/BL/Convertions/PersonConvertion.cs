using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL.Convertions
{
    class PersonConvertion
    {
      
        public static persons DtoToPerson(PersonDto personDto)
        {
            persons person = new persons();
            person.id = person.id;
            person.adress = person.adress;
            person.tz = person.tz;
            person.inqure = person.mail;
            person.inqure = person.inqure;
            person.ok = person.ok;
            person.phone = person.phone;
            person.username = person.username;


            return person;
        }
        public static PersonDto PersonToDto(persons person)
        {
            PersonDto personDto = new PersonDto();
            personDto.id = person.id;
            personDto.adress = person.adress; 
            personDto.tz = person.tz;
            personDto.inqure = person.mail;
            personDto.inqure = person.inqure;
            personDto.ok = person.ok;
            personDto.phone = person.phone;
            personDto.username = person.username;

            return personDto;
        }


    }
}
