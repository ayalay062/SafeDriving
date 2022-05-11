using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class GeneralLogic
    {
        public static void sendEmail( string to, string subject,string body)
        {
        

            string fromaddr = "m0583202944@gmail.com";
         
            string password = "matti2944";

            MailMessage msg = new MailMessage();
            msg.Subject = subject;
            msg.From = new MailAddress(fromaddr);
            msg.Body = body;
            msg.IsBodyHtml = true;
            msg.To.Add(new MailAddress(to));
            SmtpClient smtp = new SmtpClient();
            smtp.Host = "smtp.gmail.com";
            smtp.Port = 587;
            smtp.UseDefaultCredentials = false;
            smtp.EnableSsl = true;
            NetworkCredential nc = new NetworkCredential(fromaddr, password);
            smtp.Credentials = nc;
            smtp.Send(msg);
        }

    }
}
