import react from 'react'
import logo from './logo-design.png'
import wireframe from './wireframe.jpg'
import market from './market2.jpg'
import ui from './ui.jfif'
import mobile from './mobile.png'
import work from './work4.png'
import node from './node-logo.png'
import reactlogo from './react-logo.png'
import express from './expresslogo.png'
import mongo from './mongologo.png'
import next from './next.png'
import native from './react-native.png'
function Service(){
    return(
        <div className="crd-container">
                <h1 style={{ borderBottom: '2px solid red', display: 'inline-block', paddingBottom: '5px' }}>Our Services</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={logo} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={wireframe} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={market} />
                            <p className="card-head">Market Analysis</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={ui} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={mobile} />
                            <p className="card-head">Mobile Applications </p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="crd-body">
                            <img src={logo} />
                            <p className="card-head">Web Design</p>
                            <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Service