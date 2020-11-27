import React, { Component } from 'react'
import "../css/main.css"

export default class Footer extends Component {
    render() {
        return (
            <div>
                
                <footer className="fixed-bottom pb-0  pb-md-4" style={{background:"grey"}}>
    <div className="container">
      <div className="row">
        <div className="col col-lg-10">
          <div className="container d-flex justify-content-center">
            <div>
              <i className="fas fa-random"></i><i className="fas fa-step-backward"></i><i className="fas fa-play"></i><i
                className="fas fa-step-forward"></i><i className="fas fa-redo"></i>
            </div>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="text-light">1:20</div>
                                    <div className="progress m-2 bg-dark" style={{ height: "5px", width: "300px" }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: "25%" }}  aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="text-light">3:35</div>
          </div>
        </div>

        <div className="col col-lg-2">
          <div className="container d-flex justify-content-center">
            <i className="fas fa-list"></i>
            <i className="fas fa-desktop"></i>
            <div className="d-flex container-volume">
              <i className=" mr-md-2 fas fa-volume-up"></i>
              <div className="mt-2">
                                            <div className="progress mt-1 bg-dark d-sm-block" style={{ height: "8px", width: "100px" }}>
                                                <div className="progress-bar bar-color" role="progressbar" style={{ width: "25 %"}}   aria-valuenow="25"
                    aria-valuemin="0" aria-valuemax="100">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>


            </div>
        )
    }
}
