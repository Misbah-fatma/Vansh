import React from "react";
import SideBar from './SideBar'


 const Dashboard3 = () => {
  return (
    <div>
     <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
        <div className="app-main">
    
  <SideBar/>

    <div className="app-main-outer">
        <div className="app-main-inner">
            <div className="row">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-midnight-bloom">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left ">
                                <div className="widget-heading">Courses</div>
                                <div className="widget-subheading">Number of total active courses</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>4</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-arielle-smile">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Enrollments</div>
                                <div className="widget-subheading">Number of total course enrollments</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>0</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Students</div>
                                <div className="widget-subheading">Number of total students</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>4</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-night-fade">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Instructors</div>
                                <div className="widget-subheading">Total instructors</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>3</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-arielle-smile">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Reviews</div>
                                <div className="widget-subheading">Total submitted reviews</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-white"><span>0</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-premium-dark">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Transaction</div>
                                <div className="widget-subheading">Total transaction amount</div>
                            </div>
                            <div className="widget-content-right">
                                <div className="widget-numbers text-warning"><span>$0</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                    <div className="card mb-5">
                        <div className="card-body">
                            <div className="cardTitleBox">
                                <h5 className="card-title chartTitle">Top Selling Courses</h5>
                            </div>
                            <div className="table-responsive-lg">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th><strong>ID</strong></th>
                                            <th><strong>Course</strong></th>
                                            <th><strong>Category</strong></th>
                                           
                                            <th><strong>Price</strong></th>
                                            <th><strong>Instructor</strong></th>
                                            <th><strong>Action</strong></th>
                                        </tr>
                                    </thead>
                         
                                    <tbody>
                                        <tr>
                                                <td className="tableId">458552452452</td>
                                                <td className="tableProduct">
                                                    <div className="listproduct-section">
                                                        <div className="listproducts-image">
                                                       
                                                       
                                                        </div>
                                                        <div className="product-pera">
                                                            <p className="priceDis">Python</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="tableCustomar">
                                                </td>
                                               
                                                <td className="tableId">11</td>
                                                <td className="tableId">Santosh Pandey</td>
                                                <td className="tableAction">
                                                    <div className="action-icon">
                                                    <td className="tableId"></td>
                                                    </div>
                                                </td>
                                            </tr>
                                                                                  
                                                                                   
                                                                                 
                                                                            </tbody>
                                                                            
                                </table>
                            </div>
                            <div className="text-end"><a href="/DashBoardCourse"
                                    className="btn btn-primary bgBlue btn-dipBlue px-3">View
                                    All
                                    Courses</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
        </div>

<div className="app-wrapper-footer">
    <div className="app-footer position-relative">
        <div className="app-footer-inner">
            <a className="fw-bold">
                UIK</a>
            </div>
        </div>
    </div>
</div>

    </div>
    
  )
}

export default Dashboard3
