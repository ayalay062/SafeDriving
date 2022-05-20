using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO
{
   public  class OffersDto
    {
        public int id { get; set; }
        public int id_person { get; set; }
        public string resourse { get; set; }
        public string destination { get; set; }
        public int seats { get; set; }
        public System.DateTime date_time { get; set; }
        public double price { get; set; }
        public bool active { get; set; }
    }
}
