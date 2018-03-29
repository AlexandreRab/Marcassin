using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Service_BO
    {
        public int id_Service { get; set; }
        public string Nom { get; set; }
        public int id_chef { get; set; }
        public Guid GUID { get; set; }
    }
}
