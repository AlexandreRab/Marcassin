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
    
    public partial class Participant
    {
        public int id_Utilisateur { get; set; }
        public int id_Cours { get; set; }
        public Nullable<bool> est_orga { get; set; }
    
        public virtual Cour Cour { get; set; }
        public virtual Personnel Personnel { get; set; }
    }
}
