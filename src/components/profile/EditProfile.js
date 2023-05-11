import React from "react";


export default ({changeToFalse}) => {
    return (
        <div class="container bootstrap snippets bootdey">
    <h1 class="text-primary">Edit Profile</h1>
	<div class="row">

      <div class="col-md-3">
        <div class="text-center">
         
          <h6>Upload a different photo...</h6>
          
          <input type="file" class="form-control"/>
        </div>
      </div>
      

      <div class="col-md-9 personal-info">
        <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a> 
          <i class="fa fa-coffee"></i>
        </div>
        <h3>Personal info</h3>
        <div onClick={() => changeToFalse()}>Go Back</div>
        
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="dey-dey"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="bootdey"/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Pronouns:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value="janesemail@gmail.com"/>
            </div>
            <button>Submit</button>


          </div>
        </form>
      </div>
  </div>
</div>
    )
}