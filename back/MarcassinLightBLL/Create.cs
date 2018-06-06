using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MarcassinLightBO;
using MarcassinLightDAL;

namespace MarcassinLightBLL
{
    public class Create
    {
        public static void CreateCompetence(Competence_BO compBO)
        {
            Competence_DAL.AddCompetence(compBO);
        }

        public static void CreateLangue(Langue_BO langBO)
        {
            Langue_DAL.AddLangue(langBO);
        }
        public static void CreateBadge(Badge_BO badgBO)
        {
            Badge_Dal.AddBadge(badgBO);
        }
    }
}
