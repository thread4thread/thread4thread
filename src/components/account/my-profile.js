

export function Profile() {
    return (
    <main class="side-wrap box column">


        <div class="box column">

       
            <div class="box text-center">


                <img src="../img/blank-pfp.png" class="w-25 h-25 no-space"/>



                <div class="tight-box column">


                    <div class="box text-center">

                  
                            <div class="no-space">
                                <p class="fs-4 fw-bold mb-0">0</p>
                                <p class="fs-6 fw-regular">Donated</p>
                            </div>
                            <div class="no-space">
                                <p class="fs-4 fw-bold mb-0">0</p>
                                <p class="fs-6 fw-regular">Received</p>
                            </div>
                            <div class="no-space">
                                <p class="fs-4 fw-bold mb-0">0</p>
                                <p class="fs-6 fw-regular">Listings</p>
                            </div>

    
                        <div class="box ms-1 ps-1">
                            <div class="edit-icon">
                                <a href="../profile/edit-profile.html">
                                    <img src="../img/edit.png" height="20px" alt="Edit profile"/>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div class="box text-center">
                        <img src="../img/star.png" height="20px"/>
                        <img src="../img/star.png" height="20px"/>
                        <img src="../img/star.png" height="20px"/>
                        <img src="../img/star.png" height="20px"/>
                        <img src="../img/star.png" height="20px"/>
                    </div>
                </div>
            </div>

  
            <div class="tight-box column">

       
                <div class="box text-center">
                    <p class="fs-4 fw-bold align-middle mb-0">Name</p>
                    <p class="fs-4 fw-light align-middle text-secondary mb-0">pronouns</p>
                </div>

     
                <p class="fs-5 fw-light mb-0">@username</p>


                
      
                <p class="fw-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

     
            <div class="box column ">      
            
                <div class="box text-center">                                          
                    <h1 class="no-space mx-auto display-4 fs-2">Listings</h1>                     
                    <h1 class="no-space mx-auto display-4 fs-2"><a href="../profile/own-profile-reviews.html" class="link">Reviews</a></h1> 
                </div>   

           
                <div class="container"> 
                    <div class="row">                                       
                        <div style="background-color:#8991DC; height: 5px; width: 49%" class="no-space mr-auto"> </div>                     
                        <div style="background-color: white; height: 5px; width: 49%" class="no-space ml-auto"> </div>  
                    </div>  
                </div>    
            </div>

            <div class="grid by-3">
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
                <a href="listing-details.html"><img src="../img/pink-skirt.jpg" alt="Black tank top, pink+purple skirt" class="grid-item"/></a>
            </div>

                
        </div>
    </main>
    )
}