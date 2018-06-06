using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MarcassinLightBO;
using MarcassinLightBLL;

namespace MarcassinLight
{
    /// <summary>
    /// Logique d'interaction pour Badges.xaml
    /// </summary>
    public partial class Badges : Page
    {
        public List<Badge_BO> listBadges;
        public Badges()
        {
            InitializeComponent();
            listBadges = Appel_List.GetBadges();
            list.ItemsSource = listBadges;
        }

        private void Creation_Click(object sender, RoutedEventArgs e)
        {
            var badg = new Badge_BO
            {
                Intitule = C1.Text
            };
            Create.CreateBadge(badg);
            listBadges = Appel_List.GetBadges();
            list.ItemsSource = listBadges;
        }
    }
}
