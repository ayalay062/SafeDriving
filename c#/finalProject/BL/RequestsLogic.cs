using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;

namespace BL
{
    public class RequestsLogic

    {
        // החזרת רשימת נסיעות לפי תעודת זהות
        public static List<RequestsDto> getByTz(int tz)
        {//לבדוק אם הנסיעות פעילות
            SafeDrivingEntities sd = new SafeDrivingEntities();
            List<requests> request = sd.requests.Where(x => x.tz == tz).ToList();
            List<RequestsDto> requests = new List<RequestsDto>();
            for (int i = 0; i < request.Count; i++)
            {
                requests.Add(Convertions.RequestsConvertion.RequestToDto(request[i]));
            }

            return requests;
        }
        //החזרת נסיעה לפי מספר נסיעה
        public static RequestsDto getById(int id)
        {
            SafeDrivingEntities sd = new SafeDrivingEntities();

            RequestsDto request = Convertions.RequestsConvertion.RequestToDto(sd.requests.FirstOrDefault(x => x.id == id));


            return request;
        }
        //מחיקת נסיעה
        public static void deleteRequest(int id)
        {
            SafeDrivingEntities sd = new SafeDrivingEntities();
            sd.requests.FirstOrDefault(r => r.id == id).active = 0;//כך מוחקים?
        }
        //עדכון נסיעה
        public static void updateRequest(int id)
        {
            //אולי מחיקה והכנסה?
        }

        //הכנסת נסיעה
        public static RequestsDto add(RequestsDto req)
        {
            requests p1 = new requests();
            p1 = Convertions.RequestsConvertion.DtoToRequest(req);
            using (SafeDrivingEntities sd = new SafeDrivingEntities())
            {
                sd.requests.Add(p1);
                sd.SaveChanges();

                return Convertions.RequestsConvertion.RequestToDto(p1);
            }
        }
        public static List<OffersDto> search(RequestsDto req)
        {
            //להוסיף לנסיעות משתנה בוליאני כד לדעת מה פעיל ולבדוק גם על פי זה
            SafeDrivingEntities sd = new SafeDrivingEntities();
            //בדיקה לפי מוצא ,יעד ותאריך
            var it = sd.offers.Where(x => x.resourse == req.resourse && x.destination == req.destination
             && x.date_time.Value.Date == req.date_time.Value.Date).ToList();

            if (!string.IsNullOrEmpty(req.ignore_offers))
            {

                var reqIgnores = req.ignore_offers.Split(',');
                it = it.Where(x => !reqIgnores.Contains(x.id.ToString())).ToList();

            }

            //המרה לdto
            var offers = new List<OffersDto>();
            for (int i = 0; i < it.Count; i++)
            {
                offers.Add(Convertions.offersConvertion.OfferToDto(it[i]));
            }
            return offers;
        }

       
        
        public static void selectOfferByRequestId(int offerId, int reqId)
        {
            using (SafeDrivingEntities sd = new SafeDrivingEntities())
            {

                var offer = sd.offers.FirstOrDefault(x => x.id == offerId);
                var personDtriver = sd.persons.FirstOrDefault(x => x.tz == offer.tz);

                var req = sd.requests.FirstOrDefault(x => x.id == reqId);
                var personReq = sd.persons.FirstOrDefault(x => x.tz == req.tz);

                var subject = "בקשת הצטרפות לנסיעה"; 
                 var body = "<h1 style='color: #5e9ca0; text-align: right;'>&nbsp; !שלום נוסע " + personReq.username + "</h1>" +
"<h1 style='color: #5e9ca0; text-align: right;'>?" + personDtriver.username + " האם תרצה להצטרף לנסיעה עם נהג </h1> " +
"<p style='text-align: right; ;display: inline-block;'><strong><a style='background-color: #5e9ca0; padding: 10px; color: white;' href='http://localhost:4200/'>אשר</a></strong></p> " +
"<p style='display: inline-block; text-align: left;'><strong><a style='background-color: #5e9ca0; padding: 10px; color: white;' href='http://localhost:4200/ignore-request?reqid=" + offerId + "&offerid="
+ reqId + "'>סרב</a></strong></p>";
               
                GeneralLogic.sendEmail(personDtriver.mail, subject, body);
                //return true;
            }

        }
        public static void UpdateRequestIgnoreOffers(int reqId, int offerId)
        {
            using (SafeDrivingEntities sd = new SafeDrivingEntities())
            {
                var req = sd.requests.FirstOrDefault(x => x.id == reqId);
                if (!string.IsNullOrEmpty(req.ignore_offers))
                {
                    var igOffersList = req.ignore_offers.Split(',');
                    if (!igOffersList.Contains(offerId.ToString()))
                    {
                        req.ignore_offers = req.ignore_offers + "," + offerId;
                    }
                }
                else
                {
                    req.ignore_offers = offerId.ToString();
                }

                sd.SaveChanges();

                //return true;
            }
        }

    }
}
