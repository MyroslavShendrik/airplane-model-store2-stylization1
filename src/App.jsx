// import Section from './components/SectionWOStyle';  //! без стилізації
import Section from './components/SectionBuiltInStyles'; //! вбудовані стилі

import PlanesList from './components/PlanesListWOStyle';  //! без стилізації
import planes from './json/planes.json';


export default function App() {
  return (
    <>
      <Section title="Магазин моделей літаків">
        <PlanesList items={planes} />
      </Section >
    </>
  );
};
