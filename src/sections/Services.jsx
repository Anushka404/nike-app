import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} // for the label
        {...service}/>  // spreads the service object
      ))}
    </section>
  )
}

export default Services