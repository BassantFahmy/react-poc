import React from 'react'

const Portfolio = () => {
  const products = [{ "id": 1, "images": "flip1.jpg", "desc": "were checking out Our epic Cyber Monday Sale is almost over! Hurry and enjoy 50% on 500+ creative assets" },
  { "id": 2, "images": "flip2.jpg", "desc": "were checking out Our epic Cyber Monday Sale is almost over! Hurry and enjoy 50% on 500+ creative assets" },
  { "id": 3, "images": "flip3.jpg", "desc": "were checking out Our epic Cyber Monday Sale is almost over! Hurry and enjoy 50% on 500+ creative assets" },
  { "id": 4, "images": "flip4.jpg", "desc": "were checking out Our epic Cyber Monday Sale is almost over! Hurry and enjoy 50% on 500+ creative assets" },
  ]
  return (
    <>
      <div className='t-container product-layout'>
        {
          products && products.map((w) => (
            <div key={w.id} className="fliptextcard">
              <div className="fliptextcard__images">
                <div className="fliptextcard__frontimg" style={{
                  backgroundImage: "url(src/assets/images/" + w.images + ")"
                }}></div>
                <div className="fliptextcard__text t-pt-m">
                  <p>were checking out Our epic Cyber Monday
                    Sale is almost over! Hurry and enjoy 50% on
                    500+ creative assets
                  </p>
                  <a href="#" className="btn btn--rectangle btn--white">Read more</a>
                </div>

              </div>
            </div>
          ))

        }
      </div>
    </>
  )
}

export default Portfolio
