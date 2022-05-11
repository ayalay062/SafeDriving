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
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class RequestsController : ApiController
    {
        // GET api/values
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        //GET api/values/5
        [Route("api/requests/getByTz")]
        public List<RequestsDto> Get(int tz)
        {
            return BL.RequestsLogic.getByTz(tz);

            }
            // GET api/values/5
            [Route("api/requests/getById")]
        public RequestsDto GetId(int id)//מה לעשות?
        {
            return BL.RequestsLogic.getById(id);

        }
        [Route("api/requests/SearchOffersByRequest")]
        [HttpPost]
        public List<OffersDto> SearchOffersByRequest(RequestsDto req)//מה לעשות?
        {
            return BL.RequestsLogic.search(req);

        }

        


        [HttpPost]
        [Route("api/requests/AddRequest")]
        public RequestsDto AddRequest(RequestsDto req)
        {
            return BL.RequestsLogic.add(req);
        }
        [HttpPost]
        [Route("api/requests/connectDriver/{offerId}/{reqId}")]
        public void ConnectDriver(int offerid,int requestid)
        {
             BL.RequestsLogic.selectOfferByRequestId(offerid, requestid);
        }
        [HttpPost]
        [Route("api/requests/deletefromlist /{offerId}/{reqId} ")]
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
