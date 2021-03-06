import React from 'react'
import Header from './Header'

const AddStudent = () => {
  return (
      
    <div>
        <Header/>
      <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-4">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Name</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Roll number</label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Admission number</label> 
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">University Number</label>
                    
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" class="form-label">College</label>
                    <input type="text" placeholder="Enter here" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-12 col-lg-12 col-xl-12 col-xxl-6">
                    <button class="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default AddStudent