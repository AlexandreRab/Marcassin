using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class MessageBO
    {
        public int id_Message { get; set; }
        public string Contenu { get; set; }
        public List<UtilisateurBO> idSources { get; set; }
        public List<RoomBO> idRooms { get; set; }
        public DateTime Date_ajout { get; set; }
    }
}
