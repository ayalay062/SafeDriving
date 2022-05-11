using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
//using DAL;
using BL;

using DTO;

namespace UI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class offersController : ApiController
    {
        //  GET api/values
        //   public List<offers> Get()
        //     {
        //   return BL.Class1.
        //     }

       // GET api/values/5
        [Route("api/offers/getByTz")]
        public List<OffersDto> Get(int tz)
        {
            return BL.OffersLogic.getByTz(tz);

        }
        // GET api/values/5
        [Route("api/offers/getById")]
        public OffersDto GetId(int id)//מה לעשות?
        {
            return BL.OffersLogic.getById(id);

        }
        // GET api/values/5httpget
        [HttpGet]
        [Route("api/offers/selectOfferByRequestId/{reqId}/{offerId}")]
        public bool selectOfferByRequestId(int reqId,int offerId)//מה לעשות?
        {
            return BL.OffersLogic.selectOfferByRequestId(offerId,reqId);

        }
        
        // POST api/values
        public List<RequestsDto> Post(OffersDto offer)
        {
           return BL.OffersLogic.add(offer);
        }//להיכן מוחזרת רשימת ההתאמות?

        public Boolean Post(int id)
        {
           return BL.OffersLogic.deleteOffer(id);
        }

        // PUT api/values/5
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{
        //}
    }
}
