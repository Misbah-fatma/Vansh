import React from 'react'
import Sidebar from '../SideBar'
const Category = () => {
  return (
    <div>
                <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="appContent">
    
    <div className="app-main">
    <Sidebar/>
    <div className="app-main-outer">
        <div className="app-main-inner">
            <div className="page-title-actions px-3 d-flex">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="https://admin.razinskills.com">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Category</li>
                    </ol>
                </nav>
                <div className="ms-auto mb-3">
                    <a href="https://admin.razinskills.com/category/create" className="btn-shadow mr-3 btn btn-dark ms-auto">
                        + New Category
                    </a>
                </div>
            </div>

            <div className="row" id="deleteTableItem">
                <div className="col-md-12">
                    <div className="card mb-5">
                        <div className="card-body">
                            <div className="table-responsive-lg">
                                <table id="dataTable" className="table">
                                    <thead>
                                        <tr>
                                            <th><strong>#</strong></th>
                                            <th><strong>Category Title</strong></th>
                                            <th><strong>Featured</strong></th>
                                            <th><strong>Color</strong></th>
                                            <th><strong>Status</strong></th>
                                            <th><strong>Action</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                                                                    <tr>
                                                <td className="tableId">1</td>
                                                <td className="tableProduct">
                                                    <div className="listproduct-section">
                                                        <div className="listproducts-image">
                                                            <img src="http://admin.razinskills.com/storage/category/image/0NYHYf4srP01JPgdJwOCWNUC1GxRsdPzmA2fMffP.png"/>
                                                        </div>
                                                        <div className="product-pera">
                                                            <p className="priceDis">Digital Marketing</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="tableCustomar">
                                                                                                            <span className="badge rounded-pill text-bg-success">Yes</span>
                                                                                                    </td>

                                                <td className="tableId"><span className="px-3 py-1 rounded"
                                                        style={{backgroundColor: '#ff7b00'}}></span> &nbsp;
                                                    #ff7b00</td>

                                                <td className="tableStatus">
                                                                                                            <div className="statusItem">
                                                            <div className="circleDot animatedCompleted"></div>
                                                            <div className="statusText">
                                                                <span className="stutsCompleted">Active</span>
                                                            </div>
                                                        </div>
                                                                                                    </td>
                                                <td className="tableAction">
                                                    <div className="action-icon">
                                                                                                                    <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Edit Course"
                                                                href="https://admin.razinskills.com/category/edit/4"><i
                                                                    className="bi bi-pen Circleicon"></i></a>
                                                            <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Delete Category" href="#"
                                                                onclick="deleteAction('https://admin.razinskills.com/category/delete/4')"><i
                                                                    className="bi bi-trash3 Circleicon"></i></a>
                                                                                                            </div>
                                                </td>
                                            </tr>
                                                                                    <tr>
                                                <td className="tableId">2</td>
                                                <td className="tableProduct">
                                                    <div className="listproduct-section">
                                                        <div className="listproducts-image">
                                                            <img src="http://admin.razinskills.com/storage/category/image/t55DCSiOH6aZVSK9kiISOhhK5mOxg6gCVLOUg8MQ.png"/>
                                                        </div>
                                                        <div className="product-pera">
                                                            <p className="priceDis">Professional Web Development Course</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="tableCustomar">
                                                                                                            <span className="badge rounded-pill text-bg-success">Yes</span>
                                                                                                    </td>

                                                <td className="tableId"><span className="px-3 py-1 rounded"
                                                        style={{backgroundColor: '#0082e6'}}></span> &nbsp;
                                                    #0082e6</td>

                                                <td className="tableStatus">
                                                                                                            <div className="statusItem">
                                                            <div className="circleDot animatedCompleted"></div>
                                                            <div className="statusText">
                                                                <span className="stutsCompleted">Active</span>
                                                            </div>
                                                        </div>
                                                                                                    </td>
                                                <td className="tableAction">
                                                    <div className="action-icon">
                                                                                                                    <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Edit Course"
                                                                href="https://admin.razinskills.com/category/edit/3"><i
                                                                    className="bi bi-pen Circleicon"></i></a>
                                                            <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Delete Category" href="#"
                                                                onclick="deleteAction('https://admin.razinskills.com/category/delete/3')"><i
                                                                    className="bi bi-trash3 Circleicon"></i></a>
                                                                                                            </div>
                                                </td>
                                            </tr>
                                                                                    <tr>
                                                <td className="tableId">3</td>
                                                <td className="tableProduct">
                                                    <div className="listproduct-section">
                                                        <div className="listproducts-image">
                                                            <img src="http://admin.razinskills.com/storage/category/image/YLIayRmN46EkkD490dgA2r7lvJjHEhPuHB1eVNfn.png"/>
                                                        </div>
                                                        <div className="product-pera">
                                                            <p className="priceDis">Graphic design</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="tableCustomar">
                                                                                                            <span className="badge rounded-pill text-bg-success">Yes</span>
                                                                                                    </td>

                                                <td className="tableId"><span className="px-3 py-1 rounded"
                                                        style={{backgroundColor: '#8444e4'}}></span> &nbsp;
                                                    #8444e4</td>

                                                <td className="tableStatus">
                                                                                                            <div className="statusItem">
                                                            <div className="circleDot animatedCompleted"></div>
                                                            <div className="statusText">
                                                                <span className="stutsCompleted">Active</span>
                                                            </div>
                                                        </div>
                                                                                                    </td>
                                                <td className="tableAction">
                                                    <div className="action-icon">
                                                                                                                    <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Edit Course"
                                                                href="https://admin.razinskills.com/category/edit/2"><i
                                                                    className="bi bi-pen Circleicon"></i></a>
                                                            <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Delete Category" href="#"
                                                                onclick="deleteAction('https://admin.razinskills.com/category/delete/2')"><i
                                                                    className="bi bi-trash3 Circleicon"></i></a>
                                                                                                            </div>
                                                </td>
                                            </tr>
                                                                                    <tr>
                                                <td className="tableId">4</td>
                                                <td className="tableProduct">
                                                    <div className="listproduct-section">
                                                        <div className="listproducts-image">
                                                            <img src="http://admin.razinskills.com/storage/category/image/tplLFO8Vy12ZYpKCTxJX7NwKAHFe4hEKfjxf9Ac2.png"/>
                                                        </div>
                                                        <div className="product-pera">
                                                            <p className="priceDis">English-Language-Course</p>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="tableCustomar">
                                                                                                            <span className="badge rounded-pill text-bg-success">Yes</span>
                                                                                                    </td>

                                                <td className="tableId"><span className="px-3 py-1 rounded"
                                                        style={{backgroundColor: '#e10e39'}}></span> &nbsp;
                                                    #e10e39</td>

                                                <td className="tableStatus">
                                                                                                            <div className="statusItem">
                                                            <div className="circleDot animatedCompleted"></div>
                                                            <div className="statusText">
                                                                <span className="stutsCompleted">Active</span>
                                                            </div>
                                                        </div>
                                                                                                    </td>
                                                <td className="tableAction">
                                                    <div className="action-icon">
                                                                                                                    <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Edit Course"
                                                                href="https://admin.razinskills.com/category/edit/1"><i
                                                                    className="bi bi-pen Circleicon"></i></a>
                                                            <a data-bs-toggle="tooltip" data-bs-placement="top"
                                                                data-bs-custom-className="custom-tooltip"
                                                                data-bs-title="Delete Category" href="#"
                                                                onclick="deleteAction('https://admin.razinskills.com/category/delete/1')"><i
                                                                    className="bi bi-trash3 Circleicon"></i></a>
                                                                                                            </div>
                                                </td>
                                            </tr>
                                                                            </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    </div>
    </div>
    </div>
  )
}

export default Category