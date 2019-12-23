import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div class="container right">
                                <div class="form wow zoomIn slow animated" id="form">
                            <div class="justify-content-center form_content">
                                <div class="rounded position-relative">
                                    <form action="thankyou.php" class='form-horizontal pl-4 pr-4 pt-2 rounded-top rounded-top' data-bv-feedbackicons-invalid='glyphicon glyphicon-remove' data-bv-feedbackicons-valid='glyphicon glyphicon-ok' data-bv-feedbackicons-validating='glyphicon glyphicon-refresh' data-bv-message='This value is not valid' id='html5Form' method='POST'>
                                        <div class="form-group mb-0">
                                            <a href="tel:919510600700" title="Call Us" class="call_us text-center d-block">Call us: +91-8929099099</a>
                                            <h1 class="font-weight-bold ">Runwal My City <span>Mumbai</span></h1>
                                        </div>
                                        <hr class="mt-0">
                                          <div class="row">
                                            <div class="col-sm-12">
                                                  <div class="form-group input-group">
                                            <input aria-label="fname" name="fname" class="form-control" placeholder="Name*" required>
                                        </div>
                                            </div>
                                            <div class="col-sm-12">
                                                   <div class="form-group input-group">
                                            <input aria-label="email" name="email" type="email" class="form-control" placeholder="Email ID*" required>
                                        </div>
                                            </div>
                                          </div>
                                        <div class="row">
                                            <div class="col-sm pr-0">
                                                <div class="form-group input-group">
                                                    <select aria-label="country" class="form-control" id="country" name="country">
                                                        <option>Choose Country</option>
                                                        <option value="61">Australia (+61)</option>
                                                        <option value="973">Bahrain (+973)</option>
                                                        <option value="1">Canada (+1)</option>
                                                        <option value="33">France (+33)</option>
                                                        <option value="49">Germany (+49)</option>
                                                        <option value="852">Hong Kong (+852)</option>
                                                        <option value="91" selected>India (+91)</option>
                                                        <option value="98">Iran (+98)</option>
                                                        <option value="353">Ireland (+353)</option>
                                                        <option value="965">Kuwait (+965)</option>
                                                        <option value="218">Libya (+218)</option>
                                                        <option value="60">Malaysia (+60)</option>
                                                        <option value="64">New Zealand (+64)</option>
                                                        <option value="968">Oman (+968)</option>
                                                        <option value="92">Pakistan (+92)</option>
                                                        <option value="974">Qatar (+974)</option>
                                                        <option value="966">Saudi Arabia (+966)</option>
                                                        <option value="65">Singapore (+65)</option>
                                                        <option value="27">South Africa (+27)</option>
                                                        <option value="963">Syria (+963)</option>
                                                        <option value="66">Thailand (+66)</option>
                                                        <option value="971">UAE (+971)</option>
                                                        <option value="44">United Kingdom (+44)</option>
                                                        <option value="+1">USA (+1)</option>
                                                        <option value="969">Yemen (+969)</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-sm pl-0">
                                                <div class="form-group input-group">
                                                 
                                                    <input aria-label="number" name="phone" type="number" class="form-control" placeholder="Mobile No*" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group input-group">
                                            <textarea aria-label="message" name="message" class="form-control" placeholder="Write your message"></textarea>
                                        </div>
                                        <input name="project_id" type="hidden" value="<?php echo $project_id; ?>">
                                        <input name="project_name" type="hidden" value="<?php echo $project_name; ?>">
                                        <input name="project_url" type="hidden" value="<?php echo $project_url; ?>">
                                        <input name="source" type="hidden" value="<?php echo $source; ?>">
                                        <div class="pb-1">
                                            <button class="sub_button sub_pulse btn btn-block text-white" type="Submit"> <span> Book Free Site Visit! <i class="fas fa-angle-double-right"></i></span>
                                            </button>
                                        </div>
                                    </form>
                                    <div class="form_highlights pt-2 pb-2 pl-4 pr-4 mx-auto text-center bg-white">
                                      <!--   <h3 class="text-uppercase text-center m-0 " >Booking amount at&nbsp;&nbsp;:&nbsp;&nbsp;<b><i class="fas fa-rupee-sign"></i>10%</b></h3> -->
                                        <!-- <h3 class="text-uppercase text-center  m-0">Starting price at&nbsp;&nbsp;:&nbsp;&nbsp;<b><i class="fas fa-rupee-sign"></i>44.88 to 54.02 lakhs*</b></h3> -->
                                        <!--  <h3 class="text-uppercase text-center text-white">RERA No.&nbsp;&nbsp;PRM/KA/RERA/1251/446/PR/171015/000781</h3>  --><a class="download_brcher mx-auto text-center border" href="JavaScript:Void(0);" title="Download Brochure" data-toggle="modal" data-target="#exampleModalCenter">Download Brochure</a>
                                    </div>
                                </div>
                            </div>
                      </div>
             </div>
        );
    }
}

export default Form;
 