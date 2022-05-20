using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BL;
using DTO;

namespace UI.Controllers
{
    [RoutePrefix("api/person")]
  //  [System.Web.Http.Cors()]
    public class PersonController : ApiController
    {
        // GET api/values
     //   public List<> Get()
    //    {
    //        return new string[] { "value1", "value2" };
    //    }

        // GET api/signin/
    
        public IHttpActionResult Get(string email, string password)
        {
            PersonInfo personInfo = new PersonInfo();
            personInfo = BL.PersonLogic.Login(email, password);

            
            return Ok(personInfo);
        }

        // POST api/values

        [Route("createNewPerson")]
        public PersonInfo Post(PersonDto person)
        {
            PersonInfo result=BL.PersonLogic.signUp(person);
                return result;
            
        }

        //// PUT api/values/5
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{
        //}
    }
}
