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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
  //  [System.Web.Http.Cors()]
    public class TravelController : ApiController
    {
        // GET api/travel/5
        [Route("api/travel/getByTz")]
        public List<TravelsDto> Get(int tz)
        {
            return BL.TravelLogic.getByTz(tz);
        }

        [Route("api/travel/getById")]
        public TravelsDto GetId(int id)//
        {
            return BL.TravelLogic.getById(id);

        }


        // GET api/travel
     //   public string Get()
     //   {
     //       return "value";
     //   }

        // POST api/travel
     //   public void Post([FromBody] string value)
     //   {
     //   }


    }
}
