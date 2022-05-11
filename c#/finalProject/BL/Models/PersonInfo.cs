using DAL;
using System.Collections.Generic;
using System.Linq;
using DTO;
using System.ComponentModel;
using System.Reflection;


namespace BL
{
    public class PersonInfo
    {
        public PersonDto Person { get; set; }
        public ErrorTypes ErrorType { get; set; }
        public bool Status
        {
            get; set;
        }
    }
    public enum ErrorTypes
    {
       // [Description("Email is not Exist")]
        errorEmail,

     //   [Description("Password is UnCorrect")]
        errorPassword,

      //  [Description("User Already Exist")]
        personAlreadyExist
    }
}
