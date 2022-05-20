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

    public class offersController : ApiController
    {
        //  GET api/values
        //   public List<offers> Get()
        //     {
        //   return BL.Class1.
        //     }

        // GET api/values/5
        //[Route("api/offers/GetById")]
        //public List<OffersDto> Get(int id)
        //{
        //    return BL.OffersLogic.GetById(id);

        //}
        // GET api/values/5
        [Route("api/offers/GetById")]
        public OffersDto GetId(int id)//מה לעשות?
        {
            return BL.OffersLogic.GetById(id);

        }
        [Route("api/offers/GetByPersonId")]
        public IHttpActionResult GetByPersonId(int id)//מה לעשות?
        {
            return Ok(BL.OffersLogic.GetByPersonId(id));

        }
        // GET api/values/5httpget
        [HttpGet]
        [Route("api/offers/selectOfferByRequestId/{reqId}/{offerId}")]
        public bool selectOfferByRequestId(int reqId, int offerId)//מה לעשות?
        {
            return BL.OffersLogic.selectOfferByRequestId(offerId, reqId);

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
