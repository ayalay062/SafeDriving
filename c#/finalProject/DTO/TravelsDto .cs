using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace DTO
{
   public  class TravelsDto
    {
        public int id { get; set; }
        public Nullable<int> id_offer { get; set; }
        public Nullable<int> id_request { get; set; }
        public string resourse { get; set; }
        public string destination { get; set; }
        public Nullable<int> seats { get; set; }
        public Nullable<System.DateTime> date_time { get; set; }
        public Nullable<double> price { get; set; }
    }
}
