import { FaRegSun, FaHamburger, FaBirthdayCake } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Un mondo di sapori ti aspetta</h2>
          <p className="text-lg text-gray-600 mb-12">
            Scopri, salva e personalizza ricette per ogni occasione. Da piatti veloci a dolci irresistibili, trova sempre l'ispirazione giusta per la tua cucina.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <FaRegSun className="h-12 w-12 text-navbar mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Colazioni Energizzanti</h3>
              <p className="text-gray-600">Inizia la tua giornata con energia! Ricette sane e gustose per un risveglio ricco di sapore.</p>
            </div>

            <div className="flex flex-col items-center">
              <FaHamburger className="h-12 w-12 text-navbar mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Piatti Veloci per Tutti i Gusti</h3>
              <p className="text-gray-600">Sei di fretta? Scopri ricette facili e rapide da preparare, ideali per pranzo o cena senza rinunciare al gusto.</p>
            </div>

            <div className="flex flex-col items-center">
              <FaBirthdayCake className="h-12 w-12 text-navbar mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Dolci da Sogno</h3>
              <p className="text-gray-600">Concludi la giornata con il dolce perfetto. Ricette irresistibili per soddisfare ogni voglia di dolcezza.</p>
            </div>
          </div>
        </div>
      </section>

  
      <section className="py-16 bg-button-500">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8">Accedi per un'esperienza unica</h2>
          <p className="text-lg text-gray-600 mb-12">
            Accedere ti permette di avere il pieno controllo: cercare le tue ricette preferite e crea il menu perfetto per ogni occasione.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cerca tra Migliaia di Piatti</h3>
              <p className="text-gray-600">Esplora ricette di ogni tipo e scopri nuove idee per il tuo prossimo piatto. Dalla cucina veloce a quella gourmet.</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Condividi con la Community</h3>
              <p className="text-gray-600">Condividi le tue creazioni e ricevi consigli dalla community. Cucinare è ancora più bello insieme!</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
