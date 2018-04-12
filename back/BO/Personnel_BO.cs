using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Personnel_BO
    {
        public int id_Utilisateur { get; set; }
        public System.DateTime Date_deb_contrat { get; set; }
        public Nullable<System.DateTime> Date_fin_contrat { get; set; }
        public bool Est_admin { get; set; }
        public List<Service_BO> Services { get; set; }

    }
}
