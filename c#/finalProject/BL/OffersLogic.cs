using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using DAL;
using System.Net.Mail;
using System.Net;

namespace BL
{
    public class OffersLogic
    {
        //הכנסת נסיעה
        public static List<RequestsDto> add(OffersDto offer)
        {
            offers p1 = new offers();
            p1 = Convertions.offersConvertion.DtoToOffer(offer);
            SafeDrivingEntities sd = new SafeDrivingEntities();
            sd.offers.Add(p1);

            sd.SaveChanges();
            List<RequestsDto> list_requests = search(offer);
            return list_requests;
        }
        public static List<RequestsDto> search(OffersDto offer)
        {
            //להוסיף לנסיעות משתנה בוליאני כד לדעת מה פעיל ולבדוק גם על פי זה
            SafeDrivingEntities sd = new SafeDrivingEntities();
            //בדיקה לפי מוצא ,יעד ותאריך
            List<requests> it = sd.requests.Where(x => x.resourse == offer.resourse && x.destination == offer.destination
            && x.date_time.Date == offer.date_time.Date).ToList();
            //המרה לdto
            List<RequestsDto> requests = new List<RequestsDto>();
            for (int i = 0; i < it.Count; i++)
            {
                requests.Add(Convertions.RequestsConvertion.RequestToDto(it[i]));
            }
            return requests;
        }
        // החזרת רשימת נסיעות לפי תעודת זהות
        public static List<OffersDto> GetByPersonId(int id)
        {//לבדוק אם הנסיעות פעילות
            SafeDrivingEntities sd = new SafeDrivingEntities();
            List<offers> offer = sd.offers.Where(x => x.id_person == id).ToList();
            List<OffersDto> offers = new List<OffersDto>();
            for (int i = 0; i < offer.Count; i++)
            {
                offers.Add(Convertions.offersConvertion.OfferToDto(offer[i]));
            }

            sendEmail("m058320294@gmail.com", "m058320294@gmail.com");
            return offers;
        }
        //החזרת נסיעה לפי מספר נסיעה
        public static OffersDto GetById(int id)
        {
            SafeDrivingEntities sd = new SafeDrivingEntities();

            OffersDto offer = Convertions.offersConvertion.OfferToDto(sd.offers.FirstOrDefault(x => x.id == id));


            return offer;
        }
        public static Boolean deleteOffer(int id)
        {
            SafeDrivingEntities sd = new SafeDrivingEntities();
            sd.offers.FirstOrDefault(r => r.id == id).active = false;//כך מוחקים?
            sd.SaveChanges();
            return true;//לבדוק שזה נמחק
        }

        public static void sendEmail(string from, string to)
        {
            //MailMessage mail = new MailMessage();
            //SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            // Smtp יצירת אוביקט 
            //     SmtpClient smtp = new SmtpClient();

            //הגדרת השרת של גוגל
            //      smtp.Host = "smtp.gmail.com";
            //      mail.From = new MailAddress(from);
            //     mail.To.Add(to);
            //      mail.Subject = "Test Mail";
            //     mail.Body = "This is for testing SMTP mail from GMAIL";

            // SmtpServer.Port = 587;
            //    smtp.Credentials = new System.Net.NetworkCredential("m0583202944@gmail.com", "matti2944");
            //    smtp.EnableSsl = true;

            //   smtp.Send(mail);



            string fromaddr = "m0583202944@gmail.com";
            string toaddr = "m0583202944@gmail.com";
            string password = "matti2944";

            MailMessage msg = new MailMessage();
            msg.Subject = "Username &password";
            msg.From = new MailAddress(fromaddr);
            msg.Body = "Message BODY";
            msg.To.Add(new MailAddress(toaddr));
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = false;
            smtp.EnableSsl = true;
            NetworkCredential nc = new NetworkCredential(fromaddr, password);
            smtp.Credentials = nc;
            smtp.Send(msg);
        }

        //החזרת נסיעה לפי מספר נסיעה
        public static bool selectOfferByRequestId(int offerId, int reqId)
        {
            using (SafeDrivingEntities sd = new SafeDrivingEntities())
            {

                var offer = sd.offers.FirstOrDefault(x => x.id == offerId);
                var personDtriver = sd.persons.FirstOrDefault(x => x.id == offer.id_person);

                var req = sd.requests.FirstOrDefault(x => x.id == reqId);
                var personReq = sd.persons.FirstOrDefault(x => x.id == req.id_person);

                var subject = "בקשת הצטרפות לנסיעה";
                var body = "<h1 style='color: #5e9ca0; text-align: right;'>&nbsp; !שלום נהג " + personDtriver.username + "</h1>" +
"<h1 style='color: #5e9ca0; text-align: right;'>?" + personReq.username + " האם תרצה לצרף לנסיעה את נוסע</h1> " +
"<p style='text-align: right; ;display: inline-block;'><strong><a style='background-color: #5e9ca0; padding: 10px; color: white;' href='http://localhost:4200/'>אשר</a></strong></p> " +
"<p style='display: inline-block; text-align: left;'><strong><a style='background-color: #5e9ca0; padding: 10px; color: white;' href='http://localhost:4200/ignore-request?reqid=" + reqId + "&offerid="
+ offerId + "'>סרב</a></strong></p>";

                GeneralLogic.sendEmailAsync(personDtriver.mail, subject,body);
                return true;
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
