using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using DTO;

namespace UI.Controllers
{
    [RoutePrefix("api/Requests")]
    public class RequestsController : ApiController
    {
        // GET api/values
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //GET api/values/5
        [Route("GetByPersonId")]
        public List<RequestsDto> GetByPersonId(int id)
        {
            return BL.RequestsLogic.GetByPersonId(id);

        }
        [Route("GetWithOffersByPersonId")]
        public List<RequestsDto> GetWithOffersByPersonId(int id)
        {
            return BL.RequestsLogic.GetWithOffersByPersonId(id);
        }


        
        // GET api/values/5
        [Route("GetById")]
        public RequestsDto GetId(int id)//מה לעשות?
        {
            return BL.RequestsLogic.GetById(id);

        }
        [Route("SearchOffersByRequest")]
        [HttpPost]
        public List<OffersDto> SearchOffersByRequest(RequestsDto req)//מה לעשות?
        {
            return BL.RequestsLogic.search(req);
        }


        [HttpPost]
        [Route("AddRequest")]
        public IHttpActionResult AddRequest(RequestsDto req)
        {
            return Ok(BL.RequestsLogic.add(req));
        }

        [HttpPost]
        [Route("connectDriver/{offerId}/{reqId}")]
        public void ConnectDriver(int offerid, int requestid)
        {
            BL.RequestsLogic.selectOfferByRequestId(offerid, requestid);
        }
        [HttpPost]
        [Route("deletefromlist /{offerId}/{reqId} ")]
        public void deletefromlist(int offerid, int requestid)
        {
            BL.RequestsLogic.UpdateRequestIgnoreOffers(offerid, requestid);
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
