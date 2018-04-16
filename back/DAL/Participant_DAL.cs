using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class Participant_DAL
    {
        public List<Participant_BO> GetBadge()
        {
            using (var context = new MarcassinEntities())
            {
                List<Participant> listParticipants = context.Participants.ToList();

                List<Participant_BO> listParticipantsBO = listParticipants.ToListParticipantBO();

                return listParticipantsBO;
            }
        }
    }
}
