//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Langue_Badge
    {
        public int id_Langue { get; set; }
        public int id_Badge { get; set; }
        public string Traduction { get; set; }
    
        public virtual Badge Badge { get; set; }
        public virtual Langue Langue { get; set; }
    }
}
