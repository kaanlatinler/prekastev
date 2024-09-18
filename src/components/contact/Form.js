import Image from 'next/image'
import { useState } from 'react'

const Form = () => {
  const [formData, setFormData] = useState({
    propertyType: 'Residential',
    areaSize: '',
    unitSize: 'sqft',
    budget: 'Budget Friendly',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        alert('Form successfully submitted!')
      } else {
        alert('Failed to submit form')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting the form')
    }
  }

  return (
    <div className="col-md-8">
      <form id="contact_form" onSubmit={handleSubmit}>
        <div id="step-1" className="row">
          <div className="col-md-12 mb30">
            <h4><i className="fa fa-home id-color"></i> What is your property type?</h4>

            <div className="de_form de_radio">
              <div className="radio-img">
                <input id="radio-1a" name="propertyType" type="radio" value="Residential" checked={formData.propertyType === 'Residential'} onChange={handleChange}/>
                <label htmlFor="radio-1a">
                  <Image src="/images/select-form/1.jpg" alt="Residential" width={100} height={100}/>
                  Residential
                </label>
              </div>

              <div className="radio-img">
                <input id="radio-1b" name="propertyType" type="radio" value="Office" checked={formData.propertyType === 'Office'} onChange={handleChange}/>
                <label htmlFor="radio-1b">
                  <Image src="/images/select-form/2.jpg" alt="Office" width={100} height={100}/>
                  Office
                </label>
              </div>

              <div className="radio-img">
                <input id="radio-1c" name="propertyType" type="radio" value="Commercial" checked={formData.propertyType === 'Commercial'} onChange={handleChange}/>
                <label htmlFor="radio-1c">
                  <Image src="/images/select-form/3.jpg" alt="Commercial" width={100} height={100}/>
                  Commercial
                </label>
              </div>

              <div className="radio-img">
                <input id="radio-1d" name="propertyType" type="radio" value="Retail" checked={formData.propertyType === 'Retail'} onChange={handleChange}/>
                <label htmlFor="radio-1d">
                  <Image src="/images/select-form/4.jpg" alt="Retail" width={100} height={100}/>
                  Retail
                </label>
              </div>

              <div className="radio-img">
                <input id="radio-1e" name="propertyType" type="radio" value="Other" checked={formData.propertyType === 'Other'} onChange={handleChange}/>
                <label htmlFor="radio-1e">
                  <Image src="/images/select-form/5.jpg" alt="Other" width={100} height={100}/>
                  Other
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb10">
            <h4><i className="fa fa-arrows-alt id-color"></i> Total area size you want to renovate</h4>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="areaSize" id="area-size" className="form-control" placeholder="Area Size" required value={formData.areaSize} onChange={handleChange}/>
              </div>

              <div className="col-md-6">
                <select name="unitSize" id="unit_size" className="form-control" value={formData.unitSize} onChange={handleChange}>
                  <option value="sqft">Square Feet (sqft)</option>
                  <option value="m">Meter (m)</option>
                  <option value="ft">Feet (ft)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb10">
            <h4><i className="fa fa-tag id-color"></i> Select a renovation budget</h4>
            <select name="budget" id="budget" className="form-control" value={formData.budget} onChange={handleChange}>
              <option value="Budget Friendly">Budget Friendly</option>
              <option value="Mid Range">Mid Range</option>
              <option value="High End">High End</option>
            </select>
          </div>
        </div>

        <div id="step-2" className="row">
          <h4><i className="fa fa-user id-color"></i> Enter your details</h4>

          <div className="col-md-6">
            <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleChange}/>
            <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" required value={formData.email} onChange={handleChange}/>
            <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required value={formData.phone} onChange={handleChange}/>
          </div>

          <div className="col-md-6">
            <textarea name="message" id="message" className="form-control" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
          </div>

          <div className="col-md-12">
            <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            <button type="submit" id="send_message" className="btn btn-line">Submit Form</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
