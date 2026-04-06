import React from 'react'

const clients = [
  {
    name: 'Monisa Enterprise',
    description: 'A trusted partner for enterprise growth and digital transformation.',
        image: '/images/Partners/monisa.webp',
    alt: 'Monisa Enterprise logo',
  },
  {
    name: 'Elmond',
    description: 'Creative brand collaboration for product design and web presence.',
    image: '/images/Partners/elmond.png',
    alt: 'Elmond logo',
  },
  {
    name: 'Proptalk',
    description: 'High-impact communication platform branding and support.',
      image: '/images/Partners/proptalk.png',
    alt: 'Proptalk logo',
  },
]

const Clients = () => {
  return (
    <section className="clients py-10 md:py-16 bg-[#fff7ef]">
      <div className="container">
        <div className="row items-center">
          <div className="col-lg-6">
            <span className="font-Syne fw-bold text-[#ff9330]">Clients</span>
            <h3 className="font-Syne fw-bold mb-3">Our trusted partners</h3>
            <p className="text-[18px] font-Syne text-[#08080899] leading-relaxed">
              These brands represent the clients and collaborations I have supported with custom web solutions, branding, and digital growth.
            </p>
          </div>
        </div>

        <div className="row mt-6 gap-4">
          {clients.map(client => (
            <div key={client.name} className="col-lg-3 col-md-6 col-12">
              <div className="client-card bg-white rounded-[20px] p-5 shadow-[0_20px_50px_rgba(8,8,8,0.08)] h-full">
                <div className="client-logo mb-5 flex h-[90px] w-full items-center justify-center rounded-[18px] bg-[#fdf2e6]">
                  <img src={client.image} alt={client.alt} className="max-h-[60px] object-contain" />
                </div>
                <h5 className="font-Syne fw-bold text-[18px] mb-2">{client.name}</h5>
                <p className="text-[15px] font-Syne text-[#08080899] leading-relaxed">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
