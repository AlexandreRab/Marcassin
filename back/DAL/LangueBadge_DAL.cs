using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class LangueBadge_DAL
    {
        public List<LangueBadge_BO> GetLangueBadge()
        {
            using (var context = new MarcassinEntities())
            {
                List<Langue_Badge> listLangueBadge = context.Langue_Badge.ToList();

                List<LangueBadge_BO> listLangueBadgeBO = listLangueBadge.ToListLangueBadgeBO();

                return listLangueBadgeBO;
                
            }
        }
    }
}
