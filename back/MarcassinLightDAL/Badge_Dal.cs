using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MarcassinLightBO;

namespace MarcassinLightDAL
{
    public class Badge_Dal
    {
        public static List<Badge_BO> GetBadge()
        {
            using (var context = new MarcassinEntities())
            {
                List<Badge> listBadges = context.Badge.ToList();
                List<Badge_BO> listBadgesBO = listBadges.ToListBadgeBO();

                return listBadgesBO;
            }
        }
        public static void AddBadge(Badge_BO badgBO)
        {
            using (var db = new MarcassinEntities())
            {
                db.Badge.Add(new Badge
                {
                    nom=badgBO.Intitule
                });


                db.SaveChanges();
            }

        }
    }
}
