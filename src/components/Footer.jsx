import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer class="fixed-bottom pb-0  pb-md-4 ">
    <div class="container">
      <div class="row">
        <div class="col col-lg-10">
          <div class="container d-flex justify-content-center">
            <div>
              <i class="fas fa-random"></i><i class="fas fa-step-backward"></i><i class="fas fa-play"></i><i
                class="fas fa-step-forward"></i><i class="fas fa-redo"></i>
            </div>
          </div>
          <div class="container d-flex justify-content-center">
            <div class="text-light">1:20</div>
            <div class="progress m-2 bg-dark" style="height: 5px; width: 300px">
              <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
                aria-valuemax="100"></div>
            </div>
            <div class="text-light">3:35</div>
          </div>
        </div>

        <div class="col col-lg-2">
          <div class="container d-flex justify-content-center">
            <i class="fas fa-list"></i>
            <i class="fas fa-desktop"></i>
            <div class="d-flex container-volume">
              <i class=" mr-md-2 fas fa-volume-up"></i>
              <div class="mt-2">
                <div class="progress mt-1 bg-dark d-sm-block" style="height: 8px; width: 100px">
                  <div class="progress-bar bar-color" role="progressbar" style="width: 25%" aria-valuenow="25"
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
