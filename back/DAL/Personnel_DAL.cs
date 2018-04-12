using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class Personnel_DAL
    {
        public List<Personnel_BO> GetPersonnel()
        {
            using (var context = new MarcassinEntities())
            {
                List<Personnel> listPersonnels = context.Personnels.ToList();

                List<Personnel_BO> listPeronnelsBO = listPersonnels.ToListPersonnelBO();

                return listPeronnelsBO;
            }
        }
    }
}
