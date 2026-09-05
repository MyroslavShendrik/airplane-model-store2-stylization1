import Section from './components/SectionWOSyle';  //! без стилізації
import PlanesList from './components/PlanesListWOSyle';  //! без стилізації
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
