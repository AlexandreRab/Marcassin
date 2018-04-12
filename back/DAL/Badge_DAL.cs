using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class Badge_DAL
    {
        public List<Badge_BO> GetBadge()
        {
            using (var context = new MarcassinEntities())
            {
                List<Badge> listBadges = context.Badges.ToList();

                List<Badge_BO> listBadgesBO = listBadges.ToListBadgeBO();

                return listBadgesBO;
            }
        }
    }
}
